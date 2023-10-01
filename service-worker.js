// Define a cache name
const CACHE_NAME = 'my-cache';

// List of URLs to cache
const urlsToCache = [
  '/',
  "/src"
   
];

// Install event: Cache the specified assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: Intercept network requests and serve from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
