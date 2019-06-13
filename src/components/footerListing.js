import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FOOTER_LISTING_QUERY = graphql`
  query {
    allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/case-studies/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Footer = () => (
  <StaticQuery
    query={FOOTER_LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <li key={edge.node.frontmatter.slug}>
          <Link to={`/case-studies${edge.node.frontmatter.slug}`}>
            {edge.node.frontmatter.title}
          </Link>
        </li>
      ))
    }
  />
)

export default Footer
