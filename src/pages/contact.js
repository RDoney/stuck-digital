import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import placeholder from '../../static/placeholder.jpeg'

const ContactMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  width: 90%;
  margin: 1rem auto 10vw;
`

const FormWrapper = styled.div`
  h3 {
    margin-bottom: 2.5rem;
    max-width: 500px;
  }
`

const Form = styled.form`
  margin: 0 auto;
  input {
    display: block;
    width: 80%;
    font-family: inherit;
    font-size: 1rem;
    padding: 15px;
    margin: 1rem 1rem 1rem 0;
    border: 1px solid #000;
  }
  textarea {
    width: 80%;
    font-family: inherit;
    font-size: 1rem;
    padding: 15px;
    margin: 1rem 1rem 1rem 0;
    border: 1px solid #000;
    height: 12vw;
  }
  input[type='submit'] {
    color: #fff;
    background-color: #000;
    font-size: 1.25rem;
    width: auto;
    padding: 6px 12px;
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
      <FormWrapper>
        <h3>Fill out the form below, and we will be in touch shortly!</h3>
        <Form method="post" action="/">
          <div>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div>
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea name="message" id="message" placeholder="Message" />
          </div>
          <input type="submit" value="Submit" />
        </Form>
      </FormWrapper>
      {/* TODO: embed map */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img
            src={placeholder}
            alt="placeholder"
            style={{ width: '100%', margin: '0 auto', display: 'block' }}
          />
        </div>
      </div>
    </ContactMain>
  </Layout>
)

export default IndexPage
