/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from '../../../../reactify-ui/build';
import {
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  simpleCode,
} from './code-refrence';

import {
  customColorLink,
  customClassLink,
  customSizeLink,
  customThemeLink,
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
    text: 'Legend',
    link: `${Constants.componentsPath}/legend`,
  },
  nextLink: {
    text: 'List Panel',
    link: `${Constants.componentsPath}/list-panel`,
  },
};


const LinkDemo = () => (
  <DemoPage componentName="Link">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/link`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Link href="#">A simple Link</Link>
    </DemoCard>

    <DemoCard
      title="Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6>small</h6>
      <Link href="#" small>A small Link</Link>

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Link href="#" medium>A medium Link</Link>

      <h6 className="pt-3">large</h6>
      <Link href="#" large>A large Link</Link>

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Link href="#" style={{ fontSize: '75px' }}>A custom size Link</Link>
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <Link href="#" style={{ color: 'violet' }}>A custom color Link</Link>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h6>Primary</h6>
      <Link href="#" primary>A primary Link</Link>

      <h6>Secondary</h6>
      <Link href="#" secondary>A secondary Link</Link>

      <h6 className="pt-3">Dark</h6>
      <Link href="#" dark>A dark Link</Link>

      <h6 className="pt-3">Light</h6>
      <Link href="#" light>A light Link</Link>

      <h6 className="pt-3">Info</h6>
      <Link href="#" info>A info Link</Link>

      <h6 className="pt-3">Warning</h6>
      <Link href="#" warning>A warning Link</Link>

      <h6 className="pt-3">Danger</h6>
      <Link href="#" danger>A danger Link</Link>

      <h6 className="pt-3">Success</h6>
      <Link href="#" success>A success Link</Link>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Link href="#" className="bg-dark Link-light p-1">A custom class Link</Link>
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

export default withHeader(LinkDemo);
