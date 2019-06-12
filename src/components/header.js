import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Logo from '../images/stuck-digital-logo.png'

const HeaderWrapper = styled.div`
  background: #efefef;
  color: black;
  margin-bottom: 1.4rem;
  font-size: 1rem;
  img {
    margin: 0.5rem 2rem;
    padding: 0 1rem;
  }
`

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  h1 {
    margin-bottom: 0;
  }
`

const PageLinks = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 5rem;
  a {
    text-decoration: none;
  }
  a:not(:last-child) {
    ::after {
      content: '|';
      padding: 0 1rem;
    }
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <HeaderWrapper>
      <Navbar>
        <h1>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            <img style={{ width: '100px' }} src={Logo} alt="Stuck Digital" />
          </Link>
        </h1>
        <PageLinks>
          <Link to="/about">ABOUT</Link>
          <Link to="/case-studies">CASE STUDIES</Link>
          <Link to="/contact">CONTACT</Link>
        </PageLinks>
      </Navbar>
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
