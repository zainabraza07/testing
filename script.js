/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const h = window.innerHeight;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < h - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Scroll Progress */
const progress = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (s / h) * 100 + "%";
});

/* Page Navigation */
const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(link.getAttribute("href").substring(1)).classList.add("active");
    window.scrollTo({ top:0, behavior:"smooth" });
  });
});

/* Mobile Menu */
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
