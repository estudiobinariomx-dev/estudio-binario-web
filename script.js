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

// Palabra que rota en el título del inicio
(function () {
  var el = document.getElementById('rotator');
  if (!el) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var words = ['negocio', 'restaurante', 'consultorio', 'tienda', 'taller', 'negocio'];
  var i = 0;
  setInterval(function () {
    el.classList.add('out');
    setTimeout(function () {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.classList.remove('out');
      el.classList.add('in');
      // forzar reflow para que la transición de entrada se vea
      void el.offsetWidth;
      el.classList.remove('in');
    }, 350);
  }, 2600);
})();

// Header con sombra al bajar + botón de WhatsApp flotante tras pasar el inicio
(function () {
  var header = document.querySelector('header');
  var wa = document.getElementById('waFloat');
  var hero = document.querySelector('.hero');
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 10);
    if (wa && hero) {
      var heroBottom = hero.offsetTop + hero.offsetHeight - 200;
      wa.classList.toggle('visible', y > heroBottom);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Resalta en el menú la sección que estás viendo
(function () {
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove('active'); });
      var link = map[entry.target.id];
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(map).forEach(function (id) {
    var sec = document.getElementById(id);
    if (sec) io.observe(sec);
  });
})();
