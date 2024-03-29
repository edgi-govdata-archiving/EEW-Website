import * as React from 'react'
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import HCaptcha from '@hcaptcha/react-hcaptcha';

{/* This contact page is implemented using FormSpark - to make changes to how it works, log into EDGI's FormSpark account and configure using the online dashboard */}
const ContactPage = () => 
  <Layout pageTitle="Contact" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <h1>Contact</h1>
      <form action="https://submit-form.com/y28zl2Mj">
        
        <fieldset>
          <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required="" />
          </div>
          <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required="" />
          </div>
          <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required="">
          </textarea>
          <button className='button' type="submit">Send</button>
          <HCaptcha sitekey="9196487d-7b49-4ede-9365-7b4c34acc98a" />
          </div>
        </fieldset>
      </form>
  </Layout>

export default ContactPage
