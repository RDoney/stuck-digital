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
                fluid(maxWidth: 300) {
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
        <div
          className="clientLogoImg"
          key={edge.node.childImageSharp.fluid.src}
        >
          <Img fluid={edge.node.childImageSharp.fluid} />
        </div>
      ))
    }
  />
)

export default ClientLogoData
