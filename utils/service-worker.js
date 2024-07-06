const CACHE_NAME = 'super-trunfo-cache-v1';

const urlsToCache = [
    '/',
    './style.css',
    '../../styles/global.css',
    '../../assets/images/icon-mk11.png',
    './manifest.json',
    '../../scripts/script.js',
    '../../assets/images/01.png',
    '../../assets/images/02.png',
    '../../assets/images/03.png',
    '../../assets/images/04.png',
    '../../assets/images/05.png',
    '../../assets/images/06.png',
    '../../assets/images/07.png',
    '../../assets/images/08.png',
    '../../assets/images/09.png',
    '../../assets/images/10.png',
    '../../assets/images/vs-logo.png',
    './styles/index.css',
    './styles/global.css',
    './assets/images/icon-mk11.png',
    './assets/images/logo-st-mk11.png',
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
