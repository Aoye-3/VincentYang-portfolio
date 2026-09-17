// Navigation and theme evolved from Vinod Jangid's MIT portfolio template.
// All effects are progressive enhancements; the original links and boards stay usable.
document.documentElement.classList.add('js');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const menuButton = document.getElementById('menu-toggle');
const siteMenu = document.getElementById('site-menu');
const themeButton = document.getElementById('theme-toggle');
const hero = document.querySelector('.hero-stage');
const interests = document.getElementById('interest-disclosure');

function closeMenu(returnFocus = false) {
  if (!menuButton || !siteMenu) return;
  siteMenu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开菜单');
  if (returnFocus) menuButton.focus();
}
if (menuButton && siteMenu) {
  menuButton.addEventListener('click', () => {
    const open = siteMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    if (open) siteMenu.querySelector('a').focus({ preventScroll: true });
  });
  siteMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && siteMenu.classList.contains('is-open')) closeMenu(true);
  });
  document.addEventListener('pointerdown', event => {
    if (!event.target.closest('.site-nav')) closeMenu();
  });
  document.querySelector('.site-nav').addEventListener('focusout', event => {
    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) closeMenu();
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', () => closeMenu());
}

function syncThemeButton() {
  const light = document.body.classList.contains('light-mode');
  if (themeButton) {
    themeButton.setAttribute('aria-pressed', String(light));
    themeButton.setAttribute('aria-label', light ? '切换到深色模式' : '切换到浅色模式');
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f3f3f6' : '#000000');
}
try {
  if (localStorage.getItem('portfolio-theme') === 'light') document.body.classList.add('light-mode');
} catch {}
syncThemeButton();
themeButton?.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  syncThemeButton();
  try { localStorage.setItem('portfolio-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark'); } catch {}
});

const revealElements = Array.from(document.querySelectorAll('[data-scroll-reveal]'));
const revealed = new WeakSet();
const homeSections = Array.from(document.querySelectorAll('.portfolio-page main > section[id], .portfolio-page footer#contact'));
const homeLinks = Array.from(document.querySelectorAll('.portfolio-page .nav-links a'));
const chapters = Array.from(document.querySelectorAll('.case-section[id]'));
const chapterLinks = Array.from(document.querySelectorAll('.case-toc a'));
const progressBar = document.querySelector('.reading-progress');
let scrollFrame = 0;

function updateScrollState() {
  scrollFrame = 0;
  const height = window.innerHeight;
  if (!motionPreference.matches) {
    revealElements.forEach(element => {
      if (element.hidden || revealed.has(element)) return;
      const previous = Number(element.style.getPropertyValue('--reveal') || 1);
      const naturalTop = element.getBoundingClientRect().top - (1 - previous) * 65;
      const progress = Math.min(1, Math.max(0, (height - naturalTop) / (height * .33)));
      element.style.setProperty('--reveal', progress.toFixed(3));
      if (progress === 1) revealed.add(element);
    });
  }
  let current = '';
  homeSections.forEach(section => { if (section.getBoundingClientRect().top <= 220) current = section.id; });
  homeLinks.forEach(link => {
    if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  let chapter = chapters[0]?.id;
  chapters.forEach(section => { if (section.getBoundingClientRect().top <= 210) chapter = section.id; });
  chapterLinks.forEach(link => {
    if (link.hash === '#' + chapter) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  if (progressBar) {
    const total = document.documentElement.scrollHeight - height;
    progressBar.style.setProperty('--reading-progress', total > 0 ? Math.min(1, window.scrollY / total) : 1);
  }
}
function scheduleScroll() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollState);
}
document.documentElement.classList.toggle('motion-ready', !motionPreference.matches);
window.addEventListener('scroll', scheduleScroll, { passive: true });
window.addEventListener('resize', scheduleScroll);
window.addEventListener('load', scheduleScroll);
document.addEventListener('focusin', event => {
  const element = event.target.closest('[data-scroll-reveal]');
  if (element) { revealed.add(element); element.style.setProperty('--reveal', 1); }
});
updateScrollState();

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
    const descriptions = { all: '02 个精选案例 / 01 个延伸项目', ux: '01 个 UX 设计案例', product: '01 个产品案例 / 01 个延伸项目' };
    document.getElementById('work-count').textContent = descriptions[filter];
    scheduleScroll();
  });
});

