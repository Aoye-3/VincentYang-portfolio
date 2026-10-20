"""Regression: removing visible controls must not break cached carousel initialization."""
from pathlib import Path
import os,tempfile,subprocess,json
ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/'.local/hero-restore'
OUT.mkdir(parents=True,exist_ok=True)
os.environ['TEMP']=os.environ['TMP']=tempfile.tempdir=str(OUT)
from playwright.sync_api import sync_playwright,expect
BASE='http://127.0.0.1:5501/'
old_script=subprocess.check_output(['git','show','18e51d8:hero-gallery.js'],cwd=ROOT).decode()
broken_html=subprocess.check_output(['git','show','6511adf:index.html'],cwd=ROOT).decode()
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',headless=True)
    page=browser.new_page(viewport={'width':1440,'height':900})
    errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.route(BASE,lambda route:route.fulfill(content_type='text/html',body=broken_html))
    page.route('**/hero-gallery.js',lambda route:route.fulfill(content_type='application/javascript',body=old_script))
    page.goto(BASE,wait_until='networkidle')
    assert any('querySelector' in error for error in errors), errors
    assert 'is-ready' not in page.locator('.hero-collection').get_attribute('class')
    page.screenshot(path=str(OUT/'reproduced-cached-script.png'))
    print('Reproduced: cached old script + removed controls => initialization failure',flush=True)
    page.close()
    for width,height in [(1440,900),(1600,1080),(390,844)]:
        page=browser.new_page(viewport={'width':width,'height':height})
        errors=[]
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(BASE,wait_until='networkidle')
        expect(page.locator('.hero-collection')).to_have_class('hero-collection is-ready'+(' is-static' if width<1024 else ''))
        assert page.locator('.hero-collection-controls').evaluate('(e)=>e.getBoundingClientRect().height')==0
        assert page.locator('.hero-collection button:visible, .hero-collection-counter:visible').count()==0
        assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
        card=page.locator('.hero-projects').bounding_box()
        if width>=1024:
            assert card['width']<=360
            expect(page.locator('.hero-collection')).to_have_attribute('data-playing','true')
        page.screenshot(path=str(OUT/f'restored-{width}.png'))
        page.locator('.hero-project-link').first.focus()
        page.keyboard.press('ArrowRight')
        expect(page.locator('.hero-collection')).to_have_attribute('data-active','1')
        page.locator('.hero-actions a').first.focus()
        if width>=1024:
            expect(page.locator('.hero-collection')).to_have_attribute('data-playing','true')
        page.reload(wait_until='networkidle')
        assert 'is-ready' in page.locator('.hero-collection').get_attribute('class')
        assert not errors,errors
        print(f'PASS: {width}px, original card geometry, hidden zero-height controls, reload',flush=True)
        page.close()
    # Even an explicitly forced old script must survive the compatibility markup.
    page=browser.new_page(viewport={'width':1440,'height':900})
    errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.route('**/hero-gallery.js*',lambda route:route.fulfill(content_type='application/javascript',body=old_script))
    page.goto(BASE,wait_until='networkidle')
    expect(page.locator('.hero-collection')).to_have_attribute('data-playing','true')
    assert not errors,errors
    assert page.locator('.hero-collection-controls').evaluate('(e)=>e.getBoundingClientRect().height')==0
    print('PASS: restored page compatible with cached old controller; no visible controls',flush=True)
    browser.close()
