const htmlmin = require('html-minifier')
require('dotenv').config()

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
