import React from 'react';
import PropTypes from 'prop-types';
import Head from 'components/head';
import Layout from 'components/layout';
import Box from 'components/box';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Head pageTitle={data.homeJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.homeJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
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
    }
  }
`;
