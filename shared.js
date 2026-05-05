// ===== SHARED JS — Fatima Ezzohra Dadi Portfolio =====
document.addEventListener('DOMContentLoaded', () => {

    // AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 750, once: true, offset: 55 });
    }

    // Scroll progress + back-to-top + navbar scrolled
    const progressBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (progressBar) progressBar.style.width = (scrollTop / docHeight * 100) + '%';
        if (backToTop) backToTop.classList.toggle('visible', scrollTop > 500);
        if (navbar) navbar.classList.toggle('scrolled', scrollTop > 50);
    });

    // Back to top click
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Curseur personnalisé
    if (window.innerWidth >= 992) {
        const dot = document.getElementById('cursor-dot');
        const outline = document.getElementById('cursor-outline');
        if (dot && outline) {
            let mouseX = 0, mouseY = 0, outX = 0, outY = 0;
            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX; mouseY = e.clientY;
                dot.style.left = mouseX + 'px';
                dot.style.top = mouseY + 'px';
            });
            (function animateOutline() {
                outX += (mouseX - outX) * 0.15;
                outY += (mouseY - outY) * 0.15;
                outline.style.left = outX + 'px';
                outline.style.top = outY + 'px';
                requestAnimationFrame(animateOutline);
            })();
        }
    }

    // Fermeture menu mobile au clic
    const navLinks = document.querySelectorAll('.nav-link');
    const menu = document.getElementById('navbarNav');
    if (menu) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menu.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(menu)?.hide();
                }
            });
        });
    }
});
