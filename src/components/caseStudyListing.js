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
          <Img
            fluid={edge.node.frontmatter.cover_image.childImageSharp.fluid}
          />
          <h2 style={{ fontWeight: '400' }}>{edge.node.frontmatter.title}</h2>
          <Link to={`/case-studies${edge.node.frontmatter.slug}`}>
            Read More
          </Link>
        </article>
      ))
    }
  />
)

export default CaseStudyListing
