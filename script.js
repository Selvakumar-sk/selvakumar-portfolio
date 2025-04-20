// script.js
function showLoader() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  setTimeout(() => {
    loader.style.display = 'none';
    content.style.display = 'block';
    revealOnScroll();
  }, 1500);
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Form validation
const form = document.getElementById('contactForm');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    msg.textContent = 'Please fill out all fields.';
    msg.style.color = 'red';
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    msg.textContent = 'Invalid email address.';
    msg.style.color = 'red';
    return;
  }

  msg.textContent = 'Message sent successfully!';
  msg.style.color = 'green';
  form.reset();
});
