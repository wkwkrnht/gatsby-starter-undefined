import PropTypes from 'prop-types';
import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import { config } from 'config'
import Highlight from 'react-highlight'

import '../node_modules/musubii/docs/css/musubii.css'
import '../css/style.scss'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
        <article>
            <Helmet
                title={`${post.title} | ${config.blogTitle}`}
                link={[
                    {"rel": "stylesheet", "href": `//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/${config.syntaxTheme || 'default'}.min.css`},
                ]}
            />
            <header className="article-header">
                <img src={get(page, 'data.eyecatch', page.path)} alt="eyacatch" className="card-img" />
                <div>
                    <h1 className="heading is-xxl is-strong">
                        {post.title}
                    </h1>
                    {moment(post.date).format('YYYY.MM.DD')}
                </div>
            </header>
            <Highlight innerHTML={true} className="article-main">
                {post.body}
            </Highlight>
        </article>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: PropTypes.object,
}

export default MarkdownWrapper
