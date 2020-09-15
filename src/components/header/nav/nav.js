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
        <a href="https://www.envirodatagov.org">EDGI</a>
      </li>
      <li>
        <Link to="/press">Press</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
