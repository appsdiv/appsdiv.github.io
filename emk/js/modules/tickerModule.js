import { getTickerData, simulateTickerUpdate } from './dataService.js';
import { createTickerPill } from './templates.js';
export async function init() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;
    let tickerItems = await getTickerData();
    if (!tickerItems.length) return;
    const paint = (items) => {
        const line = `<div class="flex gap-3">${items.map(createTickerPill).join('')}</div>`;
        track.innerHTML = line + line;
    };
    paint(tickerItems);
    setInterval(() => {
        tickerItems = simulateTickerUpdate(tickerItems);
        paint(tickerItems);
    }, 4000);
}