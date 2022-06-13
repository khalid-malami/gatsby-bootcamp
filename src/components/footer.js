import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { footer } from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className={ footer }>
            <p>Created by {data.site.siteMetadata.author}, 2022</p>
        </footer>
    )
}

export default Footer