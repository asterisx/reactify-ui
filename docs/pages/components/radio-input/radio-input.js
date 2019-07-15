/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { RadioInput } from '../../../../reactify-ui/build';
import {
  childrenCode,
  controlledCode,
  customClassCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  onChangeCode,
  labelCode,
  labelPositionCode,
  simpleCode,
} from './code-refrence';

import {
  childrenLink,
  controlledLink,
  customClassLink,
  customIconLink,
  customSizeLink,
  customThemeLink,
  disabledLink,
  onChangeLink,
  labelLink,
  labelPositionLink,
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
    text: 'Radio Group',
    link: `${Constants.componentsPath}/radio-group`,
  },
  nextLink: {
    text: 'Search Bar',
    link: `${Constants.componentsPath}/search-bar`,
  },
};

const RadioInputDemo = () => (
  <DemoPage componentName="Radio Input">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/radio-input`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <RadioInput />
    </DemoCard>

    <DemoCard
      title="Controlled (checked)"
      sourceCode={controlledCode}
      externalSampleLink={controlledLink}
    >
      <RadioInput checked isControlled className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <RadioInput disabled checked className="align-self-center">This is disabled</RadioInput>
    </DemoCard>

    <DemoCard
      title="Label"
      sourceCode={labelCode}
      externalSampleLink={labelLink}
    >
      <RadioInput checked>Dogs, cats and birds</RadioInput>
    </DemoCard>

    <DemoCard
      title="Label Position"
      sourceCode={labelPositionCode}
      externalSampleLink={labelPositionLink}
    >
      <RadioInput checked>Dogs, cats and birds</RadioInput>
      <br />
      <RadioInput checked style={{ flexDirection: 'row-reverse' }}>Dogs, cats and birds</RadioInput>
    </DemoCard>

    <DemoCard
      title="Children"
      sourceCode={childrenCode}
      externalSampleLink={childrenLink}
    >
      <RadioInput checked>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </RadioInput>
    </DemoCard>

    <DemoCard
      title="Custom Icon Color, any valid css color (hex, rgb etc...) will work."
      sourceCode={customIconCode}
      externalSampleLink={customIconLink}
    >
      <RadioInput iconColor="red" checked>Dogs, cats and birds</RadioInput>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <RadioInput className="text-light bg-dark p-2">This RadioInput has custom class</RadioInput>
    </DemoCard>

    <DemoCard
      title="Custom Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <RadioInput small>small</RadioInput>
      <br />
      <RadioInput medium>medium</RadioInput>
      <br />
      <RadioInput large>large</RadioInput>
      <br />
      <RadioInput style={{ fontSize: '40px' }}>{'style={{ fontSize: \'40px\' }}'}</RadioInput>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <RadioInput primary className="pb-2" checked>Primary</RadioInput>
      <br />
      <RadioInput secondary className="pb-2" checked>Secondary</RadioInput>
      <br />
      <RadioInput dark className="pb-2" checked>Dark</RadioInput>
      <br />
      <RadioInput light className="pb-2" checked>Light</RadioInput>
      <br />
      <RadioInput info className="pb-2" checked>Info</RadioInput>
      <br />
      <RadioInput warning className="pb-2" checked>Warning</RadioInput>
      <br />
      <RadioInput danger className="pb-2" checked>Danger</RadioInput>
      <br />
      <RadioInput success className="pb-2" checked>Success</RadioInput>
    </DemoCard>

    <DemoCard
      title="onChange Event"
      sourceCode={onChangeCode}
      externalSampleLink={onChangeLink}
    >
      <p>Check console for events</p>
      <RadioInput onChange={({ event, checked }) => console.log(event, checked)} />
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

export default withHeader(RadioInputDemo);
