/* The links are the content source. Case links remain owned by the existing
   chapter observer in main.js; homepage markers use their actual document order. */
(() => {
  const menu = document.querySelector('.page-progress');
  if (!menu) return;
  const track = menu.querySelector('.page-progress-links');
  const entries = [...track.querySelectorAll('a')].map(link => ({ link, target: document.getElementById(link.hash.slice(1)) })).filter(item => item.target);
  const isCase = menu.classList.contains('case-toc');
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'page-progress-toggle';
  track.id = 'page-progress-chapters';
  toggle.setAttribute('aria-controls', track.id);
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span class="page-progress-caption">页面目录 <span class="page-progress-number"></span></span><strong class="page-progress-current"></strong><span class="page-progress-chevron" aria-hidden="true">⌃</span>';
  menu.insertBefore(toggle, track);
  const compact = matchMedia('(max-width: 760px)');
  function closeChapters(returnFocus = false) {
    menu.classList.remove('is-expanded');
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => {
    const expanded = menu.classList.toggle('is-expanded');
    toggle.setAttribute('aria-expanded', String(expanded));
    if (expanded) (active || entries[0]?.link)?.focus({ preventScroll: true });
  });
  track.addEventListener('click', event => {
    if (event.target.closest('a')) closeChapters(compact.matches);
  });
  document.addEventListener('pointerdown', event => {
    if (!menu.contains(event.target)) closeChapters();
  });
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeChapters(true);
  });
  menu.addEventListener('focusout', event => {
    if (event.relatedTarget && !menu.contains(event.relatedTarget)) closeChapters();
  });
  compact.addEventListener('change', () => closeChapters());
  let frame = 0;
  let active;
  function update() {
    frame = 0;
    // Reading position stays near the top even though the menu sits at the bottom.
    const threshold = 220;
    const ordered = entries.map(item => ({ ...item, top: item.target.getBoundingClientRect().top })).sort((a, b) => a.top - b.top);
    let current = ordered[0];
    ordered.forEach(item => { if (item.top <= threshold) current = item; });
    if (!current) return;
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 3) current = ordered.at(-1);
    if (!isCase) entries.forEach(({ link }) => {
      if (link === current.link) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const next = ordered[ordered.findIndex(item => item.link === current.link) + 1];
    const end = next?.top ?? document.documentElement.scrollHeight - scrollY;
    const fraction = Math.min(1, Math.max(0, (threshold - current.top) / Math.max(1, end - current.top)));
    current.link.style.setProperty('--section-progress', String(fraction));
    if (active !== current.link) {
      active = current.link;
      toggle.querySelector('.page-progress-current').textContent = active.textContent.trim();
      toggle.querySelector('.page-progress-number').textContent = `${String(entries.findIndex(item => item.link === active) + 1).padStart(2, '0')} / ${String(entries.length).padStart(2, '0')}`;
      toggle.setAttribute('aria-label', `页面目录，当前：${active.textContent.trim()}`);
      // Scroll only the grey track; never scroll the page to follow a tab.
      if (!compact.matches) track.scrollTo({ left: active.offsetLeft - track.offsetLeft - (track.clientWidth - active.offsetWidth) / 2, behavior: 'instant' });
    }
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(update); }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  window.addEventListener('hashchange', schedule);
  document.querySelector('#interest-disclosure')?.addEventListener('toggle', schedule);
  new ResizeObserver(schedule).observe(document.body);
  update();

  const back = menu.querySelector('[data-context-back]');
  // Capture the previous document on arrival. In-page hash navigation creates
  // history entries; history.back() would incorrectly return to a chapter.
  if (back && document.referrer) {
    const previous = new URL(document.referrer);
    if (previous.origin === location.origin && previous.pathname !== location.pathname) back.href = previous.href;
  }
  const copy = menu.querySelector('[data-copy-email]');
  const status = menu.querySelector('[role="status"]');
  let feedbackTimer;
  copy?.addEventListener('click', async () => {
    const email = copy.dataset.copyEmail;
    clearTimeout(feedbackTimer);
    if (!email) { location.hash = 'contact'; return; }
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = '邮箱已复制：' + email;
    } catch {
      // Permission denial must leave a selectable address, never report success.
      status.textContent = '请手动复制邮箱：' + email;
      return;
    }
    feedbackTimer = setTimeout(() => { status.textContent = ''; }, 5000);
  });
})();
