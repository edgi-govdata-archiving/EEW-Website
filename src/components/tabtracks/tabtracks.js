import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { primary, lightprimary, accent, blue, red, background } from 'constants/theme';

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    .react-tabs__tab {
      width: 50px;
    }
  }

  @media only screen and (min-width: 600px) {
    .react-tabs__tab {
      flex: 1 1 auto;
      max-width: 100px;
    }
  }

  .react-tabs__tab-list {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  li figure {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .react-tabs__tab--selected {
    background-color: ${lightprimary};
  }

  .react-tabs__tab-panel {
    background-color: ${lightprimary};
    border: 1px solid #aaa;
    border-top: none;
    padding: 1.5rem 2rem;

    p {
      margin-bottom: 0;
    }
  }
`;

const TabTracks = ({ items }) => (
  <Container>
    <Tabs>
      <TabList>
        {items.map((item, i) => (
          <Tab key={i}>
            <figure>
              <Img fluid={item.image ? item.image.childImageSharp.fluid : {}} alt={item.title} />
            </figure>
          </Tab>
        ))}
      </TabList>

      {items.map((item, i) => (
        <TabPanel key={i}>
          <h2>{item.title}</h2>
          <p>{item.copy}</p>
        </TabPanel>
      ))}
    </Tabs>
  </Container>
);

TabTracks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabTracks;
