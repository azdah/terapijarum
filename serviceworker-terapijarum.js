importScripts('https://rawcdn.githack.com/azdah/terapijarum/653f69acf0264a7ac0c90be373d9a2ce02605769/clients-terapijarum.js');
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('ramaibeud').then(function(cache) {
return cache.addAll([
'/'
]);
})
);
});
self.addEventListener('fetch', function(event) {
console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});
