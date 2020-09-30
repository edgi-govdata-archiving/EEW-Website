import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Fourohfour = ({ data }) => (
  <Layout>
    <Head pageTitle={data.fourohfourJson.title} />
    <Box>
      <h1>{data.fourohfourJson.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.fourohfourJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Fourohfour.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Fourohfour;

export const query = graphql`
  query FourohfourQuery {
    fourohfourJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
