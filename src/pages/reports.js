import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Congress from 'components/congress';

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

const DataViz = styled.div`
  flex-direction: column;
  justify-content: center;
`;

const Reports = ({ data }) => (
  <Layout>
    <Head pageTitle={data.reportsJson.title} />
    <Box>
      <h1>{data.reportsJson.title}</h1>
      <p>Click on a committee member to see their report:</p>
    </Box>
    <HomeWrapper
      style={{
        height: 'fit-content',
        padding: '20px',
        backgroundColor: 'white',
      }}
    >
      <DataViz>
        <Congress chamber={'senate'} />
        <Congress chamber={'house'} />
      </DataViz>
    </HomeWrapper>
    <Box>
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
