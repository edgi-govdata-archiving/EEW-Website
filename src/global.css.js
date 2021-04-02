import { createGlobalStyle } from 'styled-components';
import { primary, background, accent, gray } from 'constants/theme';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  h1 {
    font-size: 150%;
    font-weight: bold;
    color: ${primary};
    padding-bottom: 0.5rem;
    padding-top: 1em;
  }

  h2 {
    font-size: 120%;
    font-weight: bold;
    color: ${primary};
    padding-bottom: 0.5rem;
    padding-top: 1em;
  }

  h3 {
    font-size: 110%;
    font-weight: bold;
    color: ${primary};
    padding-bottom: 0.5rem;
    padding-top: 1em;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1.6rem;
    color: #000;
    background-color: ${background};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${primary};
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }

  big {
    font-size: 150%;
    font-weight: bold;
    color: ${accent};
  }
  
  .button {
    display: inline-block;
    padding: 1rem 1.5rem 1rem 1.5rem;
    margin: 1rem;
    margin-left: 0;
    
    background-image: none;
    background-color: ${gray};
    text-decoration: none;
    color: white;
  }
  
  .button:hover {
    cursor: pointer;
    background: ${primary};
  }
`;
