import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const TEAM_QUERY = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/team/" } }) {
      edges {
        node {
          frontmatter {
            job
            name
            position
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  img {
    width: 100%;
  }
  div {
    margin-top: 1.5rem;
  }
  .team-name {
    color: #fff;
    background-color: #000;
    display: inline-block;
    font-size: 1.5rem;
    padding: 5px 10px;
  }
  p {
    font-size: 1.2rem;
    margin: 5px 0;
  }
  @media (max-width: 991px) {
    .team-name {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

const CaseStudyListing = () => (
  <StaticQuery
    query={TEAM_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <Card key={edge.node.frontmatter.image.childImageSharp.fluid.src}>
          <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} />
          <div>
            <p className="team-name">{edge.node.frontmatter.name}</p>
            <p>{edge.node.frontmatter.job}</p>
          </div>
        </Card>
      ))
    }
  />
)

export default CaseStudyListing
