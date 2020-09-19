import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import Img from 'gatsby-image';

const TabTracks = ({ items }) => (
  <Tabs>
    <TabList>
      {items.map((item, i) => (
        <Tab key={i}>
          <figure>
            <Img fixed={item.image ? item.image.childImageSharp.fixed : {}} alt={item.title} />
            <figcaption>
              <p>{item.title}</p>
            </figcaption>
          </figure>
        </Tab>
      ))}
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);

TabTracks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabTracks;
