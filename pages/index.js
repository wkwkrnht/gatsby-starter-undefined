import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import include from 'underscore.string/include'
import moment from 'moment'

class BlogIndex extends React.Component {
  render () {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, 'data.date').reverse()
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page.map() => (
        get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ))
    return (
        <div className="index">
            <Helmet
            title={config.blogTitle}
            meta={[
                {"name": "description", "content": "Sample blog"},
                {"name": "renderer", "content": "webkit"},
                {"name": "HandheldFriendly", "content": "true"},
                {"name": "theme-color", "content": "#03a9f4"},
                {"name": "msapplication-TileColor", "content": "#03a9f4"},
            ]}
            link={[
                //{"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Tauri"},
            ]}
            />
            <ul className="card-list">
                {visiblePages.map((page) => (
                    <li key={page.path} >
                        <Link className="article-card" style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
                            <img src={get(page, 'data.eyecatch', page.path)} alt="eyacatch" className="card-img" />
                            <div className="card-meta">
                                {get(page, 'data.title', page.path)}
                                {moment(page.data.date).format('YYYY.MM.DD')}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object,
}

export default BlogIndex