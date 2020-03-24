import htm from 'https://unpkg.com/htm?module'
import format from 'https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module'

const html = htm.bind(h)

// Preview component for a Post
const Post = createClass({
    render() {
        const entry = this.props.entry
        const title = entry.getIn(['data', 'title'], null)
        const date = entry.getIn(['data', 'date'], new Date())
        const formattedDate = date ? format(date, 'dd LLLL yyyy') : ''

        return html`
            <main class="main">
                <article class="post">
                    <header>
                        <h1>${title}</h1>
                        <time>${formattedDate}</time>
                    </header>
                    <div class="content">
                        ${this.props.widgetFor('body')}
                    </div>
                </article>
            </main>
        `
    }
})

export default Post
