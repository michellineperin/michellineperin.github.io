// animações por scroll
const elements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));

// HERO — ativa imediatamente ao carregar
window.addEventListener("load", () => {
  document
    .querySelectorAll(".reveal-left, .reveal-right")
    .forEach(el => el.classList.add("active"));
});

const testimonials = document.querySelectorAll(".testimonial");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

// rotação automática
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 6000);


const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
