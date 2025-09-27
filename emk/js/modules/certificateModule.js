import { getCertificates } from './dataService.js';
import { createCertificateFigure } from './templates.js';
export async function init() {
    const grid = document.getElementById('certs-grid');
    if (!grid) return;
    const certificates = await getCertificates();
    if (certificates.length) {
        grid.innerHTML = certificates.map(createCertificateFigure).join('');
    }
}