import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Reports = ({ data }) => (
  <Layout>
    <Head pageTitle={data.reportsJson.title} />
    <Box>
      <h1>{data.reportsJson.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.reportsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Reports.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Reports;

export const query = graphql`
  query ReportsQuery {
    reportsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
