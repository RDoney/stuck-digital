import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const LISTING_QUERY = graphql`
  query {
    allMarkdownRemark(
      limit: 7
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
            cover_image {
              relativePath
            }
          }
          excerpt
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
        </article>
      ))
    }
  />
)

export default CaseStudyListing
