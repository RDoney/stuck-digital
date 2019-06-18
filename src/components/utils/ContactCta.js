import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import ContactButton from './ContactButton'

const CTA_IMG_QUERY = graphql`
  query {
    file(name: { regex: "/camera/" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          src
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const CtaWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  margin: 4rem auto;
  width: 90%;
  h3 {
    font-size: 2rem;
    max-width: 300px;
    margin-top: 0;
  }
  .image-wrapper {
    width: 80%;
    padding: 2.5rem;
    border: 2px solid #cccccc;
  }
`

const ContactCta = () => (
  <StaticQuery
    query={CTA_IMG_QUERY}
    render={({ file }) => (
      <CtaWrapper>
        <div>
          <h3>Ready To Grow Your Business?</h3>
          <ContactButton />
        </div>
        <div className="image-wrapper">
          <Img fluid={file.childImageSharp.fluid} />
        </div>
      </CtaWrapper>
    )}
  />
)

export default ContactCta
