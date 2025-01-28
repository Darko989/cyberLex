let currentLanguage = 'en';

function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    translatePage();
    window.location.reload();
}

function translatePage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'OPTION') {
                element.text = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'en' ? 'sr' : 'en';
    setLanguage(newLang);
}

// Initialize language from localStorage or default to Serbian
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language');
    currentLanguage = savedLanguage || 'sr'; // Default to Serbian
    translatePage();

    // Add language switcher to the navigation
    const nav = document.querySelector('.nav-links');
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    languageSwitcher.innerHTML = `
        <select onchange="toggleLanguage()" style="background: transparent; color: #f8f9fa; border: 1px solid rgba(255,255,255,0.2); padding: 5px; border-radius: 5px;">
            <option value="sr" ${currentLanguage === 'sr' ? 'selected' : ''}>SR</option>
            <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>EN</option>
        </select>
    `;
    nav.appendChild(languageSwitcher);
});

function getCurrentLanguage() {
    return localStorage.getItem('language') || 'sr';
} 