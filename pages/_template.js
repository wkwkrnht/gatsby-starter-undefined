import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
        header = (
            <header>
                <h1>
                    <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={prefixLink('/')}
                    >
                        {config.blogTitle}
                    </Link>
                </h1>
                <span>
                    &copy;{config.blogtitle}&nbsp;{config.startyear}
                </span>
            </header>
        )
    } else {
        header = (
            <!--header-->
        )
    }

    return (
        {header}
        <main className="">
            {children}
        </main>
    )
  }
}

Template.propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    route: PropTypes.object,
}

export default Template
