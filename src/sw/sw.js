
// working with workbox
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// force debug
// workbox.setConfig({ debug: false })


workbox.routing.registerRoute(
    /// this is same domain
    /api\/.*\.json$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "api-cache", // also needed for expiration plugin
        networkTimeoytSeconds: 6, // don't wait on Lie-Fi for about a minute or 2
        plugins: [
            new workbox.expiration.Plugin({
                purgeOnQuotaError: false, // only non required
                maxEntries: 100,
                maxAgeSeconds: 20 * 86400 // 20 days
            })
        ]
    })
);

workbox.routing.registerRoute(
    /// this is same domain
    /assets\/.*\.*$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "api-cache", // also needed for expiration plugin
        networkTimeoytSeconds: 6, // don't wait on Lie-Fi for about a minute or 2
        plugins: [
            new workbox.expiration.Plugin({
                purgeOnQuotaError: true,
                maxEntries: 50,
                maxAgeSeconds: 20 * 86400 // 20 days
                
            })
        ]
    })
);

self.addEventListener('message', event => {
    if (event && event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting()
    }
})