function openInterestFromHash() {
  if (interests && window.location.hash === '#interests') {
    interests.open = true;
    scheduleScroll();
  }
}
document.querySelectorAll('a[href="#interests"]').forEach(link => link.addEventListener('click', () => {
  if (interests) interests.open = true;
}));
window.addEventListener('hashchange', openInterestFromHash);
interests?.addEventListener('toggle', scheduleScroll);
openInterestFromHash();

if (hero) {
  const litGallery = hero.querySelector('.hero-gallery').cloneNode(true);
  litGallery.className = 'hero-lit';
  hero.prepend(litGallery);
  const pauseButton = document.getElementById('motion-toggle');
  pauseButton?.addEventListener('click', () => {
    const paused = document.body.classList.toggle('motion-paused');
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.setAttribute('aria-label', paused ? '继续背景动效' : '暂停背景动效');
    pauseButton.innerHTML = paused ? '继续动效 <span aria-hidden="true">▷</span>' : '暂停动效 <span aria-hidden="true">Ⅱ</span>';
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      hero.classList.toggle('ambient-paused', !entries[0].isIntersecting);
    }).observe(hero);
  }
  document.addEventListener('visibilitychange', () => hero.classList.toggle('page-idle', document.hidden));
}

// 排布规则：每排只放一种类别，按 UX → UX → 获奖证书循环，UX 占三分之二。
// 背景图片墙不使用插画 / AIGC 素材。
// 同类图片按 template 中的固定顺序展示；禁止随机混排或跨类别取图。
const discovery = document.querySelector('.work-discovery');
if (discovery) {
  const wall = discovery.querySelector('.discovery-wall');
  const tileSource = document.getElementById('discovery-tiles').content;
  const categories = ['ux', 'ux', 'awards'];
  const pauseButton = document.getElementById('gallery-motion-toggle');
  let visible = false;
  function updateGalleryPlayback() {
    discovery.classList.toggle('gallery-idle', !visible || document.hidden);
  }
  function buildGallery() {
    if (wall.childElementCount) return;
    for (let row = 0; row < 9; row++) {
      const category = categories[row % categories.length];
      const tiles = Array.from(tileSource.querySelectorAll(`[data-gallery-category="${category}"]`));
      const strip = document.createElement('div');
      strip.className = 'discovery-strip';
      strip.dataset.galleryCategory = category;
      const group = document.createElement('div');
      group.className = 'discovery-group';
      // 第二排 UX 固定错开半组起点，让相邻两排展示不同界面，仍保留原有顺序。
      const offset = row % 3 === 1 ? Math.floor(tiles.length / 2) : 0;
      // Two complete ordered cycles provide overscan even for narrow portrait certificates.
      for (let column = 0; column < tiles.length * 2; column++) {
        const tile = tiles[(column + offset) % tiles.length].cloneNode(true);
        tile.decoding = 'async';
        tile.fetchPriority = 'low';
        group.append(tile);
      }
      strip.append(group, group.cloneNode(true));
      wall.append(strip);
    }
  }
  if ('IntersectionObserver' in window) {
    const preload = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { buildGallery(); preload.disconnect(); }
    }, { rootMargin: '300px' });
    preload.observe(discovery);
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      updateGalleryPlayback();
    }).observe(discovery);
  } else {
    buildGallery();
    visible = true;
  }
  updateGalleryPlayback();
  document.addEventListener('visibilitychange', updateGalleryPlayback);
  pauseButton.addEventListener('click', () => {
    const paused = discovery.classList.toggle('gallery-paused');
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.setAttribute('aria-label', paused ? '继续图片墙滚动' : '暂停图片墙滚动');
    pauseButton.innerHTML = paused ? '继续流动 <span aria-hidden="true">▷</span>' : '暂停流动 <span aria-hidden="true">Ⅱ</span>';
  });
}

