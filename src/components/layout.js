/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');
    font-family: Roboto Mono, monospace;
    font-size: 16px;
    @media (max-width: 900px) {
      font-size: 15px;
    }
    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1240px;
  padding: 0px 1.0875rem 1.45rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentWrapper>
          <main>{children}</main>
          <Footer />
        </ContentWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
