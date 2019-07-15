/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Input } from '../../../../reactify-ui/build';
import {
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  propsCode,
  simpleCode,
} from './code-refrence';

import {
  customColorLink,
  customClassLink,
  customSizeLink,
  customThemeLink,
  propsLink,
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
    text: 'Horizontal Card',
    link: `${Constants.componentsPath}/horizontal-card`,
  },
  nextLink: {
    text: 'Label',
    link: `${Constants.componentsPath}/label`,
  },
};

const InputDemo = () => (
  <DemoPage componentName="Input">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/input`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Input />
    </DemoCard>

    <DemoCard
      title="Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6>small</h6>
      <Input small defaultValue="A small input" type="text" />

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Input medium defaultValue="A medium input" type="text" />

      <h6 className="pt-3">large</h6>
      <Input large defaultValue="A large input" type="text" />

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Input style={{ fontSize: '75px' }} defaultValue="A custom size input" type="text" />
    </DemoCard>

    <DemoCard
      title="Custom Color (Border) (any valid CSS solor)"
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <Input style={{ borderColor: 'violet' }} defaultValue="A custom color Input" type="text" />
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h6>Primary</h6>
      <Input primary defaultValue="A primary Input" type="text" />

      <h6>Secondary</h6>
      <Input secondary defaultValue="A Secondary Input" type="text" />

      <h6 className="pt-3">Dark</h6>
      <Input dark defaultValue="A Dark Input" type="text" />

      <h6 className="pt-3">Light</h6>
      <Input light defaultValue="A Light Input" type="text" />

      <h6 className="pt-3">Info</h6>
      <Input info defaultValue="A Info Input" type="text" />

      <h6 className="pt-3">Warning</h6>
      <Input warning defaultValue="A Warning Input" type="text" />

      <h6 className="pt-3">Danger</h6>
      <Input danger defaultValue="A Danger Input" type="text" />

      <h6 className="pt-3">Success</h6>
      <Input success defaultValue="A Success Input" type="text" />
    </DemoCard>

    <DemoCard
      title="Props"
      sourceCode={propsCode}
      externalSampleLink={propsLink}
    >
      <h6 className="mt-3 mb-3">Input is merely a input with some styles applied and except the size and theme props all other props are passed as is.</h6>
      <Input style={{ borderColor: 'violet' }} defaultValue="password" type="password" />
    </DemoCard>


    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Input className="bg-dark Input-light p-1" />
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

export default withHeader(InputDemo);
