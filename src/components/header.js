import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import Logo from '../images/stuck-digital-logo.png'

const HeaderWrapper = styled(animated.div)`
  color: black;
  margin-bottom: 1.4rem;
  font-size: 1rem;
  img {
    margin: 0 2rem;
    padding: 0 1rem;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    display: none;
    z-index: 11;
  }
  @media (max-width: 991px) {
    img {
      margin: 0;
    }
  }
  @media (max-width: 600px) {
    button {
      display: block;
    }
  }
`

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  h1 {
    margin: 0;
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
  @media (max-width: 600px) {
    display: none;
  }
`

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background: #010101;
  z-index: 10;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
  a {
    color: #fff;
    font-size: 30px;
    margin: 3rem auto;
  }
  @media (min-width: 600px) {
    display: none;
  }
`

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <header>
      <HeaderWrapper style={props}>
        <Navbar>
          <h1>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              <img style={{ width: '150px' }} src={Logo} alt="Stuck Digital" />
            </Link>
          </h1>
          <PageLinks>
            <Link to="/about">ABOUT</Link>
            <Link to="/case-studies">CASE STUDIES</Link>
            <Link to="/contact">CONTACT</Link>
          </PageLinks>
          {/* TODO: prevent scroll when menu is open - put full height element underneath? */}
          {menuOpen && (
            <MobileLinks>
              <Link to="/about">ABOUT</Link>
              <Link to="/case-studies">CASE STUDIES</Link>
              <Link to="/contact">CONTACT</Link>
            </MobileLinks>
          )}
        </Navbar>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
          Burger
        </button>
      </HeaderWrapper>
    </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
