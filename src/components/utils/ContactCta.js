import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ContactButton from './ContactButton'

const CtaWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  h3 {
    font-size: 2rem;
    max-width: 300px;
  }
`
// TODO: query for camera image

const ContactCta = () => (
  <CtaWrapper>
    <div>
      <h3>Ready To Grow Your Business?</h3>
      <ContactButton />
    </div>
  </CtaWrapper>
)

export default ContactCta
