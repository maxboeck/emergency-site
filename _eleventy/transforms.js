const htmlmin = require('html-minifier')

module.exports = {
    htmlmin: function(content, outputPath) {
        if (
            outputPath &&
            outputPath.endsWith('.html') &&
            process.env.NODE_ENV === 'production'
        ) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
        }
        return content
    }
}
