const CACHE_PREFIX="gentleman-hotesse-v7-";
const CACHE_NAME=CACHE_PREFIX+"1";
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(k=>k.startsWith("gentleman-hotesse-")).map(k=>caches.delete(k))
  )));
  self.clients.claim();
});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin)return;
  if(e.request.mode==="navigate"){
    e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match("./index.html")));
  }
});
