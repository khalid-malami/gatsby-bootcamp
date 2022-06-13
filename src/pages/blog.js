import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { posts } from './blog.module.scss'
import { post } from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
    `)
    
    return(
        <Layout>
            <h1>Blog</h1>
            <ol className={posts}>
                {data.allContentfulBlogPost.edges.map((edge) => (
                    <li className={post}>
                      <Link to={`./${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li> 
                ))}
            </ol>
        </Layout>
    )
}

export default BlogPage