
/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {  StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();


console.log("coming inside the service worker file ")


precacheAndRoute(self.__WB_MANIFEST); 

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
console.log('This is a custom service worker!');

registerRoute(
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false;
    } 

    if (url.pathname.startsWith('/_')) {
      return false;
    } 

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);


registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>  url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener('fetch', (event) => {
  // Check if the user is navigating to a page (e.g., /features, /about, etc.)
  if (event.request.mode === 'navigate') {
    if (!navigator.onLine) {
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            // If the network request succeeds, return the response
            return response;
          })
          .catch(() => {
            // If the network request fails (e.g., user is offline), serve the offline.html
            return caches.match('/offline.html'); // Serve the offline page from the cache
          })
      );
     }
 
  } else {
    // For non-navigation requests, try to use the CacheFirst strategy
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  }
});



// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.
