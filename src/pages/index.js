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
  grid-auto-flow: dense;

  .articleLink {
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
    p {
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
    .articleLink {
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

const HomeCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10vh;
  text-align: center;
  p {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      title="We Are Stuck Digital."
      description="We help ecommerce businesses scale profitability through paid social and media buying."
    />
    <ListingWrapper>
      <ListingTitle>
        <h2>Case Studies</h2>
      </ListingTitle>
      <CaseStudyListing />
    </ListingWrapper>
    <HomeCTA>
      <p>Is your business ready to scale?</p>
      <ContactButton />
    </HomeCTA>
  </Layout>
)

export default IndexPage
