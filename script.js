// Minimal accessible mobile nav toggle
(function(){
  const toggle = document.querySelector('.nav-toggle');
  if(!toggle) return;
  const root = document.documentElement;
  const navLinks = document.querySelector('.nav-links');

  function toggleNav(){
    const open = root.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', toggleNav);

  // Close menu when a nav link is clicked (mobile)
  navLinks && navLinks.addEventListener('click', (e)=>{
    if(e.target.tagName === 'A' && root.classList.contains('nav-open')){
      root.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded','false');
    }
  });
})();

// Contact form: build a mailto: link and open user's email client (static-site friendly)
(function(){
  const form = document.getElementById('contact-form');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = (form.querySelector('[name="name"]') || {}).value || '';
    const email = (form.querySelector('[name="email"]') || {}).value || '';
    const message = (form.querySelector('[name="message"]') || {}).value || '';
    const subject = `Website inquiry from ${name || email || 'Website Visitor'}`;
    let body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    const mailto = `mailto:a.elahinik@tudelft.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Open mail client
    window.location.href = mailto;
  });
})();
