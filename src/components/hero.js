import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
  height: 60vh;
  min-height: 400px;
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
`
const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 3.75vw;
`

const HeroDesc = styled.h2`
  font-weight: 400;
  font-size: 3.25vw;
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
