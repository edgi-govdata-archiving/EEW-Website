import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

{/* Styling for a two-column flex layout for this homepage */}
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
`

const Description = styled.h1`
  order: 1;
  width: 250px;
  margin-left: 12px;
  padding: 12px;
`
const calendarStyle = {
  border: 'solid 10px #4cc0ad',
  order: '2', /* Flex order */
}

const Index = ({ data }) => (
  <Layout>
    <Box>
      <div dangerouslySetInnerHTML={{__html: data.homeJson.content.childMarkdownRemark.html}}/>
      <Gallery items={data.homeJson.gallery} />
    </Box>

    <HomeWrapper>
      <Img fixed={data.file.childImageSharp.fixed} />
    </HomeWrapper>

    <HomeWrapper>
      <Description>Join one of our upcoming events.</Description>

      {/* Embed Google Calendar */}
      <iframe title="eewCalendar" src="https://calendar.google.com/calendar/embed?height=300&amp;wkst=2&amp;bgcolor=%234cc0ad&amp;ctz=America%2FNew_York&amp;src=c280bXJsNjk5YWVhNTE5bnQxNzhwNTBwMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;mode=AGENDA" style={calendarStyle} width="400" height="300" frameBorder="0" scrolling="no"></iframe>
    </HomeWrapper>

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
    file(relativePath: { eq: "images/logos/eew-icon-web.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
