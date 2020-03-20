const pluginRss = require('@11ty/eleventy-plugin-rss')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

const filters = require('./_eleventy/filters.js')
const transforms = require('./_eleventy/transforms.js')

require('dotenv').config()

module.exports = function(config) {
    // Plugins
    config.addPlugin(pluginRss)

    // Filters
    Object.keys(filters).forEach(filterName => {
        config.addFilter(filterName, filters[filterName])
    })

    // Transform
    Object.keys(filters).forEach(transformName => {
        config.addTransform(transformName, transforms[transformName])
    })

    // Markdown
    const mdlib = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true
    }).use(markdownItAnchor, {
        permalink: true,
        permalinkClass: 'h-anchor',
        permalinkSymbol: '#'
    })
    config.setLibrary('md', mdlib)

    // Layouts
    config.addLayoutAlias('base', 'base.njk')
    config.addLayoutAlias('post', 'post.njk')

    // Pass-through files
    config.addPassthroughCopy('src/static')
    config.addPassthroughCopy('src/robots.txt')

    // Deep-Merge
    config.setDataDeepMerge(true)

    // Base Config
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data'
        },
        templateFormats: ['njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
}
