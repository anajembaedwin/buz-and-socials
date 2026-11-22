(function () {
  var b = document.querySelector('.burger'), m = document.getElementById('mnav');
  if (b && m) {
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!open));
      m.hidden = open;
    });
    m.addEventListener('click', function (e) { if (e.target.closest('a')) { b.setAttribute('aria-expanded', 'false'); m.hidden = true; } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { b.setAttribute('aria-expanded', 'false'); m.hidden = true; } });
  }
  // sliding partner strip: duplicate logos so the loop is seamless
  var s = document.querySelector('.slide');
  if (s && s.children.length && window.matchMedia('(min-width:861px)').matches) { var base = s.innerHTML, n = 0; while (s.scrollWidth < window.innerWidth * 1.1 && n++ < 8) { s.innerHTML += base; } s.innerHTML += s.innerHTML; }
  // forms: open WhatsApp with the message ready (no server needed)
  document.querySelectorAll('form.form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(f), name = (d.get('name') || '').trim(), contact = (d.get('contact') || '').trim(), msg = (d.get('msg') || '').trim(), biz = d.get('biz') || '';
      var err = f.querySelector('.err');
      if (!name || !contact || !msg) { err.hidden = false; return; }
      err.hidden = true;
      var text = 'Hello, my name is ' + name + '. I would like to ask about ' + biz + '.\n\n' + msg + '\n\nYou can reach me on: ' + contact;
      window.open('https://wa.me/' + f.getAttribute('data-wa') + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  });
})();
