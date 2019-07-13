import React from 'react';
import { Tooltip, Paper } from '@../../../../reactify-ui/build';
import {
  customSizeCode,
  customThemeCode,
  positionCode,
  simpleCode,
} from './code-refrence';

import {
  customSizeLink,
  customThemeLink,
  positionLink,
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
    text: 'Toast',
    link: `${Constants.componentsPath}/toast`,
  },
  nextLink: {
    text: 'Top Bar',
    link: `${Constants.componentsPath}/top-bar`,
  },
};

const TooltipDemo = () => (
  <DemoPage componentName="Tooltip">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/tooltip`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Tooltip content="I am a simple tooltip">Hover over me to show tooltip</Tooltip>
    </DemoCard>

    <DemoCard
      title="Positioning"
      sourceCode={positionCode}
      externalSampleLink={positionLink}
    >
      <div className="d-flex justify-items-center">
        <Tooltip top content="I am a top tooltip">Hover over me to show top tooltip</Tooltip>
        <br />
        <Tooltip left content="I am a left tooltip">Hover over me to show left tooltip</Tooltip>
        <br />
        <Tooltip right content="I am a right tooltip">Hover over me to show right tooltip</Tooltip>
        <br />
        <Tooltip bottom content="I am a bottom tooltip">Hover over me to show bottom tooltip</Tooltip>
      </div>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Tooltip primary content="I am a primary tooltip"><Paper primary className="pl-2 pr-2 m-2">Hover over me to show primary tooltip</Paper></Tooltip>
      <br />
      <Tooltip secondary content="I am a secondary tooltip"><Paper secondary className="pl-2 pr-2 m-2">Hover over me to show secondary tooltip</Paper></Tooltip>
      <br />
      <Tooltip dark content="I am a dark tooltip"><Paper dark className="pl-2 pr-2 m-2">Hover over me to show dark tooltip</Paper></Tooltip>
      <br />
      <Tooltip light content="I am a light tooltip"><Paper light className="pl-2 pr-2 m-2">Hover over me to show light tooltip</Paper></Tooltip>
      <br />
      <Tooltip info content="I am a info tooltip"><Paper info className="pl-2 pr-2 m-2">Hover over me to show info tooltip</Paper></Tooltip>
      <br />
      <Tooltip warning content="I am a warning tooltip"><Paper warning className="pl-2 pr-2 m-2">Hover over me to show warning tooltip</Paper></Tooltip>
      <br />
      <Tooltip danger content="I am a danger tooltip"><Paper danger className="pl-2 pr-2 m-2">Hover over me to show danger tooltip</Paper></Tooltip>
      <br />
      <Tooltip success content="I am a success tooltip"><Paper success className="pl-2 pr-2 m-2">Hover over me to show success tooltip</Paper></Tooltip>
    </DemoCard>

    <DemoCard
      title="Sizes"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <Tooltip small content="I am a small tooltip">Hover over me to show small tooltip</Tooltip>
      <br />
      <Tooltip medium content="I am a medium tooltip">Hover over me to show medium tooltip</Tooltip>
      <br />
      <Tooltip large content="I am a large tooltip">Hover over me to show large tooltip</Tooltip>
      <br />
      <Tooltip className="customSize" content="I am a custom size tooltip">Hover over me to show custom size tooltip</Tooltip>
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

export default withHeader(TooltipDemo);
