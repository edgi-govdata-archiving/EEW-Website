import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './footer.css';
import EmailListForm from 'components/EmailListForm';

//Import social icons and share components
import { FaTwitter, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { ShareButtonCircle, ShareBlockStandard } from 'react-custom-share';

const shareBlockProps = {
  button: ShareButtonCircle,
  buttons: [
    {
      network: 'Email',
      icon: FaEnvelope,
      link: 'mailto:info@environmentalenforcementwatch.org',
    },
    {
      network: 'Twitter',
      icon: FaTwitter,
      link: 'https://twitter.com/EEW_Network',
    },
    {
      network: 'Facebook',
      icon: FaFacebook,
      link: 'https://www.facebook.com/envirodgi/',
    },
  ],
  url: 'https://envirodgi.org',
};

const Footer = ({ language }) => (
  <Container>
    <div id="get-involved">
      {/* Add mailchimp component here */}
      <EmailListForm language={language} />
    </div>
    <div id="contribute">
      <h2>
        {language == 'spanish' ? 'Contribuir a EDGI' : 'Contribute to EDGI'}
      </h2>
      <div
        data-ab-button
        data-ab-token="MtYXR6eU4AKeV3oqqj3pdmuK"
        data-ab-amounts="5,10,25,50,100,250,n"
        data-ab-style="background-color: #4FBBA9;"
      >
        <a href="https://secure.actblue.com/donate/edgi_eew">Donate</a>
      </div>
    </div>
    <div id="hashtags">
      <h2>#EEWatch • #EnvironmentalDataJustice • #YouCanEEWToo</h2>
    </div>
    <div id="EDGI-logo"></div>
    <div id="socials">
      <ShareBlockStandard {...shareBlockProps} />
    </div>
  </Container>
);

Footer.propTypes = {
  language: PropTypes.string,
};

export default Footer;
