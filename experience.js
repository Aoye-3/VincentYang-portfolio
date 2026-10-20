/* Career-only, one-time entrances. Native details and scrolling own reading. */
(() => {
  const categories = [...document.querySelectorAll('[data-career-reveal]')];
  if (!categories.length) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;

  function reveal(category) {
    category.classList.remove('is-waiting');
    observer.unobserve(category);
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: .08 });

  categories.forEach(category => {
    category.classList.add('is-waiting');
    observer.observe(category);
  });
  document.addEventListener('focusin', event => {
    const category = event.target.closest('[data-career-reveal]');
    if (category) reveal(category);
  });
  preference.addEventListener('change', event => {
    if (event.matches) categories.forEach(reveal);
  });
})();
