const htmlnano = require('htmlnano')

const preset = Object.assign(htmlnano.presets.safe, {
    collapseWhitespace: 'conservative',
    removeComments: 'all',
    removeRedundantAttributes: true
})

module.exports = {
    htmlmin: async function (content, outputPath) {
        if (
            outputPath &&
            outputPath.endsWith('.html') &&
            process.env.ELEVENTY_ENV === 'production' ||
            process.env.NODE_ENV === 'production'
        ) {
            const { html } = await htmlnano.process(
                content,
                {
                    removeUnusedCss: {
                        tool: 'purgeCSS'
                    },
                    minifySvg: {
                        plugins: [
                            { removeViewBox: false }
                        ],
                    }
                },
                preset
            )

            return html
        }

        return content
    }
}
