// Typed Role Animation
const roles = ["Data Analyst", "Creative Thinker", "Problem Solver", "Beginner Coder"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typed-role");

function typeRole() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => { isDeleting = true; }, 1500);
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeRole, isDeleting ? 60 : 100);
}
typeRole();

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});

// Navbar scroll effects
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);

  const hint = document.getElementById("scroll-hint");
  if (hint) hint.style.opacity = window.scrollY > 100 ? "0" : "1";
});

// Hero fade-in on load
window.addEventListener("load", () => {
  document.getElementById("hero-content").classList.add("visible");
});

// Skill cards stagger animation
const skillCards = document.querySelectorAll(".skill-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 120);
    }
  });
}, { threshold: 0.2 });

skillCards.forEach(card => observer.observe(card));