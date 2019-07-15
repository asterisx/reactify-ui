/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Label } from '../../../../reactify-ui/build';
import {
  childrenCode,
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  simpleCode,
} from './code-refrence';

import {
  childrenLink,
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
    text: 'Input',
    link: `${Constants.componentsPath}/input`,
  },
  nextLink: {
    text: 'Legend',
    link: `${Constants.componentsPath}/legend`,
  },
};

const LabelDemo = () => (
  <DemoPage componentName="Label">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/label`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Label>Simple Label</Label>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Label disabled>Disabled Label</Label>
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <Label small className="mb-2">
        Small Label
      </Label>
      <br />
      <Label medium className="mb-2">
        Medium Label
      </Label>
      <br />
      <Label large className="mb-2">
        Large Label
      </Label>
      <br />
      <Label style={{ fontSize: '35px' }} className="mb-2">
        Label with size 35px
      </Label>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Label primary className="mb-2">
        Primary Theme
      </Label>
      <br />
      <Label secondary className="mb-2">
        Secondary Theme
      </Label>
      <br />
      <Label dark className="mb-2">
        Dark Theme
      </Label>
      <br />
      <Label light className="mb-2">
        Light Theme
      </Label>
      <br />
      <Label info className="mb-2">
        Info Theme
      </Label>
      <br />
      <Label warning className="mb-2">
        Warning Theme
      </Label>
      <br />
      <Label danger className="mb-2">
        Danger Theme
      </Label>
      <br />
      <Label success className="mb-2">
        Success Theme
      </Label>
    </DemoCard>

    <DemoCard
      title="Children"
      sourceCode={childrenCode}
      externalSampleLink={childrenLink}
    >
      <Label medium className="p-2">
        <div className="card text-dark" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </Label>
    </DemoCard>

    <DemoCard
      title="Custom Color, any valid css color (hex, rgb etc...) will work."
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <Label style={{ backgroundColor: 'violet' }}>Simple Label</Label>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Label className="text-light bg-dark p-2 shadow">
        Custom Class Label
      </Label>
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

export default withHeader(LabelDemo);
