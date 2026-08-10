// Cambia este número por el WhatsApp comercial de Macaf cuando esté disponible.
const WHATSAPP_NUMBER = '573112816193';

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  const message = link.dataset.message ?? 'Hola, quiero información.';
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

document.querySelector('#year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  });
});

const CONTACT_API_URL =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8000/public/contact-requests'
    : 'https://chatbot-api-production-76d5.up.railway.app/public/contact-requests';

const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const status = document.querySelector('#contact-status');
  const button = contactForm.querySelector('button[type="submit"]');
  const payload = Object.fromEntries(new FormData(contactForm).entries());
  button.disabled = true;
  status.classList.remove('visible');
  try {
    const response = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.detail || 'No fue posible enviar tu solicitud.');
    contactForm.reset();
    status.textContent = 'Gracias. Recibimos tu solicitud y te contactaremos pronto.';
  } catch (error) {
    status.textContent =
      error instanceof Error ? error.message : 'No fue posible enviar tu solicitud. Intenta más tarde.';
  } finally {
    button.disabled = false;
    status.classList.add('visible');
  }
});

const ratingForm = document.querySelector('#rating-form');
ratingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = ratingForm.querySelector('.form-message');
  message?.classList.add('visible');
  ratingForm.reset();
});
