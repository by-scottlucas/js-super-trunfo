const CACHE_NAME = 'super-trunfo-cache-v1';

const urlsToCache = [
    '/js-super-trunfo/',
    '/js-super-trunfo/style.css',
    '/js-super-trunfo/styles/global.css',
    '/js-super-trunfo/assets/images/icon-mk11.png',
    '/js-super-trunfo/manifest.json',
    '/js-super-trunfo/scripts/script.js',
    '/js-super-trunfo/assets/images/01.png',
    '/js-super-trunfo/assets/images/02.png',
    '/js-super-trunfo/assets/images/03.png',
    '/js-super-trunfo/assets/images/04.png',
    '/js-super-trunfo/assets/images/05.png',
    '/js-super-trunfo/assets/images/06.png',
    '/js-super-trunfo/assets/images/07.png',
    '/js-super-trunfo/assets/images/08.png',
    '/js-super-trunfo/assets/images/09.png',
    '/js-super-trunfo/assets/images/10.png',
    '/js-super-trunfo/assets/images/vs-logo.png',
    '/js-super-trunfo/styles/index.css',
    '/js-super-trunfo/styles/global.css',
    '/js-super-trunfo/assets/images/icon-mk11.png',
    '/js-super-trunfo/assets/images/logo-st-mk11.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
