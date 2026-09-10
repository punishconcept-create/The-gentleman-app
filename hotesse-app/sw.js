const CACHE_PREFIX = "gentleman-hotesse-wrapper-";
const CACHE_NAME = CACHE_PREFIX + "v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Le SW Hôtesse n'intercepte que SON propre dossier.
  if (!url.pathname.startsWith("/The-gentleman-app/hotesse-app/")) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request, {cache:"no-store"})
        .catch(() => caches.match("./index.html"))
    );
  }
});
