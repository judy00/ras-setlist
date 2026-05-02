var CACHE_NAME = 'ras-teleprompter-v4';
var ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './songs.js',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(
        names.filter(function (n) { return n !== CACHE_NAME; })
          .map(function (n) { return caches.delete(n); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    fetch(e.request).then(function (response) {
      var clone = response.clone();
      caches.open(CACHE_NAME).then(function (cache) {
        cache.put(e.request, clone);
      });
      return response;
    }).catch(function () {
      return caches.match(e.request);
    })
  );
});
