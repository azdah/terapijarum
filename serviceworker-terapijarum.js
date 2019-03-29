importScripts('https://rawcdn.githack.com/azdah/terapijarum/653f69acf0264a7ac0c90be373d9a2ce02605769/clients-terapijarum.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       'https://code.jquery.com/jquery-3.3.1.min.js',
       '/?m=1',
       'https://rawcdn.githack.com/azdah/safelink/21744bcab4a6da6f39ea76ac84b7c0da54f3cbe6/safelink.js',
       'http://pagead2.googlesyndication.com/pagead/show_ads.js',
       'http://get.mirando.de/mirando.js',
       'https://rawcdn.githack.com/Arlina-Design/phantom/a24de19dd97cd07fa7f61e9fa29ae057e8a23dc8/antiboomclick.js',
       'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
     ]);
   })
 );
});
