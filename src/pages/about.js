import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Img from 'gatsby-image';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <h1>{data.aboutJson.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.eewDesc.childMarkdownRemark.html,
        }}
      />
      <center>
        <Img fixed={data.file.childImageSharp.fixed} />
      </center>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      eewDesc {
        childMarkdownRemark {
          html
        }
      }
    }
    file(relativePath: { eq: "images/logos/eew-icon-web.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
