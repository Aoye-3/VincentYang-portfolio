"""Prism work carousel: existing filters, readable covers, native links and fallback."""
from pathlib import Path
import json
import os
import re
import tempfile

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / '.local/work-gallery'
OUT.mkdir(parents=True, exist_ok=True)
os.environ['TEMP'] = os.environ['TMP'] = tempfile.tempdir = str(OUT)
from playwright.sync_api import sync_playwright, expect

BASE = 'http://127.0.0.1:5501/'
EDGE = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
report = []

def open_work(page):
    page.goto(BASE, wait_until='networkidle')
    page.locator('#work-title').evaluate('(e)=>scrollTo({top:scrollY+e.getBoundingClientRect().top-100,behavior:"instant"})')
    expect(page.locator('#work-gallery-mount')).to_have_attribute('data-enhanced', 'true')
    expect(page.locator('.work-prism canvas')).to_have_count(1)

def select(page, category, count):
    page.locator(f'[data-filter="{category}"]').click()
    expect(page.locator(f'[data-filter="{category}"]')).to_have_attribute('aria-pressed', 'true')
    expect(page.locator('.work-carousel')).to_have_attribute('data-filtered', category)
    expect(page.locator('[data-category]:not([hidden])')).to_have_count(count)
    expect(page.locator('#work-count')).to_have_text(f'{count:02} 件作品')
    expect(page.locator('.work-carousel-counter')).to_have_text(f'01 / {count:02}')

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE, headless=True)
    for width, height in [(320,740),(390,844),(768,1024),(1024,768),(1440,900),(1920,1080),(1440,600)]:
        context = browser.new_context(viewport={'width':width,'height':height})
        page = context.new_page()
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        open_work(page)
        assert page.locator('.project-filters button').all_text_contents() == ['全部作品','UI-UX设计','AIGC媒体类']
        assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
        assert not page.locator('.case-cursor, .work-stack').count()
        for category, count in [('all',5),('ux',2),('media',3),('all',5)]:
            select(page, category, count)
            first = page.locator('.work-carousel').get_attribute('data-active-work')
            page.get_by_role('button',name='下一个作品',exact=True).click()
            expect(page.locator('.work-carousel-counter')).to_have_text(f'02 / {count:02}')
            assert page.locator('.work-carousel').get_attribute('data-active-work') != first
            page.get_by_role('button',name='上一个作品',exact=True).click()
            expect(page.locator('.work-carousel-counter')).to_have_text(f'01 / {count:02}')
        # Arrow keys select once, including when bubbling from the external controls.
        page.locator('.work-prism').focus()
        page.keyboard.press('ArrowRight')
        expect(page.locator('.work-carousel')).to_have_attribute('data-active-work','pmagent')
        page.keyboard.press('ArrowLeft')
        expect(page.locator('.work-carousel')).to_have_attribute('data-active-work','inspiration')
        page.emulate_media(reduced_motion='reduce')
        select(page,'media',3)
        page.get_by_role('button',name='下一个作品',exact=True).click()
        expect(page.locator('.work-carousel')).to_have_attribute('data-active-work','jiangtian')
        select(page,'all',5)
        page.locator('#work-title').evaluate('(e)=>scrollTo({top:scrollY+e.getBoundingClientRect().top-100,behavior:"instant"})')
        page.wait_for_timeout(800)  # let image decoding and the known cover reveal finish
        page.screenshot(path=str(OUT/f'prism-{width}-{height}.png'))
        # Page wheel remains native even when the pointer is over the carousel.
        box = page.locator('.work-prism').bounding_box()
        page.mouse.move(box['x']+box['width']/2,box['y']+box['height']/2)
        scroll = page.evaluate('scrollY')
        page.mouse.wheel(0,180)
        page.wait_for_function('(previous)=>scrollY>previous+50',arg=scroll)
        expect(page.locator('.work-carousel')).to_have_attribute('data-active-work','inspiration')
        assert not errors, errors
        report.append({'viewport':[width,height],'filters':'5/2/3','arrows':'passed','wheel':'page scroll','errors':errors})
        print(f'{width}x{height}: filters, keyboard, reduced motion and native wheel passed',flush=True)
        context.close()

    # All captions use the original descriptions and native detail URLs.
    context = browser.new_context(viewport={'width':1440,'height':1000},reduced_motion='reduce')
    page = context.new_page()
    open_work(page)
    projects = page.locator('.work-card').evaluate_all('els=>els.map(e=>({id:e.dataset.workId,title:e.querySelector("h3").textContent,description:e.querySelector(".work-description").textContent,href:e.getAttribute("href")}))')
    for project in projects:
        expect(page.locator('.work-carousel')).to_have_attribute('data-active-work',project['id'])
        page.wait_for_timeout(250)
        expect(page.locator('.work-carousel')).to_have_attribute('data-active-work',project['id'])
        expect(page.locator('.work-project-heading h3')).to_have_text(project['title'])
        expect(page.locator('.work-project-summary')).to_have_text(project['description'])
        for selector in ['.work-project-heading','.work-project-summary']:
            expect(page.locator(selector)).to_have_attribute('href',project['href'])
        page.wait_for_timeout(200)
        page.locator('.work-carousel-stage').screenshot(path=str(OUT/f'cover-{project["id"]}.png'))
        page.get_by_role('button',name='下一个作品',exact=True).click()
    expect(page.locator('.work-carousel-counter')).to_have_text('01 / 05')
    page.locator('.work-project-summary').click()
    page.wait_for_url('**/projects/inspiration.html')
    open_work(page)
    page.locator('.work-prism').focus()
    page.keyboard.press('ArrowRight')
    expect(page.locator('.work-carousel')).to_have_attribute('data-active-work','pmagent')
    page.keyboard.press('Enter')
    page.wait_for_url('**/projects/pmagent.html')
    open_work(page)
    page.locator('.work-prism canvas').click()
    page.wait_for_url('**/projects/inspiration.html')
    open_work(page)
    # A controlled drag with no release momentum moves to the adjacent cover.
    box=page.locator('.work-prism').bounding_box()
    x,y=box['x']+box['width']*.5,box['y']+box['height']*.5
    page.mouse.move(x,y)
    page.mouse.down()
    page.mouse.move(x-400,y,steps=20)
    page.wait_for_timeout(200)
    page.mouse.up()
    expect(page.locator('.work-carousel')).not_to_have_attribute('data-active-work','inspiration')
    assert '/projects/' not in page.url, 'Dragging should not open a project'
    page.locator('#theme-toggle').click()
    expect(page.locator('body')).to_have_class(re.compile('light-mode'))
    page.locator('#work-title').scroll_into_view_if_needed()
    page.screenshot(path=str(OUT/'prism-light.png'))
    report.append({'detail_links':'5 original titles, descriptions and hrefs; summary, canvas and Enter navigations passed','drag':'passed','theme':'light'})
    context.close()

    # Real touch input: horizontal gestures select, vertical gestures scroll the page.
    for width, height in [(390,844),(768,1024)]:
        context=browser.new_context(viewport={'width':width,'height':height},has_touch=True,is_mobile=True,reduced_motion='reduce')
        page=context.new_page()
        open_work(page)
        session=context.new_cdp_session(page)
        def swipe(x,y,dx,dy):
            session.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':x,'y':y}]})
            for step in range(1,9):
                session.send('Input.dispatchTouchEvent',{'type':'touchMove','touchPoints':[{'x':x+dx*step/8,'y':y+dy*step/8}]})
                page.wait_for_timeout(25)
            page.wait_for_timeout(150)
            session.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]})
        box=page.locator('.work-prism').bounding_box()
        x,y=box['x']+box['width']*.75,box['y']+box['height']*.5
        swipe(x,y,-box['width']*.55,0)
        expect(page.locator('.work-carousel')).not_to_have_attribute('data-active-work','inspiration')
        assert '/projects/' not in page.url
        before=page.evaluate('scrollY')
        swipe(width/2,y,0,-130)
        page.wait_for_function('(previous)=>scrollY>previous+40',arg=before)
        report.append({'touch_viewport':[width,height],'horizontal':'selects cover','vertical':'scrolls page'})
        context.close()

    # Category chosen before the lazy island downloads survives enhancement.
    context=browser.new_context(viewport={'width':1440,'height':900})
    page=context.new_page()
    chunk=next((ROOT/'assets/generated/interactions').glob('selected-work-*.js'))
    source=chunk.read_text(encoding='utf-8')
    page.route('**/interactions/selected-work-*.js',lambda route:route.fulfill(content_type='application/javascript',body='await new Promise(resolve=>setTimeout(resolve,1800));\n'+source))
    page.goto(BASE,wait_until='domcontentloaded')
    page.locator('[data-filter="ux"]').click()
    expect(page.locator('#work-gallery-mount')).to_have_attribute('data-enhanced','true')
    expect(page.locator('.work-carousel')).to_have_attribute('data-filtered','ux')
    expect(page.locator('.work-carousel-counter')).to_have_text('01 / 02')
    context.close()
    report.append({'slow_chunk':'preselected category retained'})

    for name,settings in [('no-js',{'java_script_enabled':False}),('blocked-chunk',{}),('no-webgl',{})]:
        context=browser.new_context(viewport={'width':390,'height':844},**settings)
        page=context.new_page()
        if name=='blocked-chunk':
            page.route('**/interactions/selected-work-*.js',lambda route:route.abort())
        if name=='no-webgl':
            page.add_init_script('''const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return type.startsWith('webgl')?null:original.call(this,type,...args)};''')
        page.goto(BASE,wait_until='networkidle')
        page.locator('#work-title').scroll_into_view_if_needed()
        expect(page.locator('.work-card').first).to_be_visible()
        if name=='no-webgl':
            expect(page.locator('#work-gallery-mount')).to_have_attribute('data-enhanced','false')
        page.locator('.work-card[href="projects/other.html#vivo"]').click()
        page.wait_for_url('**/projects/other.html#vivo')
        context.close()
        report.append({'fallback':name,'native_entry':'passed'})
    browser.close()
(OUT/'prism-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print('Prism work acceptance passed.',flush=True)
