(function(){
  const path = window.location.pathname.split('/').pop()||'index.html';
  const links = [
    {href:'index.html',label:'Home'},
    {href:'decisions.html',label:'Decisions'},
    {href:'system.html',label:'System'},
    {href:'ecosystem.html',label:'Ecosystem'},
    {href:'collaborate.html',label:'Collaborate'},
  ];
  document.body.insertAdjacentHTML('afterbegin',`<nav>
    <a class="nav-logo" href="index.html">NEXOVIA<span>NET</span></a>
    <div class="nav-links">
      ${links.map(l=>`<a href="${l.href}" class="${path===l.href?'active':''}">${l.label}</a>`).join('')}
      <a href="https://calendly.com/nexovianet/30min" class="nav-cta" target="_blank" rel="noopener">Bring a Live Decision</a>
    </div>
  </nav>`);
  document.body.insertAdjacentHTML('beforeend',`<footer>
    <div class="footer-left">
      <a href="https://www.linkedin.com/in/noturlluvia/" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://github.com/noturlluvia" target="_blank" rel="noopener">GitHub</a>
      <a href="mailto:hello@nexovianet.com">Email</a>
      <a href="decisions.html">Decisions</a>
      <a href="system.html">System</a>
      <a href="ecosystem.html">Ecosystem</a>
    </div>
    <div class="footer-right">© 2026 NexoviaNet LLC · Oakland · Boston</div>
  </footer>`);
})();
