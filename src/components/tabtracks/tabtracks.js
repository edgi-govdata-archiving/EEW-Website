import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    .react-tabs__tab {
      width: 60px;
    }
  }

  @media only screen and (min-width: 600px) {
    .react-tabs__tab {
      width: 100px;
      flex: 1 1 auto;
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

  .react-tabs__tab-panel {
    padding: 2rem;
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
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
