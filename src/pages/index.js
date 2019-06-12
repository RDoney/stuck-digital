import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Listing from '../components/listing'
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Listing />
  </Layout>
)

export default IndexPage
