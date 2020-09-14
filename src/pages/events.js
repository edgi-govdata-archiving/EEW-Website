import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Gallery from 'components/gallery';
import Head from 'components/head';
import Box from 'components/box';
import { graphql } from 'gatsby';

const Events = ({ data }) => (
  <Layout>
    <Head pageTitle={data.eventsJson.title} />
    <Box>
      <h1>{data.eventsJson.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.eventsJson.content.childMarkdownRemark.html }} />
    </Box>
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
