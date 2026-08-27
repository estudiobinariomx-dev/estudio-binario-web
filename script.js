// Revelado mínimo al hacer scroll (respeta prefers-reduced-motion vía CSS)
(function () {
  var targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !targets.length) {
    targets.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  targets.forEach(function (el) { io.observe(el); });
})();

// Botón "volver arriba": aparece tras bajar un poco, con scroll suave
(function () {
  var btn = document.getElementById('toTop');
  if (!btn) return;
  var showAfter = 480;
  function toggle() {
    if (window.scrollY > showAfter) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
