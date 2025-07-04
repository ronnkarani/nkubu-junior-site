// Toggle mobile nav
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Hero carousel logic
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
    index = (index + 1) % slides.length;
  }

  setInterval(showSlide, 4000); // Change slide every 4 seconds
});
