import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CaseStudyListing from '../components/caseStudyListing'
import Hero from '../components/hero'
import ContactButton from '../components/utils/ContactButton'

const ListingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(autofit, 1fr);
  article {
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
    border: 1px solid #cccccc;
    position: relative;
    height: 30vw;
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
`

const ListingTitle = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  height: 16vw;
  h2 {
    font-weight: 400;
    font-size: 2.5rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      title="We Are Stuck Digital."
      description="White-labeled paid social and media buying for agencies and businesses."
    />
    <ListingWrapper>
      <ListingTitle>
        <h2>Case Studies</h2>
      </ListingTitle>
      <CaseStudyListing />
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
