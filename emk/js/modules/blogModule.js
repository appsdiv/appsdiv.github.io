import { getBlogPosts } from './dataService.js';
import { createBlogPostCard } from './templates.js';
export async function init() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    const posts = await getBlogPosts();
    if (posts.length) {
        grid.innerHTML = posts.map(createBlogPostCard).join('');
    }
}