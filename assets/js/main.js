/* EcoReach Youth Foundation - Part 2 JavaScript */
(function () {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? 'Close menu' : 'Menu';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
  }
})();
