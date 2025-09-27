import { getProducts } from './dataService.js';
import { createProductCard } from './templates.js';
export async function init() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    const products = await getProducts();
    grid.innerHTML = products.length ? products.map(createProductCard).join('') : '<p>محصولی یافت نشد.</p>';
}