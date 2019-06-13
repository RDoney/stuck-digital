import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeroText = styled.div`
  width: 50vw;
  margin-left: 6rem;
`
const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 3rem;
`

const HeroDesc = styled.h2`
  font-weight: 400;
  font-size: 2.5rem;
`

const Hero = props => (
  <HeroWrapper>
    <HeroText>
      <HeroTitle>{props.title}</HeroTitle>
      <HeroDesc>{props.description}</HeroDesc>
    </HeroText>
  </HeroWrapper>
)

export default Hero
