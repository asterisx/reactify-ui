/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Paper } from '@../../../../reactify-ui/build';
import {
  customSizeCode,
  customThemeCode,
  simpleCode,
  noShadowCode,
} from './code-refrence';

import {
  customSizeLink,
  customThemeLink,
  simpleLink,
  noShadowLink,
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
    text: 'Paginator',
    link: `${Constants.componentsPath}/paginator`,
  },
  nextLink: {
    text: 'Portal',
    link: `${Constants.componentsPath}/portal`,
  },
};

const NumberCounterDemo = () => (
  <DemoPage componentName="Paper">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/paper`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Paper>Paper has some text, it can act as a base for building components</Paper>
    </DemoCard>

    <DemoCard
      title="No Shadow"
      sourceCode={noShadowCode}
      externalSampleLink={noShadowLink}
    >
      <Paper noShadow>Paper has some text, it can act as a base for building components</Paper>
    </DemoCard>

    <DemoCard
      title="Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6>small</h6>
      <Paper small>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Paper medium>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">large</h6>
      <Paper large>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Paper style={{ fontSize: '75px' }}>Paper has some text, it can act as a base for building components</Paper>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h6>Primary</h6>
      <Paper primary>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Secondary</h6>
      <Paper secondary>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Dark</h6>
      <Paper dark>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Light</h6>
      <Paper light>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Info</h6>
      <Paper info>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Warning</h6>
      <Paper warning>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Danger</h6>
      <Paper danger>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Success</h6>
      <Paper success>Paper has some text, it can act as a base for building components</Paper>
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

export default withHeader(NumberCounterDemo);
