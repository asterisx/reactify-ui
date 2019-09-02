/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Alert, ThemeProvider } from '../../../../reactify-ui/build';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  borderPositionCode,
  customColorCode,
  childrenCode,
  customClassCode,
} from './code-refrence';

import {
  childrenLink,
  customBorderLink,
  customClassLink,
  customThemeLink,
  directionLink,
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

const theme = {
  primary: {
    color: '#336e7b',
    fontColor: '#fff',
  },
  secondary: {
    color: '#e8e8e8',
    fontColor: '#141414',
  },
  dark: {
    color: '#141414',
    fontColor: '#fff',
  },
  light: {
    color: '#fff',
    fontColor: '#141414',
  },
  info: {
    color: '#3498db',
    fontColor: '#FFF',
  },
  warning: {
    color: '#f39c12',
    fontColor: '#FFF',
  },
  danger: {
    color: '#e74c3c',
    fontColor: '#FFF',
  },
  success: {
    color: '#FFC0CB',
    fontColor: '#000',
  },
};

const bottomNavLinks = {
  prevLink: {
    text: 'Accordion',
    link: `${Constants.componentsPath}/accordion`,
  },
  nextLink: {
    text: 'Badge',
    link: `${Constants.componentsPath}/badge`,
  },
};

const AlertDemo = () => (
  <DemoPage componentName="Alert">
    <ComponentInfo
      productionReady
      responsive
      githubLink="https://github.com/asterisx/reactify-ui/tree/master/reactify-ui/lib/components/alert"
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Alert className="align-self-center">
          A simple alert
      </Alert>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Alert disabled>
          This is disabled
      </Alert>
    </DemoCard>

    <DemoCard
      title="Direction (can accept a string or an array. Valid values 'left', 'right', 'top', 'bottom')"
      sourceCode={borderPositionCode}
      externalSampleLink={directionLink}
    >
      <Alert borderLeft>
          This is a left alert!
      </Alert>
      <br />
      <Alert borderRight>
          This is a right alert!
      </Alert>
      <br />
      <Alert borderTop>
          This is a top alert!
      </Alert>
      <br />
      <Alert borderBottom>
          This is a bottom alert!
      </Alert>
      <br />
      <Alert borderLeft borderRight borderTop borderBottom>
          This is all direction alert!
      </Alert>
      <br />
      <Alert borderLeft borderRight>
          This is a two direction alert!
      </Alert>
    </DemoCard>

    <DemoCard
      title="Children"
      sourceCode={childrenCode}
      externalSampleLink={childrenLink}
    >
      <Alert>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Alert>
    </DemoCard>

    <DemoCard
      title="Custom Border"
      sourceCode={customColorCode}
      externalSampleLink={customBorderLink}
    >
      <Alert style={{ borderColor: 'violet' }}>
          Alert with custom border color
      </Alert>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Alert className="text-light bg-dark p-2">
        This Alert has custom class
      </Alert>
    </DemoCard>

    <DemoCard
      title="Theme"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Alert primary>
        Primary theme
        <b className="pl-3">alert uses this theme by default</b>
      </Alert>
      <br />
      <Alert secondary>
        Secondary theme
      </Alert>
      <br />
      <Alert dark>
          Dark theme
      </Alert>
      <br />
      <Alert light>
          Light theme
      </Alert>
      <br />
      <Alert info>
          Info theme
      </Alert>
      <br />
      <Alert warning>
          Warning theme
      </Alert>
      <br />
      <Alert danger>
          Danger theme
      </Alert>
      <br />
      <ThemeProvider theme={theme}>
        <Alert success>
          Success theme
        </Alert>
      </ThemeProvider>
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

export default withHeader(AlertDemo);
