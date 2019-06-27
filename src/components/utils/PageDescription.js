import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  /* TODO: Refactor to global typography settings */
  width: 80%;
  margin: 3rem auto;
  margin-bottom: 10vh;
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

const PageDescription = props => <Wrapper>{props.children}</Wrapper>

export default PageDescription
