import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import posed from 'react-pose';
import { Container } from './header.css';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ data }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="Environmental Enforcement Watch Logo"
        />
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function MyHeader(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/logos/eew-logo.png" }) {
            childImageSharp {
              fixed(width: 175) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Header data={data} {...props} />}
    />
  );
}
