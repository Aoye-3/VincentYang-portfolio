"""Work index: categories, native links, normal flow, and progressive enhancement."""
from pathlib import Path
import json
import os
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/work-gallery'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect

BASE = 'http://127.0.0.1:5501/'
EDGE = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
baseline = subprocess.check_output(['git', 'show', 'HEAD:index.html'], cwd=ROOT).decode('utf-8')
current = (ROOT / 'index.html').read_text(encoding='utf-8')
for start, end in [('<section class="hero-stage"', '<section class="work-section'),
                   ('<div id="honors-wall"', '<div class="selected-work-heading"')]:
    assert baseline[baseline.index(start):baseline.index(end)] == current[current.index(start):current.index(end)], 'A preserved display changed'

report = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE, headless=True)
    for run in range(1, 4):
        for width, height in [(320, 740), (390, 844), (768, 1024), (1024, 768), (1440, 900), (1920, 1080), (1440, 600)]:
            context = browser.new_context(viewport={'width': width, 'height': height})
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(BASE, wait_until='networkidle')
            expect(page.locator('#work-gallery-mount')).to_have_attribute('data-enhanced', 'true')
            assert page.locator('.project-filters button').all_text_contents() == ['全部作品', 'UI-UX设计', 'AIGC媒体类']
            assert not page.locator('.case-cursor, .work-stack').count()
            assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
            for category, count in [('all', 5), ('ux', 2), ('media', 3), ('all', 5)]:
                button = page.locator(f'[data-filter="{category}"]')
                button.click()
                expect(button).to_have_attribute('aria-pressed', 'true')
                expect(page.locator('.work-card:visible')).to_have_count(count)
                expect(page.locator('#work-count')).to_have_text(f'{count:02} 件作品')
                boxes = page.locator('.work-card:visible').evaluate_all('(els)=>els.map(e=>({top:e.getBoundingClientRect().top,bottom:e.getBoundingClientRect().bottom,position:getComputedStyle(e).position}))')
                assert all(boxes[i]['top'] >= boxes[i-1]['bottom'] - 1 for i in range(1, len(boxes)))
                assert all(box['position'] != 'sticky' for box in boxes)
                if run == 1 and width in (390, 1440):
                    page.locator('#work-title').evaluate('(e)=>scrollTo({top:scrollY+e.getBoundingClientRect().top-110,behavior:"instant"})')
                    page.screenshot(path=str(OUT / f'{category}-{width}.png'))
            page.locator('.work-card').last.scroll_into_view_if_needed()
            page.wait_for_function('''() => [...document.querySelectorAll('.work-visual img')].every(img => img.complete && img.naturalWidth > 0)''')
            assert page.locator('.work-visual img').evaluate_all('(els)=>els.every(e=>getComputedStyle(e).objectFit==="contain")')
            page.locator('[data-filter="ux"]').click()
            page.emulate_media(reduced_motion='reduce')
            expect(page.locator('.work-card:visible')).to_have_count(2)
            page.locator('[data-filter="media"]').click()
            expect(page.locator('.work-card:visible')).to_have_count(3)
            assert page.locator('.work-card:visible .work-copy').evaluate_all('(els)=>els.every(e=>Number(getComputedStyle(e).opacity)>.99)')
            assert not errors, errors
            report.append({'run': run, 'width': width, 'height': height, 'filters': '5/2/3', 'overlap': False, 'errors': errors})
            context.close()
            print(f'run {run}: {width}x{height} passed', flush=True)

    # Select a native filter while the React island is still loading.
    context = browser.new_context(viewport={'width': 1440, 'height': 900})
    page = context.new_page()
    bundle = (ROOT / 'assets/generated/interactions/portfolio-enhancements.js').read_text(encoding='utf-8')
    page.route('**/interactions/portfolio-enhancements.js*', lambda route: route.fulfill(content_type='application/javascript', body='await new Promise(resolve=>setTimeout(resolve,1500));\n' + bundle))
    page.goto(BASE, wait_until='domcontentloaded')
    page.locator('[data-filter="ux"]').click()
    expect(page.locator('#work-gallery-mount')).to_have_attribute('data-enhanced', 'true')
    expect(page.locator('.work-card:visible')).to_have_count(2)
    expect(page.locator('[data-filter="ux"]')).to_have_attribute('aria-pressed', 'true')
    page.locator('.work-card:visible').first.focus()
    page.keyboard.press('Enter')
    page.wait_for_url('**/projects/inspiration.html')
    context.close()
    report.append({'slow_bundle': 'preselected category and keyboard entry passed'})

    for name, settings in [('no-js', {'java_script_enabled': False}), ('blocked-bundle', {})]:
        context = browser.new_context(viewport={'width': 390, 'height': 844}, **settings)
        page = context.new_page()
        if name == 'blocked-bundle':
            page.route('**/interactions/portfolio-enhancements.js*', lambda route: route.abort())
        page.goto(BASE, wait_until='networkidle')
        expect(page.locator('.work-card')).to_have_count(5)
        page.locator('.work-card[href="projects/other.html#vivo"]').click()
        page.wait_for_url('**/projects/other.html#vivo')
        context.close()
        report.append({'fallback': name, 'native_entry': 'passed'})
    browser.close()
(OUT / 'report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
