"""Check the hero/Dock clearance, navigation and moving cards in a real browser."""
from pathlib import Path
import json
import os
import tempfile
import time

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/hero-layout-20261021'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)

from playwright.sync_api import sync_playwright, expect

BASE = os.environ.get('PORTFOLIO_URL', 'http://127.0.0.1:5501/')
EDGE = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
report = []

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE, headless=True)
    for run in range(1, 4):
        for width, height in [(390, 844), (768, 1024), (1024, 900),
                              (1280, 720), (1366, 768), (1440, 900), (1920, 1080)]:
            page = browser.new_page(viewport={'width': width, 'height': height})
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(BASE, wait_until='networkidle')
            assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
            assert page.locator('.site-nav').bounding_box()['height'] == 64
            assert page.locator('.hero-project-link img').evaluate_all(
                '(images) => images.every(i => i.complete && i.naturalWidth > 0 '
                '&& getComputedStyle(i).objectFit === "contain")')
            clearance = None
            if width >= 1024:
                stage = page.locator('.hero-collection-viewport').bounding_box()
                dock = page.locator('.page-progress').bounding_box()
                clearance = round(dock['y'] - stage['y'] - stage['height'], 2)
                assert clearance >= 24, (width, height, clearance)
                page.locator('.hero-project-link[tabindex="0"]').focus()
                for _ in range(5):
                    link = page.locator('.hero-project-link[tabindex="0"]')
                    bounds = link.bounding_box()
                    assert bounds['y'] > 64, (width, bounds)
                    assert bounds['y'] + bounds['height'] < dock['y'] - 24
                    page.keyboard.press('ArrowRight')
                assert page.locator('#site-menu a:visible').count() == 1
            if run == 1:
                page.screenshot(path=str(OUT / f'after-{width}.png'))
            if width < 1024:
                card = page.locator('.hero-project-link[tabindex="0"]').bounding_box()
                dock = page.locator('.page-progress').bounding_box()
                page.mouse.wheel(0, card['y'] + card['height'] / 2 - (64 + dock['y']) / 2)
                page.wait_for_function('''() => {
                    const card = document.querySelector('.hero-project-link[tabindex="0"]').getBoundingClientRect();
                    const dock = document.querySelector('.page-progress').getBoundingClientRect();
                    return card.top >= 88 && card.bottom <= dock.top - 24;
                }''')
                if run == 1:
                    page.screenshot(path=str(OUT / f'card-scrolled-{width}.png'))
                page.mouse.wheel(0, -10000)
                expect(page.locator('.site-nav')).to_have_class('site-nav')
            if width <= 760:
                page.locator('#menu-toggle').click()
                expect(page.locator('#site-menu')).to_have_class('nav-links is-open')
                assert page.locator('#site-menu a:visible').count() == 6
                page.keyboard.press('Escape')
                expect(page.locator('#menu-toggle')).to_be_focused()
            page.locator('#theme-toggle').click()
            expect(page.locator('body')).to_have_class('portfolio-page light-mode')
            page.locator('#theme-toggle').click()
            page.mouse.wheel(0, 400)
            expect(page.locator('.site-nav')).to_have_class('site-nav is-scrolled')
            page.mouse.wheel(0, -10000)
            expect(page.locator('.site-nav')).to_have_class('site-nav')
            assert not errors, errors
            report.append({'run': run, 'viewport': [width, height],
                           'dock_clearance': clearance, 'errors': errors})
            print(f'PASS run {run}: {width}x{height}, Dock clearance {clearance}', flush=True)
            page.close()

        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        page.goto(BASE, wait_until='networkidle')
        page.mouse.move(10, 100)
        expect(page.locator('.hero-collection')).to_have_attribute('data-playing', 'true')
        # One card interval covers every relative position along the shared trajectory.
        started = time.monotonic()
        samples = 0
        while time.monotonic() - started < 8.2:
            assert page.evaluate('''() => {
                const dock = document.querySelector('.page-progress').getBoundingClientRect();
                return [...document.querySelectorAll('.hero-projects > li')].every(card =>
                    [...card.children].every(face => {
                        if (Number(getComputedStyle(face).opacity) < .15) return true;
                        const r = face.getBoundingClientRect();
                        return r.bottom <= dock.top - 24 || r.left >= dock.right + 24;
                    }));
            }'''), 'A visible card face entered the Dock safety region'
            samples += 1
            page.wait_for_timeout(100)
        page.locator('.hero-collection-viewport').hover()
        expect(page.locator('.hero-collection')).to_have_attribute('data-playing', 'false')
        page.emulate_media(reduced_motion='reduce')
        expect(page.locator('.hero-collection')).to_have_class('hero-collection is-ready is-static')
        page.emulate_media(reduced_motion='no-preference')
        assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
        print(f'PASS run {run}: {samples} real-time movement samples, hover and reduced motion', flush=True)
        report.append({'run': run, 'motion_samples': samples, 'motion': 'passed'})
        page.close()
    browser.close()

(OUT / 'report.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
