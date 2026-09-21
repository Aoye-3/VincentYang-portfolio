"""Hero-specific behavior and two real-time loops; output stays on the workspace drive."""
from pathlib import Path
import os, tempfile, json, time
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/hero-collection'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect
BASE = os.environ.get('PORTFOLIO_URL', 'http://127.0.0.1:5501/').rstrip('/') + '/'
EDGE = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
report = {'viewports': [], 'behaviors': [], 'loops': []}
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE, headless=True)
    for width, height in [(360,740),(390,844),(768,1024),(1024,900),(1440,900),(1920,1080)]:
        page = browser.new_page(viewport={'width':width,'height':height}, has_touch=width<1024)
        errors=[]
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.goto(BASE, wait_until='networkidle')
        assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
        assert page.locator('.hero-project-link').count() == 5
        assert page.locator('.hero-collection button, .hero-collection-controls, .hero-collection-counter').count() == 0
        assert page.locator('.hero-project-link img').evaluate_all('(imgs)=>imgs.every(i=>i.complete&&i.naturalWidth>0&&getComputedStyle(i).objectFit==="contain")')
        # Center card title must fit inside its shell, including the narrowest mobile size.
        assert page.locator('.hero-projects > li').first.evaluate('(c)=>{const t=c.querySelector("h2").getBoundingClientRect(),r=c.getBoundingClientRect();return t.bottom<r.bottom&&t.right<r.right}')
        page.screenshot(path=str(OUT/f'hero-{width}.png'))
        page.locator('.hero-project-link').first.focus()
        page.keyboard.press('ArrowRight')
        expect(page.locator('.hero-collection')).to_have_attribute('data-active','1')
        expect(page.locator('.hero-collection')).to_have_attribute('data-playing','false')
        if width<1024:
            assert page.locator('.hero-projects').evaluate('(el)=>el.scrollLeft>0')
        page.keyboard.press('ArrowLeft')
        expect(page.locator('.hero-collection')).to_have_attribute('data-active','0')
        page.locator('.hero-collection').screenshot(path=str(OUT/f'cards-{width}.png'))
        assert not errors, errors
        report['viewports'].append({'width':width,'overflow':False,'manual_navigation':'passed'})
        page.close()

    page=browser.new_page(viewport={'width':1440,'height':900})
    page.goto(BASE,wait_until='networkidle')
    gallery=page.locator('.hero-collection')
    expect(gallery).to_have_attribute('data-playing','true')
    page.locator('.hero-collection-viewport').hover()
    expect(gallery).to_have_attribute('data-playing','false')
    transform=page.locator('.hero-projects > li').first.get_attribute('style')
    page.wait_for_timeout(300)
    assert transform==page.locator('.hero-projects > li').first.get_attribute('style')
    page.mouse.move(10,100)
    expect(gallery).to_have_attribute('data-playing','true')
    bounds=page.locator('.hero-projects').bounding_box()
    page.mouse.move(bounds['x']+bounds['width']*.85,bounds['y']+bounds['height']*.2)
    page.wait_for_timeout(700)
    expect(gallery).to_have_attribute('data-playing','false')
    tilt_style=page.locator('.hero-projects > li').first.get_attribute('style')
    assert 'rotateY(0deg)' not in tilt_style, tilt_style
    page.screenshot(path=str(OUT/'hover-tilt.png'))
    page.mouse.move(10,100)
    page.wait_for_timeout(900)
    page.locator('.hero-project-link[tabindex="0"]').focus()
    expect(gallery).to_have_attribute('data-playing','false')
    page.keyboard.press('ArrowRight')
    expect(gallery).to_have_attribute('data-active','1')
    expect(page.locator('.hero-project-link').nth(1)).to_be_focused()
    page.keyboard.press('Enter')
    page.wait_for_url('**/projects/pmagent.html')
    page.goto(BASE,wait_until='networkidle')
    page.emulate_media(reduced_motion='reduce')
    expect(gallery).to_have_attribute('data-playing','false')
    assert page.locator('.hero-collection button').count() == 0
    page.emulate_media(reduced_motion='no-preference')
    expect(gallery).to_have_attribute('data-playing','true')
    page.locator('#contact').scroll_into_view_if_needed()
    expect(gallery).to_have_attribute('data-playing','false')
    page.locator('#home').scroll_into_view_if_needed()
    expect(gallery).to_have_attribute('data-playing','true')
    # visibility event exercises the same handler browsers call when the tab is backgrounded.
    page.evaluate('Object.defineProperty(document,"hidden",{configurable:true,get:()=>true}); document.dispatchEvent(new Event("visibilitychange"))')
    expect(gallery).to_have_attribute('data-playing','false')
    page.evaluate('delete document.hidden; document.dispatchEvent(new Event("visibilitychange"))')
    expect(gallery).to_have_attribute('data-playing','true')
    for link in page.locator('.hero-project-link').evaluate_all('(links)=>links.map(l=>l.getAttribute("href"))'):
        response=page.goto(BASE+link,wait_until='networkidle')
        assert response is None or response.status==200  # same-page hash navigation has no response
        if '#' in link: expect(page.locator('#'+link.split('#')[1])).to_be_visible()
    report['behaviors'] += ['hover/focus pause','keyboard enter and next','live reduced motion','offscreen pause','visibility handler','five destinations']
    page.close()

    original=(ROOT/'index.html').read_text(encoding='utf-8')
    import re
    start=original.index('<ul class="hero-projects">')+len('<ul class="hero-projects">')
    end=original.index('</ul>',start)
    records=re.findall(r'<li data-project=.*?</li>',original[start:end],re.S)
    for count in [0,1,2,6]:
        page=browser.new_page(viewport={'width':1440,'height':900})
        values=records[:count] if count<6 else records+[records[0].replace('data-project="inspiration"','data-project="sixth"')]
        html=original[:start]+''.join(values)+original[end:]
        page.route(BASE, lambda route:route.fulfill(status=200,content_type='text/html',body=html))
        page.goto(BASE,wait_until='networkidle')
        if count==0: expect(page.locator('.hero-collection')).not_to_be_visible()
        elif count==1:
            assert page.locator('.hero-collection button').count() == 0
            expect(page.locator('.hero-collection')).to_have_attribute('data-playing','false')
        else:
            for i in range(count):
                if i == 0: page.locator('.hero-project-link').first.focus()
                page.keyboard.press('ArrowRight')
                expect(page.locator('.hero-collection')).to_have_attribute('data-active',str((i+1)%count))
        page.close()
    report['behaviors'].append('0 / 1 / 2 / 6 project records, no controller changes')
    page=browser.new_page(viewport={'width':390,'height':844},java_script_enabled=False)
    page.goto(BASE,wait_until='networkidle')
    for link in page.locator('.hero-project-link').all(): expect(link).to_be_visible()
    assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
    page.screenshot(path=str(OUT/'no-js.png'),full_page=True)
    page.close()
    page=browser.new_page(viewport={'width':390,'height':844})
    page.route('**/inspiration-cover.webp',lambda route:route.abort())
    page.goto(BASE,wait_until='networkidle')
    expect(page.locator('.hero-project-title').first).to_have_text('AI 灵感助手')
    page.locator('.hero-project-link').first.click()
    page.wait_for_url('**/projects/inspiration.html')
    page.close()
    report['behaviors']+=['no-JavaScript links','failed cover retains title and entry']

    page=browser.new_page(viewport={'width':1440,'height':900})
    page.goto(BASE,wait_until='networkidle')
    page.mouse.move(10,100)
    page.wait_for_timeout(1200)
    card=page.locator('.hero-projects > li').first
    y0=card.evaluate('(e)=>new DOMMatrix(getComputedStyle(e).transform).m42')
    page.wait_for_timeout(1800)
    y1=card.evaluate('(e)=>new DOMMatrix(getComputedStyle(e).transform).m42')
    assert y1>y0, (y0,y1)
    page.screenshot(path=str(OUT/'in-motion.png'))
    # Reload for two full five-card loops in actual wall time, not an accelerated clock.
    page.reload(wait_until='networkidle')
    page.mouse.move(10,100)
    started=time.monotonic()
    for step in range(11):
        if step: page.wait_for_timeout(max(0,(started+step*8-time.monotonic())*1000))
        active=int(page.locator('.hero-collection').get_attribute('data-active'))
        assert active==step%5, (step,active)
        matrix=page.locator('.hero-projects > li').nth(active).evaluate('(e)=>{const m=new DOMMatrix(getComputedStyle(e).transform);return [m.m22,m.m42,m.m43]}')
        assert abs(matrix[0]-1)<.015 and abs(matrix[1])<5, matrix
        page.screenshot(path=str(OUT/f'loop-{step:02}.png'))
        report['loops'].append({'step':step,'active':active,'centered':True})
        print(f'Loop checkpoint {step}/10: card {active+1}',flush=True)
    page.close()
    browser.close()
(OUT/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False),flush=True)
