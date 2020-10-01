import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import styled from 'styled-components';
import TabTracks from 'components/tabtracks';
import Img from 'gatsby-image';

const VideoFrame = styled.iframe`
  flex-basis: 1 1 auto;
  padding: 10px;
`;

const Events = ({ data }) => (
  <Layout>
    <Head pageTitle={data.eventsJson.title} />
    <Box>
      <h1>{data.eventsJson.title}</h1>
      <VideoFrame
        title="About Environmental Enforcement Watch"
        width="600"
        height="340"
        src="https://www.youtube-nocookie.com/embed/k-OjWt5lBRQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></VideoFrame>
      <br />
      <div
        dangerouslySetInnerHTML={{
          __html: data.eventsJson.eventsSnippet.childMarkdownRemark.html,
        }}
      />
      <h2>EEW Event Tracks:</h2>
      <br />
      <TabTracks items={data.eventsJson.gallery}></TabTracks>
      <center>
        <Img fixed={data.file.childImageSharp.fixed} />
      </center>
      <div
        dangerouslySetInnerHTML={{
          __html: data.eventsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Events.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Events;

export const query = graphql`
  query EventsQuery {
    eventsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      eventsSnippet {
        childMarkdownRemark {
          html
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
