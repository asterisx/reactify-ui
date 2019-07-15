/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Slider } from '../../../../reactify-ui/build';
import {
  controlledCode,
  customClassCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  onChangeCode,
  minMaxCode,
  unFilledCode,
  simpleCode,
} from './code-refrence';

import {
  controlledLink,
  customClassLink,
  customIconLink,
  customSizeLink,
  customThemeLink,
  disabledLink,
  onChangeLink,
  minMaxLink,
  unFilledLink,
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
    text: 'Sidebar',
    link: `${Constants.componentsPath}/sidebar`,
  },
  nextLink: {
    text: 'Snackbar',
    link: `${Constants.componentsPath}/snackbar`,
  },
};

const SliderDemo = () => (
  <DemoPage componentName="Slider">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/slider`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Slider value={20} />
    </DemoCard>

    <DemoCard
      title="Controlled"
      sourceCode={controlledCode}
      externalSampleLink={controlledLink}
    >
      <Slider value={50} isControlled />
    </DemoCard>

    <DemoCard
      title="Min Max Step"
      sourceCode={minMaxCode}
      externalSampleLink={minMaxLink}
    >
      <Slider
        min={200}
        minAllowed={400}
        maxAllowed={1600}
        max={2000}
        value={200}
        step={50}
      />
    </DemoCard>

    <DemoCard
      title="Un Filled"
      sourceCode={unFilledCode}
      externalSampleLink={unFilledLink}
    >
      <Slider value={20} fill={false} />
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Slider disabled value={20} />
    </DemoCard>

    <DemoCard
      title="Custom Icon Color, any valid css color (hex, rgb etc...) will work."
      sourceCode={customIconCode}
      externalSampleLink={customIconLink}
    >
      <Slider fillColor="red" value={20} />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Slider className="m-5 w-50" value={20} />
    </DemoCard>

    <DemoCard
      title="Custom Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <Slider small value={20} />
      <br />
      <br />
      <Slider medium value={20} />
      <br />
      <br />
      <Slider large value={20} />
      <br />
      <br />
      <Slider style={{ fontSize: '40px' }} value={20} />
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Slider primary value={20} />
      <br />
      <br />
      <Slider secondary value={20} />
      <br />
      <br />
      <Slider dark value={20} />
      <br />
      <br />
      <Slider light value={20} />
      <br />
      <br />
      <Slider info value={20} />
      <br />
      <br />
      <Slider warning value={20} />
      <br />
      <br />
      <Slider danger value={20} />
      <br />
      <br />
      <Slider success value={20} />
    </DemoCard>

    <DemoCard
      title="onChange Event"
      sourceCode={onChangeCode}
      externalSampleLink={onChangeLink}
    >
      <Slider onChange={({ event, value }) => console.log(event, value)} value={20} />
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

export default withHeader(SliderDemo);
