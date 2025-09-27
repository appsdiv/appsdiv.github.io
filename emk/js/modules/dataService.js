const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Could not fetch data from ${url}:`, error);
    return [];
  }
};
export const getProducts = () => fetchData('data/products.json');
export const getTickerData = () => fetchData('data/ticker.json');
export const getHeroSlides = () => fetchData('data/hero-slides.json');
export const getCertificates = () => fetchData('data/certificates.json');
export const getBlogPosts = () => fetchData('data/blog-posts.json');
export const simulateTickerUpdate = (data) => {
    return data.map(item => {
        const drift = (Math.random() - 0.5) * 0.6;
        const newChange = Math.max(-2, Math.min(2, item.ch + drift));
        const newValue = Math.max(1, item.v * (1 + (drift / 120)));
        return { ...item, ch: newChange, v: newValue };
    });
};