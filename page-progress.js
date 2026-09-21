/* The links are the content source. Case links remain owned by the existing
   chapter observer in main.js; homepage markers use their actual document order. */
(() => {
  const menu = document.querySelector('.page-progress');
  if (!menu) return;
  const track = menu.querySelector('.page-progress-links');
  const entries = [...track.querySelectorAll('a')].map(link => ({ link, target: document.getElementById(link.hash.slice(1)) })).filter(item => item.target);
  const isCase = menu.classList.contains('case-toc');
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
      // Scroll only the grey track; never scroll the page to follow a tab.
      track.scrollTo({ left: active.offsetLeft - track.offsetLeft - (track.clientWidth - active.offsetWidth) / 2, behavior: 'instant' });
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
    if (!email) { status.textContent = '邮箱信息待补充'; return; }
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
