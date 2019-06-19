import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
  height: 60vw;
  min-height: 400px;
  max-height: 800px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const HeroText = styled.div`
  width: 50vw;
  margin-left: 6rem;
  position: relative;
  z-index: 2;
  @media (max-width: 991px) {
    margin-left: 3rem;
    width: 65vw;
  }
  @media (max-width: 600px) {
    width: 80vw;
    margin-left: 1rem;
  }
`
const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 3.75vw;
  @media (max-width: 991px) {
    font-size: 37px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
`

const HeroDesc = styled.h2`
  font-weight: 400;
  font-size: 3.25vw;
  @media (max-width: 991px) {
    font-size: 32px;
  }
  @media (max-width: 600px) {
    font-size: 25px;
  }
`

const Hero = props => {
  const { title, description, children } = props

  return (
    <HeroWrapper>
      <HeroText>
        <HeroTitle>{title}</HeroTitle>
        <HeroDesc>{description}</HeroDesc>
      </HeroText>
      {children}
    </HeroWrapper>
  )
}

export default Hero
