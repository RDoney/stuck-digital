import React, { useRef } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import TeamData from '../components/teamData'
import ClientLogoData from '../components/clientLogoData'
import ContactCta from '../components/utils/ContactCta'

const WhatWeDo = styled(animated.div)`
  width: 80%;
  margin: 5rem auto;
  h3 {
    font-size: 2.75vw;
  }
  p {
    font-size: 2vw;
  }
  @media (max-width: 991px) {
    margin-left: 3rem;
    width: 90%;
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 21px;
    }
  }
  @media (max-width: 600px) {
    margin-left: 1rem;
    width: 100%;
    h3 {
      font-size: 23px;
    }
    p {
      font-size: 18px;
    }
  }
`

const Team = styled.div`
  width: 80%;
  margin: 5rem auto;
  h3 {
    font-size: 2rem;
  }
  .team-data-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    grid-template-rows: auto;
    grid-gap: 20px;
    justify-items: center;
  }
  @media (max-width: 991px) {
    margin-left: 3rem;
    width: 90%;
  }
  @media (max-width: 600px) {
    margin-left: 1rem;
    width: 100%;
  }
`

const ClientWrapper = styled.div`
  width: 80%;
  margin: 10vw auto;
  h3 {
    font-size: 2.75vw;
  }
  p {
    font-size: 2vw;
  }
  @media (max-width: 991px) {
    width: 90%;
    margin-left: 3rem;
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 21px;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 1rem;
    h3 {
      font-size: 23px;
    }
    p {
      font-size: 18px;
    }
  }
`

const ClientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  position: relative;
  .clientLogoImg {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 1px solid #cccccc;
    div {
      width: 100%;
    }
  }
  .clientLogoImg:nth-of-type(1) {
    border-top: none;
    border-left: none;
  }
  .clientLogoImg:nth-of-type(2) {
    border-top: none;
  }
  .clientLogoImg:nth-of-type(3) {
    border-top: none;
    border-right: none;
  }
  .clientLogoImg:nth-of-type(4) {
    border-bottom: none;
    border-left: none;
  }
  .clientLogoImg:nth-of-type(5) {
    border-bottom: none;
  }
  .clientLogoImg:nth-of-type(6) {
    border-bottom: none;
    border-right: none;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);

    .clientLogoImg:nth-of-type(2) {
      border-right: none;
    }
    .clientLogoImg:nth-of-type(3) {
      border-left: none;
      border-top: 1px solid #cccccc;
      border-right: 1px solid #cccccc;
    }
    .clientLogoImg:nth-of-type(4) {
      border-right: none;
      border-left: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
    }
    .clientLogoImg:nth-of-type(5) {
      border-bottom: none;
      border-left: none;
    }
    .clientLogoImg:nth-of-type(6) {
      border-bottom: none;
      border-right: none;
    }
  }
`

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  const fadeUp = useSpring({
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    from: { opacity: 0, transform: 'translate3d(0,20px,0)' },
    immediate: inView,
  })

  return (
    <Layout>
      <SEO title="About" />
      <Hero
        title="About"
        description="Business-to-consumer alpha develop design prototype infographic. Social media handshake leverage crowdfunding."
      />
      <WhatWeDo ref={ref} style={fadeUp}>
        <h3>What We Bring To The Table</h3>
        <p>
          Iteration MVP sales twitter infrastructure startup user experience
          prototype research &amp; development. Return on investment business
          model canvas termsheet client sales angel investor network effects.
          Supply chain research &amp; development metrics hypotheses.
        </p>
      </WhatWeDo>
      <Team>
        <h3>Team</h3>
        <div className="team-data-wrapper">
          <TeamData />
        </div>
      </Team>
      <ClientWrapper>
        <h3>Clients</h3>
        <p>
          Client sales angel investor network effects. Supply chain research &
          development metrics hypotheses.
        </p>
        <ClientGrid>
          <ClientLogoData />
        </ClientGrid>
      </ClientWrapper>

      <ContactCta />
    </Layout>
  )
}

export default About
