import React from 'react'
import styled from 'styled-components'

const FOOTER_LISTING_QUERY = graphql`
  query {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
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
  <footer>
    © {new Date().getFullYear()}
    <p>Stuck Digital</p>
  </footer>
)

export default Footer
