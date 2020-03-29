const htmlnano = require('htmlnano')

const preset = Object.assign(htmlnano.presets.safe, {
    collapseWhitespace: 'all',
    removeComments: 'all',
    removeRedundantAttributes: true
})

module.exports = {
    htmlmin: async function(content, outputPath) {
        if (
            outputPath &&
            outputPath.endsWith('.html') &&
            process.env.NODE_ENV === 'production'
        ) {
            const { html } = await htmlnano.process(
                content,
                {
                    removeUnusedCss: {
                        tool: 'purgeCSS'
                    }
                },
                preset
            )

            return html
        }

        return content
    }
}
