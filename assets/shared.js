(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const links = [
    { href: 'index.html',       label: 'Home' },
    { href: 'decisions.html',   label: 'Decisions' },
    { href: 'system.html',      label: 'System' },
    { href: 'ecosystem.html',   label: 'Ecosystem' },
    { href: 'collaborate.html', label: 'Collaborate' },
  ];

  const navLinks = links.map(l =>
    `<a href="${l.href}" class="${path === l.href ? 'active' : ''}">${l.label}</a>`
  ).join('');

  const drawerLinks = links.map(l =>
    `<a href="${l.href}" class="${path === l.href ? 'active' : ''}">${l.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav>
      <a class="nav-logo" href="index.html">NEXOVIA<span>NET</span></a>
      <div class="nav-main">
        ${navLinks}
        <a href="https://calendly.com/nexovianet/30min" class="nav-cta" target="_blank" rel="noopener">Book a Call</a>
      </div>
      <button class="nav-burger" id="nav-burger" aria-label="Open navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="nav-drawer" id="nav-drawer">
      ${drawerLinks}
      <a href="https://calendly.com/nexovianet/30min" class="drawer-cta" target="_blank" rel="noopener">Book a Call →</a>
    </div>
  `);

  // Burger toggle
  const burger = document.getElementById('nav-burger');
  const drawer = document.getElementById('nav-drawer');
  burger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  // Close on link click
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="footer-left">
        <a href="https://github.com/noturlluvia" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/company/nexovianet" target="_blank" rel="noopener">LinkedIn</a>
        <a href="mailto:hello@nexovianet.com">Contact</a>
      </div>
      <div class="footer-right">© 2026 NexoviaNet LLC. All rights reserved.</div>
    </footer>
  `);
})();
