const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
if (menuButton && menu) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menu.classList.remove('open');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    menu.classList.toggle('open', !isOpen);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
}
const siteHeader = document.querySelector('.site-header');
const onScroll = () => siteHeader?.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
