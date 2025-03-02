const CACHE_NAME = 'pope-game-cache-v1';

// Get base path for GitHub Pages
function getBasePath() {
  // Check if we're on GitHub Pages
  if (self.location.hostname.includes('github.io')) {
    const pathSegments = self.location.pathname.split('/');
    if (pathSegments.length > 1) {
      return '/' + pathSegments[1]; // Repository name
    }
  }
  return '';
}

const BASE_PATH = getBasePath();

// Dynamic URLs to cache based on environment
const urlsToCache = [
  BASE_PATH + '/',
  BASE_PATH + '/index.html',
  BASE_PATH + '/styles.css',
  BASE_PATH + '/game.js',
  BASE_PATH + '/sw.js',
  BASE_PATH + '/favicon.ico',
  BASE_PATH + '/assets/medieval_village.png',
  BASE_PATH + '/assets/villager.png',
  BASE_PATH + '/assets/lamp_icon.png',
  BASE_PATH + '/assets/plant_icon.png',
  BASE_PATH + '/assets/question_mark.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', event => {
  // Handle GitHub Pages base path
  let requestUrl = event.request.url;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request)
          .then(networkResponse => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            const clonedResponse = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, clonedResponse));
            return networkResponse;
          });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(name => {
            if (name !== CACHE_NAME) {
              return caches.delete(name);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});
