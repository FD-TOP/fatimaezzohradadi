// ===== I18N — Language Switcher — Fatima Ezzohra Dadi Portfolio =====
(function () {
  const DEFAULT_LANG = 'fr';
  const RTL_LANGS    = ['ar'];
  const STORAGE_KEY  = 'portfolio_lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    const t = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

    // Direction & lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir  = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

    // textContent translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // innerHTML translations (for bold tags, line-breaks, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Active state on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Re-init Typed.js if present on this page
    if (typeof Typed !== 'undefined' && t['typed.strings'] && document.getElementById('typed')) {
      if (window._typedInstance) {
        window._typedInstance.destroy();
        document.getElementById('typed').textContent = '';
      }
      window._typedInstance = new Typed('#typed', {
        strings:   t['typed.strings'],
        typeSpeed: 50,
        backSpeed: 30,
        loop:      true,
        backDelay: 1800
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Apply saved (or default) language on page load
    applyLang(getLang());

    // Bind click on all language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        setLang(this.dataset.lang);
      });
    });
  });

  // Expose API globally
  window.i18n = { setLang, getLang, applyLang };
})();
