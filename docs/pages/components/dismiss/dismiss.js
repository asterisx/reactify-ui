/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Dismiss, Spinner, Button } from '@../../../../reactify-ui/build';
import {
  customColorCode,
  customEventCode,
  childrenCode,
  customClassCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  simpleCode,
} from './code-refrence';

import {
  childrenLink,
  customColorLink,
  customEventLink,
  customIconLink,
  customClassLink,
  customSizeLink,
  customThemeLink,
  disabledLink,
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
    text: 'Context Menu',
    link: `${Constants.componentsPath}/context-menu`,
  },
  nextLink: {
    text: 'Dropdown',
    link: `${Constants.componentsPath}/dropdown`,
  },
};

const DismissDemo = () => (
  <DemoPage componentName="Dismiss">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/dismiss`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Dismiss className="align-self-center">
        A simple Dismiss
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Dismiss disabled>
        This is disabled
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <Dismiss small>Small Dismiss</Dismiss>
      <br />
      <br />
      <Dismiss medium>Medium Dismiss</Dismiss>
      <br />
      <br />
      <Dismiss large>Large Dismiss</Dismiss>
      <br />
      <br />
      <Dismiss style={{ fontSize: '35px' }}>Custom Size Dismiss</Dismiss>
    </DemoCard>

    <DemoCard
      title="Children"
      sourceCode={childrenCode}
      externalSampleLink={childrenLink}
    >
      <Dismiss style={{ width: 'auto' }}>
        <div className="card" style={{ width: '18rem', color: 'black' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Background"
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <Dismiss style={{ backgroundColor: 'violet' }}>
        Dismiss with custom background color
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Icon"
      sourceCode={customIconCode}
      externalSampleLink={customIconLink}
    >
      <Dismiss
        icon={<Spinner small light clock />}
        closeIcon={<Button small light clear>Ok</Button>}
        style={{ width: '300px' }}
      >
        Time is running out!!! Apply for the application within a week.
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Theme"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Dismiss primary>
        Primary theme
      </Dismiss>
      <br />
      <br />
      <Dismiss secondary>
        Secondary theme
      </Dismiss>
      <br />
      <br />
      <Dismiss dark>
        Dark theme
      </Dismiss>
      <br />
      <br />
      <Dismiss light>
        Light theme
      </Dismiss>
      <br />
      <br />
      <Dismiss info>
        Info theme
      </Dismiss>
      <br />
      <br />
      <Dismiss warning>
        Warning theme
      </Dismiss>
      <br />
      <br />
      <Dismiss danger>
        Danger theme
      </Dismiss>
      <br />
      <br />
      <Dismiss success>
        Success theme
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Dismiss className="text-light bg-dark w-100">
        This Dismiss has custom class
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Event"
      sourceCode={customEventCode}
      externalSampleLink={customEventLink}
    >
      <Dismiss onClose={() => alert('Closed')}>
        This Dismiss has event handler
      </Dismiss>
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

export default withHeader(DismissDemo);
