import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Congress from 'components/congress';
import Img from 'gatsby-image';

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
      <a href="../reports-es" className="button">
        Ver esta página en español
      </a>
      <div
        dangerouslySetInnerHTML={{
          __html: data.reportsJson.reportsTop.childMarkdownRemark.html,
        }}
      />
      <HomeWrapper
        style={{
          height: 'fit-content',
          padding: '0px',
          backgroundColor: 'white',
          outline: 'solid #defaf6',
        }}
      >
        <DataViz>
          <Congress chamber={'senate'} language={'english'} />
          <Congress chamber={'house'} language={'english'} />
          <Congress chamber={'other'} language={'english'} />
        </DataViz>
      </HomeWrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: data.reportsJson.reportsCTA.childMarkdownRemark.html,
        }}
      />
      <center>
        <Img fixed={data.file.childImageSharp.fixed} />
      </center>
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
      reportsTop {
        childMarkdownRemark {
          html
        }
      }
      reportsCTA {
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
