module.exports = [
    {
        path: "dist/index.html",
        webpack: false,
        name: 'index',
        gzip: false
    }, {
        path: 'dist/posts/**/*.html',
        webpack: false,
        name: 'posts',
        gzip: false
    }, {
        path: 'dist/404/*.html',
        webpack: false,
        name: '404',
        gzip: false
    }
]