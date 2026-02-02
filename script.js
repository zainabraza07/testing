// Future features:
// - Auto move expired reports to archive
// - Admin upload system
// - Dark mode
/* ================================
   SCROLL REVEAL ANIMATION
================================ */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ================================
   SCROLL PROGRESS BAR
================================ */
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (scrollTop / scrollHeight) * 100;
  if (progressBar) {
    progressBar.style.width = progress + "%";
  }
});


/* ================================
   MOUSE-REACTIVE GLOW EFFECT
================================ */
const glowElements = document.querySelectorAll(
  ".card, .archive-item, .report-card"
);

glowElements.forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  });

  el.addEventListener("mouseleave", () => {
    el.style.setProperty("--x", `50%`);
    el.style.setProperty("--y", `50%`);
  });
});


/* ================================
   NAVBAR ACTIVE LINK HIGHLIGHT
================================ */
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section[id]");

function setActiveNav() {
  let scrollPos = window.scrollY + 150;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", setActiveNav);


/* ================================
   SMOOTH FADE FOR HERO ON SCROLL
================================ */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (!hero) return;

  let scrollY = window.scrollY;
  hero.style.opacity = Math.max(1 - scrollY / 400, 0.2);
});
/* ================================
   SECTION TOGGLE (NAV CLICK)
================================ */
const navLinksAll = document.querySelectorAll("nav a");
const allSections = document.querySelectorAll("section[id]");

// hide all except home on load
function showSection(id) {
  allSections.forEach(section => {
    section.style.display =
      section.id === id ? "block" : "none";
  });
}

showSection("home");

navLinksAll.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    showSection(targetId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

