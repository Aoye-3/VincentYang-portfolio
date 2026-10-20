"""Context menu: real anchors, scroll tracking, clipboard, back links and fixed geometry."""
from pathlib import Path
import os, tempfile, json
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/page-progress'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect
BASE = 'http://127.0.0.1:5501/'
report = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe', headless=True)
    for width, height in [(360,740),(390,844),(768,1024),(1024,900),(1440,900),(1920,1080)]:
        context = browser.new_context(viewport={'width':width,'height':height}, reduced_motion='reduce')
        page = context.new_page()
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        for path in ['', 'projects/inspiration.html', 'projects/pmagent.html', 'projects/other.html']:
            print(width, path or 'home', flush=True)
            page.goto(BASE + path, wait_until='networkidle')
            menu = page.locator('.page-progress')
            initial = menu.bounding_box()
            expect(menu).to_be_visible()
            assert page.locator('.page-progress').count() == 1
            assert abs(initial['x'] + initial['width']/2 - width/2) < 1
            assert 10 <= height - initial['y'] - initial['height'] <= 22
            links = menu.locator('.page-progress-links a')
            for link in links.all():
                if width <= 760:
                    menu.locator('.page-progress-toggle').click()
                    expect(menu.locator('.page-progress-toggle')).to_have_attribute('aria-expanded', 'true')
                link.focus()  # browser reveals offscreen tabs in the grey track
                page.keyboard.press('Enter')
                page.wait_for_timeout(160)
                expect(link).to_have_attribute('aria-current', 'location')
                if width <= 760:
                    expect(menu.locator('.page-progress-toggle')).to_have_attribute('aria-expanded', 'false')
                    expect(menu.locator('.page-progress-current')).to_have_text(link.inner_text())
                assert abs(menu.bounding_box()['y'] - initial['y']) < 1
                target = page.locator(link.get_attribute('href'))
                if link.get_attribute('href') != '#home':
                    assert target.bounding_box()['y'] >= page.locator('.site-nav').bounding_box()['height'] - 2, (width,path,link.get_attribute('href'),target.bounding_box(),initial)
            if not path:
                assert page.locator('#interest-disclosure').evaluate('(el)=>el.open')
                page.evaluate('scrollTo({top:0,behavior:"instant"})')
                expect(links.first).to_have_attribute('aria-current','location')
            assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
            action = menu.locator('.page-progress-action').bounding_box()
            assert action['x'] >= 0 and action['x']+action['width'] <= width
            page.screenshot(path=str(OUT / f'{path.split("/")[-1] or "home"}-{width}-navigation.png'))
            assert not errors, errors
            report.append({'page':path or 'home','width':width,'anchors':'passed','overflow':False})
        context.close()

    context = browser.new_context(permissions=['clipboard-read','clipboard-write'])
    page = context.new_page()
    page.goto(BASE,wait_until='networkidle')
    copy = page.locator('[data-copy-email]')
    # A fixture exercises the mechanism without inventing a public contact address.
    address = copy.get_attribute('data-copy-email') or 'fixture@example.com'
    copy.evaluate('(el,email)=>el.dataset.copyEmail=email', address)
    copy.click()
    expect(page.locator('.page-progress-status')).to_contain_text('邮箱已复制')
    assert page.evaluate('navigator.clipboard.readText()') == address
    page.evaluate('Object.defineProperty(navigator.clipboard,"writeText",{value:()=>Promise.reject(new Error("denied"))})')
    copy.click()
    expect(page.locator('.page-progress-status')).to_contain_text('请手动复制邮箱：' + address)

    # Back navigation must leave the case even after multiple chapter jumps.
    page.locator('.work-link').first.click()
    page.locator('.case-toc-links a').nth(1).click()
    page.locator('.case-toc-links a').nth(2).click()
    page.locator('[data-context-back]').click()
    page.wait_for_url(BASE + '**')
    assert '/projects/' not in page.url
    page.goto(BASE+'projects/pmagent.html',wait_until='networkidle')
    assert page.locator('[data-context-back]').get_attribute('href') == '../#work-title'
    context.close()

    context = browser.new_context(java_script_enabled=False,viewport={'width':390,'height':844})
    page = context.new_page()
    page.goto(BASE+'projects/inspiration.html',wait_until='networkidle')
    page.locator('.case-toc-links a').nth(2).click()
    assert page.url.endswith('#chapter-3')
    page.locator('[data-context-back]').click()
    assert page.url.endswith('#work-title')
    context.close()
    browser.close()
(OUT / 'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(f'Passed {len(report)} page/viewport checks; clipboard success + denial, return after chapter jumps, no-JS anchors.')
