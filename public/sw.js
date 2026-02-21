// This service worker replaces the old Gatsby service worker.
// It clears all caches and unregisters itself.
// Can be safely removed once all returning visitors have loaded the new site.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))
      )
      .then(() => self.clients.claim())
      .then(() => self.registration.unregister())
  );
});
