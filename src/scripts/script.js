// Modo oscuro
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-dark');
    
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
  });

// Scroll reveal 
const revealElements = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
