let worker
let isRefreshing

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

function refresh() {
    if (isRefreshing) {
        return
    }
    window.location.reload()
    isRefreshing = true
}

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
    const isInitialInstall = !navigator.serviceWorker.controller
    navigator.serviceWorker.register('/sw.js').then(reg => {
        reg.addEventListener('updatefound', () => {
            worker = reg.installing
            worker.addEventListener('statechange', () => {
                if (worker.state === 'installed') {
                    if (!isInitialInstall) {
                        showNewVersionNotice()
                    }
                }
            })
        })
    })

    navigator.serviceWorker.addEventListener('controllerchange', refresh)
    window.addEventListener('load', offlineHandler)
}
