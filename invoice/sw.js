// sw.js — Azarpowder Invoice PWA
const CACHE = "azarpowder-invoice-v1";
const ASSETS = [
  "./",
  "./index.html", // اگر اسم فایل شما چیز دیگری است، همان را اضافه کنید
  "./manifest.webmanifest"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// شبکه اول، در صورت خطا کش
self.addEventListener("fetch", (e) => {
  const req = e.request;
  e.respondWith(
    fetch(req).catch(() => caches.match(req).then(res => res || caches.match("./")))
  );
});
