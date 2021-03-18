'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "7a26963161a3159abd2674d22886c673",
".git/logs/refs/remotes/origin/main": "2440864069c32b8a5124ac037ec8bffd",
".git/logs/refs/heads/main": "8befbe44b0854e63ecc7b08c6a0d35d1",
".git/index": "527b056f73f8428e5621f720537d4a80",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "54b0f763dd181a225e150209af0b3c9f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/refs/remotes/origin/main": "f46b57a48b33cf3d66e407904af50db4",
".git/refs/heads/main": "f46b57a48b33cf3d66e407904af50db4",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/ba/41c4ac3a0063606da11f2895233944c376acf9": "98d6c8ec0e3bf668ad2d64fb65d36dd1",
".git/objects/40/45c7514f733e8144cf2092944b79115c1a9957": "432e1c67ebc4f5222ff9efe0b40052fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/84/270c227aec7fbf03483c60d2dd362e8e1a3ac7": "5cac0c00adbbb00372b4b678c1bb63e5",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/09/08e675197baff237a01a60fa5ed6146f1b975f": "549d559c59616a32835cd8deef6c9d8c",
".git/objects/c8/ac2be61fbd75177475ce3bf140de4bc73ad929": "05d5499a8c4b170c8098e6d7cb046efe",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/3e/7746388be3b927abac377b7c80bc6c1846947b": "0e93815f38babd389bd3f3adb67d5298",
".git/objects/0e/3fb3ac89e47544cd355d9baad618f98a2bfa53": "3dd9e66b9e0114ac79be0ee3ba8d1898",
".git/objects/b0/c7108e10da1d8550248ef953d532501a4b8219": "6939042ca26073fe53d567fd06792498",
".git/objects/fc/b7a1511d8b9eac6d816374eea9096da7d0c821": "d9c0a93984a40e9e8570a05749908701",
".git/objects/75/4021c76143befa5040dd98a280156e927d1340": "d38e53e832886bbc9900028c7ab478e5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/71/25847d53c14d010dfb2f50207821edadcf5db6": "bab663248896f82037dc5f890589f61b",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/6f/6bae9be5d9d4df1f003d192102f6856eb415e2": "f257d7e7ea94f6df0cab74dd55c40d4a",
".git/objects/82/054fca7c4bd5d0adf5a734184de340cc9e0a83": "60c097125272a462f810dd324c29f5db",
".git/objects/f0/2ccebcb93dbce78faa53acef96e30a1ecb4f9a": "99e234cfc5540dd087b2d49845b9b59d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/81/46ea9c69b93464215af3f367576bb45a5c9acc": "1692ee596c7427e15821a5cd83b9c175",
".git/objects/19/68688e3a8c9ef61e8a2647cf5bce7479978d85": "ede9617392ea8e8990cd1bb1b803b372",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/24/a53b973f9b1d544961645b604af2a1cd6cdbfe": "43cc4c99e2db549b455acde4ba3b883c",
".git/objects/fe/3ea927fe34af2b139d9a2472ee7e23faaa0b04": "0a5d077883b0bbd8c02ac67978cb0674",
".git/objects/b1/eaba238dc3d90b5bf68eeb851fec9d1d3a7ae9": "c54d3b54de10afa123be0e5f9583aa11",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e9/f83bd5f2f9e34d3199bac95d7f07137ebc461c": "8b7622c353c26c5b451afff02f2a6b44",
".git/objects/2c/1ffbd42b538e5b6c80994b0e3a99262369bbc9": "47eb6dd212eeb7c94d5e7103474ad5e1",
"manifest.json": "10ec61cae61844b113f533f3747e4fa5",
"index.html": "178f91330b084a6c0c69a5bb52318135",
"/": "178f91330b084a6c0c69a5bb52318135",
"main.dart.js": "9be966ae18ce16d340c1ba30e1d84f20",
"assets/NOTICES": "b7c21ea91dba97782a875ed28aa4658b",
"assets/AssetManifest.json": "4527723b2588a018fc6330f087e06ff3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/imgs/logo.png": "4733ce2f7c74aef005ee611f7e1520b8",
"assets/assets/imgs/background.jpg": "dc3d269a957d9220cb70ff4404cbdc60",
"assets/assets/servers.json": "68aede4bd6cf8395632ebc6e0bb0728e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"version.json": "4c8e016881958ae8bde5209ef506bff8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
