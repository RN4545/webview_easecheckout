'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"vercel.json": "3a90f382bd54730a15c4729f755e94c0",
"flutter_bootstrap.js": "866b37bb672bbfe86fb8b27cbe9bf739",
"assets/AssetManifest.bin.json": "9b84125fadacedfe09986b89d4b34dd7",
"assets/assets/images/new_emi.svg": "013b531a8551c86561360aa549730011",
"assets/assets/images/bank_of_baroda.png": "ac6d7aaf5c9388931422a17488f16a5a",
"assets/assets/images/axis_bank.png": "75d1d7b3b6e67fab18e6939698be9e5b",
"assets/assets/images/new_netbanking.svg": "7e36ab7b47cc97e06066aadc6e4e0d1f",
"assets/assets/images/emi.svg": "dc743a1bca961f9edd106c3e57b70102",
"assets/assets/images/phonepe.svg": "d70ce02809c1dadc7956e23d3dc7dcbc",
"assets/assets/images/info.svg": "1dc1db673b71df26f26be20789b8d72f",
"assets/assets/images/loader2.json": "09b6d03b37e5a8c9255e5f2a82f1ddf6",
"assets/assets/images/simpl.png": "b372535bde78beac73bd254d113a5283",
"assets/assets/images/new_white_wallet.svg": "6e12ce93d4304262d3893a8fbc2aa3cf",
"assets/assets/images/kotak_mahindra_bank.png": "a595194d8041cf5f0c8a864736c7e78e",
"assets/assets/images/new_help.svg": "960a8b7d704adf728680b9a17e22d94b",
"assets/assets/images/app_logo.png": "0bdf622bfdec07b1292b88ff54c7f9ca",
"assets/assets/images/new_Bank.svg": "353a140f931f58dc8b385fd55b45576f",
"assets/assets/images/new_white_upi.svg": "17b9dd48f9a235cd3eff28dc37ab7226",
"assets/assets/images/upi.svg": "3ccbbdef19b0f2b5c768f3254387964d",
"assets/assets/images/cards.svg": "ed712be799931b728fec7156fa7c60ad",
"assets/assets/images/gps_permission.json": "429a0dafc7ef52be5d270833aa7dce3e",
"assets/assets/images/thumbs_up.svg": "9a3c5b7edaa402a3c04df395e6910923",
"assets/assets/images/jodetx_logo.png": "7aa0fe988e442a642cbf321cc9ac2009",
"assets/assets/images/hdfc_bank.png": "a14c369ae5806228d7dc4b8a00400419",
"assets/assets/images/wallet_white.svg": "0ba2eb5b9a629a3a03cf173dfcc0f6ca",
"assets/assets/images/upi_full.svg": "3317957aa87b94e49e1179ab134282d4",
"assets/assets/images/new_cards.svg": "68bb3fcff05b8eb428081470a34ecbc6",
"assets/assets/images/no_connection_image.png": "6ad441afde1845c3ef0b5f57fe274aba",
"assets/assets/images/down_chevron.svg": "cf3a669dd690c7481e7164b9e0a982ea",
"assets/assets/images/indusind_bank.png": "5dbfdefaefa664a9cf64fa4d54ed44e5",
"assets/assets/images/chevron.svg": "4f4438ab19ecd12cafb216357cf7f433",
"assets/assets/images/disconnect_vpn.json": "bf26a554dda5c90fcbc164529b06d91a",
"assets/assets/images/add.svg": "2a9d718b0f64e662eac79025af0d45c9",
"assets/assets/images/india.svg": "23b0b4b493e0b2a68edaea2e65e5d31b",
"assets/assets/images/bank_white.svg": "a30ee6291b3cee82c6088ee3b570289c",
"assets/assets/images/qr.svg": "5829d0e8873bfb1aeea1c30bf89dff11",
"assets/assets/images/icici_bank.png": "710aa952666d741f0e97dbeed115c32f",
"assets/assets/images/net_banking.svg": "e277400186a6bd1cc9dd0de34e63afb5",
"assets/assets/images/ringtwo.png": "46ef149910e2ff889df4873017b3deb5",
"assets/assets/images/dream11_logo.svg": "cbca2c841de050caac159c47bffba182",
"assets/assets/images/bank.svg": "05658e5193fcd722ab66d944ccf39170",
"assets/assets/images/new_white_cards.svg": "b3478cfe61be67f2103d2e6ea6068548",
"assets/assets/images/ringthree.png": "58941e7121a45780144545ad7d2f8c24",
"assets/assets/images/alert.json": "6b763d28cb121325784e728972f768f4",
"assets/assets/images/india_country.svg": "23b0b4b493e0b2a68edaea2e65e5d31b",
"assets/assets/images/ringone.png": "26a5707eb13a6d6117fed3860093eb44",
"assets/assets/images/success_bar.png": "722d3139e77379757183c4bcb6ef34fd",
"assets/assets/images/coming_soon.svg": "077fdce79442ab1833f39dfd9b6e1d4b",
"assets/assets/images/lazypay.png": "ad7b1b5c3e8e803ef7b9f1fd26e641a5",
"assets/assets/images/Jodetx_Logo_final.png": "5cb4fa56c8e432313488f79d3c9e6a91",
"assets/assets/images/gpay.svg": "26e538e6e372f2b366e4b5b62dd9b1da",
"assets/assets/images/new_wallet.svg": "975b01d355e685699839dcb8dfbbf4fe",
"assets/assets/images/mobikwik.png": "ed0389c3e4981ec079547f984a642f17",
"assets/assets/images/info_bar.png": "7cb6e3e4b178ae887a554bb750a5a2f5",
"assets/assets/images/delete.svg": "632d86b165e1c75b828d4c8f5957f5ad",
"assets/assets/images/ringfour.png": "649cf9908c1f08045340c7d0ed416ebe",
"assets/assets/images/new_upi.svg": "17b9dd48f9a235cd3eff28dc37ab7226",
"assets/assets/images/visa.svg": "577fa447edd8b798dddfd5c7b776fb38",
"assets/assets/images/new_QR.svg": "e25254d18bf66045d019417e16bb3938",
"assets/assets/images/new_paylater.svg": "53503fa6f5466ce4fea4cdada8274f71",
"assets/assets/images/warning_bar.png": "647cb4d6a8f9d8a488ff402739a52158",
"assets/assets/images/starting_lodder.json": "f12db3d95535fb963189b6f4cfd30e9e",
"assets/assets/images/error_bar.png": "c69ed81a83ffa483bc0f345e94179147",
"assets/assets/images/wallet.svg": "35892fd8042d040ba7ddc19fe2b9f9ac",
"assets/assets/images/thumbs_down.svg": "a8f849b6414313b387aff491579be797",
"assets/assets/images/background.jpeg": "bd36d420ac112c8726552370274774c8",
"assets/assets/images/state_bank.png": "311000991f11098d91fece9c25c89eaa",
"assets/assets/images/mastercard.svg": "f1a6b709bd5738a3bf928e0730f500b3",
"assets/assets/images/amazonpay.png": "38ac1c17eb780da4e6b24711f8fdbd55",
"assets/assets/images/denger_zone.json": "74476cfb8e53270cd93e107ef14fb6d1",
"assets/assets/images/new_white_netbanking.svg": "76e20daa031fca55aac270471b76e10d",
"assets/assets/images/paytm.svg": "025424d4c9f7d1cc2f66dead50fc0a3a",
"assets/assets/images/credit_card_white.svg": "0ec0aa94f9f8e9aac62bed7490d58c66",
"assets/assets/images/question_mark.svg": "b566cf6309256fa4dfa76036d6732c2a",
"assets/assets/lottie/sparkle_animation.json": "1808204e27a90a6e34ad41257c316345",
"assets/fonts/MaterialIcons-Regular.otf": "02842ff0ad3c4eb678ff959b4842b172",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1ffad859cd1cbf05050279068494d04a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "004b60abcb4a9377a0dc85f7f1b9610d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "81d3bf3669b1103bc79ecd128d2ae282",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "1e8d08e06e4409917f6d740134f58842",
"assets/NOTICES": "7d3bed8e201a62454ec1572097d1bcd4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "f1379658c25253d6abc76aacbdb22c09",
"version.json": "38d46c8e454409a66cc137205e56c7fa",
"main.dart.js": "ef84549db9febb46f4bf410bc6ae3fcf",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"index.html": "38a203034c03a9b50e5ca3aa1302b2cc",
"/": "38a203034c03a9b50e5ca3aa1302b2cc"};
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
