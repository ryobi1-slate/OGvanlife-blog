/**
 * OG Van Life — filter-tabs.js
 * Client-side article grid category filtering.
 * Reads [data-filter] on pill buttons and [data-tag] on .article-card elements.
 * No page reload — purely DOM show/hide.
 */
(function () {
  'use strict';

  function initFilterTabs() {
    var pillContainers = document.querySelectorAll('.ogvl-filter-pills');

    pillContainers.forEach(function (container) {
      // Find the nearest sibling or parent's descendant article grid
      var section = container.closest('.ogvl-article-grid-section__inner') ||
                    container.closest('.ogvl-archive__inner') ||
                    container.parentElement;
      var grid    = section ? section.querySelector('.ogvl-article-grid') : null;

      if (!grid) return;

      var pills = container.querySelectorAll('[data-filter]');
      var cards = grid.querySelectorAll('.article-card');

      pills.forEach(function (pill) {
        pill.addEventListener('click', function () {
          var filter = pill.dataset.filter;

          // Update pill active state + aria
          pills.forEach(function (p) {
            p.classList.toggle('ogvl-filter-pill--active', p === pill);
            p.setAttribute('aria-pressed', String(p === pill));
          });

          // Show / hide cards
          cards.forEach(function (card) {
            if (filter === 'ALL' || card.dataset.tag === filter) {
              card.hidden = false;
            } else {
              card.hidden = true;
            }
          });
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilterTabs);
  } else {
    initFilterTabs();
  }
})();
