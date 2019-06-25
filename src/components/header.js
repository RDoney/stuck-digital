import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import MobileNav from './mobileNav'
import Logo from '../images/stuckDigitalLogo.svg'

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
    margin: 2rem 1rem;
    display: none;
    z-index: 11;
    background: none;
    border: none;
    svg {
      width: 25px;
      path {
        transform-origin: 18%;
      }
    }
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

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
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

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isMenuOpen
      ? 'translate3d(0,0,0) scale(1)'
      : 'translate3d(100%,-80%,0) scale(0.5)',
  })
  const burgerTop = useSpring({
    fill: isMenuOpen ? '#fff' : '#000',
    transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)',
  })
  const burgerBtm = useSpring({
    fill: isMenuOpen ? '#fff' : '#000',
    transform: isMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
  })
  const burgerMid = useSpring({
    fill: isMenuOpen ? 'green' : '#000',
    opacity: isMenuOpen ? '0' : '1',
  })
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <header>
      <HeaderWrapper style={fade}>
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
        </Navbar>
        <MobileNav style={navAnimation} />
        <button type="button" onClick={() => setMenuOpen(!isMenuOpen)}>
          <svg x="0px" y="0px" viewBox="0 0 512 512">
            <g>
              <g>
                <animated.path
                  style={burgerTop}
                  className="top"
                  d="M491.318,78.439H20.682C9.26,78.439,0,87.699,0,99.121c0,11.422,9.26,20.682,20.682,20.682h470.636
			c11.423,0,20.682-9.26,20.682-20.682C512,87.699,502.741,78.439,491.318,78.439z"
                />
              </g>
            </g>
            <g>
              <g>
                <animated.path
                  style={burgerMid}
                  className="middle"
                  d="M491.318,235.318H20.682C9.26,235.318,0,244.577,0,256s9.26,20.682,20.682,20.682h470.636
			c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"
                />
              </g>
            </g>
            <g>
              <g>
                <animated.path
                  style={burgerBtm}
                  className="bottom"
                  d="M491.318,392.197H20.682C9.26,392.197,0,401.456,0,412.879s9.26,20.682,20.682,20.682h470.636
			c11.423,0,20.682-9.259,20.682-20.682S502.741,392.197,491.318,392.197z"
                />
              </g>
            </g>
          </svg>
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
