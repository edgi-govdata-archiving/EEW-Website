import React from 'react';
import GlobalStyle from 'global.css.js';
import { Container } from './footer.css';
import EmailListForm from 'components/EmailListForm';

const Footer = () => (
  <Container>
    <div id="get-involved">
      {/* Add mailchimp component here */}
      <EmailListForm />
    </div>
    <div id="contribute">
      <h2>Contribute to EDGI</h2>
      <div data-ab-button
        data-ab-token="MtYXR6eU4AKeV3oqqj3pdmuK"
        data-ab-amounts="5,10,25,50,100,250,n"
        data-ab-style="background-color: #d43A69;"
      >
      <a href="https://secure.actblue.com/donate/edgi_eew">Donate</a>
    </div>
    </div>
    <div id="hashtags">
      <h2>#EEWatch</h2>
      <h2>#EnvironmentalDataJustice</h2>
      <h2>#YouCanEEWToo</h2>
    </div>
    <div id="EDGI-logo">
    
    </div>
    <div id="socials">
    
    </div>
  </Container>
);

export default Footer;
