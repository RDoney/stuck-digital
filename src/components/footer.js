import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from '../images/stuck-digital-logo.png'
import FooterListing from './footerListing'

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 10px;
  border-top: 2px solid #cccccc;
`

const SmallDivider = styled.hr`
  color: #cccccc;
  width: 50px;
  margin-left: 0;
`
const FooterListWrapper = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px;
  li {
    padding: 0.25rem 0;
  }
`

const Footer = () => (
  <footer>
    <FooterWrapper>
      <div>
        <h3>CONTACT</h3>
        <p>info@stuckdigital.com</p>
        <SmallDivider />
        <p>
          HQ: <br />
          3011 S Croddy Way <br /> Appleton, WI 54914
        </p>
      </div>
      <div>
        <h3>ABOUT</h3>
        <p>
          White-labeled paid social and media buying for agencies and
          businesses.
        </p>
        <Link to="/about">Learn More</Link>
      </div>
      <div>
        <h3>CASE STUDIES</h3>
        <FooterListWrapper>
          <FooterListing />
        </FooterListWrapper>
      </div>
      <div>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <img style={{ width: '100%' }} src={Logo} alt="Stuck Digital" />
        </Link>
      </div>
    </FooterWrapper>
  </footer>
)

export default Footer
