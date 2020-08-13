// Variables
let worker
let isRefreshing

// Notification class, handles on-screen toast messages
class Notification {
    constructor(content, timeout = false) {
        this.container = document.getElementById('notifications')
        this.content = content
        this.timeout = timeout

        this.init()
    }

    init() {
        this.container.innerHTML = ''
        this.build()
        this.show()

        if (this.timeout) {
            window.setTimeout(() => this.hide(), this.timeout)
        }
    }

    build() {
        this.notification = document.createElement('div')
        this.notification.classList.add('notification')

        if (typeof this.content === 'string') {
            const msg = document.createElement('p')
            msg.innerText = this.content
            this.notification.appendChild(msg)
        } else {
            this.notification.appendChild(this.content)
        }

        this.container.appendChild(this.notification)
    }

    show() {
        window.setTimeout(() => this.notification.classList.add('active'), 0)
    }

    hide() {
        const transitionHandler = () => {
            this.notification.removeEventListener(
                'transitionend',
                transitionHandler
            )
            this.container.removeChild(this.notification)
        }
        this.notification.addEventListener('transitionend', transitionHandler)
        this.notification.classList.remove('active')
    }
}

// Refresh helper func to reload the page for Service Worker update
function refresh() {
    if (isRefreshing) {
        return
    }
    window.location.reload()
    isRefreshing = true
}

// Build an display a message to announce an updated Service Worker
function showNewVersionNotice() {
    const onUpdate = () => worker.postMessage({ action: 'skipWaiting' })
    const content = document.createElement('div')
    const msg = document.createElement('p')
    const updateBtn = document.createElement('button')

    msg.innerText = 'A new version of this site is available.'
    updateBtn.innerText = 'update'
    updateBtn.addEventListener('click', onUpdate)
    content.appendChild(msg)
    content.appendChild(updateBtn)
    content.classList.add('prompt')

    new Notification(content)
}

// Build and display a message to announce a loss of connectivity
function offlineHandler() {
    const checkConnectivity = () => {
        if (typeof navigator.onLine !== 'undefined' && !navigator.onLine) {
            new Notification(
                'You are currently offline. You can still use this site, but content might not be up to date.',
                10000
            )
        }
    }

    window.addEventListener('offline', checkConnectivity)
    checkConnectivity()
}

if ('serviceWorker' in navigator) {
    // Check if a SW is present to begin with
    const isInitialInstall = !navigator.serviceWorker.controller

    // Service Worker Registration
    navigator.serviceWorker.register('/sw.js').then((reg) => {
        reg.addEventListener('updatefound', () => {
            worker = reg.installing
            worker.addEventListener('statechange', () => {
                // Listen for the update event and wait till the new SW is ready
                if (worker.state === 'installed' && !isInitialInstall) {
                    showNewVersionNotice()
                }
            })
        })
    })

    // If the new Service Worker is ready and the user has clicked update, reload the page
    navigator.serviceWorker.addEventListener('controllerchange', refresh)

    // Initially check if the client is offline
    window.addEventListener('load', offlineHandler)
}

document.documentElement.classList.remove('no-js')
