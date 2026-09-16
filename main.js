// Adapted from the navigation, theme and cursor interactions in
// vinodjangid07/vinodjangid07.github.io (MIT License).
const menuButton = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobiletogglemenu');
const themeButton = document.getElementById('theme-toggle');
const backToTopButton = document.getElementById('backtotopbutton');

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.classList.remove('show-toggle-menu');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开菜单');
  document.body.classList.remove('stopscrolling');
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('show-toggle-menu');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? '关闭菜单' : '打开菜单');
    document.body.classList.toggle('stopscrolling', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

try {
  if (localStorage.getItem('portfolio-theme') === 'light') document.body.classList.add('light-mode');
} catch {}
if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    try { localStorage.setItem('portfolio-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark'); } catch {}
  });
}

const sections = Array.from(document.querySelectorAll('main section[id], footer [id="contact"]'));
const navItems = Array.from(document.querySelectorAll('.navbar-tabs-ul li, .mobile-navbar-tabs-ul li'));
function updateScrollState() {
  if (!sections.length) return;
  let currentId = 'home';
  for (const section of sections) {
    if (window.scrollY + 250 >= section.getBoundingClientRect().top + window.scrollY) currentId = section.id;
  }
  navItems.forEach((item) => {
    item.classList.toggle('activeThistab', item.classList.contains(currentId));
    item.classList.toggle('activeThismobiletab', item.classList.contains(currentId));
  });
  if (backToTopButton) backToTopButton.style.display = window.scrollY > 450 ? 'block' : 'none';
}
window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();

if (backToTopButton) {
  backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.project-box-wrapper, .tech-stack-box');
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07 });
  reveals.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}

const cursorInner = document.getElementById('cursor-inner');
const cursorOuter = document.getElementById('cursor-outer');
if (cursorInner && cursorOuter && window.matchMedia('(pointer: fine)').matches && !reducedMotion) {
  cursorInner.style.opacity = '0';
  cursorOuter.style.opacity = '0';
  document.addEventListener('pointermove', (event) => {
    document.body.classList.add('has-cursor');
    cursorInner.style.opacity = '1';
    cursorOuter.style.opacity = '1';
    cursorInner.style.left = event.clientX + 'px';
    cursorInner.style.top = event.clientY + 'px';
    cursorOuter.style.left = event.clientX + 'px';
    cursorOuter.style.top = event.clientY + 'px';
  }, { passive: true });
  document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('pointerenter', () => {
      cursorInner.classList.add('hover');
      cursorOuter.classList.add('hover');
    });
    element.addEventListener('pointerleave', () => {
      cursorInner.classList.remove('hover');
      cursorOuter.classList.remove('hover');
    });
  });
}
