const navbar = document.getElementById("mainNav");
const navMenu = document.getElementById("navMenu");

// Add a border/solid background to the navbar once the page is scrolled
const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Close the hamburger menu after choosing a link on small screens
document.querySelectorAll("#navMenu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
        }
    });
});

// Fade-in sections / cards as they enter the viewport
const revealTargets = document.querySelectorAll(".section-title, .card-glass, .timeline li");
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);
revealTargets.forEach((el) => observer.observe(el));