// Pointer coordinates affect only the hovered region; no permanent animation loop.
document.querySelectorAll('.hero-stage, [data-spotlight]').forEach(element => {
  let frame = 0;
  let latestPoint = null;
  function track(event) {
    if (motionPreference.matches) return;
    latestPoint = { x: event.clientX, y: event.clientY };
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      element.style.setProperty('--spot-x', latestPoint.x - bounds.left + 'px');
      element.style.setProperty('--spot-y', latestPoint.y - bounds.top + 'px');
      element.classList.add('is-exploring');
    });
  }
  element.addEventListener('pointermove', track, { passive: true });
  element.addEventListener('pointerdown', track, { passive: true });
  element.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'touch') {
      cancelAnimationFrame(frame);
      frame = 0;
      element.classList.remove('is-exploring');
    }
  });
});
document.querySelectorAll('[data-magnetic]').forEach(button => {
  button.addEventListener('pointermove', event => {
    if (motionPreference.matches || !finePointer.matches) return;
    const rect = button.getBoundingClientRect();
    const x = Math.max(-5, Math.min(5, (event.clientX - rect.left - rect.width / 2) * .06));
    const y = Math.max(-4, Math.min(4, (event.clientY - rect.top - rect.height / 2) * .12));
    button.style.transform = 'translate(' + x + 'px,' + y + 'px)';
  }, { passive: true });
  button.addEventListener('pointerleave', () => { button.style.transform = ''; });
});
motionPreference.addEventListener('change', () => {
  document.documentElement.classList.toggle('motion-ready', !motionPreference.matches);
  document.querySelectorAll('[data-magnetic]').forEach(button => { button.style.transform = ''; });
  hero?.classList.remove('is-exploring');
  discovery?.classList.remove('is-exploring');
  scheduleScroll();
});

// Native dialog enhances the original image links, including keyboard and touch controls.
const boardLinks = Array.from(document.querySelectorAll('.case-cover a, .case-figure a'));
if (boardLinks.length && typeof HTMLDialogElement !== 'undefined') {
  const dialog = document.createElement('dialog');
  dialog.className = 'board-dialog';
  dialog.setAttribute('aria-label', '作品集板面阅读器');
  dialog.innerHTML = '<div class="reader-toolbar"><p class="reader-title" id="reader-title"></p><button type="button" data-reader="zoom" aria-pressed="false">放大阅读</button><a data-reader="original" target="_blank" rel="noopener noreferrer">原图 ↗</a><button type="button" data-reader="close" aria-label="关闭板面阅读器">关闭 ×</button></div><div class="reader-canvas"><img alt=""></div><div class="reader-controls"><button type="button" data-reader="prev" aria-label="上一张板面">←</button><span class="reader-counter" aria-live="polite"></span><button type="button" data-reader="next" aria-label="下一张板面">→</button></div>';
  document.body.append(dialog);
  const canvas = dialog.querySelector('.reader-canvas');
  const image = canvas.querySelector('img');
  const zoom = dialog.querySelector('[data-reader="zoom"]');
  const previous = dialog.querySelector('[data-reader="prev"]');
  const next = dialog.querySelector('[data-reader="next"]');
  let active = 0;
  let opener = null;
  function showBoard(index) {
    active = index;
    const originalImage = boardLinks[index].querySelector('img');
    image.src = boardLinks[index].href;
    image.alt = originalImage.alt;
    dialog.querySelector('.reader-title').textContent = originalImage.alt;
    dialog.querySelector('[data-reader="original"]').href = image.src;
    dialog.querySelector('.reader-counter').textContent = (index + 1) + ' / ' + boardLinks.length;
    previous.disabled = index === 0;
    next.disabled = index === boardLinks.length - 1;
    canvas.classList.remove('is-zoomed');
    canvas.scrollTop = 0;
    canvas.scrollLeft = 0;
    zoom.setAttribute('aria-pressed', 'false');
    zoom.textContent = '放大阅读';
  }
  boardLinks.forEach((link, index) => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    opener = link;
    showBoard(index);
    dialog.showModal();
    document.body.classList.add('reader-open');
    dialog.querySelector('[data-reader="close"]').focus();
  }));
  dialog.querySelector('[data-reader="close"]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('reader-open');
    opener?.focus({ preventScroll: true });
  });
  zoom.addEventListener('click', () => {
    const enlarged = canvas.classList.toggle('is-zoomed');
    zoom.setAttribute('aria-pressed', String(enlarged));
    zoom.textContent = enlarged ? '适应屏幕' : '放大阅读';
  });
  previous.addEventListener('click', () => { if (active > 0) showBoard(active - 1); });
  next.addEventListener('click', () => { if (active < boardLinks.length - 1) showBoard(active + 1); });
  dialog.addEventListener('keydown', event => {
    if (canvas.classList.contains('is-zoomed')) return;
    if (event.key === 'ArrowLeft' && active > 0) { event.preventDefault(); showBoard(active - 1); }
    if (event.key === 'ArrowRight' && active < boardLinks.length - 1) { event.preventDefault(); showBoard(active + 1); }
  });
}
