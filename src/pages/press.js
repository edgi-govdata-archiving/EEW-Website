import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Press = ({ data }) => (
  <Layout>
    <Head pageTitle={data.pressJson.title} />
    <Box>
      <h1>{data.pressJson.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.pressJson.content.childMarkdownRemark.html,
        }}
      />
      <iframe
        title="pressCoverage"
        className="airtable-embed"
        src="https://airtable.com/embed/shrj6wbxeCrvg2yhu?backgroundColor=teal&viewControls=on" frameBorder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style={{
          background: "transparent",
          border: "1px solid #ccc"
        }}></iframe>
    </Box>
  </Layout>
);

Press.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Press;

export const query = graphql`
  query PressQuery {
    pressJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
