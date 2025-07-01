const CACHE_NAME = 'luna-v1';
// لیست فایل‌هایی که برای عملکرد آفلاین باید ذخیره شوند
const urlsToCache = [
  '/', // این خط فایل اصلی html شما را ذخیره می‌کند
  'luna-app.html',
  'manifest.json',
  'https://cdn.jsdelivr.net/npm/vazirmatn@33.0.3/Vazirmatn-font-face.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  'https://i.postimg.cc/WbCF8vNk/luna-app.png',
  'https://i.postimg.cc/WbCF8vNk/luna-app.png'
];

// رویداد نصب: فایل‌ها را در حافظه کش ذخیره می‌کند
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// رویداد واکشی: درخواست‌ها را پاسخ می‌دهد
self.addEventListener('fetch', event => {
  event.respondWith(
    // ابتدا تلاش می‌کند پاسخ را از حافظه کش پیدا کند
    caches.match(event.request)
      .then(response => {
        // اگر در کش موجود بود، آن را برمی‌گرداند
        if (response) {
          return response;
        }
        // در غیر این صورت، درخواست را به شبکه ارسال می‌کند
        return fetch(event.request);
      })
  );
});

// رویداد فعال‌سازی: حافظه کش قدیمی را پاک می‌کند
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});