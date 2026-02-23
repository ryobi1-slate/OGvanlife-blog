/**
 * OG Van Life — mobile-menu.js
 * Toggles the mobile navigation drawer.
 * Uses aria-expanded on #ogvl-hamburger and aria-hidden on #ogvl-mobile-menu.
 */
(function () {
  'use strict';

  function initMobileMenu() {
    var btn  = document.getElementById('ogvl-hamburger');
    var menu = document.getElementById('ogvl-mobile-menu');

    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', String(!isOpen));
      menu.setAttribute('aria-hidden', String(isOpen));
      menu.classList.toggle('is-open', !isOpen);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        menu.classList.remove('is-open');
        btn.focus();
      }
    });

    // Close when a nav link inside the menu is clicked
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        menu.classList.remove('is-open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
