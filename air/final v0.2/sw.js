const STATIC_CACHE = 'hp_static_v1';
const CONFIG_CACHE = 'hp_config_v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll([
      '/', '/index.html', '/manifest.webmanifest'
    ])).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Network-first for API
  if (url.hostname.includes('open-meteo.com')) {
    event.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  // Cache-first for app shell
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(STATIC_CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => cached))
  );
});

async function setConfig(config){
  const cache = await caches.open(CONFIG_CACHE);
  await cache.put('/__hp_config__', new Response(JSON.stringify(config), {
    headers: { 'Content-Type': 'application/json' }
  }));
}

async function getConfig(){
  const cache = await caches.open(CONFIG_CACHE);
  const res = await cache.match('/__hp_config__');
  if(!res) return null;
  try{ return await res.json(); }catch(e){ return null; }
}

self.addEventListener('message', (event) => {
  const data = event.data;
  if(data?.type === 'SET_CONFIG'){
    event.waitUntil(setConfig(data.config));
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type:'window', includeUncontrolled:true });
    if(all && all.length){
      all[0].focus();
      all[0].navigate('/');
    }else{
      self.clients.openWindow('/');
    }
  })());
});

function aqiInfo(aqi){
  const n = Number(aqi);
  if(n <= 50)  return {label:'پاک و عالی'};
  if(n <= 100) return {label:'قابل قبول'};
  if(n <= 150) return {label:'ناسالم برای حساس‌ها'};
  if(n <= 200) return {label:'ناسالم برای همه'};
  if(n <= 300) return {label:'بسیار خطرناک'};
  return {label:'مرگبار'};
}

function shouldRateLimit(tag, minMinutes){
  // simple in-memory rate limit per SW lifetime
  self.__lastNotify = self.__lastNotify || {};
  const now = Date.now();
  const last = self.__lastNotify[tag] || 0;
  if(!last || (now - last) > minMinutes*60*1000){
    self.__lastNotify[tag] = now;
    return true;
  }
  return false;
}

async function checkAndNotify(){
  const cfg = await getConfig();
  if(!cfg?.lat || !cfg?.lon) return;

  const settings = cfg.settings || {};
  const alertAqi = settings.alertAqi !== false;
  const alertRain = settings.alertRain !== false;
  const aqiThreshold = settings.aqiThreshold ?? 151;
  const rainThreshold = settings.rainThreshold ?? 70;
  const rainWindowHours = settings.rainWindowHours ?? 3;

  const lat = cfg.lat;
  const lon = cfg.lon;

  // fetch current AQI + hourly rain
  const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi&timezone=auto`;
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=precipitation_probability&timezone=auto`;

  let aqi = null;
  let hourly = null;

  try{
    const [aqiRes, wRes] = await Promise.all([fetch(aqiUrl), fetch(weatherUrl)]);
    if(aqiRes.ok){
      const j = await aqiRes.json();
      aqi = Number(j?.current?.us_aqi);
    }
    if(wRes.ok){
      hourly = await wRes.json();
    }
  }catch(e){
    return;
  }

  // AQI notify
  if(alertAqi && isFinite(aqi) && aqi >= aqiThreshold){
    if(shouldRateLimit('hp_aqi', 60)){
      const info = aqiInfo(aqi);
      self.registration.showNotification(`هشدار کیفیت هوا: ${info.label}`, {
        body: `AQI الان ${aqi} است. بهتره بیرون کمتر باشی.`,
        tag: 'hp_aqi',
        icon: "https://8upload.com/image/171db5bf84cf07d4/AppIcon_2x.png",
        badge: "https://8upload.com/image/171db5bf84cf07d4/AppIcon_2x.png"
      });
    }
  }

  // Rain notify
  if(alertRain && hourly?.hourly?.time?.length){
    const times = hourly.hourly.time;
    const probs = hourly.hourly.precipitation_probability || [];

    const now = new Date();
    let idx = 0, bestD = Infinity;
    for(let i=0;i<times.length;i++){
      const d = Math.abs(new Date(times[i]) - now);
      if(d < bestD){ bestD = d; idx = i; }
    }

    const slice = probs.slice(idx, idx + rainWindowHours);
    const maxProb = Math.max(...slice.filter(x => x != null));

    if(isFinite(maxProb) && maxProb >= rainThreshold){
      if(shouldRateLimit('hp_rain', 45)){
        self.registration.showNotification('هشدار بارش نزدیک ☔', {
          body: `احتمال بارش در ${rainWindowHours} ساعت آینده تا ${maxProb}% می‌رسد.`,
          tag: 'hp_rain',
          icon: "https://8upload.com/image/171db5bf84cf07d4/AppIcon_2x.png",
          badge: "https://8upload.com/image/171db5bf84cf07d4/AppIcon_2x.png"
        });
      }
    }
  }
}

// Periodic Background Sync (Chrome / برخی اندرویدها)
self.addEventListener('periodicsync', (event) => {
  if(event.tag === 'hp_periodic_check'){
    event.waitUntil(checkAndNotify());
  }
});

// Fallback: background sync (اگر جایی ثبتش کنی)
self.addEventListener('sync', (event) => {
  if(event.tag === 'hp_sync_check'){
    event.waitUntil(checkAndNotify());
  }
});
