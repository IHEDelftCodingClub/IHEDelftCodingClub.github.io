---
layout: none
permalink: /sw.js
---
// Service Worker for Offline Support
const CACHE_VERSION = 'ihe-coding-club-v1';
const OFFLINE_URL = '/';

// Files to cache for offline use
const STATIC_CACHE_URLS = [
    '/',
    '/events/',
    '/members/',
    '/assets/css/main.css',
    '/assets/images/oti-logo.png'
];

// Install service worker and cache static assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_VERSION).then(cache => {
            return cache.addAll(STATIC_CACHE_URLS).catch(err => {
                // Some files might not exist yet, that's okay
                console.log('Cache initialization:', err);
            });
        })
    );
    self.skipWaiting();
});

// Activate service worker and clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_VERSION)
                    .map(name => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch strategy: Network first, fall back to cache
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    // Skip external requests
    if (!event.request.url.startsWith(self.location.origin)) return;
    
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Clone the response before caching
                const responseClone = response.clone();
                
                // Cache successful responses
                if (response.status === 200) {
                    caches.open(CACHE_VERSION).then(cache => {
                        cache.put(event.request, responseClone);
                    });
                }
                
                return response;
            })
            .catch(() => {
                // Network failed, try cache
                return caches.match(event.request).then(cachedResponse => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    
                    // If nothing in cache, return offline page for navigation
                    if (event.request.mode === 'navigate') {
                        return caches.match(OFFLINE_URL);
                    }
                    
                    // Return a basic 404 response
                    return new Response('Not found', {
                        status: 404,
                        statusText: 'Not Found'
                    });
                });
            })
    );
});

