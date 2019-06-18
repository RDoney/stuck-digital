import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LISTING_QUERY = graphql`
  query {
    allMarkdownRemark(
      limit: 7
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/case-studies/" } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            cover_image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

const CaseStudyListing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <article key={edge.node.frontmatter.slug}>
          <h2 style={{ fontWeight: '400' }}>{edge.node.frontmatter.title}</h2>
          <Link to={`/case-studies${edge.node.frontmatter.slug}`}>
            Read More
          </Link>
          <Img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
            fluid={edge.node.frontmatter.cover_image.childImageSharp.fluid}
          />
        </article>
      ))
    }
  />
)

export default CaseStudyListing
