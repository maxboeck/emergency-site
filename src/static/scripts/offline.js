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
        window.setTimeout(() => this.$el.classList.add('active'), 0)
    }

    hide() {
        const transitionHandler = () => {
            this.$el.innerHTML = ''
            this.$el.setAttribute('hidden', true)
            this.$el.removeEventListener('transitionend', transitionHandler)
        }
        this.$el.addEventListener('transitionend', transitionHandler)
        this.$el.classList.remove('active')
    }
}

function showInitialServiceWorkerNotice() {
    new Notification('This site is now available offline.')
}

function showNewVersionNotice() {
    const onUpdate = () => worker.postMessage({ action: 'skipWaiting' })
    const content = document.createElement('p')
    const updateBtn = document.createElement('button')

    content.innerText = 'A new version of this site is available.'
    updateBtn.innerText = 'update'
    updateBtn.addEventListener('click', onUpdate)
    content.appendChild(updateBtn)

    new Notification(content)
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

    window.addEventListener('offline', checkConnectivity)
    checkConnectivity()
}
window.addEventListener('load', offlineHandler)

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => {
        reg.addEventListener('updatefound', () => {
            worker = reg.installing
            worker.addEventListener('statechange', () => {
                if (worker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        showNewVersionNotice()
                    }
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
