'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"splash/img/dark-1x.png": "5a425da57aa99e84f868451a03c7c57a",
"splash/img/light-2x.png": "5a207514fa8a0a01a59b497803fab8f8",
"splash/img/light-4x.png": "9c7cf8a0deed54d63ff7f238c574b6a8",
"splash/img/light-1x.png": "5a425da57aa99e84f868451a03c7c57a",
"splash/img/dark-4x.png": "9c7cf8a0deed54d63ff7f238c574b6a8",
"splash/img/light-3x.png": "d521bb8616e62a1f505a2624e4643c49",
"splash/img/dark-2x.png": "5a207514fa8a0a01a59b497803fab8f8",
"splash/img/dark-3x.png": "d521bb8616e62a1f505a2624e4643c49",
"manifest.json": "6ff18a2cc656628169a2cbe8a70eff56",
"main.dart.js": "0add7b9290e4d18835b2b59166a6c9ef",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"index.html": "87e49b9ba88d31d8ae7bffb9bc5fb454",
"/": "87e49b9ba88d31d8ae7bffb9bc5fb454",
"assets/packages/party_design/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/party_design/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/packages/party_design/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/packages/party_design/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/packages/party_design/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/party_design/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/party_design/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/party_design/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/party_design/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/party_design/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/party_design/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/party_design/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/party_design/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/party_design/assets/fonts/Chewy-Regular.ttf": "53ee0977b5f9f3afc1d18b4419264c8b",
"assets/packages/party_design/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/packages/party_design/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/packages/party_design/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/packages/party_design/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/packages/party_design/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/AssetManifest.bin.json": "ab262930f50242638fee3405ae65461f",
"assets/AssetManifest.bin": "7043ac7f18a1907041e23b728d6dae7b",
"assets/NOTICES": "a2d6cdd4d3cd3b6e6f4b7ed10d8589cd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/cards/icon/face-no-mouth-svgrepo-com.svg": "e89d7a7bdb89b937779664799f1ce46c",
"assets/assets/cards/icon/watermelon-svgrepo-com.svg": "d8d3283745e4442d93f7e744d7de98e2",
"assets/assets/cards/icon/tomato-svgrepo-com.svg": "982df2841a8cf6c952d1330a1942667e",
"assets/assets/cards/icon/face-melt-svgrepo-com.svg": "144ac2c98694cf7da9d993d7b032cdf1",
"assets/assets/cards/icon/dizzy-face-svgrepo-com.svg": "e9e047c7193868b0c47b7b42cd21a370",
"assets/assets/cards/icon/honor-svgrepo-com.svg": "a267d9a2624b307291eccf4204ee4d1e",
"assets/assets/cards/icon/egg-svgrepo-com.svg": "216be2f6d204ae866fce3becdd8f5ce4",
"assets/assets/cards/icon/pay-by-credit-card-svgrepo-com.svg": "ffea367e18d096673c481b0ee7039467",
"assets/assets/cards/icon/tangerine-svgrepo-com.svg": "f921722c3f65a1ffdfd8abf9ce29c657",
"assets/assets/cards/icon/clown-face-svgrepo-com.svg": "63398f97cee6d7458c5c21c451442125",
"assets/assets/cards/icon/cold-face-svgrepo-com.svg": "d2db9362e7d8060fe7cef1f83a36facf",
"assets/assets/cards/icon/pizza-svgrepo-com.svg": "be899f1a28b1602325b46d534e345496",
"assets/assets/cards/icon/parking-svgrepo-com.svg": "961170dcff74b16c38731dab54145e75",
"assets/assets/cards/icon/crocodile-svgrepo-com.svg": "dd0038da2cd81e6f1f3edcbf0e8735b5",
"assets/assets/cards/icon/browse-svgrepo-com.svg": "5152fbe59aae7f21e2377e207e7f5ebd",
"assets/assets/cards/icon/ruins-svgrepo-com.svg": "fc82d29e4ac94fa897b57724e66b4e94",
"assets/assets/cards/icon/tape-line-svgrepo-com.svg": "e4053c6486d21b68d0a7b1a9825ed045",
"assets/assets/cards/icon/cake-svgrepo-com.svg": "183cb5f0d45b2db86d1240b0e33ce6ab",
"assets/assets/cards/icon/emoticons-color-robot-svgrepo-com.svg": "41fbef131c9a67074b1d117c2ab6f584",
"assets/assets/cards/icon/heart-svgrepo-com.svg": "ec1806012207af19a8e71d26762e71c9",
"assets/assets/cards/icon/face-in-clouds-svgrepo-com.svg": "9f07b6dea26485f8652b54da3c8c4d70",
"assets/assets/cards/icon/drinks-svgrepo-com.svg": "7d219c6768f66e7584c1e1661262d868",
"assets/assets/cards/icon/beautiful-scenery-1-svgrepo-com.svg": "2a83264a579e00b0bcf6e657aa83a664",
"assets/assets/cards/icon/toilet-paper-svgrepo-com.svg": "8a6cf05805da71f47e2e55d3ffe65c65",
"assets/assets/cards/icon/no-flames-svgrepo-com.svg": "ece332f2b609f257c89a913878812ba7",
"assets/assets/cards/icon/roast-chicken-svgrepo-com.svg": "8f7b643805001c6d452ca3b15d55c775",
"assets/assets/cards/icon/face-with-head-bandage-svgrepo-com.svg": "f54d32595697ef1fd37fbd9e44578e69",
"assets/assets/cards/icon/village-svgrepo-com.svg": "dde1cb53f26a3a5712a70ed66b71c4ef",
"assets/assets/cards/icon/face-laugh-svgrepo-com.svg": "259892dd52bda5c3bf913732aa472342",
"assets/assets/cards/icon/beer-svgrepo-com.svg": "088a125057bf36e5cfa2bf791b98c9b9",
"assets/assets/cards/icon/face-with-symbols-on-mouth-svgrepo-com.svg": "6eea6126094ef2c8de2f53d184600741",
"assets/assets/cards/icon/camera-svgrepo-com.svg": "8f2b6ec9e9f09506c32ef59607e39366",
"assets/assets/cards/icon/penguin-svgrepo-com.svg": "5997547e2f12164829e832b46075276c",
"assets/assets/cards/icon/nauseated-face-svgrepo-com.svg": "6dac20cd8dcdb4551373899065dcd7d8",
"assets/assets/cards/icon/hugging-face-svgrepo-com.svg": "7fadacdc4551eecc98ade6b05590caea",
"assets/assets/cards/icon/jellyfish-svgrepo-com.svg": "9a23e0cd4ced67553f6e506e47cd3870",
"assets/assets/cards/icon/coordinate-svgrepo-com.svg": "9af34615868ab719b61ec9541a8f19fd",
"assets/assets/cards/icon/objects-color-bear-svgrepo-com.svg": "0c6e4f653145661492b8275491e188b0",
"assets/assets/cards/icon/grinning-face-with-smiling-eyes-svgrepo-com.svg": "32c82381c6cdc1b5b471fa3fd11de440",
"assets/assets/cards/icon/face-smile-svgrepo-com.svg": "322c4db1a798b167c2af60b52609c5c6",
"assets/assets/cards/icon/sleeping-svgrepo-com.svg": "86c6c65236306e96a72474dceee48a5a",
"assets/assets/cards/icon/whale-svgrepo-com.svg": "23caab1fe6ebed8cb42e45b021086b7d",
"assets/assets/cards/icon/ocean-svgrepo-com.svg": "b13c3a193f3da1ea328bd5b243cb884e",
"assets/assets/cards/icon/face-cry-svgrepo-com.svg": "b81e074a548c017a2cf5e8057046aa34",
"assets/assets/cards/icon/coconut-svgrepo-com.svg": "6fa0eb882208e8a2ce42aee4bd56991f",
"assets/assets/cards/icon/face-meh-svgrepo-com.svg": "c69813344870f5544378472264619531",
"assets/assets/cards/icon/sneakers-svgrepo-com.svg": "52a249c26c7393541ca320ce43b4a537",
"assets/assets/cards/icon/popsicle-svgrepo-com.svg": "eb93a95b7e5a10e15c2736afa0a26d7d",
"assets/assets/cards/icon/face-with-medical-mask-svgrepo-com.svg": "ffe3f9878b631b56847a9802b11eb645",
"assets/assets/cards/icon/ui-color-1-eye-17-svgrepo-com.svg": "2039fa89f0c18cb9f862ab90775b573f",
"assets/assets/cards/icon/litchi-svgrepo-com.svg": "292713206c8eb4ffce4e90d255d39e38",
"assets/assets/cards/icon/grape-svgrepo-com.svg": "41bd05a09c071f6237dddd205a8a68e2",
"assets/assets/cards/icon/emoticons-color-devil-svgrepo-com.svg": "73c5cbd9454addaaeacc8dfe6a7063a9",
"assets/assets/cards/icon/pineapple-svgrepo-com.svg": "670ed89ee027a26ca2063662fccaca0b",
"assets/assets/cards/icon/island-svgrepo-com.svg": "067cdc1edf4e00030b9a9622bb6317f8",
"assets/assets/cards/icon/single-bed-svgrepo-com.svg": "f6a7543e725ad98a1bc306142988a4fe",
"assets/assets/cards/icon/fire-svgrepo-com.svg": "b08284dbbdf0d10b60a46a69f499cc36",
"assets/assets/cards/icon/disguised-face-svgrepo-com.svg": "604201302ae2e9016c1fd06ffcd7a6a8",
"assets/assets/cards/icon/no-smoking-svgrepo-com.svg": "610b2d4021e86c2c999d3941c7f27c34",
"assets/assets/cards/icon/shirt-svgrepo-com.svg": "db4a51e058e9819d3ec7cc78c485c3fa",
"assets/assets/cards/icon/fir-svgrepo-com.svg": "b49bb9d63ed623df0e46c5b64de308e8",
"assets/assets/cards/icon/cocktail-svgrepo-com.svg": "fc8cd708a5c3b6e654519ad3b1cfc9e4",
"assets/assets/cards/icon/face-blowing-a-kiss-svgrepo-com.svg": "c609a7969c5fc33e0122072567ce9095",
"assets/assets/cards/icon/design-color-mouse-08-svgrepo-com.svg": "be5d2b0a17daab340037646711f1c3d5",
"assets/assets/cards/icon/safe-svgrepo-com.svg": "db5db5e1d83fb10e53369110d71a95d7",
"assets/assets/cards/icon/mountain-1-svgrepo-com.svg": "38ec50f96c8a2cb9418a0ea4e4769004",
"assets/assets/cards/icon/objects-color-skull-svgrepo-com.svg": "ef1d2fcc68e961679f946210b126f6ec",
"assets/assets/cards/icon/home-1-svgrepo-com.svg": "ed5c1d8b45716fa26bd646a1aa3a85df",
"assets/assets/cards/icon/cowboy-hat-face-svgrepo-com.svg": "df7df40ecf51be989e8fbd0945b3d8d5",
"assets/assets/cards/icon/opinion-svgrepo-com.svg": "517d103bd855a706b9ee931a08f2bfad",
"assets/assets/cards/icon/hot-pot-svgrepo-com.svg": "1d46f8fb9246501c3ad2817762bdda3b",
"assets/assets/cards/icon/cherry-svgrepo-com.svg": "ff2850713c081fd935d28e24b2ee25d6",
"assets/assets/cards/icon/tea-svgrepo-com.svg": "3808bceb71fd344e008dc853ec3d1b18",
"assets/assets/cards/icon/juice-svgrepo-com.svg": "a7b6e0e9d6167b47ba7012b7822753e8",
"assets/assets/cards/icon/crab-svgrepo-com.svg": "7a4ab9d2c20b7d6fa37c5074919dd5ac",
"assets/assets/cards/icon/drooling-face-svgrepo-com.svg": "ec17aa31c95d393bd7cac58c33d8d64b",
"assets/assets/cards/icon/desert-1-svgrepo-com.svg": "9d30556ade57528863c485d08f70acdd",
"assets/assets/cards/icon/wild-boar-svgrepo-com.svg": "722fb4ab1a230c7421d71ba57e9cb2c4",
"assets/assets/cards/icon/kiwi-svgrepo-com.svg": "7eac49e346507fb4906f5747b2a85d58",
"assets/assets/cards/icon/wine-svgrepo-com.svg": "26dee43dff8acd6d20510ce79424aca7",
"assets/assets/cards/icon/bridge-svgrepo-com.svg": "ca1a495f01951921d7378bed179aad47",
"assets/assets/cards/icon/lion-svgrepo-com.svg": "550a5c4c6da287c4cbe91b4c18802d61",
"assets/assets/cards/icon/ice-cream-svgrepo-com.svg": "4af6fb9b4a57ba176d404d4b4ceb41c1",
"assets/assets/cards/icon/sea-1-svgrepo-com.svg": "3d4dfd86a4230f9f905113c05cec81fe",
"assets/assets/question_decks/work_en.json": "821bda8e59a731e2e9be4786efb618d3",
"assets/assets/question_decks/friends_pl.json": "8ba5083aed7b413e860a546fbf32b657",
"assets/assets/question_decks/drinking_pl.json": "c223dc0d22fa5374bfdc16457b416bc2",
"assets/assets/question_decks/general_pl.json": "bb4ae69f1e6b4b730dbb1ea7e422f477",
"assets/assets/question_decks/erotic_pl.json": "c1908ab2aaa592f0e0408866fe328c38",
"assets/assets/question_decks/gaming_en.json": "7ed12800c921de73372a5c341b3e4fca",
"assets/assets/question_decks/family_en.json": "d367f0a79bb51376a9cf3d7f467f8588",
"assets/assets/question_decks/couples_pl.json": "46c8daca68391a18dc12c271c6aadaa5",
"assets/assets/question_decks/food_pl.json": "1eecc9e43043997e92e22f22be1008b1",
"assets/assets/question_decks/travel_pl.json": "b17885af82465a37daa479b5ac989b42",
"assets/assets/question_decks/work_pl.json": "bc624a20dbf2992f8becdab5643e4373",
"assets/assets/question_decks/family_pl.json": "1b0390d0f691c0c2814a1ac7a05e7b9d",
"assets/assets/question_decks/drinking_en.json": "57a0da397504b1e84e4bb42a3565a493",
"assets/assets/question_decks/gaming_pl.json": "4a56e87542a9a8eb8e6894465a330658",
"assets/assets/question_decks/travel_en.json": "13799031f8993dd6d75788f68d15ee7c",
"assets/assets/question_decks/general_en.json": "e28f5ed238d1a7ccaf88aa7677a5bb9e",
"assets/assets/question_decks/friends_en.json": "2f8dd3e56306a02cf0b94461d6d601d8",
"assets/assets/question_decks/food_en.json": "f2bb55f07c365c11bdb426821fce6dd2",
"assets/assets/question_decks/couples_en.json": "39f3fd3c5b477db06c744bc03bf4b68c",
"assets/assets/question_decks/erotic_en.json": "a5e0cdda9b0bbfd1995539b838a8017c",
"assets/assets/launcher/app_icon.png": "94bdf9dcec6a8891ac99f5ab94c6272b",
"assets/AssetManifest.json": "3e77644b8f5a315e3d41027eefa85a4a",
"assets/fonts/MaterialIcons-Regular.otf": "e4ceb0dadfd0d32e906cd718f24afa80",
"assets/FontManifest.json": "acace0f12d0ba3951dde7f86d542d316",
"favicon.png": "8712f1c4870003af0e0534319066bc38",
"icons/Icon-512.png": "5a207514fa8a0a01a59b497803fab8f8",
"icons/Icon-maskable-192.png": "13465079041935da14ecf289d0288bc5",
"icons/Icon-192.png": "13465079041935da14ecf289d0288bc5",
"icons/Icon-maskable-512.png": "5a207514fa8a0a01a59b497803fab8f8",
"flutter_bootstrap.js": "021b86611f792c1e73cfa03968e1050d",
"version.json": "4db125faed78294ce4ff4065c6d51736"};
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
