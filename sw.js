const CACHE_NAME = 'myatsom-v2';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './install.html',
    './app.html',
    './style.css',
    './app.js',
    './data.js',
    './atsom.png',
    './CurvaturaSuperiore.png',
    './FavIconAtsom.png',
    './icon-192.png',
    './icon-512.png',
    './placeholder-stop.jpg'
];

self.addEventListener('install', event => {
    // Forza il nuovo service worker ad attivarsi subito
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
    );
});

self.addEventListener('activate', event => {
    // Pulizia delle vecchie cache
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    // Consente al SW di prendere il controllo di tutte le pagine attive
    return self.clients.claim();
});

// Strategia: Stale-While-Revalidate
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(cachedResponse => {
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    // Aggiorna la cache con la nuova risposta dalla rete (solo richieste valide)
                    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(() => {
                    // Fallback se rete offline - Nessuna azione necessaria, userà cachedResponse se esiste
                });

                // Restituisci la versione in cache *immediatamente* se esiste,
                // ma in background (fetchPromise) stiamo scaricando ed aggiornando la cache
                return cachedResponse || fetchPromise;
            });
        })
    );
});
