/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Legend, LegendItem } from '../../../../reactify-ui/build';
import {
  childrenCode,
  customColorCode,
  customClassCode,
  customThemeCode,
  directionCode,
  simpleCode,
} from './code-refrence';

import {
  childrenLink,
  customColorLink,
  customClassLink,
  customThemeLink,
  directionLink,
  simpleLink,
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
    text: 'Label',
    link: `${Constants.componentsPath}/label`,
  },
  nextLink: {
    text: 'Link',
    link: `${Constants.componentsPath}/link`,
  },
};

const LegendDemo = () => (
  <DemoPage componentName="Legend">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/legend`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Legend>
        <LegendItem>Inventory</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Direction, vertical or horizontal (default)"
      sourceCode={directionCode}
      externalSampleLink={directionLink}
    >
      <h6>Vertical</h6>
      <Legend vertical>
        <LegendItem>Inventory 1</LegendItem>
        <LegendItem>Inventory 2</LegendItem>
      </Legend>
      <br />
      <br />
      <h6>Horizontal</h6>
      <Legend horizontal>
        <LegendItem>Inventory 1</LegendItem>
        <LegendItem>Inventory 2</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Children, Legend and Legend items both accept children"
      sourceCode={childrenCode}
      externalSampleLink={childrenLink}
    >
      <h6>LegendItem's are usually used as children for Legend, but both Legend and LegendItems's can accept any children</h6>
      <Legend vertical>
        <LegendItem><b className="pl-2">Legend items also accept children</b></LegendItem>
        <LegendItem>Inventory 2</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Custom Color"
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <Legend>
        <LegendItem iconColor="violet">Inventory</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Theme"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Legend vertical>
        <LegendItem primary>Primary Theme</LegendItem>
        <LegendItem secondary>Secondary Theme</LegendItem>
        <LegendItem dark>Dark Theme</LegendItem>
        <LegendItem light>Light Theme</LegendItem>
        <LegendItem info>Info Theme</LegendItem>
        <LegendItem warning>Warning Theme</LegendItem>
        <LegendItem danger>Danger Theme</LegendItem>
        <LegendItem success>Success Theme</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Legend className="p-2 bg-primary">
        <LegendItem className="text-light bg-secondary pr-1 pl-1">Inventory</LegendItem>
      </Legend>
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

export default withHeader(LegendDemo);
