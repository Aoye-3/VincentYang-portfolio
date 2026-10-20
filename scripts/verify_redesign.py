"""Check the redesigned stage, compact directory and uncut career disclosures."""
from pathlib import Path
import json
import os
import tempfile

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/redesign-20261020'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect

BASE = 'http://127.0.0.1:5501/'
report = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe', headless=True)
    for run in range(1, 4):
        for width, height in [(320, 740), (390, 844), (768, 1024), (1366, 768), (1440, 900), (2048, 1080)]:
            context = browser.new_context(viewport={'width': width, 'height': height}, has_touch=width < 500)
            if width == 1440:
                # A layout change can queue outside/inside records in one callback.
                context.add_init_script('''
                  const NativeObserver = window.IntersectionObserver;
                  window.IntersectionObserver = class extends NativeObserver {
                    constructor(callback, options) {
                      super((entries, observer) => {
                        const wall = entries[0]?.target.matches('.work-discovery');
                        callback(wall && entries.some(entry => entry.isIntersecting)
                          ? [{ target: entries[0].target, isIntersecting: false }, ...entries]
                          : entries, observer);
                      }, options);
                    }
                  };
                ''')
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(BASE, wait_until='networkidle')
            assert not page.evaluate('document.documentElement.scrollWidth > innerWidth'), width
            assert page.locator('.hero-project-link').count() == 5
            if run == 1:
                page.screenshot(path=str(OUT / f'hero-{width}.png'))

            header = page.locator('#site-menu a').evaluate_all('(els)=>els.map(e=>[e.textContent,e.hash])')
            directory = dict(page.locator('.page-progress-links a').evaluate_all('(els)=>els.map(e=>[e.textContent,e.hash])'))
            assert all(directory.get(label) == target for label, target in header)
            if width <= 760:
                toggle = page.locator('.page-progress-toggle')
                expect(toggle).to_be_visible()
                expect(page.locator('.page-progress-current')).to_have_text('首页')
                toggle.click()
                expect(toggle).to_have_attribute('aria-expanded', 'true')
                if run == 1:
                    page.screenshot(path=str(OUT / f'directory-{width}.png'))
                page.keyboard.press('Escape')
                expect(toggle).to_be_focused()
                expect(toggle).to_have_attribute('aria-expanded', 'false')
                toggle.click()
                page.locator('.page-progress-links a[href="#work-title"]').click()
                expect(toggle).to_have_attribute('aria-expanded', 'false')
                expect(page.locator('.page-progress-current')).to_have_text('精选作品')
            elif width >= 1024:
                page.locator('.hero-collection-viewport').hover()
                expect(page.locator('.hero-collection')).to_have_attribute('data-playing', 'false')
                page.locator('.hero-project-link[tabindex="0"]').focus()
                before = page.locator('.hero-collection').get_attribute('data-active')
                page.keyboard.press('ArrowRight')
                assert page.locator('.hero-collection').get_attribute('data-active') != before
                expect(page.locator('.hero-card-back-number').first).to_have_text('01 / 05')

            page.locator('#experience').evaluate('(e)=>scrollTo({top:scrollY+e.getBoundingClientRect().top-110,behavior:"instant"})')
            group = page.locator('#career-work .career-scroll')
            assert group.evaluate('(e)=>e.scrollHeight <= e.clientHeight + 1'), width
            before = group.bounding_box()['height']
            page.locator('#career-work .experience-item > summary').first.click()
            expect(page.locator('#career-work .experience-item').first).to_have_attribute('open', '')
            assert group.bounding_box()['height'] > before + 100
            assert group.evaluate('(e)=>e.scrollHeight <= e.clientHeight + 1')
            if run == 1:
                page.screenshot(path=str(OUT / f'career-open-{width}.png'))

            if run == 1 and width in (390, 1440):
                for name, selector in [('wall', '#honors-wall'), ('work', '#work-title'), ('about', '#about'), ('career', '#experience'), ('contact', '#contact')]:
                    page.locator(selector).evaluate('(e)=>scrollTo({top:scrollY+e.getBoundingClientRect().top-110,behavior:"instant"})')
                    page.wait_for_timeout(650)
                    page.screenshot(path=str(OUT / f'{name}-{width}.png'))
                page.locator('#interest-disclosure').evaluate('(e)=>e.open=true')
                page.locator('#interests').evaluate('(e)=>scrollTo({top:scrollY+e.getBoundingClientRect().top-110,behavior:"instant"})')
                page.wait_for_timeout(400)
                page.locator('.film-card').hover()
                page.screenshot(path=str(OUT / f'interests-{width}.png'))
            page.locator('#honors-wall').scroll_into_view_if_needed()
            page.wait_for_function('''() => document.querySelectorAll('.discovery-strip').length === 9
              && [...document.querySelectorAll('.discovery-wall img')].every(img => img.complete && img.naturalWidth > 0)''')
            assert not errors, errors
            report.append({'run': run, 'width': width, 'height': height, 'overflow': False, 'career': 'natural height', 'errors': errors})
            context.close()
            print(f'run {run}: {width}x{height} passed', flush=True)
    browser.close()
(OUT / 'regression.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
