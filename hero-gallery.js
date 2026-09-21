/* Progressive enhancement: the semantic HTML list is the only project source.
   No global motion state is shared with the discovery wall. See docs/06-hero-gallery.md. */
(() => {
  const gallery = document.querySelector('.hero-collection');
  if (!gallery) return;
  const list = gallery.querySelector('.hero-projects');
  const cards = [...list.children];
  const count = cards.length;
  if (!count) { gallery.hidden = true; return; }
  const template = document.getElementById('hero-card-shell');
  const viewport = gallery.querySelector('.hero-collection-viewport');
  const status = gallery.querySelector('.hero-collection-status');
  const desktop = matchMedia('(min-width: 1024px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let desktopMode = desktop.matches;
  let reduceMotion = reduced.matches;
  const PERIOD = 8000;
  const number = index => String(index + 1).padStart(2, '0');
  const wrap = value => ((value % count) + count) % count;
  const links = cards.map((card, index) => {
    const link = card.querySelector('.hero-project-link');
    link.dataset.number = number(index);
    const shell = template.content.cloneNode(true);
    shell.querySelector('.hero-card-back-title').textContent = link.querySelector('h2').textContent;
    shell.querySelector('.hero-card-back-number').textContent = number(index) + ' / ' + number(count - 1);
    card.prepend(shell);
    return link;
  });
  gallery.classList.add('is-ready');
  let phase = 0;
  let elapsed = 0;
  let active = 0;
  let hovered = false;
  let focused = false;
  let visible = false;
  let frame = 0;
  let lastTime = 0;
  let tiltFrame = 0;
  let tiltTime = 0;
  const tilt = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let cardHeight = list.getBoundingClientRect().height;
  const isStatic = () => !desktopMode || reduceMotion || count === 1;
  const canRun = () => !isStatic() && !hovered && !focused && visible && !document.hidden;

  function render() {
    active = wrap(Math.round(phase));
    cards.forEach((card, index) => {
      // Positive phase moves the outgoing card DOWN; the following project enters from above.
      let offset = wrap(phase - index + count / 2) - count / 2;
      const distance = Math.abs(offset);
      const selected = index === active;
      const staticMode = isStatic();
      const limit = Math.min(2.45, count / 2);
      // Fade before modular wrapping, so a recycled card never jumps in the visible area.
      const opacity = staticMode ? 1 : Math.min(1, Math.max(0, (limit - distance) / .4));
      card.style.visibility = opacity > .001 ? 'visible' : 'hidden';
      const rotation = Math.sign(offset) * Math.min(distance * 112, 175);
      const y = offset * cardHeight * .82;
      const z = -Math.min(distance, 2.5) * 150;
      // A restrained stagger follows the trajectory, never randomizes project order.
      // At center the face is front-facing with a slight -3deg in-plane rotation.
      const x = Math.sin(offset * 1.5) * 22;
      const roll = -3 + Math.sin(offset * 1.4) * 3;
      const weight = Math.max(0, 1 - distance);
      card.style.transform = staticMode ? 'none' : `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateX(${rotation + tilt.y * weight}deg) rotateY(${tilt.x * weight}deg) rotateZ(${roll}deg)`;
      card.style.zIndex = String(Math.round(100 - distance * 30));
      // Opacity on faces only: opacity on the 3D parent would flatten front/back geometry.
      [...card.children].forEach(face => { face.style.opacity = String(opacity); });
      links[index].style.pointerEvents = opacity > .25 && (staticMode || Math.abs(rotation) < 85) ? 'auto' : 'none';
      links[index].tabIndex = staticMode || selected ? 0 : -1;
      links[index].setAttribute('aria-hidden', String(!staticMode && !selected));
      card.dataset.active = String(selected);
    });
    gallery.dataset.active = String(active);
  }

  function tick(now) {
    if (!canRun()) { frame = 0; return; }
    if (lastTime) elapsed += now - lastTime;
    lastTime = now;
    const cycles = elapsed / PERIOD;
    const fraction = cycles % 1;
    // 1 second at each side of the boundary = 2 seconds centered; remaining 6 seconds flow.
    const t = Math.max(0, Math.min(1, (fraction - .125) / .75));
    phase = Math.floor(cycles) + t * t * (3 - 2 * t);
    render();
    frame = requestAnimationFrame(tick);
  }

  function syncPlayback() {
    const running = canRun();
    gallery.dataset.playing = String(running);
    if (running && !frame) { lastTime = 0; frame = requestAnimationFrame(tick); }
    if (!running) { cancelAnimationFrame(frame); frame = 0; lastTime = 0; }
  }

  function select(index, announce = true) {
    phase = wrap(index);
    elapsed = phase * PERIOD;
    if (isStatic()) list.scrollTo({ left: cards[wrap(index)].offsetLeft, behavior: 'instant' });
    render();
    syncPlayback();
    if (announce) status.textContent = `${number(active)} / ${number(count - 1)}，${links[active].querySelector('h2').textContent}`;
  }
  // Touch uses the browser's horizontal scroll + snap, preserving vertical page scroll.
  // All static cards remain focusable; there is no hidden button-only navigation path.
  list.addEventListener('scroll', () => {
    if (!isStatic()) return;
    const index = cards.reduce((nearest, card, i) =>
      Math.abs(card.offsetLeft - list.scrollLeft) < Math.abs(cards[nearest].offsetLeft - list.scrollLeft) ? i : nearest, 0);
    phase = index;
    elapsed = phase * PERIOD;
    render();
  }, { passive: true });
  viewport.addEventListener('pointerenter', () => { hovered = fine.matches; syncPlayback(); });
  // Hover has its own bounded RAF: autoplay can pause while the card still follows
  // the pointer. Exponential time-based damping gives the same feel at 60/120Hz.
  function easeTilt(now) {
    const factor = 1 - Math.exp(-Math.min(64, tiltTime ? now - tiltTime : 16) / 110);
    tiltTime = now;
    tilt.x += (tilt.targetX - tilt.x) * factor;
    tilt.y += (tilt.targetY - tilt.y) * factor;
    render();
    if (Math.abs(tilt.x - tilt.targetX) + Math.abs(tilt.y - tilt.targetY) > .01) {
      tiltFrame = requestAnimationFrame(easeTilt);
    } else { tiltFrame = 0; tiltTime = 0; }
  }
  function setTilt(x, y) {
    tilt.targetX = x;
    tilt.targetY = y;
    if (!tiltFrame) tiltFrame = requestAnimationFrame(easeTilt);
  }
  viewport.addEventListener('pointermove', event => {
    if (isStatic() || !fine.matches || focused) return;
    // Use the untransformed list bounds, so tilting never feeds back into coordinates.
    const bounds = list.getBoundingClientRect();
    const clamp = value => Math.max(-1, Math.min(1, value));
    setTilt(clamp((event.clientX - bounds.left) / bounds.width * 2 - 1) * 6,
      -clamp((event.clientY - bounds.top) / bounds.height * 2 - 1) * 4);
  }, { passive: true });
  viewport.addEventListener('pointerleave', () => { hovered = false; setTilt(0, 0); syncPlayback(); });
  gallery.addEventListener('focusin', event => {
    const link = event.target.closest('.hero-project-link');
    focused = Boolean(link);
    if (focused) { phase = links.indexOf(link); elapsed = phase * PERIOD; render(); }
    syncPlayback();
  });
  gallery.addEventListener('focusout', () => queueMicrotask(() => {
    focused = Boolean(gallery.querySelector('.hero-project-link:focus'));
    syncPlayback();
  }));
  gallery.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const onCard = event.target.closest('.hero-project-link');
    select(active + (event.key === 'ArrowRight' ? 1 : -1));
    if (onCard) links[active].focus({ preventScroll: true });
  });
  function updateMode() {
    cancelAnimationFrame(tiltFrame);
    tiltFrame = 0;
    tilt.x = tilt.y = tilt.targetX = tilt.targetY = 0;
    gallery.classList.toggle('is-static', isStatic());
    list.scrollTo({ left: isStatic() ? cards[active].offsetLeft : 0, behavior: 'instant' });
    phase = active;
    elapsed = phase * PERIOD;
    cardHeight = list.getBoundingClientRect().height;
    render();
    syncPlayback();
  }
  // Cache media state on change rather than reading MediaQueryList in every animation frame.
  desktop.addEventListener('change', event => { desktopMode = event.matches; updateMode(); });
  reduced.addEventListener('change', event => { reduceMotion = event.matches; updateMode(); });
  new ResizeObserver(() => { cardHeight = list.getBoundingClientRect().height; render(); }).observe(list);
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    syncPlayback();
  }, { threshold: .05 }).observe(viewport);
  document.addEventListener('visibilitychange', syncPlayback);
  updateMode();
})();
