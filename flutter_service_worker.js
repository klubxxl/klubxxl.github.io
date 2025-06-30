'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5db4b1462561ab7e5b63e67e22039be0",
"version.json": "4db125faed78294ce4ff4065c6d51736",
"splash/img/light-2x.png": "5a207514fa8a0a01a59b497803fab8f8",
"splash/img/dark-4x.png": "9c7cf8a0deed54d63ff7f238c574b6a8",
"splash/img/light-3x.png": "d521bb8616e62a1f505a2624e4643c49",
"splash/img/dark-3x.png": "d521bb8616e62a1f505a2624e4643c49",
"splash/img/light-4x.png": "9c7cf8a0deed54d63ff7f238c574b6a8",
"splash/img/dark-2x.png": "5a207514fa8a0a01a59b497803fab8f8",
"splash/img/dark-1x.png": "5a425da57aa99e84f868451a03c7c57a",
"splash/img/light-1x.png": "5a425da57aa99e84f868451a03c7c57a",
"index.html": "87e49b9ba88d31d8ae7bffb9bc5fb454",
"/": "87e49b9ba88d31d8ae7bffb9bc5fb454",
"main.dart.js": "e6cc4162c46aa3daf37711f947a8547a",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "8712f1c4870003af0e0534319066bc38",
"icons/Icon-192.png": "13465079041935da14ecf289d0288bc5",
"icons/Icon-maskable-192.png": "13465079041935da14ecf289d0288bc5",
"icons/Icon-maskable-512.png": "5a207514fa8a0a01a59b497803fab8f8",
"icons/Icon-512.png": "5a207514fa8a0a01a59b497803fab8f8",
"manifest.json": "6ff18a2cc656628169a2cbe8a70eff56",
"assets/AssetManifest.json": "a257e14af15e866a96e84d175bbaf29e",
"assets/NOTICES": "12fb90226016b60486a32f9376cabf53",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "10c5ad9359bcab45f2e8ceb2de90698b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b5091871423ccce7e4dd16f3b53481aa",
"assets/fonts/MaterialIcons-Regular.otf": "0e562f9115a3c028570645f04bf02e8b",
"assets/assets/launcher/app_icon.png": "94bdf9dcec6a8891ac99f5ab94c6272b",
"assets/assets/cards/icon/whale-svgrepo-com.svg": "f06906695c22003ac7d760c37bba2b3e",
"assets/assets/cards/icon/single-bed-svgrepo-com.svg": "64e1969c9d5d1c0fcb9d159cc8dcdc6d",
"assets/assets/cards/icon/sleeping-svgrepo-com.svg": "86c6c65236306e96a72474dceee48a5a",
"assets/assets/cards/icon/bridge-svgrepo-com.svg": "9e4f434759231c6e80564bfbd82e7ae3",
"assets/assets/cards/icon/disguised-face-svgrepo-com.svg": "604201302ae2e9016c1fd06ffcd7a6a8",
"assets/assets/cards/icon/camera-svgrepo-com.svg": "b1d7a7f158603f1b819f4734883f2c9f",
"assets/assets/cards/icon/tangerine-svgrepo-com.svg": "ebebd4ada33d795745188983c91d553c",
"assets/assets/cards/icon/juice-svgrepo-com.svg": "b72a9921145d2c849eb208a486d24d7d",
"assets/assets/cards/icon/roast-chicken-svgrepo-com.svg": "b16919b6032c9adaba6b38b768a169c8",
"assets/assets/cards/icon/ocean-svgrepo-com.svg": "e336d29e2ab3edb1e10520a0fd0c82e0",
"assets/assets/cards/icon/nauseated-face-svgrepo-com.svg": "6dac20cd8dcdb4551373899065dcd7d8",
"assets/assets/cards/icon/ice-cream-svgrepo-com.svg": "de36bca69b84951ad779bd294d740b8c",
"assets/assets/cards/icon/beer-svgrepo-com.svg": "c08b9c01dee93a14710ea757336a0985",
"assets/assets/cards/icon/opinion-svgrepo-com.svg": "9f0c9ac53a9068a1011fefd50cca8eaa",
"assets/assets/cards/icon/cherry-svgrepo-com.svg": "0d57ce459368704ef3d77cb43a1696f2",
"assets/assets/cards/icon/face-no-mouth-svgrepo-com.svg": "6d7dcccb03e0df35ce6d238856ddef17",
"assets/assets/cards/icon/popsicle-svgrepo-com.svg": "06b74e00b576c29b71621648ca62c3c0",
"assets/assets/cards/icon/shirt-svgrepo-com.svg": "db4a51e058e9819d3ec7cc78c485c3fa",
"assets/assets/cards/icon/face-melt-svgrepo-com.svg": "119e37a9d8fd8711fb44f06d4901d6f3",
"assets/assets/cards/icon/drinks-svgrepo-com.svg": "fb7275250c9b4852809d75b7501b2f19",
"assets/assets/cards/icon/drooling-face-svgrepo-com.svg": "ec17aa31c95d393bd7cac58c33d8d64b",
"assets/assets/cards/icon/toilet-paper-svgrepo-com.svg": "478ef9715e8149e6c23d7f74358d34c6",
"assets/assets/cards/icon/tomato-svgrepo-com.svg": "1c0a9df2e137578afe667afc6a25146a",
"assets/assets/cards/icon/penguin-svgrepo-com.svg": "4f8ec0eb7aa49cd6323771ce50de1460",
"assets/assets/cards/icon/face-meh-svgrepo-com.svg": "69aab888cd9124f7c847a9b35742cfea",
"assets/assets/cards/icon/cowboy-hat-face-svgrepo-com.svg": "df7df40ecf51be989e8fbd0945b3d8d5",
"assets/assets/cards/icon/cake-svgrepo-com.svg": "bc2f7194dfac95efe270f49a7e78d9ca",
"assets/assets/cards/icon/ruins-svgrepo-com.svg": "42d6eb437d77e8f6ff41c9fe8e211ac0",
"assets/assets/cards/icon/dizzy-face-svgrepo-com.svg": "e9e047c7193868b0c47b7b42cd21a370",
"assets/assets/cards/icon/jellyfish-svgrepo-com.svg": "738b59f75c6be5d0fc07e1adb0b63015",
"assets/assets/cards/icon/litchi-svgrepo-com.svg": "c9914561542087639815ef3304844294",
"assets/assets/cards/icon/face-with-symbols-on-mouth-svgrepo-com.svg": "6eea6126094ef2c8de2f53d184600741",
"assets/assets/cards/icon/face-with-head-bandage-svgrepo-com.svg": "f54d32595697ef1fd37fbd9e44578e69",
"assets/assets/cards/icon/beautiful-scenery-1-svgrepo-com.svg": "b6d643d847705c00ac115ac4341bd0c5",
"assets/assets/cards/icon/wild-boar-svgrepo-com.svg": "e209b0d49fa90d9a0b7fd3bd39373a3f",
"assets/assets/cards/icon/honor-svgrepo-com.svg": "05f6e44e0235a5a43c8aac99e663ea7b",
"assets/assets/cards/icon/objects-color-skull-svgrepo-com.svg": "dd5ad48043b3fbbd9fb2bd8cd462b7cf",
"assets/assets/cards/icon/face-laugh-svgrepo-com.svg": "ddcb554baa9b3a770dd173ccee840372",
"assets/assets/cards/icon/coordinate-svgrepo-com.svg": "90d83c8f942c7b55a7d6e1ba86405234",
"assets/assets/cards/icon/face-blowing-a-kiss-svgrepo-com.svg": "c609a7969c5fc33e0122072567ce9095",
"assets/assets/cards/icon/face-smile-svgrepo-com.svg": "5b379035bf4feecc7bb24ab4664f0c40",
"assets/assets/cards/icon/parking-svgrepo-com.svg": "41d747e3b530f10a67fbf3f92f2aff99",
"assets/assets/cards/icon/tape-line-svgrepo-com.svg": "e4053c6486d21b68d0a7b1a9825ed045",
"assets/assets/cards/icon/hugging-face-svgrepo-com.svg": "7fadacdc4551eecc98ade6b05590caea",
"assets/assets/cards/icon/home-1-svgrepo-com.svg": "09e5ab754e09567e4dcf85cff1c95146",
"assets/assets/cards/icon/safe-svgrepo-com.svg": "7af13c2668e8c014e772dd01a70f731e",
"assets/assets/cards/icon/fire-svgrepo-com.svg": "b08284dbbdf0d10b60a46a69f499cc36",
"assets/assets/cards/icon/coconut-svgrepo-com.svg": "b65bd37ca188a411d90efad0f14c6bdb",
"assets/assets/cards/icon/design-color-mouse-08-svgrepo-com.svg": "3d357ecbe3b8e77b59afb41de35bd015",
"assets/assets/cards/icon/face-cry-svgrepo-com.svg": "96cb8ae5a9c0d2380171195e03522a1a",
"assets/assets/cards/icon/sea-1-svgrepo-com.svg": "8b068f9766e7563dc368b9aae1cbec0a",
"assets/assets/cards/icon/sneakers-svgrepo-com.svg": "52a249c26c7393541ca320ce43b4a537",
"assets/assets/cards/icon/cocktail-svgrepo-com.svg": "a6aa8e5db413bf8e895f972b6a4e77d1",
"assets/assets/cards/icon/tea-svgrepo-com.svg": "ad02f01e35d948a13c28ce9834163d2d",
"assets/assets/cards/icon/ui-color-1-eye-17-svgrepo-com.svg": "a51738dc54626f1f07f4832adc984dde",
"assets/assets/cards/icon/hot-pot-svgrepo-com.svg": "7c422ae7c5521245cf088eec82c5e0a1",
"assets/assets/cards/icon/mountain-1-svgrepo-com.svg": "52f0aecfe1206e6a92cd35d2b8eda090",
"assets/assets/cards/icon/heart-svgrepo-com.svg": "2ff852b7a78c82c20542ccef39b66a20",
"assets/assets/cards/icon/objects-color-bear-svgrepo-com.svg": "09035a77fd8e358f911bde3b05573a0d",
"assets/assets/cards/icon/clown-face-svgrepo-com.svg": "63398f97cee6d7458c5c21c451442125",
"assets/assets/cards/icon/emoticons-color-robot-svgrepo-com.svg": "4546520d8e2c9b5ea0bfc0417071d6c9",
"assets/assets/cards/icon/crocodile-svgrepo-com.svg": "2faa3327a5155e44a1f8a6e503d3d3bc",
"assets/assets/cards/icon/kiwi-svgrepo-com.svg": "ee9feeb38116a67df6fdcefb5cac3c08",
"assets/assets/cards/icon/browse-svgrepo-com.svg": "c3e94ad3cea4e77d15ff055b5d629da4",
"assets/assets/cards/icon/grape-svgrepo-com.svg": "a56b33360998ef6cd41bc03aa30c829a",
"assets/assets/cards/icon/village-svgrepo-com.svg": "f8a552faf187f7d07b4edf3c4df19894",
"assets/assets/cards/icon/pizza-svgrepo-com.svg": "25a0134c9f57002d6ee30dea608e9dd0",
"assets/assets/cards/icon/wine-svgrepo-com.svg": "1115d2709e4d384b8cf7162f9911a650",
"assets/assets/cards/icon/cold-face-svgrepo-com.svg": "d2db9362e7d8060fe7cef1f83a36facf",
"assets/assets/cards/icon/grinning-face-with-smiling-eyes-svgrepo-com.svg": "32c82381c6cdc1b5b471fa3fd11de440",
"assets/assets/cards/icon/watermelon-svgrepo-com.svg": "9e5daf1ebc4d4f0b1eba5e05691c5bcd",
"assets/assets/cards/icon/face-in-clouds-svgrepo-com.svg": "9f07b6dea26485f8652b54da3c8c4d70",
"assets/assets/cards/icon/fir-svgrepo-com.svg": "2678abd98824d719c34b50e7e58458e4",
"assets/assets/cards/icon/lion-svgrepo-com.svg": "ff5b09e00bfa9e0d215297faa0bf9a30",
"assets/assets/cards/icon/desert-1-svgrepo-com.svg": "684470888f2b601b4045238828287a69",
"assets/assets/cards/icon/egg-svgrepo-com.svg": "9319db901694413a450dfe840c94d981",
"assets/assets/cards/icon/pineapple-svgrepo-com.svg": "85162a886118effd6d4936c4375f6910",
"assets/assets/cards/icon/no-flames-svgrepo-com.svg": "573db4f642b74a2bd412880741230911",
"assets/assets/cards/icon/emoticons-color-devil-svgrepo-com.svg": "7098e64f9b8963225af837a48647c092",
"assets/assets/cards/icon/face-with-medical-mask-svgrepo-com.svg": "ffe3f9878b631b56847a9802b11eb645",
"assets/assets/cards/icon/pay-by-credit-card-svgrepo-com.svg": "5a9b7bbc157d2316680f53f4818de5a1",
"assets/assets/cards/icon/no-smoking-svgrepo-com.svg": "ef8314def5eb31dec67a35b74002e512",
"assets/assets/cards/icon/crab-svgrepo-com.svg": "6dec935a4e08cd5245a09c312e6d61c9",
"assets/assets/cards/icon/island-svgrepo-com.svg": "0a995e549841ea3f5c45d507cc06fe0b",
"assets/assets/question_decks/travel_en.json": "f4a62c92b7aa623630edbdd18567a1bd",
"assets/assets/question_decks/family_pl.json": "628a3981b0aaf75a473d0cdde6798938",
"assets/assets/question_decks/couples_en.json": "13d89ceaed668fa88022af3b92e68893",
"assets/assets/question_decks/friends_pl.json": "4310b5c5be4119f6c36875c9a730dc39",
"assets/assets/question_decks/erotic_en.json": "41a1161ffa973f068c60fafcc9088041",
"assets/assets/question_decks/family_en.json": "ff00e4989b22e1e702de0b6a6b8b9759",
"assets/assets/question_decks/travel_pl.json": "615f4c57351b0861ca12ffc876f62c5c",
"assets/assets/question_decks/erotic_pl.json": "2f0db888e762e7fe5030dd8575614a91",
"assets/assets/question_decks/friends_en.json": "6e63890faa7904583394635441f01dec",
"assets/assets/question_decks/couples_pl.json": "ac2780eb3bdbceaf45341d5c070e3afe",
"assets/assets/question_decks/drinking_en.json": "ee0bd6b3b88c385a8aafcb53d2b928db",
"assets/assets/question_decks/drinking_pl.json": "40cf1cb4b751d07695b34dc76b14ccd0",
"assets/assets/question_decks/general_en.json": "9e70a676278ffc544244480eebecb383",
"assets/assets/question_decks/work_en.json": "18ed419e74b359b67083510e943ab84c",
"assets/assets/question_decks/work_pl.json": "bcbf2b8a2466e04e9958e1c12739c482",
"assets/assets/question_decks/general_pl.json": "1e866674b5d217ed2a63ece60bd1c8ee",
"assets/assets/question_decks/food_pl.json": "db821058288c2b078a77bdca9de56375",
"assets/assets/question_decks/gaming_en.json": "caac2b781e139b05057ec2450e4c8a58",
"assets/assets/question_decks/gaming_pl.json": "6bf0a87f10494c0be4296effb8edd2d4",
"assets/assets/question_decks/food_en.json": "719369446ffc7486eb0398561db772e2",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
