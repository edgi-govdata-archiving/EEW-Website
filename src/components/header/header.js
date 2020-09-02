import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
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

const Header = ({ title, data }) => (
  <AnimatedContainer>
    <Container>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt='EEW Logo'
      />
      <Link to="/">
        <Title as="h1">{title} </Title><sub>an EDGI project</sub>
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    //Typechecking would go here if I knew how to do it properly - AA
  }).isRequired,
};

export default function MyHeader(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/logos/eew-logo.png" }) {
            childImageSharp {
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }    
      `}
    render={data => <Header data={data} {...props} />}
    />
  )
}