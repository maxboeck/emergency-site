let worker
let isRefreshing

class Notification {
    constructor(content, timeout = false) {
        this.$el = document.getElementById('notification')
        this.content = content
        this.timeout = timeout

        this.init()
    }

    init() {
        this.$el.innerHTML = ''

        if (typeof this.content === 'string') {
            this.$el.innerHTML = this.content
        } else {
            this.$el.appendChild(this.content)
        }

        this.show()
        if (this.timeout) {
            window.setTimeout(() => this.hide(), this.timeout)
        }
    }

    show() {
        this.$el.removeAttribute('hidden')
    }

    hide() {
        this.$el.setAttribute('hidden', true)
    }
}

function offlineHandler() {
    const checkConnectivity = () => {
        if (typeof navigator.onLine !== 'undefined' && !navigator.onLine) {
            new Notification(
                'You are currently offline. You can still use this site, but content might not be up to date.',
                5000
            )
        }
    }
    checkConnectivity()
    window.addEventListener('offline', checkConnectivity)
}
window.addEventListener('load', offlineHandler)

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => {
        reg.addEventListener('updatefound', () => {
            worker = reg.installing
            worker.addEventListener('statechange', () => {
                if (worker.state === 'installed') {
                    const onUpdate = () =>
                        worker.postMessage({ action: 'skipWaiting' })
                    const content = document.createElement('p')
                    const updateBtn = document.createElement('button')

                    content.innerText =
                        'A new version of this site is available.'
                    updateBtn.innerText = 'update'
                    updateBtn.addEventListener('click', onUpdate)
                    content.appendChild(updateBtn)

                    new Notification(content)
                }
            })
        })
    })

    navigator.serviceWorker.addEventListener('controllerchange', function() {
        if (isRefreshing) {
            return
        }
        window.location.reload()
        isRefreshing = true
    })
}
