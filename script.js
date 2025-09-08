// Scroll-trigger animations
const sections = document.querySelectorAll('section');
const steps = document.querySelectorAll('.step');
const benefits = document.querySelectorAll('.benefit');
const testimonials = document.querySelectorAll('.testimonial');

function checkVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight - 100;
}

function animate() {
  sections.forEach(s => { if (checkVisible(s)) s.classList.add('visible'); });
  steps.forEach(s => { if (checkVisible(s)) s.classList.add('visible'); });
  benefits.forEach(b => { if (checkVisible(b)) b.classList.add('visible'); });
  testimonials.forEach(t => { if (checkVisible(t)) t.classList.add('visible'); });
}

window.addEventListener('scroll', animate);
window.addEventListener('load', animate);

// Form submission with modal
const orderForm = document.getElementById('orderForm');
const modal = document.getElementById('modal');

orderForm.addEventListener('submit', function(e) {
  e.preventDefault();
  modal.style.display = 'flex';
  orderForm.reset();
});

function closeModal() {
  modal.style.display = 'none';
}
