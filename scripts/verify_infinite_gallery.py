"""Verify opt-in 3D controls, native scroll, autoplay, exit and archive placement."""
from pathlib import Path
import json
import os
import tempfile
from io import BytesIO

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/infinite-gallery'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect
from PIL import Image, ImageChops, ImageStat

BASE = 'http://127.0.0.1:5501/'
EDGE = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

def frame(page):
    page.locator('#work-universe').evaluate('(e) => scrollTo({top:scrollY+e.getBoundingClientRect().top-90,behavior:"instant"})')

def cancelled(canvas, ctrl=False):
    return canvas.evaluate('''(el, ctrl) => !el.dispatchEvent(new WheelEvent('wheel', {deltaY:120,bubbles:true,cancelable:true,ctrlKey:ctrl}))''', ctrl)

def difference(a, b):
    return sum(ImageStat.Stat(ImageChops.difference(Image.open(BytesIO(a)).convert('RGB'), Image.open(BytesIO(b)).convert('RGB'))).mean)

report = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE, headless=True)
    for run in range(1, 4):
        for width, height in [(320,740), (390,844), (768,1024), (1024,900), (1440,1000), (1920,1080), (1440,600)]:
            context = browser.new_context(viewport={'width':width,'height':height}, has_touch=width < 500)
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(BASE, wait_until='networkidle')
            frame(page)
            player = page.locator('.universe-player')
            expect(player).to_have_class('universe-player is-ready', timeout=30000)
            canvas = page.locator('#universe-viewport canvas')
            expect(player).to_have_attribute('data-mode','preview')
            expect(player).to_have_attribute('data-playback','playing')
            assert not cancelled(canvas), 'Default gallery consumed wheel'
            assert canvas.evaluate('(e)=>getComputedStyle(e).touchAction') == 'pan-y'
            assert page.locator('.universe-index a').count() == 5
            assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
            assert page.locator('#universe-viewport').bounding_box()['height'] <= height * .6 + 2
            canvas.hover()
            before = page.evaluate('scrollY')
            page.mouse.wheel(0,160)
            page.wait_for_function('(y)=>scrollY>y+35', arg=before)

            frame(page)
            start = page.locator('.universe-controls .button')
            start.click()
            expect(start).to_have_text('退出探索×')
            expect(player).to_have_attribute('data-mode','exploring')
            page.wait_for_function("getComputedStyle(document.querySelector('#universe-viewport canvas')).touchAction === 'none'")
            assert cancelled(canvas), 'Exploration did not own its local wheel'
            assert not cancelled(canvas, True), 'Browser zoom must remain available'
            canvas.hover()
            before = page.evaluate('scrollY')
            page.mouse.wheel(0,160)
            after = page.evaluate('''() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve(scrollY))))''')
            assert abs(before-after) < 2, (before,after)
            if run == 1 and width in (390,1440) and height != 600:
                page.screenshot(path=str(OUT/f'exploring-{width}.png'))

            # A wheel over the text column must still scroll the document.
            page.locator('.universe-intro').hover()
            before = page.evaluate('scrollY')
            page.mouse.wheel(0,160)
            page.wait_for_function('(y)=>scrollY>y+35', arg=before)
            page.keyboard.press('Escape')
            expect(player).to_have_attribute('data-mode','preview')
            assert not cancelled(canvas)
            frame(page)
            pause = page.locator('.universe-pause')
            pause.click()
            expect(player).to_have_attribute('data-playback','paused')
            page.wait_for_function("Number(getComputedStyle(document.querySelector('.universe-canvas')).opacity)>.99")
            if width == 1440 and height == 1000:
                still = canvas.screenshot()
                page.wait_for_timeout(250)
                assert difference(still, canvas.screenshot()) < .05, 'Paused gallery is still moving'
                pause.click()
                expect(player).to_have_attribute('data-playback','playing')
                moving = canvas.screenshot()
                for _ in range(6):
                    page.wait_for_timeout(180)
                    if difference(moving, canvas.screenshot()) > .15: break
                else: raise AssertionError('Autoplay did not change the actual rendered scene')
            else:
                pause.click()

            page.emulate_media(reduced_motion='reduce')
            expect(player).to_have_attribute('data-playback','paused')
            if run == 1 and width in (390,1440) and height != 600:
                frame(page)
                page.screenshot(path=str(OUT/f'preview-{width}.png'))
            page.emulate_media(reduced_motion='no-preference')
            frame(page)
            start.click()
            page.locator('#about').scroll_into_view_if_needed()
            expect(player).to_have_attribute('data-mode','preview')
            expect(player).to_have_attribute('data-playback','paused')
            assert page.evaluate("document.querySelector('#contact').compareDocumentPosition(document.querySelector('#honors-wall')) & Node.DOCUMENT_POSITION_FOLLOWING")
            assert page.evaluate("document.querySelector('#honors-wall').compareDocumentPosition(document.querySelector('.footer-bottom')) & Node.DOCUMENT_POSITION_FOLLOWING")
            assert not errors, errors
            report.append({'run':run,'viewport':[width,height],'default_scroll':'native','active_scroll':'local','outside_scroll':'native','escape':'passed','motion':'passed','errors':errors})
            context.close()
            print(f'run {run}: {width}x{height} passed', flush=True)

    for name, settings in [('no-js', {'java_script_enabled':False}), ('blocked-3d', {})]:
        context = browser.new_context(viewport={'width':390,'height':844}, **settings)
        page = context.new_page()
        if name == 'blocked-3d': page.route('**/interactions/work-universe-*.js', lambda route: route.abort())
        page.goto(BASE+'#work-universe',wait_until='networkidle')
        expect(page.locator('[data-universe-project]')).to_have_count(5)
        page.locator('.universe-index a').first.focus()
        page.keyboard.press('Enter')
        page.wait_for_url('**/projects/inspiration.html')
        report.append({'fallback':name,'native_work_entry':'passed'})
        context.close()
    browser.close()
(OUT/'report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
