import React from 'react';
import { Dropdown, ListPanel } from '../../../../reactify-ui/build';
import {
  breakpointCode,
  disabledCode,
  labelCode,
  simpleCode,
  trayOpenCode,
} from './code-refrence';

import {
  breakpointLink,
  disabledLink,
  labelLink,
  simpleLink,
  trayOpenLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Dismiss',
    link: `${Constants.componentsPath}/dismiss`,
  },
  nextLink: {
    text: 'File Upload',
    link: `${Constants.componentsPath}/file-upload`,
  },
};

const DropdownDemo = () => (
  <DemoPage componentName="Dropdown">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/dropdown`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Dropdown label="Please select a value">
        {closeTray => (
          <ListPanel onItemClicked={() => closeTray}>
            <ListPanel.Item index={1}>Item 1</ListPanel.Item>
            <ListPanel.Item index={2}>Item 2</ListPanel.Item>
            <ListPanel.Item index={3}>Item 3</ListPanel.Item>
            <ListPanel.Item index={4}>Item 4</ListPanel.Item>
          </ListPanel>
        )}
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Tray Open dy default"
      sourceCode={trayOpenCode}
      externalSampleLink={trayOpenLink}
    >
      <Dropdown trayOpen label="Please select a value">
        {closeTray => (
          <ListPanel onItemClicked={() => closeTray}>
            <ListPanel.Item index={1}>Item 1</ListPanel.Item>
            <ListPanel.Item index={2}>Item 2</ListPanel.Item>
            <ListPanel.Item index={3}>Item 3</ListPanel.Item>
            <ListPanel.Item index={4}>Item 4</ListPanel.Item>
          </ListPanel>
        )}
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Breakpoints"
      sourceCode={breakpointCode}
      externalSampleLink={breakpointLink}
    >
      <h6 className="mt-3 mb-3">Options will show inside a portal on screen sizes marked by props sm, md, lg, xl. Open this dropdown on a md or xs screen size</h6>
      <Dropdown sm md label="Please select a value">
        {closeTray => (
          <ListPanel className="w-100" onItemClicked={() => closeTray}>
            <ListPanel.Item index={1}>Item 1</ListPanel.Item>
            <ListPanel.Item index={2}>Item 2</ListPanel.Item>
            <ListPanel.Item index={3}>Item 3</ListPanel.Item>
            <ListPanel.Item index={4}>Item 4</ListPanel.Item>
          </ListPanel>
        )}
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Dropdown disabled label="Please select a value" />
    </DemoCard>

    <DemoCard
      title="Label"
      sourceCode={labelCode}
      externalSampleLink={labelLink}
    >
      <h6 className="mt-3 mb-3">Because label is a render prop, you can pass anything you want to it.</h6>
      <Dropdown sm md label="Custom Label">
        <ListPanel warning className="w-100">
          <ListPanel.Item index={1}>Item 1</ListPanel.Item>
          <ListPanel.Item index={2}>Item 2</ListPanel.Item>
          <ListPanel.Item index={3}>Item 3</ListPanel.Item>
          <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        </ListPanel>
      </Dropdown>
    </DemoCard>

    <BottomNav
      className="mt-4 mb-4"
      prevLinkText={bottomNavLinks.prevLink.text}
      prevLink={bottomNavLinks.prevLink.link}
      nextLinkText={bottomNavLinks.nextLink.text}
      nextLink={bottomNavLinks.nextLink.link}
    />
  </DemoPage>
);

export default withHeader(DropdownDemo);
