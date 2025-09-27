import { getHeroSlides } from './dataService.js';
import { createHeroSlide } from './templates.js';
import { initHeroSlider } from './heroSlider.js';
export async function init() {
    const track = document.getElementById('hero-track');
    if (!track) return;
    const slides = await getHeroSlides();
    if (slides.length) {
        track.innerHTML = slides.map(createHeroSlide).join('');
        initHeroSlider();
    }
}