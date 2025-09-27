import { initThemeSwitcher, initLanguageMenu, initMobileDrawer } from './modules/ui.js';
import { init as initHero } from './modules/heroModule.js';
import { init as initProducts } from './modules/productModule.js';
import { init as initCertificates } from './modules/certificateModule.js';
import { init as initBlog } from './modules/blogModule.js';
import { init as initTicker } from './modules/tickerModule.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize static UI components
    initThemeSwitcher();
    initLanguageMenu();
    initMobileDrawer();
    
    // Initialize dynamic content modules
    initHero();
    initProducts();
    initCertificates();
    initBlog();
    initTicker();
});