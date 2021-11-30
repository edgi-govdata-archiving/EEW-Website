import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../styles/tabs.scss'

const TabTracks = tabs =>
  <div>
    <Tabs>
      <TabList>
        {tabs.items.map((item, i) => (
          <Tab><img src={item.image} /></Tab>
        ))}
      </TabList>

      {tabs.items.map((item, i) => (
        <TabPanel>
        <h2>{item.title}</h2>
        <p>{item.copy}</p>
        </TabPanel>
      ))}
    </Tabs>
  </div>

export default TabTracks;
