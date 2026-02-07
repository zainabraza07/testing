// ==============================
// SCROLL REVEAL FUNCTION
// ==============================
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

// ==============================
// SCROLL PROGRESS BAR
// ==============================
const progressBar = document.getElementById('scroll-progress');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
}

// ==============================
// NAV LINK HIGHLIGHT ON SCROLL
// ==============================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  let scrollPos = window.scrollY + 100; // offset for header
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = section.getAttribute('id');
      document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
    }
  });
}

// ==============================
// HERO FADE ON SCROLL
// ==============================
const hero = document.querySelector('.hero');

function fadeHero() {
  let opacity = 1 - window.scrollY / 400;
  hero.style.opacity = opacity < 0 ? 0 : opacity;
}

// ==============================
// MAIN SCROLL EVENT USING requestAnimationFrame
// ==============================
function onScroll() {
  revealOnScroll();
  updateProgress();
  highlightNav();
  fadeHero();
}

// Optimize scroll events
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// Initial trigger
onScroll();
