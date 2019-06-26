import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import FontRegUrl from '../../static/fonts/roboto-mono-v6-latin-regular.woff2'
import FontBoldUrl from '../../static/fonts/roboto-mono-v6-latin-700.woff2'

import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    @media (max-width: 900px) {
      font-size: 15px;
    }
    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
  body {
    font-family: Roboto Mono;
    @font-face {
    font-family: 'Roboto Mono';
    src: url(${FontRegUrl}) format('woff2');
    font-weight: 400;
    font-style: normal;
    }
    @font-face {
      font-family: 'Roboto Mono';
      src: url(${FontBoldUrl}) format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    /* a {
      color: #000;
      position: relative;
    }
    a:before {
      height: 8px;
      background-color: #ee4c72;
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      z-index: -1;
      } */
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
