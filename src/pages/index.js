import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import TabTracks from 'components/tabtracks';

/* Styling for a two-column flex layout for this homepage */
const HomeWrapper = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-flow: wrap;
  }
  @media only screen and (min-width: 600px) {
    flex-flow: nowrap;
  }
`;

const Index = ({ data }) => (
  <Layout>
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.homeJson.content.childMarkdownRemark.html,
        }}
      />
      <br />
      <TabTracks items={data.homeJson.gallery}></TabTracks>
    </Box>

    <HomeWrapper>
      <Img fixed={data.file.childImageSharp.fixed} />
    </HomeWrapper>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomeQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
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
