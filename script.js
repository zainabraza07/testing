/* ===============================
   SCROLL REVEAL (SAFE)
================================ */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

/* ===============================
   SCROLL PROGRESS BAR
================================ */
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight - window.innerHeight;

  if (progressBar) {
    progressBar.style.width = (scrollTop / height) * 100 + "%";
  }
});

/* ===============================
   MOBILE NAV (SIMPLE & SAFE)
================================ */
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}
