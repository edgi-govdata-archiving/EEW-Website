import * as React from "react"
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

const googleAnalyticsId = 'G-S89JKXR1BK';
ReactGA.initialize(googleAnalyticsId);

const Head = ({pageTitle}) =>
  <Helmet>
    <html lang="en" />
    <title>{pageTitle} | Environmental Enforcement Watch</title>
    <meta content='https://environmentalenforcementwatch.org/static/1c753d31dbdd94ab2b736e4da6ae656a/0a47e/eew-map.png' property="og:image" />
    <meta property="og:description" content="A data accessibilty project from the Environmental Data Governance Initiative" />

    {/* Global site tag (gtag.js) - Google Analytics  */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
    ></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', "${googleAnalyticsId}");
      `}
    </script>
  </Helmet>

export default Head
