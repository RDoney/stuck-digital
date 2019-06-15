import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ClientLogoData = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { regex: "/clients/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 250) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allFile.edges.map(edge => (
        <Img
          fluid={edge.node.childImageSharp.fluid}
          key={edge.node.childImageSharp.fluid.src}
        />
      ))
    }
  />
)

export default ClientLogoData
