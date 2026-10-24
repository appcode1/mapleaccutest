/* Maple AccuTest — small vanilla JS helpers (mobile nav + FAQ accordion) */
(function () {
  'use strict';

  /* ----- mobile navigation ----- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ----- FAQ accordion ----- */
  var items = document.querySelectorAll('.faq-item');
  Array.prototype.forEach.call(items, function (item) {
    var btn = item.querySelector('.faq-item__q');
    var panel = item.querySelector('.faq-item__a');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      if (isOpen) {
        item.classList.remove('is-open');
        panel.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        panel.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
