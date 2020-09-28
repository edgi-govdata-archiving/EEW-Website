import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import styled from 'styled-components';

const Events = ({ data }) => (
  <Layout>
    <Head pageTitle={data.eventsJson.title} />
    <Box>
      <h1>{data.eventsJson.title}</h1>
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
    }
  }
`;