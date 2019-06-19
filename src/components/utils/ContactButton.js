import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: #000;
  font-family: Roboto Mono;
  font-weight: 400;
  padding: 10px 10px;
  max-width: 220px;
  font-size: 27px;
  @media (max-width: 600px) {
    font-size: 24px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`

const ContactButton = () => (
  <StyledButton>
    <Link to="/contact">Work With Us</Link>
  </StyledButton>
)

export default ContactButton
