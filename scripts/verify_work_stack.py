"""Selected work: real scroll overlap, filters, short-view fallback, and stable hero."""
from pathlib import Path
import os,tempfile,json,subprocess
ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/'.local/work-stack'
OUT.mkdir(parents=True,exist_ok=True)
os.environ['TEMP']=os.environ['TMP']=tempfile.tempdir=str(OUT)
from playwright.sync_api import sync_playwright,expect
BASE='http://127.0.0.1:5501/'
baseline=subprocess.check_output(['git','show','HEAD:index.html'],cwd=ROOT).decode()
current=(ROOT/'index.html').read_text(encoding='utf-8')
def hero(source): return source[source.index('<section class="hero-stage"'):source.index('<section class="work-section')]
assert hero(baseline)==hero(current),'Hero markup changed'
report=[]
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',headless=True)
    for width,height in [(1440,900),(1920,1080),(1024,768),(768,1024),(390,844),(360,740),(1440,600)]:
        page=browser.new_page(viewport={'width':width,'height':height})
        errors=[]
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(BASE,wait_until='networkidle')
        expect(page.locator('#work-title')).to_have_text('精选展示作品.')
        assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
        stack=page.locator('.work-stack')
        cards=stack.locator('.work-card')
        metrics=stack.evaluate('(el)=>({y:el.getBoundingClientRect().top+scrollY,top:parseFloat(el.style.getPropertyValue("--stack-top")),enabled:el.classList.contains("is-stacking")})')
        if metrics['enabled']:
            positions=[]
            second_y=cards.nth(1).evaluate('(el)=>el.getBoundingClientRect().top+scrollY')
            for name,target in [('first',metrics['y']-metrics['top']),('incoming',second_y-height*.52),('stacked',second_y-metrics['top']-28+10)]:
                page.evaluate('(y)=>scrollTo({top:y,behavior:"instant"})',target)
                page.wait_for_timeout(150)
                positions.append([c.bounding_box() for c in cards.all()])
                if width in (1440,1920): page.screenshot(path=str(OUT/f'{width}-{name}.png'))
            first,second=positions[-1]
            assert abs(first['y']-metrics['top'])<3,(width,first,metrics)
            assert abs(second['y']-first['y']-28)<3,(width,first,second)
            assert first['width']<second['width'],(width,first,second)
            front=page.evaluate('({x,y})=>document.elementFromPoint(x,y)?.closest(".work-card")?.className',{'x':second['x']+second['width']*.6,'y':second['y']+70})
            assert 'work-product' in front,front
            # Reversing scroll must unstack the cards.
            page.evaluate('(y)=>scrollTo({top:y,behavior:"instant"})',metrics['y']-metrics['top'])
            page.wait_for_timeout(150)
            assert cards.nth(1).bounding_box()['y']>cards.first.bounding_box()['y']+300
        else:
            assert all(c.evaluate('(el)=>getComputedStyle(el).position')!='sticky' for c in cards.all())
            cards.first.scroll_into_view_if_needed()
            page.screenshot(path=str(OUT/f'{width}-normal.png'))
        for category,count in [('ux',1),('product',2),('all',3)]:
            page.locator(f'[data-filter="{category}"]').click()
            page.wait_for_timeout(100)
            assert page.locator('[data-category]:visible').count()==count
            if category!='all': assert 'is-stacking' not in stack.get_attribute('class')
        page.locator('.work-link').last.click()
        page.wait_for_url('**/projects/pmagent.html')
        assert not errors,errors
        report.append({'width':width,'height':height,'stacking':metrics['enabled'],'errors':errors})
        page.close()
    for settings in [{'reduced_motion':'reduce'},{'java_script_enabled':False}]:
        page=browser.new_page(viewport={'width':1440,'height':900},**settings)
        page.goto(BASE,wait_until='networkidle')
        assert not page.locator('.work-stack.is-stacking').count()
        expect(page.locator('.work-card').first).to_be_visible()
        expect(page.locator('.work-card').last).to_be_visible()
        page.close()
    browser.close()
(OUT/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False))
