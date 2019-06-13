import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CaseStudyListing from '../components/caseStudyListing'
import Hero from '../components/hero'

const ListingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(autofit, 1fr);
  article {
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
    padding: 1rem;
    border: 4px solid #cccccc;
    grid-column: span 2;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(width);
  }
`

const ListingTitle = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  h2 {
    font-weight: 400;
    font-size: 2.5rem;
  }
`

const ContactButton = styled.button`
  background: #000;
  font-size: 2rem;
  font-family: Roboto Mono;
  font-weight: 400;
  padding: 10px 10px;
  a {
    color: #fff;
    text-decoration: none;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
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
      <ContactButton>
        <Link to="/contact">Work With Us</Link>
      </ContactButton>
    </div>
  </Layout>
)

export default IndexPage
