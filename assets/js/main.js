/* ============================================================
   MEKONG TRAILS — main.js
   ============================================================ */

/* === Mobile Navigation Toggle === */
const navToggle = document.querySelector('.nav__toggle');
const navLinks  = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* === Active nav link highlight === */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();

/* === Range input live output === */
document.querySelectorAll('input[type="range"]').forEach(range => {
  const output = document.querySelector(`output[for="${range.id}"]`);
  if (output) {
    output.textContent = range.value;
    range.addEventListener('input', () => { output.textContent = range.value; });
  }
});

/* === Form progress bar === */
(function () {
  const form     = document.querySelector('.contact-form');
  const progress = document.getElementById('form-progress');
  const pct      = document.getElementById('progress-pct');
  if (!form || !progress) return;

  const requiredFields = Array.from(
    form.querySelectorAll('input[required], select[required], textarea[required]')
  );

  function updateProgress () {
    const filled = requiredFields.filter(f => {
      if (f.type === 'checkbox' || f.type === 'radio') return f.checked;
      return f.value.trim() !== '';
    }).length;
    const val = Math.round((filled / requiredFields.length) * 100);
    progress.value = val;
    if (pct) pct.textContent = val + '%';
  }

  requiredFields.forEach(f => f.addEventListener('input', updateProgress));
  requiredFields.forEach(f => f.addEventListener('change', updateProgress));
})();

/* === Inline form validation messages === */
(function () {
  document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea').forEach(input => {
    const errEl = input.parentElement.querySelector('.field-error');
    if (!errEl) return;

    input.addEventListener('blur', () => {
      if (!input.checkValidity()) {
        errEl.textContent = input.validationMessage;
        errEl.classList.add('visible');
        errEl.setAttribute('role', 'alert');
      } else {
        errEl.classList.remove('visible');
      }
    });

    input.addEventListener('input', () => {
      if (input.checkValidity()) errEl.classList.remove('visible');
    });
  });
})();

/* === Form submit handler === */
(function () {
  const form = document.querySelector('.contact-form');
  const successEl = document.querySelector('.form-success');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(f => {
      if (!f.checkValidity()) {
        const errEl = f.parentElement.querySelector('.field-error');
        if (errEl) {
          errEl.textContent = f.validationMessage;
          errEl.classList.add('visible');
          errEl.setAttribute('role', 'alert');
        }
        valid = false;
      }
    });

    if (valid) {
      form.style.display = 'none';
      if (successEl) successEl.classList.add('visible');
      window.scrollTo({ top: successEl.offsetTop - 100, behavior: 'smooth' });
    }
  });
})();

/* === Lazy-load images via IntersectionObserver === */
(function () {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    lazyImages.forEach(img => io.observe(img));
  }
})();
