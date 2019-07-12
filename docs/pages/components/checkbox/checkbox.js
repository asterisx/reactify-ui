/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Checkbox } from '@../../../../reactify-ui/build';
import {
  childrenCode,
  controlledCode,
  customClassCode,
  customColorCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  labelPositionCode,
  onChangeCode,
  simpleCode,
} from './code-refrence';

import {
  childrenLink,
  controlledLink,
  customClassLink,
  customColorLink,
  customSizeLink,
  customThemeLink,
  disabledLink,
  labelPositionLink,
  onChangeLink,
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
    text: 'Card',
    link: `${Constants.componentsPath}/card`,
  },
  nextLink: {
    text: 'Chips',
    link: `${Constants.componentsPath}/chips`,
  },
};

const CheckboxDemo = () => (
  <DemoPage componentName="Checkbox">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/checkbox`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Checkbox checked>This is a checkbox</Checkbox>
    </DemoCard>

    <DemoCard
      title="Controlled (checked)"
      sourceCode={controlledCode}
      externalSampleLink={controlledLink}
    >
      <Checkbox checked isControlled>This is a checked label</Checkbox>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Checkbox checked disabled>This checkbox is disabled</Checkbox>
    </DemoCard>

    <DemoCard
      title="Position (left, right)"
      sourceCode={labelPositionCode}
      externalSampleLink={labelPositionLink}
    >
      <Checkbox>This is a checkbox with left position</Checkbox>
      <br />
      <Checkbox style={{ flexDirection: 'row-reverse' }}>This is a checkbox with right position</Checkbox>
    </DemoCard>

    <DemoCard
      title="Children"
      sourceCode={childrenCode}
      externalSampleLink={childrenLink}
    >
      <Checkbox checked>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Checkbox>
    </DemoCard>

    <DemoCard
      title="Custom Color"
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <Checkbox checked iconColor="violet">Custom Color</Checkbox>
    </DemoCard>


    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Checkbox checked className="bg-dark p-5">This checkbox has custom class</Checkbox>
    </DemoCard>

    <DemoCard
      title="Custom Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <Checkbox small>Small Size</Checkbox>
      <br />
      <Checkbox medium>Medium Size</Checkbox>
      <br />
      <Checkbox large>Large Size</Checkbox>
      <br />
      <Checkbox style={{ fontSize: '40px' }}>{'style={{ fontSize: \'40px\' }}'}</Checkbox>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Checkbox primary className="pb-2" checked>Primary Checkbox</Checkbox>
      <br />
      <Checkbox secondary className="pb-2" checked>Secondary Checkbox</Checkbox>
      <br />
      <Checkbox dark className="pb-2" checked>Dark Checkbox</Checkbox>
      <br />
      <Checkbox light className="pb-2" checked>Light Checkbox</Checkbox>
      <br />
      <Checkbox info className="pb-2" checked>Info Checkbox</Checkbox>
      <br />
      <Checkbox warning className="pb-2" checked>Warning Checkbox</Checkbox>
      <br />
      <Checkbox danger className="pb-2" checked>Danger Checkbox</Checkbox>
      <br />
      <Checkbox success checked>Success Checkbox</Checkbox>
    </DemoCard>

    <DemoCard
      title="onChange Event"
      sourceCode={onChangeCode}
      externalSampleLink={onChangeLink}
    >
      <Checkbox onChange={({ event, checked }) => console.log(event, checked)} />
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

export default withHeader(CheckboxDemo);
