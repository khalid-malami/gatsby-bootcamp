import React from 'react'
import  { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact me</h1>
            <p>The best way to contact me is <Link to="https://twitter.com/XHussler" target="_blank">@XHussler</Link> on Twitter!</p>
        </Layout>
    )
}

export default ContactPage