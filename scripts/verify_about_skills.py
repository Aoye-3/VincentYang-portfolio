"""Features 10: real skill content, stable controls, keyboard, touch and motion."""
from pathlib import Path
import json
import os
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/about-orbit'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect

BASE = 'http://127.0.0.1:5501/'
EDGE = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
baseline = subprocess.check_output(['git', 'show', 'HEAD:index.html'], cwd=ROOT).decode('utf-8')
current = (ROOT / 'index.html').read_text(encoding='utf-8')
start, end = '<section class="about-section', '<section class="experience-section'
assert baseline[baseline.index(start):baseline.index(end)] == current[current.index(start):current.index(end)], 'Preserved work displays changed'
labels = ['界面视觉', '交互原型', '工程实现', 'AI 工作流', '产品规划', '用户研究']
report = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE, headless=True)
    for run in range(1, 4):
        for width, height in [(320, 740), (390, 844), (768, 1024), (1024, 900), (1440, 1000), (1920, 1080), (1440, 600)]:
            context = browser.new_context(viewport={'width': width, 'height': height}, has_touch=width < 500)
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(BASE, wait_until='networkidle')
            expect(page.locator('.skill-node')).to_have_count(6)
            page.locator('.skills-orbit').scroll_into_view_if_needed()
            page.wait_for_function("() => [...document.querySelectorAll('.skill-position > div')].every(e => Number(getComputedStyle(e).opacity) > .99)")
            assert page.locator('.skill-label').all_text_contents() == labels
            assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
            assert page.locator('.skills-avatar img').evaluate('(e) => e.complete && e.naturalWidth > 0')
            boxes = page.locator('.skill-node').evaluate_all('(els) => els.map(e => e.getBoundingClientRect().toJSON())')
            for i, box in enumerate(boxes):
                assert box['width'] >= 44 and box['height'] >= 44
                assert box['x'] >= 0 and box['right'] <= width
                for other in boxes[:i]:
                    assert box['right'] <= other['x'] or other['right'] <= box['x'] or box['bottom'] <= other['y'] or other['bottom'] <= box['y'], 'Nodes overlap'
            for index, label in enumerate(labels):
                node = page.locator('.skill-node').nth(index)
                if width < 500:
                    node.tap()
                else:
                    node.hover()
                expect(node).to_have_attribute('aria-pressed', 'true')
                expect(page.locator('#skill-detail h3')).to_have_text(label)
                expect(page.locator('.skill-node[aria-pressed="true"]')).to_have_count(1)
                assert page.locator('.skills-connector.is-active').count() == 1
            page.locator('.skill-node').first.focus()
            page.keyboard.press('Tab')
            expect(page.locator('.skill-node').nth(1)).to_be_focused()
            expect(page.locator('#skill-detail h3')).to_have_text(labels[1])
            page.keyboard.press('Enter')
            expect(page.locator('.skill-node').nth(1)).to_have_attribute('aria-pressed', 'true')
            page.emulate_media(reduced_motion='reduce')
            expect(page.locator('.skills-feature')).to_have_attribute('data-motion', 'paused')
            assert not page.locator('.skills-avatar-pulse').count()
            page.wait_for_function("() => [...document.querySelectorAll('.skill-float')].every(e => getComputedStyle(e).transform === 'none')")
            if run == 1 and width in (320, 390, 1024, 1440) and height != 600:
                page.locator('#about').screenshot(path=str(OUT / f'about-{width}.png'))
                page.locator('.about-map').screenshot(path=str(OUT / f'map-{width}.png'))
            page.emulate_media(reduced_motion='no-preference')
            page.locator('.skills-orbit').scroll_into_view_if_needed()
            expect(page.locator('.skills-feature')).to_have_attribute('data-motion', 'playing')
            page.locator('#home').scroll_into_view_if_needed()
            expect(page.locator('.skills-feature')).to_have_attribute('data-motion', 'paused')
            page.locator('.about-actions a[href="#work-title"]').click()
            expect(page).to_have_url(BASE + '#work-title')
            page.locator('.about-actions a[href="#experience"]').click()
            expect(page).to_have_url(BASE + '#experience')
            assert not errors, errors
            report.append({'run': run, 'viewport': [width, height], 'skills': 6, 'keyboard': 'passed', 'touch_or_hover': 'passed', 'motion_preferences': 'passed', 'errors': errors})
            context.close()
            print(f'run {run}: {width}x{height} passed', flush=True)

    for name, settings in [('no-js', {'java_script_enabled': False}), ('blocked-bundle', {})]:
        context = browser.new_context(viewport={'width': 390, 'height': 844}, **settings)
        page = context.new_page()
        if name == 'blocked-bundle':
            page.route('**/interactions/portfolio-enhancements.js*', lambda route: route.abort())
        page.goto(BASE, wait_until='networkidle')
        expect(page.locator('.skills-fallback-list li')).to_have_count(6)
        page.locator('#about').scroll_into_view_if_needed()
        assert page.locator('.skills-fallback-portrait').evaluate('(e) => e.complete && e.naturalWidth > 0')
        page.locator('.about-actions a[href="#experience"]').click()
        expect(page).to_have_url(BASE + '#experience')
        assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
        report.append({'fallback': name, 'content_and_native_links': 'passed'})
        context.close()
    browser.close()
(OUT / 'report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
