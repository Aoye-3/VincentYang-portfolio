"""Verify installed interactions, native fallbacks, and motion preferences."""
from pathlib import Path
import json
import os
import tempfile

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/reactbits-exploration/current'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect

report = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe', headless=True)
    for run in range(1, 4):
        for width, reduced in [(1440, False), (390, False), (1440, True), (390, True)]:
            context = browser.new_context(viewport={'width': width, 'height': 900 if width > 500 else 844},
                                          has_touch=width < 500, reduced_motion='reduce' if reduced else 'no-preference')
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto('http://127.0.0.1:5501/', wait_until='networkidle')
            assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
            assert page.locator('.hero-project-link').count() == 5
            page.locator('#about').scroll_into_view_if_needed()
            if reduced:
                assert page.locator('.portrait-pixel-layer').count() == 0
            else:
                expect(page.locator('.about-portrait')).to_have_attribute('data-pixel-reveal', 'complete')
                assert page.locator('.portrait-pixel-layer').count() == 0, 'Completed WebGL layer must be released'
            assert page.locator('.about-portrait > img').evaluate('(e)=>e.complete && e.naturalWidth > 0')

            page.locator('#interest-disclosure').evaluate('(e)=>e.open=true')
            expect(page.locator('#creative-preview-root')).to_have_class('creative-preview-root is-enhanced')
            page.locator('#interests').scroll_into_view_if_needed()
            link = page.locator('.film-card')
            link.focus()
            preview = page.locator('#creative-preview-root .hover-preview-image-wrapper').nth(1)
            if width > 500 and not reduced:
                expect(preview.locator('img')).to_be_visible()
                page.wait_for_function('''() => Number(getComputedStyle(document.querySelectorAll('.hover-preview-image-wrapper')[1]).opacity) > .95''')
                box = preview.bounding_box()
                target = link.bounding_box()
                assert box['x'] >= target['x'] + target['width'], 'Preview obscures focused link'
                assert 0 <= box['x'] and box['x'] + box['width'] <= width
                if run == 1:
                    page.screenshot(path=str(OUT / f'creative-focus-{width}.png'))
                page.keyboard.press('Escape')
                expect(preview.locator('img')).to_have_count(0)
            else:
                assert page.locator('.creative-thumbnail').evaluate_all('(els)=>els.every(e=>e.complete && e.naturalWidth>0)')
            if run == 1:
                page.screenshot(path=str(OUT / f'creative-{width}-reduced-{reduced}.png'))
            link.click()
            page.wait_for_url('**/projects/other.html#jiangtian')
            assert not errors, errors
            report.append({'run': run, 'width': width, 'reduced_motion': reduced, 'errors': errors})
            context.close()
            print(f'run {run}: {width} reduced={reduced} passed', flush=True)

    for name, settings in [('no-js', {'java_script_enabled': False}), ('blocked-bundle', {})]:
        context = browser.new_context(viewport={'width': 390, 'height': 844}, **settings)
        page = context.new_page()
        if name == 'blocked-bundle':
            page.route('**/interactions/portfolio-enhancements.js*', lambda route: route.abort())
        page.goto('http://127.0.0.1:5501/', wait_until='networkidle')
        page.locator('#interest-disclosure > summary').click()
        expect(page.locator('.film-card')).to_be_visible()
        page.locator('.film-card').click()
        page.wait_for_url('**/projects/other.html#jiangtian')
        report.append({'fallback': name, 'native_link': 'passed'})
        context.close()
    browser.close()
(OUT / 'report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
