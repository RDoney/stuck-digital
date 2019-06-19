import React from 'react'

import styled from 'styled-components'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'
import Listing from '../components/caseStudyListing'
import ContactButton from '../components/utils/ContactButton'

const ListingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;

  article {
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
    position: relative;
    min-height: 30vw;
    overflow: hidden;
    grid-column: span 2;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    h2 {
      position: relative;
      z-index: 2;
    }
    a {
      position: relative;
      z-index: 2;
      color: #000;
      background-color: #fff;
      font-size: 1.5rem;
      width: 150px;
      text-align: center;
    }
  }
  @media (max-width: 991px) {
    margin-top: 3rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    article {
      margin: 1rem;
      height: 50vw;
    }
  }
`

const ListingTitle = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15vw;
  h2 {
    font-weight: 400;
    font-size: 3.25vw;
    @media (max-width: 991px) {
      font-size: 32px;
    }
    @media (max-width: 600px) {
      font-size: 25px;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Case Studies" />
    <Hero title="Case Studies" />
    <ListingWrapper>
      <Listing />
    </ListingWrapper>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10vh',
      }}
    >
      <ContactButton />
    </div>
  </Layout>
)

export default IndexPage
