import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
            <Layout>
                <Head title="About"/>
                <h1>About Me</h1>
                <p>I am a software developer from Nigeria</p>
                <p>To reach me, visit the <Link to="/contact">Contact</Link> page</p>
            </Layout>
    )
}

export default AboutPage