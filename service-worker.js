"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/home_page_react/index.html","ee43f6f39e68924e83149a2b034a0251"],["/home_page_react/static/css/main.c54ff4c5.css","70bb236d74c34d80c5cbd7d0faf2353c"],["/home_page_react/static/js/0.5eb037b7.chunk.js","a68cb335adfd4f15db49c03186314d62"],["/home_page_react/static/js/1.860a6c90.chunk.js","7c369491b47a342c45dba0d0c374aaef"],["/home_page_react/static/js/2.42506c84.chunk.js","8dc2f196222d355471c82f99f675678d"],["/home_page_react/static/js/3.e2df75e7.chunk.js","775f2322ebdc330063eac4f18e5d7a71"],["/home_page_react/static/js/4.e3ce520f.chunk.js","5604c34e492410e82135e429f274d3e5"],["/home_page_react/static/js/5.86f35530.chunk.js","eca766c323e718e023dcf4da54f80253"],["/home_page_react/static/js/main.b376de5f.js","b4e9b4e7816edb5a63bbe1d3b4c7c813"],["/home_page_react/static/media/MIT-campus.e895c753.jpg","e895c753a5546b98f3e85e56b0ff92f8"],["/home_page_react/static/media/cambridge_university.c3acea47.jpg","c3acea4769fc25b0fb0f5bd093a6a357"],["/home_page_react/static/media/csharp.2b5bab64.jpg","2b5bab6427a23b349185833ef09f3eb7"],["/home_page_react/static/media/eivindeide.db471cda.jpg","db471cda634f62896f55fceee6e475a9"],["/home_page_react/static/media/entrepreneur.c76f9db4.jpg","c76f9db4d7f9f76c767ece6f3175dac8"],["/home_page_react/static/media/feedback.6dc2d55e.png","6dc2d55e152362194f6f57c280b19310"],["/home_page_react/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/home_page_react/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/home_page_react/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/home_page_react/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/home_page_react/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/home_page_react/static/media/golden-gate-bridge.6f601c43.jpg","6f601c43fa85b7d580593305cb36d041"],["/home_page_react/static/media/hackmiteivind.8c3a4a11.jpg","8c3a4a11a58de3e3fb2014921e9688e1"],["/home_page_react/static/media/html_css.d45483a2.png","d45483a2263c838156578eda2bc883cc"],["/home_page_react/static/media/latex.4491439a.png","4491439a678ac61536f0cf710a1c13bf"],["/home_page_react/static/media/leadership.8b789117.jpg","8b789117227191641fbbb00e706ad135"],["/home_page_react/static/media/m3avionics.4afcf1db.jpg","4afcf1db88a0b7bd5adfa3c6cc6ec703"],["/home_page_react/static/media/matlab.701683a2.png","701683a287029d244aeeeaa47d686793"],["/home_page_react/static/media/nevada.70576d05.jpg","70576d059512b63fbdcc26b9bae7848a"],["/home_page_react/static/media/nodejs.f8dab57d.png","f8dab57d048fabd69ea16c67e1615b86"],["/home_page_react/static/media/oslo_katedralskole-1.32ce99b7.jpg","32ce99b7c4a31ec95af0b3111584a8d8"],["/home_page_react/static/media/sommerskolen_2.01a6e693.jpg","01a6e69397c6f79089ea14fb0fa67882"],["/home_page_react/static/media/swiftnav.12c50a9b.png","12c50a9b394d143772aa456119caf121"],["/home_page_react/static/media/unix.8fa04477.png","8fa044771f77ebe62be5853fcbff7c18"],["/home_page_react/static/media/woodchuck.de42f1ae.jpg","de42f1ae64ebf723bc97a5a5e4b9fbb3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/home_page_react/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});