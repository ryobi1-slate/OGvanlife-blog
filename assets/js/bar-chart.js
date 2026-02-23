/**
 * OG Van Life — bar-chart.js
 * Animates cost breakdown bars on scroll using IntersectionObserver.
 * Bars use [data-bar] + [data-target="N%"] attributes.
 */
(function () {
  'use strict';

  function initBarCharts() {
    var charts = document.querySelectorAll('.ogvl-bar-chart');
    if (!charts.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: set all bars immediately
      charts.forEach(function (chart) {
        chart.querySelectorAll('[data-bar]').forEach(function (bar) {
          bar.style.width = bar.dataset.target || '0%';
        });
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var bars = entry.target.querySelectorAll('[data-bar]');
          bars.forEach(function (bar, i) {
            setTimeout(function () {
              bar.style.width = bar.dataset.target || '0%';
            }, i * 120);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    charts.forEach(function (chart) {
      observer.observe(chart);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBarCharts);
  } else {
    initBarCharts();
  }
})();
