const CACHE_STATIC_NAME = "static-v13";
const CACHE_DYNAMIC_NAME = "dynamic-v8";

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(cache => {
        console.log("[Service Worker] Precaching App Shell");
        return cache.addAll([
          "/",
          "/offline",
          "/favicon.ico",
          "/manifest.json",
          "/icons/icon-144x144.png",
          "/js/register-service-worker.js",
          "/js/navbar.js",
          "/js/index.js",
          "/js/offline.js",
          "/styles/globals.css",
          "/styles/navbar.css",
          "/styles/footer.css",
          "/styles/index.css",
          "/styles/offline.css",
          "/images/andrea.png",
        ]);
      })
    );
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating Service Worker ...", event);
  event.waitUntil(
    caches.keys()
      .then(keyList => Promise.all(keyList.map(key => {
        if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
          console.log("[Service Worker] Removing old cache.", key);
          return caches.delete(key);
        }
      })))
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(res => {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(cache => {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(err => {
              async function matchToOfflinePage() {
                try {
                  const cache = await caches.open(CACHE_STATIC_NAME);
                  const response = await cache.match("/offline");
                  return response;
                } catch (error) {
                  console.log(error);
                }
              }
              
              return matchToOfflinePage();
            });
        }
      })
  );
});


// //Cache Only Strategy
// self.addEventListener("fetch", (event) => {
//   event.respondWith(async function() {
//     const response = await caches.match(event.request);
//     return response;
//   }() );
// });

// //Network Only Strategy
// self.addEventListener("fetch", event => {
//   event.respondWith(fetch(event.request));
// });

// //Network with Cache Fallback Strategy
// self.addEventListener("fetch", (event) => {
//   event.respondWith(async function() {
//     try {
//       const response = await fetch(event.request);
//       return response;
//     } catch (error) {
//       console.log(error);
//       return await caches.match(event.request);
//     }
//   }());
// });
