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

const ReportsES = ({ data }) => (
  <Layout language={'spanish'}>
    <Head pageTitle={data.reportsEsJson.title} />
    <Box>
      <h1>{data.reportsEsJson.title}</h1>
      <a href="../reports" className="button">
        See this page in English
      </a>
      <div
        dangerouslySetInnerHTML={{
          __html: data.reportsEsJson.reportsEsTop.childMarkdownRemark.html,
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
          <Congress chamber={'senate'} language={'spanish'} />
          <Congress chamber={'house'} language={'spanish'} />
          <Congress chamber={'other'} language={'spanish'} />
        </DataViz>
      </HomeWrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: data.reportsEsJson.reportsEsCTA.childMarkdownRemark.html,
        }}
      />
      <center>
        <Img fixed={data.file.childImageSharp.fixed} />
      </center>
      <div
        dangerouslySetInnerHTML={{
          __html: data.reportsEsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

ReportsES.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ReportsES;

export const query = graphql`
  query ReportsESQuery {
    reportsEsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      reportsEsTop {
        childMarkdownRemark {
          html
        }
      }
      reportsEsCTA {
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
