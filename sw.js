// Cache only the public editor shell. Uploaded photos, generated images, and API responses stay out of this cache.
const CACHE_NAME = 'femamodel-shell-v2';
const SHELL = [
    './', './index.html', './style.css', './script.js', './manifest.webmanifest',
    './favicon.svg', './apple-touch-icon.png', './icon-192.png', './icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys().then((names) => Promise.all(
        names.filter((name) => name.startsWith('femamodel-shell-') && name !== CACHE_NAME).map((name) => caches.delete(name))
    )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (event.request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.includes('/api/')) return;
    if (event.request.mode === 'navigate') {
        event.respondWith(fetch(event.request).catch(() => caches.match('./index.html')));
        return;
    }
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request, { ignoreSearch: true })));
});
