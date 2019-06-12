import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const LISTING_QUERY = graphql`
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
            date
          }
          excerpt
        }
      }
    }
  }
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-weight: 300;
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <Post key={edge.node.frontmatter.slug}>
          <h2>{edge.node.frontmatter.title}</h2>
          <Link to={`/case-studies${edge.node.frontmatter.slug}`}>
            Read More
          </Link>
        </Post>
      ))
    }
  />
)

export default Listing
