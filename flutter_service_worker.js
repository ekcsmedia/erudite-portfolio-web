'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c72d4cd90790fd26a181df59c7c088ee",
"assets/AssetManifest.bin.json": "aebaf10de36eff0fe012872ac5aab0dd",
"assets/AssetManifest.json": "c1295d97ebfb6a9fa1b5fded34bedf46",
"assets/assets/images/01.png": "e766ea4deec20bf091d50bfdeafdfa51",
"assets/assets/images/02.png": "e47db54e214943112806434d32b8974c",
"assets/assets/images/03.png": "ce88bf4a0120e7e42a1436e4222c9ea7",
"assets/assets/images/04.png": "cb8cbe068e3f08d5d826314ca9cd74a9",
"assets/assets/images/aboutcompimage.jpg": "369df41f15fbd9f69947c725833fc534",
"assets/assets/images/announcement.png": "a4d83fb3b3ffe6e6f38f3fde8e83420d",
"assets/assets/images/avatar1.png": "3a7fa3c558d6137b05f7515ea52c9af9",
"assets/assets/images/avatar2.png": "d61238338d543d0b881c7fe4409e5544",
"assets/assets/images/avatar3.png": "ea38ad6aae29be3c967d43f97e30d30d",
"assets/assets/images/avatar4.png": "172b97f8c31e65cebac931b4c03188d3",
"assets/assets/images/background.jpg": "3b031387c9843f12a9af3a3353e3f6ea",
"assets/assets/images/chart2.png": "71a4bf165ef7714679d69e5bf5a2868a",
"assets/assets/images/contact-img.png": "d03852ed2f1e2eac77cea6e0a3c1cfe7",
"assets/assets/images/content_strategy.jpg": "fe87d285c2660d1946539b78783f0a3d",
"assets/assets/images/customer.png": "0c29b4c1309a1d41c551b7d82df24fde",
"assets/assets/images/digital_marketing.jpg": "859c156fabdebfeedeb9fa43d9ef6b66",
"assets/assets/images/g1.jpg": "872ebb01b879ec1bc9d537ada13b233b",
"assets/assets/images/hero_image.png": "2f04db96a9d1e91882c22546a69292ce",
"assets/assets/images/left-shape.png": "50704b8121f75d24d5447ec7b30aa920",
"assets/assets/images/logo.png": "6e70ea528c3846dafdf10bd0d64982fd",
"assets/assets/images/magazine_mockup.jpg": "507fc57fdd92dec8d5a52e9eb8b5da2c",
"assets/assets/images/member1.jpg": "0425bd45e513f81f02ae8fd90c68a317",
"assets/assets/images/member2.jpg": "ba63e7fc1eaaba4d2be36f197d3c25f2",
"assets/assets/images/paper_mockup.jpg": "eb28c3660015c6a29c916c32eabf9711",
"assets/assets/images/person.png": "d0861b935ea23868971787b44f02efc2",
"assets/assets/images/post1.jpg": "9eb00a39e0cdd4abbc761a7038c7fb80",
"assets/assets/images/post2.jpg": "b40f11283f58d50cf4633de39ca17450",
"assets/assets/images/ppc_advertising.jpg": "3a9d76d225622331471856c1b000293d",
"assets/assets/images/quote.png": "efa155b2c253e8675964f0cddbf365f3",
"assets/assets/images/right-shape.png": "83239e0eebe766758fac4018e8a21903",
"assets/assets/images/rokect.png": "2f51043b2636df1df1d4fcd323e4b2af",
"assets/assets/images/s1.png": "bbd6e8a4d4cc3f2e8f46ce0386ca4136",
"assets/assets/images/s2.png": "68148ed8cf81ae51221b6fbfd345eb13",
"assets/assets/images/s3.png": "4f2e41eba12bec83fdb6c2e0141ffd42",
"assets/assets/images/sales_trend.png": "8bb312ffe4e3cca35dca1f36fd77465e",
"assets/assets/images/services-testimonial-women.png": "95e402dcbea32f0bf6933543a72ea026",
"assets/assets/images/social_media.jpg": "c21a582a6c6535665c655ffba6454150",
"assets/assets/images/stats_people.jpg": "0dedec2ef7bd7f354e88f067ba2005cf",
"assets/assets/images/target.png": "3b0a1a7e34883de8bdc4250ed84df95b",
"assets/assets/images/team-service.jpg": "9ed6a730080715487e87d3dc8c4abed9",
"assets/assets/images/team.jpg": "f4ca8ac3c7b9ff8e539ab008306bc9b1",
"assets/assets/images/trophy.png": "961dcc480ec0bb78d21dfb22f3238574",
"assets/assets/images/white-logo.svg": "853813b22700e30723eba3786130ab51",
"assets/assets/logo.svg": "07a7e05342573de9a459a5b76bb4fde1",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "47defc167ac6db0985332dbbc8ba787d",
"assets/NOTICES": "433293c16867150d0d7d0f5d0c9dbbc9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4f6f746b41c9416ace31be3f994c40c2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "8d5c86baeeb4e3deff71cbf7bfb99007",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59a4181ca1abd14a666c3726f7d3000b",
"/": "59a4181ca1abd14a666c3726f7d3000b",
"main.dart.js": "c436488a3c26cbb6396bded942941f33",
"manifest.json": "f7ffa7322edfa3d8bd52f207935586d1",
"version.json": "23ec17a2049b801e49f2304d5b189ed1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
