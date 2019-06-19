import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Logo from '../images/stuck-digital-logo.png'

const HeaderWrapper = styled.div`
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
  top: -788px;
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
class Header extends React.Component {
  state = {
    menuOpen: false,
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({
      menuOpen: true,
    })
    console.log(this.state)
  }

  render() {
    return (
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
                <img
                  style={{ width: '150px' }}
                  src={Logo}
                  alt="Stuck Digital"
                />
              </Link>
            </h1>
            <PageLinks>
              <Link to="/about">ABOUT</Link>
              <Link to="/case-studies">CASE STUDIES</Link>
              <Link to="/contact">CONTACT</Link>
            </PageLinks>
            <MobileLinks>
              <Link to="/about">ABOUT</Link>
              <Link to="/case-studies">CASE STUDIES</Link>
              <Link to="/contact">CONTACT</Link>
            </MobileLinks>
          </Navbar>
          <button type="button" onClick={this.handleClick}>
            Burger
          </button>
        </HeaderWrapper>
      </header>
    )
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
