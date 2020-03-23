// this file will be imported into the service worker

self.addEventListener('message', function(event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting()
    }
})
