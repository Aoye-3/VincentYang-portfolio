"""Hero atmosphere: rendering, pause conditions, click-through and shared colors."""
from pathlib import Path
import os, tempfile, json
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/atmosphere'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect
BASE = 'http://127.0.0.1:5501/'
report = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe', headless=True)
    for width,height in [(360,740),(390,844),(768,1024),(1024,900),(1440,900),(1920,1080)]:
        page = browser.new_page(viewport={'width':width,'height':height},device_scale_factor=2)
        errors = []
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(BASE,wait_until='networkidle')
        layer = page.locator('.hero-atmosphere')
        canvas = layer.locator('canvas')
        expect(layer).to_have_attribute('data-running','true')
        assert layer.evaluate('(el)=>getComputedStyle(el).pointerEvents') == 'none'
        assert canvas.evaluate('(el)=>el.width*el.height') < 1805000
        frame = canvas.evaluate('(el)=>el.toDataURL()')
        page.wait_for_timeout(400)
        assert frame != canvas.evaluate('(el)=>el.toDataURL()'), 'Particles are not moving'
        # Decoration is not a hit target; original CTA and 3D scene stay usable.
        link = page.locator('.hero-actions .button')
        assert link.evaluate('(el)=>{const r=el.getBoundingClientRect();return document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest("a")===el}')
        if width >= 1024:
            assert page.locator('.hero-projects').evaluate('(el)=>getComputedStyle(el).transformStyle') == 'preserve-3d'
            page.locator('.hero-collection-viewport').hover()
            expect(page.locator('.hero-collection')).to_have_attribute('data-playing','false')
            expect(layer).to_have_attribute('data-running','true')
            page.mouse.move(5,80)
        for light in [False,True]:
            if light:
                page.locator('#theme-toggle').click()
                page.wait_for_timeout(300)
            colors = page.evaluate('''() => {
              const hero=getComputedStyle(document.querySelector('.hero-actions .button'));
              const action=getComputedStyle(document.querySelector('.page-progress-action'));
              const nav=getComputedStyle(document.querySelector('.page-progress-links a'));
              return {hero:hero.backgroundColor,action:action.backgroundColor,ink:action.color,navInk:nav.color};
            }''')
            assert colors['hero'] == colors['action'] == 'rgb(220, 234, 255)', colors
            assert colors['ink'] == 'rgb(11, 28, 50)'
            if light: assert colors['navInk'] in ['rgb(36, 85, 143)','rgb(64, 87, 117)'],colors
            if width in [390,1440]: page.screenshot(path=str(OUT/f'{"light" if light else "hero"}-{width}.png'))
        page.emulate_media(reduced_motion='reduce')
        expect(layer).to_have_attribute('data-running','false')
        frame=canvas.evaluate('(el)=>el.toDataURL()')
        page.wait_for_timeout(180)
        assert frame==canvas.evaluate('(el)=>el.toDataURL()')
        page.emulate_media(reduced_motion='no-preference')
        expect(layer).to_have_attribute('data-running','true')
        page.locator('#contact').scroll_into_view_if_needed()
        expect(layer).to_have_attribute('data-running','false')
        frame=canvas.evaluate('(el)=>el.toDataURL()')
        page.wait_for_timeout(150)
        assert frame==canvas.evaluate('(el)=>el.toDataURL()')
        page.evaluate('scrollTo({top:0,behavior:"instant"})')
        expect(layer).to_have_attribute('data-running','true')
        # Exercise the visibility gate without relying on headless window focus.
        page.evaluate('Object.defineProperty(document,"hidden",{configurable:true,value:true});document.dispatchEvent(new Event("visibilitychange"))')
        expect(layer).to_have_attribute('data-running','false')
        page.evaluate('delete document.hidden;document.dispatchEvent(new Event("visibilitychange"))')
        expect(layer).to_have_attribute('data-running','true')
        assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
        assert not errors,errors
        report.append({'width':width,'rendering':'passed','pause_conditions':'passed','colors':'passed','errors':errors})
        page.close()
    page=browser.new_page(java_script_enabled=False,viewport={'width':390,'height':844})
    page.goto(BASE,wait_until='networkidle')
    assert page.locator('.hero-atmosphere').evaluate('(el)=>getComputedStyle(el,"::before").backgroundImage')!='none'
    page.locator('.hero-actions .button').click()
    assert page.url.endswith('#projects')
    browser.close()
(OUT/'report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps(report))
