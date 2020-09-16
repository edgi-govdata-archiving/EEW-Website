import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/reports">Reports</Link>
      </li>
      <li>
        <Link to="/press">Press</Link>
      </li>
      <li>
        <a href="https://www.envirodatagov.org"><img src="https://www.pngkit.com/png/full/905-9053541_edgi-logo-1-hi-res-transp-graphic-design.png" alt="asdf" height="50px"></img></a>
      </li>
    </ul>
  </Container>
);

export default Nav;
