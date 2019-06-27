import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: #000;
  border: 1px solid #000;
  font-family: Roboto Mono;
  font-weight: 400;
  padding: 10px 10px;
  max-width: 220px;
  font-size: 27px;
  transition: all 0.2s;
  &:hover {
    background: #fff;
    a {
      color: #000;
      padding: 10px;
    }
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.2s;
  }
`

const ContactButton = () => (
  <StyledButton>
    <Link to="/contact">Hit Us Up</Link>
  </StyledButton>
)

export default ContactButton
