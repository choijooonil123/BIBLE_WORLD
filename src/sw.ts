const CACHE = 'bw-v1';
const APP_SHELL = [
'/',
'/index.html',
'/manifest.webmanifest',
'/src/styles.css'
];


self.addEventListener('install', (e:any) => {
e.waitUntil(
caches.open(CACHE).then((c) => c.addAll(APP_SHELL))
);
});


self.addEventListener('activate', (e:any) => {
e.waitUntil(
caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
);
});


self.addEventListener('fetch', (e:any) => {
const url = new URL(e.request.url);
// 정적 파일: Cache First
if (url.origin === location.origin) {
e.respondWith(
caches.match(e.request).then(res => res || fetch(e.request))
);
return;
}
// 외부/동적: Network First → 실패 시 캐시
e.respondWith(
fetch(e.request).then(res => {
const resClone = res.clone();
caches.open(CACHE).then(c => c.put(e.request, resClone));
return res;
}).catch(() => caches.match(e.request))
);
});
