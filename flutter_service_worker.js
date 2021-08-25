'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ea56df4357c7003f4065f9c0367a5fb1",
".git/config": "be4a701a82cfb535d38b0ea6517d04d8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6eb40c9561c94ee4cf37086a42c76702",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e7d9b91327a313e776a206862a9a5dc3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1bbbb0d6566278079d1c2b9c96dccbb",
".git/logs/refs/heads/master": "e1bbbb0d6566278079d1c2b9c96dccbb",
".git/logs/refs/remotes/origin/master": "b4bfac370783d75579472b51730f4054",
".git/objects/00/0ae495f4d11918475e304c16c4eff71ede93f1": "c7817d72b04c6fa1c7174214dee3f601",
".git/objects/00/e7b641cb0ac071c243107dc643866886441f51": "16148051003e724c84b764d75369dff4",
".git/objects/0b/896bda755b822b94afc582b479e5f24aaae354": "f95cef6592161c06b66aebbce4b06ea1",
".git/objects/0e/678d6262f43b63b3cf8b3a7f0f915cafc8a2f2": "45b11ff78b769c75281f6a3c3cb46103",
".git/objects/11/1c348e9b6ae88d82319f377d9c2384d3d50ca2": "23504805f9b7a84f379e447cb5a6fcbd",
".git/objects/13/22898ae93030a651672a7121050982a586e9a0": "881e90813aa852740cd2b70cf46099ea",
".git/objects/14/ddc6dfd9887d5a034bf5ea2078f041bc7b9b7c": "91c4879a0c1113ffe2e8040974410020",
".git/objects/20/2975698666296de146defd8207b398ed1abbd3": "4162bea2d80c4200d4fb96c6c3345d14",
".git/objects/25/91bea48f67b62a6c0f77bfc99e7737b907da84": "dcfada5a0db6f39e1840516f795b6fe9",
".git/objects/27/f8be94538962e922a22f6eba9fff553cbeab66": "130e6bed74181cdf50a495a67d33fe1f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/cb1a694846bc000d8bce2b1afee381d499665b": "cbfaa3941ab4650bfc8deaf787435ae7",
".git/objects/34/b821ffda35be6c19f86fd30f56e7906be4d7bc": "253f709a0de43fba7c154ae30215e5c4",
".git/objects/35/2784c384f595cce1b39cbce3b1b1a92b0324ba": "c2a9e37043854f7110fa9b0b4dcca69a",
".git/objects/36/335ab25750455075996f56db1d0d8643c35326": "ce36098e9438196c93bc9453c208bc66",
".git/objects/37/3b8c8628012112a0bece7bcd14ed4f6da638f8": "0f652829fec2d52bad9d8130847f98f1",
".git/objects/39/5dcca3eddc19106f44f274f4e9bb582ad95494": "711141e332fd962d4df7e71bfb5197a1",
".git/objects/3f/aa256a2989c94830e308873ef6a1188ead3369": "ebacfc6d41c5cb752a9f8422235d36a5",
".git/objects/45/229fc04f7f6a56c4bcf3ee3377c6c2c599ed48": "6f6d016b8b998222d0fee1ebf951e226",
".git/objects/45/f1ea925f94188e58b4e4d6b43a7ad182e18bb9": "b718ff45a04bc69ae15b212775a9907c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/3eb78e97a82d89336c25489781b1191c523e4a": "66e8c54191a66ed205d2328328fe58cc",
".git/objects/4c/de2fc9b3c857743c132e7ade3efd06df77fe1c": "bf28e513d3273b8551ee6dce60d1426b",
".git/objects/4f/8e574b97404258c0e889adf655c4c7ae9de6ab": "b89deab1ce662bd8789d795e21abcae7",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/5b/05d99f0082ef7ccd2a91135504d8f58a8fcc9d": "c86115cf7a66dd013d5b2fdfbc7c1d43",
".git/objects/5e/8d65918b19553b2b9e39380e425aab8f7654b0": "c3d08c2872de67e505c6652060ab96b7",
".git/objects/68/1521032d6ead7c474357a950ba00e18b61791b": "6e5ef88f79640a4c604d264ebe8c8cd7",
".git/objects/6c/a2244875f5b4f464d589faf8669aa79a96c451": "1616b7b86f412facbb7253eccdd55ed2",
".git/objects/73/4c381862987cca3a96895038b344e12edd5c49": "a2445a53af1d9225d5e889ab22f4df2a",
".git/objects/77/283a7ff347ff3a86fda3339bae30d2545522fc": "73147c36a4dad7fdcd5fe7cbd32e1771",
".git/objects/78/90c1a9462b93e1e26479f39bfbb9c9ba6825e1": "894fd728ddcc37d249265acdcdf03d25",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/e5ec484f6d064f6ad3ac49d7351c66feb9394e": "6a3c8035031b01022422f1f5f3bfa7bc",
".git/objects/82/05c82bb2fe18174ed5d604abfbd1d7025d6519": "0115777ec968e634f4d0054e307c7cd2",
".git/objects/82/c03e79cc676b614bb6e678112c77a8d7463060": "893f3a631f98be124a1d884cff269fa5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/adddf1604ba8dc57bfe0da6cd9a071c4653060": "fff1f5838e218c2f7fab7be51f31d24f",
".git/objects/95/e0cd05cdad57940439af8032459ccac6ce17c4": "ca471e181d4444a8141b4bff9b518176",
".git/objects/9a/30139803ad36cf14bc54c879d2c3df73c85217": "9839d8747ee519209683859c8c6779b9",
".git/objects/9c/1885137315b7dc457455f9c7f9c84f5f5e7837": "ed2d1bb40d9367f1aea48bc1872b8170",
".git/objects/9d/7b0ed042d12cb462cd699623370f14c96bbe9d": "5da52ffe71393cb95fe04f830882bae0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/a120407489d7b69c0ef33644b9b5b8455656a0": "cf8c8a49064ebab9e3870a24c206a8da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/95492719703f9a788202c68d2c156f4fc51c94": "3dfcb90c4ec9729af0c294debfaf501f",
".git/objects/bc/55676f35b3722aa9eb5c64b2a37369d75dd5f8": "79c78c15bc0e7110a220a7652dfc0016",
".git/objects/bf/388fbec0634148df464905aed7445f498f2652": "fc663e0e4c184f0a2d1a0a1054ffd115",
".git/objects/c3/6cf416c9cbde93cba52865e2fe8d5e98185f74": "4d9f67ff78b0b047117c183b6a6b4fed",
".git/objects/c5/5eef5c0a07a322609e443d96e364c5248f3a08": "b5c33d69b3ff7d49252722086abadde8",
".git/objects/c7/f0e2daca587efa9a03e3bf1333aecd19578b81": "0b06b80d0dec7b8593b2cdcb365d8488",
".git/objects/c8/9e710fcb2fa37e762d2330f2e36d11cac50cba": "7346be4fac64e0e4610b7666364fba90",
".git/objects/cb/5c53a6923bd88ecc96a1bfef9fbd82cf9fdbf2": "56c930b59de6a1ebcebaddae0048a647",
".git/objects/cc/ede012eb1a3198b628d9bcc3728c6a29fcf9da": "9989c6d0bf2346969ef7d1adefbde84e",
".git/objects/cf/47149c40fc49db12c7fff2113912b3a719eb28": "d7a4f14f2c2765e0631a2a1418525f3d",
".git/objects/cf/eb8d5bc5f74d8498bcc0a16d06b732179f1c28": "bb865584d109815014803904a6473cd3",
".git/objects/d0/01a9f7062d1724c63a1365747646f7868dae5d": "4f8ec5703eaf6428f440007911e1a1ce",
".git/objects/d4/e3c25a596493b35d6b2b31c230c8f76787723e": "a825aa699d0ecd8537b2239228ba3f44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/40b46aa340d5ec82e902ac6f788f632dc250e5": "b3991389125907800b289aa658eeae0e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/95bea182b0c9f78fb64e1c69b0257711e6456b": "c1bd41abd0c5f815cf0c845418f5314a",
".git/objects/f1/9b5ffa1429e82a148c006312b3c1bd3c26e428": "4eaee65583626daed4a1739ef6339906",
".git/objects/f4/0a7cd96170e92e3f765d1690f8aa7264604ca3": "42689e3010f189cd09c5d70e8bb6d367",
".git/objects/f6/17358d0863f4a92f8e3cab8742005a066f3f8b": "a630b6d79e8e48f126bd74947068a843",
".git/objects/f7/c8bef5b415a5cefcd5621766eaefbea65bc7cc": "d4b61a77b8077e16ddc5bce9f80d2e07",
".git/objects/fa/b849ed4d7db4f7d59c83184a185c54172ad4f6": "c473704155edef76cdd85ea8c79fa233",
".git/refs/heads/master": "164375414b3f39c4c8d8447b9be089a4",
".git/refs/remotes/origin/master": "164375414b3f39c4c8d8447b9be089a4",
"assets/AssetManifest.json": "ef84967e5ac2109c62de68c1e443c929",
"assets/Assets/ammar.jpg": "19f9ebd8987c3fe2f14bdaa8fa4f99ef",
"assets/Assets/ammar2.jpg": "672e6e142dac318ad390d912715d6e7d",
"assets/Assets/ammr21.jpg": "c8cba99131f876f772c1b7b38aa37ae1",
"assets/Assets/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/Assets/hosin112.jpg": "1e27d6bce4e433cc6cd1476ee7915cc9",
"assets/Assets/hosin212.jpg": "961ff45e434e55c8d334e8e0a34c6a5a",
"assets/Assets/pubg.jpg": "fcc1c9559237474e3a0e6e66c7d2cd95",
"assets/Assets/zed.jpg": "10dab2bc784fba6030d763b566a57a79",
"assets/Assets/zen.jpg": "540cacd010df9054297f49e071ee91f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f8009c11346c4ef85d5e101e81f852c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5fe129d2abf90ea0e07971320c0cd4aa",
"/": "5fe129d2abf90ea0e07971320c0cd4aa",
"main.dart.js": "329ad7ca4ba38eb6ab8ea5ae33b3aecd",
"manifest.json": "321d00e0a44ef0a0c384701c4a1c84c4",
"version.json": "2119f882b50b1d0207169754ac20d29b"
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
