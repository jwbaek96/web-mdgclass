// ==========================================================================
// 미디독학고수 (MDG) — shared interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNav();
  initFaqAccordion();
  initFilterTabs();
  initPricingToggle();
});

/* ---------- Mobile nav ---------- */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.mobile-nav');
  if (!toggle || !drawer) return;
  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
    toggle.setAttribute('aria-expanded', drawer.classList.contains('open'));
  });
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => drawer.classList.remove('open'));
  });
}

/* ---------- Highlight current nav link ---------- */
function initActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
}

/* ---------- FAQ accordion ---------- */
function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ---------- Class filter tabs (classes.html) ---------- */
function initFilterTabs() {
  const bar = document.querySelector('.filter-bar');
  if (!bar) return;
  const buttons = bar.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ---------- Pricing toggle (pricing.html) ---------- */
function initPricingToggle() {
  const toggle = document.querySelector('.toggle-group');
  if (!toggle) return;
  const buttons = toggle.querySelectorAll('button');
  const monthly = document.querySelectorAll('[data-plan="monthly"]');
  const yearly = document.querySelectorAll('[data-plan="yearly"]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      monthly.forEach(el => el.style.display = mode === 'monthly' ? '' : 'none');
      yearly.forEach(el => el.style.display = mode === 'yearly' ? '' : 'none');
    });
  });
}

/* ---------- Mock form submit (login/signup/contact) ---------- */
function mockSubmit(e, message) {
  e.preventDefault();
  alert(message || '이 사이트는 프론트엔드 시안(목업)입니다. 실제 데이터 처리는 연결되어 있지 않습니다.');
  return false;
}
