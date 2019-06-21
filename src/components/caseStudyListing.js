import React, { useState, useRef } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'

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

const CaseStudyListing = () => {
  const [ref, inView] = useInView

  return (
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(edge => (
          <Link
            className="articleLink"
            key={edge.node.frontmatter.slug}
            to={`/case-studies${edge.node.frontmatter.slug}`}
          >
            <h2 style={{ fontWeight: '400' }}>{edge.node.frontmatter.title}</h2>
            <p>Read More</p>
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
          </Link>
        ))
      }
    />
  )
}

export default CaseStudyListing
