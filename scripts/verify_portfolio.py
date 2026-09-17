"""Browser acceptance checks. Run with Python + Playwright; outputs stay in .local/."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import os
import tempfile

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local' / 'acceptance'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = str(OUT)
tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect
from PIL import Image, ImageChops, ImageStat

BASE = os.environ.get('PORTFOLIO_URL', 'http://127.0.0.1:5501/').rstrip('/') + '/'
EDGE = os.environ.get('BROWSER_EXECUTABLE', r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe')

class Document(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids = []
        self.refs = []
        self.feed(path.read_text(encoding='utf-8'))

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('src', 'href'):
            if key in attrs:
                self.refs.append(attrs[key])

docs = {path: Document(path) for path in [ROOT / 'index.html', *sorted((ROOT / 'projects').glob('*.html'))]}
for path, doc in docs.items():
    assert len(doc.ids) == len(set(doc.ids)), f'Duplicate ID: {path.name}'
    for ref in doc.refs:
        parts = urlsplit(ref)
        if parts.scheme or parts.netloc:
            continue
        target = (path.parent / unquote(parts.path)).resolve() if parts.path else path
        if target.is_dir():
            target /= 'index.html'
        assert target.exists(), f'Broken target in {path.name}: {ref}'
        if parts.fragment:
            assert parts.fragment in docs[target].ids, f'Broken anchor in {path.name}: {ref}'
assert len(list((ROOT / 'assets/images/boards').glob('*.webp'))) == 44

report = {'static': {'pages': len(docs), 'board_assets': 44, 'links': 'passed'}, 'viewports': [], 'interactions': [], 'cases': []}
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE, headless=True)
    for width, height in [(1440, 900), (1920, 1080), (768, 1024), (390, 844), (360, 740)]:
        context = browser.new_context(viewport={'width': width, 'height': height}, has_touch=width < 500, is_mobile=width < 500)
        page = context.new_page()
        errors = []
        failures = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.on('console', lambda msg: errors.append(msg.text) if msg.type == 'error' else None)
        page.on('requestfailed', lambda request: failures.append(request.url))
        page.goto(BASE, wait_until='networkidle')
        assert not page.locator('#interest-disclosure').evaluate('(el) => el.open')
        assert not page.evaluate('document.documentElement.scrollWidth > innerWidth'), f'Overflow at {width}'
        expect(page.locator('.hero-actions .button')).to_be_visible()
        page.screenshot(path=str(OUT / f'home-{width}.png'))
        timing = page.evaluate('Math.round(performance.getEntriesByType("navigation")[0].domContentLoadedEventEnd)')

        if width == 1440:
            page.mouse.move(160, 330)
            page.wait_for_timeout(800)
            assert page.locator('.hero-lit').evaluate('(el) => Number(getComputedStyle(el).opacity)') > .8
            page.screenshot(path=str(OUT / 'hero-pointer-reveal.png'))
            page.locator('#motion-toggle').click()
            expect(page.locator('#motion-toggle')).to_have_attribute('aria-pressed', 'true')
            assert page.locator('.hero-gallery .floating-work').first.evaluate('(el) => getComputedStyle(el).animationPlayState') == 'paused'
            page.locator('#motion-toggle').click()
            values = []
            for _ in range(32):
                page.mouse.wheel(0, 100)
                page.wait_for_timeout(90)
                values.append(page.locator('.work-card').first.evaluate('(el) => Number(getComputedStyle(el).opacity)'))
                if values[-1] == 1:
                    break
            assert any(0 < value < 1 for value in values), f'No progressive reveal: {values}'
            assert values[-1] == 1
            report['interactions'].extend(['pointer reveal', 'pause/resume ambient motion', 'progressive scroll reveal'])

        if width < 500:
            menu = page.locator('#menu-toggle')
            box = menu.bounding_box()
            assert box['width'] == 44 and box['height'] == 44, box
            menu.click()
            expect(page.locator('#site-menu')).to_be_visible()
            expect(page.locator('#site-menu a').first).to_be_focused()
            page.keyboard.press('Escape')
            expect(menu).to_be_focused()
            expect(menu).to_have_attribute('aria-expanded', 'false')
            page.touchscreen.tap(25, 215)
            expect(page.locator('.hero-stage')).to_have_class('hero-stage is-exploring')

        gallery = page.locator('.work-discovery')
        gallery.evaluate('(el) => window.scrollTo({top:scrollY + el.getBoundingClientRect().top - 78,behavior:"instant"})')
        page.wait_for_function('document.querySelectorAll(".discovery-strip").length > 0 && [...document.querySelectorAll(".discovery-wall img")].every(img => img.complete && img.naturalWidth > 0)')
        rows = gallery.locator('.discovery-strip').evaluate_all('(rows) => rows.map(row => ({category: row.dataset.galleryCategory, categories: [...new Set([...row.querySelectorAll("img")].map(img => img.dataset.galleryCategory))]}))')
        assert [row['category'] for row in rows] == ['ux', 'ux', 'awards'] * 3
        assert all(row['categories'] == [row['category']] for row in rows), 'Mixed categories within a gallery row'
        images = gallery.locator('.discovery-wall img').evaluate_all('(images) => images.map(img => ({fit:getComputedStyle(img).objectFit, ratio:img.clientWidth/img.clientHeight, natural:img.naturalWidth/img.naturalHeight}))')
        assert all(img['fit'] == 'contain' and abs(img['ratio'] - img['natural']) < .025 for img in images), 'Gallery image cropped or stretched'
        assert page.locator('.discovery-shade').evaluate('(el) => getComputedStyle(el).backgroundImage') != 'none'
        gallery_pause = page.locator('#gallery-motion-toggle')
        gallery_pause.click()
        expect(gallery_pause).to_have_attribute('aria-pressed', 'true')
        strip = page.locator('.discovery-strip').first
        assert strip.evaluate('(el) => getComputedStyle(el).animationPlayState') == 'paused'
        before = strip.evaluate('(el) => getComputedStyle(el).transform')
        page.wait_for_timeout(150)
        assert before == strip.evaluate('(el) => getComputedStyle(el).transform')
        page.mouse.move(15, 25)
        page.wait_for_timeout(600)
        if width == 1440:
            gallery.screenshot(path=str(OUT / 'gallery-unlit.png'))
        box = gallery.bounding_box()
        x, y = box['x'] + width * .22, box['y'] + box['height'] * .49
        if width < 500:
            page.touchscreen.tap(x, y)
        else:
            page.mouse.move(x, y)
        page.wait_for_timeout(600)
        assert gallery.evaluate('(el) => el.classList.contains("is-exploring")')
        gallery.screenshot(path=str(OUT / f'gallery-lit-{width}.png'))
        if width == 1440:
            # Compare the same frozen artwork under the pointer, not different frames.
            region = (int(width*.22-40), int(box['height']*.49-40), int(width*.22+40), int(box['height']*.49+40))
            dark = ImageStat.Stat(Image.open(OUT / 'gallery-unlit.png').convert('L').crop(region)).mean[0]
            lit = ImageStat.Stat(Image.open(OUT / f'gallery-lit-{width}.png').convert('L').crop(region)).mean[0]
            assert lit > max(25, dark * 5), (dark, lit)
            report['interactions'].append({'gallery_spotlight': 'passed', 'unlit_luminance': round(dark, 2), 'lit_luminance': round(lit, 2)})
            for offset, label in [(-1, 'before'), (1, 'after')]:
                gallery.evaluate('(el, offset) => el.querySelectorAll(".discovery-strip").forEach(strip => { const animation = strip.getAnimations()[0]; const timing = animation.effect.getTiming(); animation.currentTime = timing.duration - timing.delay + offset; })', offset)
                gallery.screenshot(path=str(OUT / f'gallery-loop-{label}.png'))
            diff = ImageChops.difference(Image.open(OUT / 'gallery-loop-before.png'), Image.open(OUT / 'gallery-loop-after.png'))
            assert max(ImageStat.Stat(diff).mean) < 1, 'Visible jump at gallery loop seam'
        gallery_pause.click()
        expect(gallery_pause).to_have_attribute('aria-pressed', 'false')
        before = strip.evaluate('(el) => getComputedStyle(el).transform')
        page.wait_for_timeout(180)
        assert before != strip.evaluate('(el) => getComputedStyle(el).transform')
        assert not page.evaluate('document.documentElement.scrollWidth > innerWidth'), f'Gallery overflow at {width}'

        page.locator('[data-filter="ux"]').click()
        assert page.locator('[data-category]:visible').count() == 1
        page.locator('[data-filter="product"]').click()
        assert page.locator('[data-category]:visible').count() == 2
        page.locator('[data-filter="all"]').click()
        assert page.locator('[data-category]:visible').count() == 3
        page.locator('.work-link').first.focus()
        page.locator('.work-toolbar').evaluate('(el) => window.scrollTo({top:scrollY + el.getBoundingClientRect().top - parseFloat(getComputedStyle(el).top) + 100,behavior:"instant"})')
        page.wait_for_timeout(200)
        assert page.locator('.work-toolbar').evaluate('(el) => Math.abs(el.getBoundingClientRect().top - parseFloat(getComputedStyle(el).top))') < 2
        page.screenshot(path=str(OUT / f'work-{width}.png'))
        summary = page.locator('#interest-disclosure summary')
        summary.focus()
        page.keyboard.press('Enter')
        assert page.locator('#interest-disclosure').evaluate('(el) => el.open')
        page.keyboard.press('Space')
        assert not page.locator('#interest-disclosure').evaluate('(el) => el.open')
        if width < 500:
            page.locator('#menu-toggle').click()
        page.locator('#site-menu a[href="#interests"]').click()
        assert page.locator('#interest-disclosure').evaluate('(el) => el.open')
        page.wait_for_timeout(600)
        assert strip.evaluate('(el) => getComputedStyle(el).animationPlayState') == 'paused'
        page.screenshot(path=str(OUT / f'interests-{width}.png'))
        page.locator('#theme-toggle').click()
        expect(page.locator('#theme-toggle')).to_have_attribute('aria-pressed', 'true')
        page.screenshot(path=str(OUT / f'light-{width}.png'))
        assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
        assert not errors and not failures, (width, errors, failures)
        report['viewports'].append({'width': width, 'height': height, 'overflow': False, 'errors': errors, 'failed_requests': failures, 'local_dom_ready_ms': timing})
        context.close()

    report['interactions'].extend(['gallery rows: UX / UX / awards in order; full image aspect ratios preserved', 'diagonal gallery: pause/resume, seamless loop, touch reveal, offscreen pause', 'sticky category toolbar', 'category filtering', 'keyboard disclosure', 'interest navigation auto-opens', 'mobile menu + Escape + focus', 'touch reveal', 'light theme'])
    for width in (1440, 390):
        context = browser.new_context(viewport={'width': width, 'height': 900}, has_touch=width < 500, is_mobile=width < 500)
        page = context.new_page()
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        for name, count in [('inspiration', 21), ('pmagent', 22), ('other', 1)]:
            page.goto(BASE + f'projects/{name}.html', wait_until='networkidle')
            assert not page.evaluate('document.documentElement.scrollWidth > innerWidth'), (width, name)
            assert page.locator('.case-cover a, .case-figure a').count() == count
            page.screenshot(path=str(OUT / f'{name}-{width}.png'))
            opener = page.locator('.case-cover a')
            opener.click()
            expect(page.locator('.board-dialog')).to_be_visible()
            expect(page.locator('.reader-counter')).to_have_text(f'1 / {count}')
            if count > 1:
                page.locator('[data-reader="next"]').click()
                expect(page.locator('.reader-counter')).to_have_text(f'2 / {count}')
                page.keyboard.press('ArrowLeft')
                expect(page.locator('.reader-counter')).to_have_text(f'1 / {count}')
            page.locator('[data-reader="zoom"]').click()
            expect(page.locator('[data-reader="zoom"]')).to_have_attribute('aria-pressed', 'true')
            page.locator('[data-reader="zoom"]').click()
            page.screenshot(path=str(OUT / f'reader-{name}-{width}.png'))
            page.keyboard.press('Escape')
            expect(page.locator('.board-dialog')).not_to_be_visible()
            expect(opener).to_be_focused()
            page.locator('.case-toc a').nth(1).click()
            page.wait_for_timeout(650)
            expect(page.locator('.case-toc a').nth(1)).to_have_attribute('aria-current', 'location')
            assert not errors, errors
            report['cases'].append({'name': name, 'width': width, 'boards': count, 'reader_and_chapters': 'passed'})
        page.locator('#theme-toggle').click()
        page.goto(BASE + 'projects/inspiration.html', wait_until='networkidle')
        expect(page.locator('#theme-toggle')).to_have_attribute('aria-pressed', 'true')
        context.close()

    context = browser.new_context(viewport={'width': 390, 'height': 844}, reduced_motion='reduce')
    page = context.new_page()
    page.goto(BASE, wait_until='networkidle')
    assert page.locator('.hero-gallery .floating-work').first.evaluate('(el) => getComputedStyle(el).animationName') == 'none'
    assert page.locator('.work-card').first.evaluate('(el) => getComputedStyle(el).opacity') == '1'
    page.locator('.work-discovery').scroll_into_view_if_needed()
    assert page.locator('.discovery-strip').first.evaluate('(el) => getComputedStyle(el).animationName') == 'none'
    expect(page.locator('#gallery-motion-toggle')).not_to_be_visible()
    ambient_card = page.locator('.hero-gallery .floating-work').first
    page.emulate_media(reduced_motion='no-preference')
    assert ambient_card.evaluate('(el) => getComputedStyle(el).animationName') == 'float-work'
    page.goto(BASE + '#interests', wait_until='networkidle')
    assert page.locator('#interest-disclosure').evaluate('(el) => el.open')
    context.close()
    context = browser.new_context(viewport={'width': 390, 'height': 844}, java_script_enabled=False)
    page = context.new_page()
    page.goto(BASE, wait_until='networkidle')
    expect(page.locator('#site-menu')).to_be_visible()
    expect(page.locator('.work-card').first).to_be_visible()
    page.locator('#interest-disclosure summary').click()
    expect(page.locator('.interest-content')).to_be_visible()
    context.close()
    report['interactions'].extend(['case theme persistence', 'reduced motion + live preference change', 'deep link expansion', 'no-JavaScript navigation and content'])
    browser.close()

(OUT / 'report.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(report, ensure_ascii=False, indent=2))
