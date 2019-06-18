import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

const ContactMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: 1rem auto;
`

const Form = styled.form`
  margin: 0 auto;
  width: 90%;
  input {
    display: block;
    width: 80%;
    font-family: inherit;
    font-size: 1rem;
    padding: 15px;
    margin: 1rem;
    border: 1px solid #000;
  }
  textarea {
    display: block;
    max-width: 80%;
    font-family: inherit;
    font-size: 1rem;
    padding: 15px;
    margin: 1rem;
    border: 1px solid #000;
  }
  input[type='submit'] {
    color: #fff;
    background-color: #000;
    font-size: 1.25rem;
    width: auto;
    padding: 8px 12px;
    cursor: pointer;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero
      title="Contact Us"
      description="Business-to-consumer alpha develop design prototype infographic."
    />
    <ContactMain>
      <Form method="post" action="/">
        <input type="text" name="name" id="name" placeholder="Name" />

        <input type="text" name="email" id="email" placeholder="Email" />

        <input type="text" name="subject" id="subject" placeholder="Subject" />
        <textarea
          name="message"
          id="message"
          cols="40"
          rows="10"
          placeholder="Message"
        />
        <input type="submit" value="Submit" />
      </Form>
      <div>
        <p>map goes here</p>
      </div>
    </ContactMain>
  </Layout>
)

export default IndexPage
