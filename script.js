// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll fade-in animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards for fade-in
document.querySelectorAll('.section, .card, .skill-card, .contact-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Navbar background change on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 15, 0.98)';
        header.style.borderBottomColor = 'rgba(0, 229, 255, 0.15)';
    } else {
        header.style.background = 'rgba(10, 10, 15, 0.92)';
        header.style.borderBottomColor = 'rgba(0, 229, 255, 0.08)';
    }
});

// Smooth scroll for hero Learn More button
document.querySelector('.hero-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
