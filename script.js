/* ===============================
   INTERSECTION OBSERVER REVEALS
================================ */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

/* ===============================
   SCROLL PROGRESS BAR
================================ */
const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight - window.innerHeight;

  progress.style.width = (scrollTop / height) * 100 + "%";
});

/* ===============================
   PAGE NAVIGATION
================================ */
const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);

    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");

    nav.classList.remove("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* ===============================
   MOBILE MENU + SWIPE CLOSE
================================ */
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// swipe to close
let startX = 0;
nav.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

nav.addEventListener("touchend", e => {
  if (startX - e.changedTouches[0].clientX > 60) {
    nav.classList.remove("show");
  }
});

/* ===============================
   CINEMATIC HERO PARALLAX
================================ */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (!hero) return;
  const y = window.scrollY;
  hero.style.backgroundPositionY = `${y * 0.35}px`;
  hero.style.opacity = Math.max(1 - y / 500, 0.25);
});
