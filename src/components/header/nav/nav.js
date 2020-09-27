import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from './nav.css';

const Nav = ({title, data}) => (
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
        <a href="https://www.envirodatagov.org">
          <div className="text">
            EDGI
          </div>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="EDGI Logo"
          />
        </a>
      </li>
    </ul>
  </Container>
);

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default function
MyNav (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/logos/edgi-sq-logo.png" }) {
            childImageSharp {
              fixed(height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }    
      `}
    render={data => <Nav data={data} {...props} />}
    />
  )
}
