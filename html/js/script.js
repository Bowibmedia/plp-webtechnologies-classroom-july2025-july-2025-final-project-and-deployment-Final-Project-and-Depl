// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 main.js loaded — initializing counters...");

  const counters = Array.from(document.querySelectorAll('.counter[data-target]'));
  console.log(`Counters found: ${counters.length}`);

  // Initialize counters to 0 if empty or non-numeric
  counters.forEach(c => {
    if (!c.innerText || isNaN(parseInt(c.innerText, 10))) c.innerText = '0';
    c.dataset.animated = c.dataset.animated || 'false';
  });

  // Smooth numeric animation using requestAnimationFrame
  function animateCounter(el, target, duration = 1500, suffix = '') {
    let startTime = null;
    const startVal = 0;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (target - startVal) + startVal);
      el.innerText = value + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.innerText = target + suffix; // ensure exact final value
      }
    }
    requestAnimationFrame(step);
  }

  function runIfNeeded(el) {
    if (el.dataset.animated === 'true') return;
    const rawTarget = el.getAttribute('data-target');
    const target = parseInt(rawTarget, 10);
    if (isNaN(target)) {
      console.warn('counter skipped — invalid data-target:', el, rawTarget);
      return;
    }
    const duration = parseInt(el.getAttribute('data-duration'), 10) || 1500;
    const suffix = el.getAttribute('data-suffix') || '';
    animateCounter(el, target, duration, suffix);
    el.dataset.animated = 'true';
    console.log(`Counter started (target=${target}, duration=${duration})`);
  }

  // Use IntersectionObserver if available
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runIfNeeded(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    counters.forEach(c => io.observe(c));
  } else {
    // Fallback: check on scroll/load
    const checkVisible = () => {
      counters.forEach(c => {
        if (c.dataset.animated === 'true') return;
        const rect = c.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) runIfNeeded(c);
      });
    };
    window.addEventListener('scroll', checkVisible);
    window.addEventListener('load', checkVisible);
    // initial check
    checkVisible();
  }

  // Final safety: run a delayed check in case layout shifts
  setTimeout(() => {
    counters.forEach(c => {
      if (c.dataset.animated !== 'true') {
        const rect = c.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) runIfNeeded(c);
      }
    });
  }, 600);

  console.log("Counter initialization complete.");
});

// FAQ accordion handling
document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = Array.from(document.querySelectorAll('.faq-question'));
  if (!faqButtons.length) return;

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // collapse all items (optional: allow multiple open by removing the next block)
      faqButtons.forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const answer = b.nextElementSibling;
        if (answer && answer.classList.contains('faq-answer')) answer.hidden = true;
      });

      // toggle current
      btn.setAttribute('aria-expanded', String(!expanded));
      const answer = btn.nextElementSibling;
      if (answer && answer.classList.contains('faq-answer')) answer.hidden = expanded;
    });
  });
});
