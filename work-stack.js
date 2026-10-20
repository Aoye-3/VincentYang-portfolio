/* Native scroll stacking; no scroll hijacking, timer, or animation dependency.
   Project text/images/links and filtering remain owned by index.html + main.js. */
(() => {
  const stack = document.querySelector('.work-stack');
  if (!stack) return;
  const cards = [...stack.querySelectorAll('.work-card')];
  const toolbar = document.querySelector('.work-toolbar');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = preference.matches;
  let visibleCards = [];
  let top = 0;
  let enabled = false;
  let frame = 0;
  const clamp = value => Math.max(0, Math.min(1, value));

  function paint() {
    frame = 0;
    if (!enabled) return;
    visibleCards.forEach((card, index) => {
      const next = visibleCards[index + 1];
      const nextTop = next?.getBoundingClientRect().top ?? innerHeight;
      const progress = next ? clamp((innerHeight - nextTop) / Math.max(1, innerHeight - top - (index + 1) * 28)) : 0;
      const shrink = Math.min(.09, (visibleCards.length - index - 1) * .03);
      card.style.setProperty('--stack-scale', String(1 - progress * shrink));
    });
  }
  function schedule() {
    if (enabled && !frame) frame = requestAnimationFrame(paint);
  }
  function measure() {
    visibleCards = cards.filter(card => !card.hidden);
    top = parseFloat(getComputedStyle(toolbar).top) + toolbar.offsetHeight + 16;
    // A card taller than the available viewport must scroll normally. Never
    // trap its lower content behind a sticky header on phones or short windows.
    enabled = !reduced && visibleCards.length > 1 && visibleCards.every((card, index) =>
      card.offsetHeight + top + index * 28 + 24 <= innerHeight);
    stack.classList.toggle('is-stacking', enabled);
    stack.style.setProperty('--stack-top', `${top}px`);
    cards.forEach(card => {
      const index = visibleCards.indexOf(card);
      card.style.setProperty('--stack-index', String(Math.max(0, index)));
      card.style.setProperty('--stack-order', String(index + 1));
      if (!enabled) card.style.removeProperty('--stack-scale');
    });
    schedule();
  }
  // Existing filters toggle hidden. Reindex the remaining cases and remove all
  // stack spacing when only one result remains; do not leave empty sticky tracks.
  const observer = new MutationObserver(measure);
  cards.forEach(card => observer.observe(card, { attributes: true, attributeFilter: ['hidden'] }));
  const sizes = new ResizeObserver(measure);
  sizes.observe(toolbar);
  cards.forEach(card => sizes.observe(card));
  preference.addEventListener('change', event => { reduced = event.matches; measure(); });
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', measure);
  window.addEventListener('load', measure);
  measure();
})();
