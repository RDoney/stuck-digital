import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TeamData from '../components/teamData'
import ContactCta from '../components/utils/ContactCta'

const WhatWeDo = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-areas:
    '. wwdTitle .'
    '. wwdDescription .';
  h3 {
    grid-area: wwdTitle;
    font-size: 2rem;
  }
  p {
    grid-area: wwdDescription;
    font-size: 1.5rem;
  }
`

const Team = styled.div`
  margin: 5rem 0;
  h3 {
    font-size: 2rem;
  }
  .team-data-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
  }
`

const About = () => (
  <Layout>
    <Hero
      title="About"
      description="Business-to-consumer alpha develop design prototype infographic. Social media handshake leverage crowdfunding."
    />
    <WhatWeDo>
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
    <ContactCta />
  </Layout>
)

export default About
