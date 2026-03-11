// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});

// Project Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const cards      = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("empty-state");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    let visibleCount = 0;

    cards.forEach(card => {
      const category = card.getAttribute("data-category");
      const show = filter === "all" || category === filter;
      if (show) {
        card.style.display = "flex";
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        visibleCount++;
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      } else {
        card.style.display = "none";
      }
    });

    emptyState.style.display = visibleCount === 0 ? "block" : "none";
  });
});

// Initial card reveal on scroll
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, i * 100);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  cardObserver.observe(card);
});