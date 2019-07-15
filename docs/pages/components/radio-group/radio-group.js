/* eslint-disable no-alert */
import React from 'react';
import { RadioGroup, RadioInput } from '../../../../reactify-ui/build';
import {
  onSelectionCode,
  simpleCode,
  disabledCode,
} from './code-refrence';

import {
  onSelectionLink,
  simpleLink,
  disabledLink,
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
    text: 'Progress Bar',
    link: `${Constants.componentsPath}/progress-bar`,
  },
  nextLink: {
    text: 'Radio Input',
    link: `${Constants.componentsPath}/radio-input`,
  },
};

const RadioGroupDemo = () => (
  <DemoPage componentName="Radio Group">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/radio-group`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <RadioGroup>
        <RadioInput index={0}>option 1</RadioInput>
        <RadioInput index={1}>option 2</RadioInput>
        <RadioInput index={2}>option 3</RadioInput>
      </RadioGroup>
    </DemoCard>

    <DemoCard
      title="onSelection"
      sourceCode={onSelectionCode}
      externalSampleLink={onSelectionLink}
    >
      <p>Check console for log</p>
      <RadioGroup onSelectionChange={({ index }) => console.log(`Selected index: ${index}`)}>
        <RadioInput index={0}>option 1</RadioInput>
        <RadioInput index={1}>option 2</RadioInput>
        <RadioInput index={2}>option 3</RadioInput>
      </RadioGroup>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <RadioGroup disabled>
        <RadioInput index={0}>option 1</RadioInput>
        <RadioInput index={1}>option 2</RadioInput>
        <RadioInput index={2}>option 3</RadioInput>
      </RadioGroup>
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

export default withHeader(RadioGroupDemo);
