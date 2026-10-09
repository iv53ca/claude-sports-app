const C='cycle-ad-a6fc76a0';
const FILES=["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "fonts/golos-text-cyrillic-400-normal.woff2", "fonts/golos-text-latin-400-normal.woff2", "fonts/golos-text-cyrillic-500-normal.woff2", "fonts/golos-text-latin-500-normal.woff2", "fonts/golos-text-cyrillic-600-normal.woff2", "fonts/golos-text-latin-600-normal.woff2", "fonts/golos-text-cyrillic-700-normal.woff2", "fonts/golos-text-latin-700-normal.woff2", "fonts/unbounded-cyrillic-500-normal.woff2", "fonts/unbounded-latin-500-normal.woff2", "fonts/unbounded-cyrillic-700-normal.woff2", "fonts/unbounded-latin-700-normal.woff2", "img/a1.jpg", "img/a2.jpg", "img/a3.jpg", "img/a4.jpg", "img/a5.jpg", "img/a6.jpg", "img/a7.jpg", "img/a8.jpg", "img/b1.jpg", "img/b2.jpg", "img/b3.jpg", "img/b4.jpg", "img/b5.jpg", "img/b6.jpg", "img/b7.jpg", "img/c1.jpg", "img/c2.jpg", "img/c3.jpg", "img/c4.jpg", "img/c5.jpg", "img/c6a.jpg", "img/c6b.jpg", "img/c7a.jpg", "img/c7b.jpg", "img/c8.jpg", "img/d1.jpg", "img/d2.jpg", "img/d3.jpg", "img/d4.jpg", "img/d5a.jpg", "img/d5b.jpg", "img/d8.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  if(new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(resp=>{
    if(resp.ok){const cp=resp.clone();caches.open(C).then(c=>c.put(e.request,cp));}
    return resp;
  }).catch(()=>caches.match('index.html'))));
});
