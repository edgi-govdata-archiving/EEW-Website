import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Gallery from 'components/gallery';
import Head from 'components/head';
import Box from 'components/Box';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

{/* Styling for a two-column flex layout for this homepage */}
const HomeWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
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
`

const VideoFrame = styled.iframe`
  flex-basis: 1 1 auto;
`

const Events = ({ data }) => (
  <Layout>
    <Head pageTitle={data.eventsJson.title} />
    <Box>
      <h1>{data.eventsJson.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.eventsJson.content.childMarkdownRemark.html }} />
    </Box>
    <HomeWrapper>
      <VideoFrame title="About Environmental Enforcement Watch" width="560" height="315" src="https://www.youtube-nocookie.com/embed/k-OjWt5lBRQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></VideoFrame>
    </HomeWrapper>
    <Gallery items={data.eventsJson.gallery} />
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
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    file(relativePath: { eq: "events/public-hours.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
