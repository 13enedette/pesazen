// scripts.js - small nav toggle for mobile
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuBtn') || document.querySelector('.menuBtn') || document.querySelector('.menu-btn');
  const nav = document.getElementById('mainNav') || document.querySelector('header nav');
  if (!nav) return;

  function toggleMenu() {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    nav.classList.toggle("show");
  }

  if (btn) {
    btn.addEventListener('click', toggleMenu);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
    // initialise aria state
    btn.setAttribute('aria-controls', nav.id || 'main-nav');
    btn.setAttribute('aria-expanded', 'false');
  }

  // close menu when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('show')) return;
    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (nav.contains(e.target)) return;
    nav.classList.remove('show');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });
});
