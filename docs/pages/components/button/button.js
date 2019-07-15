/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button } from '../../../../reactify-ui/build';

import {
  simpleCode,
  disabledCode,
  customThemeCode,
  customColorCode,
  childrenCode,
  customClassCode,
  customSizeCode,
  clearCode,
  clearBorderedCode,
} from './code-refrence';

import {
  childrenLink,
  clearBorderedLink,
  clearLink,
  customClassLink,
  customColorLink,
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
    text: 'Breadcrumbs',
    link: `${Constants.componentsPath}/breadcrumbs`,
  },
  nextLink: {
    text: 'Card',
    link: `${Constants.componentsPath}/card`,
  },
};

const ButtonDemo = () => (
  <DemoPage componentName="Button">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/button`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Button>Default Button</Button>
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <Button small>Small Button</Button>
      <br />
      <br />
      <Button medium>Medium Button</Button>
      <br />
      <br />
      <Button large>Large Button</Button>
      <br />
      <br />
      <Button style={{ fontSize: '35px' }}>Custom Size Button</Button>
    </DemoCard>

    <DemoCard
      title="Custom Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Button primary>Primary Button</Button>
      <br />
      <br />
      <Button secondary>Secondary Button</Button>
      <br />
      <br />
      <Button dark>Dark Button</Button>
      <br />
      <br />
      <Button light>Light Button</Button>
      <br />
      <br />
      <Button info>Info Button</Button>
      <br />
      <br />
      <Button warning>Warning Button</Button>
      <br />
      <br />
      <Button danger>Danger Button</Button>
      <br />
      <br />
      <Button success>Success Button</Button>
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Button disabled>Disabled Button</Button>
    </DemoCard>

    <DemoCard
      title="Children"
      sourceCode={childrenCode}
      externalSampleLink={childrenLink}
    >
      <Button>
        <div className="card text-dark" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Button>
    </DemoCard>

    <DemoCard
      title="Custom Color, any valid css color (hex, rgb etc...) will work."
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <Button style={{ backgroundColor: 'violter', color: 'white' }}>Custom Color Button</Button>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Button className="p-5">Custom Class Button</Button>
    </DemoCard>

    <DemoCard
      title="Clear"
      sourceCode={clearCode}
      externalSampleLink={clearLink}
    >
      <Button primary clear>Primary Button</Button>
      <br />
      <br />
      <Button secondary clear>Secondary Button</Button>
      <br />
      <br />
      <Button dark clear>Dark Button</Button>
      <br />
      <br />
      <Button light clear>Light Button</Button>
      <br />
      <br />
      <Button info clear>Info Button</Button>
      <br />
      <br />
      <Button warning clear>Warning Button</Button>
      <br />
      <br />
      <Button danger clear>Danger Button</Button>
      <br />
      <br />
      <Button success clear>Success Button</Button>
    </DemoCard>

    <DemoCard
      title="Clear & Bordered"
      sourceCode={clearBorderedCode}
      externalSampleLink={clearBorderedLink}
    >
      <Button primary clear bordered>Primary Button</Button>
      <br />
      <br />
      <Button secondary clear bordered>Secondary Button</Button>
      <br />
      <br />
      <Button dark clear bordered>Dark Button</Button>
      <br />
      <br />
      <Button light clear bordered>Light Button</Button>
      <br />
      <br />
      <Button info clear bordered>Info Button</Button>
      <br />
      <br />
      <Button warning clear bordered>Warning Button</Button>
      <br />
      <br />
      <Button danger clear bordered>Danger Button</Button>
      <br />
      <br />
      <Button success clear bordered>Success Button</Button>
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

export default withHeader(ButtonDemo);
