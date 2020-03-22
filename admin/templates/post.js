import htm from 'https://unpkg.com/htm?module'
import format from 'https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module'

const html = htm.bind(h)

// Preview component for a Post
const Post = createClass({
    render() {
        const entry = this.props.entry
        return html`
            <main class="main">
                <article class="post">
                    <header>
                        <h1>${entry.getIn(['data', 'title'], null)}</h1>
                        <time
                            >${format(
                                entry.getIn(['data', 'date'], new Date()),
                                'dd LLLL yyyy, T'
                            )}</time
                        >
                    </header>
                    ${this.props.widgetFor('body')}
                </article>
            </main>
        `
    }
})

export default Post
