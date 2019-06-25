import React from 'react'
import { Link } from 'gatsby'
import { animated } from 'react-spring'
import styled from 'styled-components'

const MobileLinks = styled(animated.div)`
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
    font-size: 3rem;
    margin: 3rem auto;
  }
  @media (min-width: 600px) {
    display: none;
  }
`

const MobileNav = ({ style }) => (
  <MobileLinks style={style}>
    <Link to="/about">ABOUT</Link>
    <Link to="/case-studies">CASE STUDIES</Link>
    <Link to="/contact">CONTACT</Link>
  </MobileLinks>
)

export default MobileNav
