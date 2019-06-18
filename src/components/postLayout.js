import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { isAbsolute } from 'path'
import Layout from './layout'
import Hero from './hero'
import ContactCta from './utils/ContactCta'

const ResultsWrapper = styled.div`
  margin: 2rem;
  hr {
    border: 1px solid #cccccc;
    margin: 3rem auto;
  }
`
const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  div {
    max-width: 200px;
    border: 2px solid #cccccc;
    text-align: center;
  }
`

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Layout>
        <Hero
          title={markdownRemark.frontmatter.title}
          description={markdownRemark.frontmatter.subtitle}
        >
          <Img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
            fluid={markdownRemark.frontmatter.cover_image.childImageSharp.fluid}
          />
        </Hero>
        <ResultsWrapper>
          <h2>Results</h2>
          <Results>
            {markdownRemark.frontmatter.results.map(metric => (
              <div>
                <p>{metric}</p>
              </div>
            ))}
          </Results>
          <hr />
        </ResultsWrapper>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <ContactCta />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        cover_image {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        subtitle
        results
      }
    }
  }
`
