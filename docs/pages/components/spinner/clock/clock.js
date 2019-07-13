/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Spinner } from '../../../../../reactify-ui/build';
import {
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  customSpeedCode,
  simpleCode,
} from './code-refrence';

import {
  customColorLink,
  customClassLink,
  customSizeLink,
  customThemeLink,
  customSpeedLink,
  simpleLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Spinner - Circle',
    link: `${Constants.componentsPath}/spinner/circle`,
  },
  nextLink: {
    text: 'Spinner -  Hydrogen',
    link: `${Constants.componentsPath}/spinner/hydrogen`,
  },
};

const ClockDemo = () => (
  <DemoPage componentName="Snackbar - clock">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/snackbar/clock`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Spinner
        clock
      />
    </DemoCard>

    <DemoCard
      title="Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6>small</h6>
      <Spinner
        clock
        small
      />

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Spinner
        clock
        medium
      />

      <h6 className="pt-3">large</h6>
      <Spinner
        clock
        large
      />

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Spinner
        clock
        style={{ fontSize: '75px' }}
      />
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <Spinner
        clock
        style={{ color: 'violet' }}
      />
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h6>Primary</h6>
      <Spinner
        clock
        primary
      />

      <h6>Secondary</h6>
      <Spinner
        clock
        secondary
      />

      <h6 className="pt-3">Dark</h6>
      <Spinner
        clock
        dark
      />

      <h6 className="pt-3">Light</h6>
      <Spinner
        clock
        light
      />

      <h6 className="pt-3">Info</h6>
      <Spinner
        clock
        info
      />

      <h6 className="pt-3">Warning</h6>
      <Spinner
        clock
        warning
      />

      <h6 className="pt-3">Danger</h6>
      <Spinner
        clock
        danger
      />

      <h6 className="pt-3">Success</h6>
      <Spinner
        clock
        success
      />
    </DemoCard>

    <DemoCard
      title="Controlling Speed"
      sourceCode={customSpeedCode}
      externalSampleLink={customSpeedLink}
    >
      <h6 className="mt-3 mb-3">Slow</h6>
      <Spinner
        clock
        style={{ animationDuration: '3s' }}
      />

      <h6 className="mt-3 mb-3">Fast</h6>
      <Spinner
        clock
        style={{ animationDuration: '500ms' }}
      />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Spinner
        clock
        className="bg-dark"
      />
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

export default withHeader(ClockDemo);
