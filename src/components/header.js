import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import gatsbyLogo from '../images/gatsby-icon.png'

const HeaderWrapper = styled.div`
  background: #efefef;
  color: black;
  margin-bottom: 1.4rem;
  img {
    margin-bottom: 0;
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <HeaderWrapper>
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <img style={{ width: '100px' }} src={gatsbyLogo} alt="Gatsby Logo" />
        </Link>
      </h1>
    </HeaderWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
