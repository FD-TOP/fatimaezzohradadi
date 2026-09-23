// ===== SHARED JS — Fatima Ezzohra Dadi Portfolio =====
document.addEventListener('DOMContentLoaded', () => {

    // CV Popup — top right
    initCvPopup();

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

const CV_FILES = {
    fr: 'assets/CV_Fatima_Ezzohra_Dadi_FR.pdf',
    en: 'assets/CV_Fatima_Ezzohra_Dadi_EN.pdf',
    de: 'assets/CV_Fatima_Ezzohra_Dadi_DE.pdf',
};

function getCvDownloadPath(siteLang) {
    const cvLang = siteLang === 'ar' ? 'fr' : (CV_FILES[siteLang] ? siteLang : 'fr');
    return CV_FILES[cvLang];
}

function updateCvDownloadLink(lang) {
    const link = document.querySelector('.cv-popup-link');
    if (!link) return;
    const cvLang = lang === 'ar' ? 'fr' : (CV_FILES[lang] ? lang : 'fr');
    const path = CV_FILES[cvLang];
    link.href = path;
    link.setAttribute('download', path.split('/').pop());
}

function initCvPopup() {
    if (sessionStorage.getItem('cv_popup_dismissed')) return;

    const lang = (window.i18n && window.i18n.getLang()) || 'fr';
    const popup = document.createElement('aside');
    popup.id = 'cv-popup';
    popup.className = 'cv-popup';
    popup.setAttribute('role', 'status');
    popup.innerHTML = `
        <button type="button" class="cv-popup-close" aria-label="Fermer">&times;</button>
        <i class="fas fa-file-pdf cv-popup-icon"></i>
        <span class="cv-popup-text" data-i18n="cv.message">Mon CV est disponible —</span>
        <a href="${getCvDownloadPath(lang)}" class="cv-popup-link" download data-i18n="cv.download">télécharger</a>
    `;

    document.body.appendChild(popup);
    window.updateCvDownloadLink = updateCvDownloadLink;

    if (window.i18n) window.i18n.applyLang(window.i18n.getLang());

    setTimeout(() => popup.classList.add('visible'), 1200);

    popup.querySelector('.cv-popup-close').addEventListener('click', () => {
        popup.classList.remove('visible');
        sessionStorage.setItem('cv_popup_dismissed', '1');
        setTimeout(() => popup.remove(), 500);
    });
}
