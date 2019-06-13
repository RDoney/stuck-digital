import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: #000;
  font-size: 2rem;
  font-family: Roboto Mono;
  font-weight: 400;
  padding: 10px 10px;
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
