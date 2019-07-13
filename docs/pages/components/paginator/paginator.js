/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaFileDownload, FaFileExport } from 'react-icons/fa';
import { Paginator, Paper, SearchBar } from '@../../../../reactify-ui/build';
import {
  controlledCode,
  customThemeCode,
  contentCode,
  disabledCode,
  eventsCode,
  responsiveCode,
  simpleCode,
} from './code-refrence';

import {
  controlledLink,
  customThemeLink,
  contentLink,
  disabledLink,
  eventsLink,
  responsiveLink,
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
    text: 'Number Counter',
    link: `${Constants.componentsPath}/number-counter`,
  },
  nextLink: {
    text: 'Paper',
    link: `${Constants.componentsPath}/paper`,
  },
};

const PaginatorDemo = () => (
  <DemoPage componentName="Paginator">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/paginator`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Paginator noOfPages={5} />
    </DemoCard>

    <DemoCard
      title="Controlled"
      sourceCode={controlledCode}
      externalSampleLink={controlledLink}
    >
      <h6>
        Passing the isControlled prop makes the paginator controlled,
        check console for events
      </h6>
      <Paginator noOfPages={5} isControlled onChange={(...args) => console.log(...args)} />
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Paginator noOfPages={5} disabled />
    </DemoCard>

    <DemoCard
      title="Putting Content Before and After"
      sourceCode={contentCode}
      externalSampleLink={contentLink}
    >
      <Paginator noOfPages={5}>
        <Paginator.Before>
          <Paper light noShadow className="w-100">
            <SearchBar className="w-100" />
          </Paper>
        </Paginator.Before>
        <Paginator.After className="d-flex align-items-center pb-2 pt-2">
          <div className="h-100 d-flex align-items-center ml-2">
            <FaFileDownload className="m-0 p-0" />
            <FaFileExport className="m-0 p-0 ml-2 mr-2" />
          </div>
        </Paginator.After>
      </Paginator>
    </DemoCard>

    <DemoCard
      title="Responsive"
      sourceCode={responsiveCode}
      externalSampleLink={responsiveLink}
    >
      <Paginator noOfPages={5} sm md className="w-100">
        <Paginator.Before>
          <Paper light noShadow className="w-100">
            <SearchBar className="w-100" />
          </Paper>
        </Paginator.Before>
        <Paginator.After>
          <div className="h-100 d-flex align-items-center ml-2 pb-2 pt-2">
            <FaFileDownload className="m-0 p-0" />
            <FaFileExport className="m-0 p-0 ml-2 mr-2" />
          </div>
        </Paginator.After>
      </Paginator>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Paginator noOfPages={5} primary />
      <br />
      <br />
      <Paginator noOfPages={5} secondary />
      <br />
      <br />
      <Paginator noOfPages={5} dark />
      <br />
      <br />
      <Paginator noOfPages={5} light />
      <br />
      <br />
      <Paginator noOfPages={5} info />
      <br />
      <br />
      <Paginator noOfPages={5} warning />
      <br />
      <br />
      <Paginator noOfPages={5} danger />
      <br />
      <br />
      <Paginator noOfPages={5} success />
    </DemoCard>

    <DemoCard
      title="Events"
      sourceCode={eventsCode}
      externalSampleLink={eventsLink}
    >
      <h6>Check console for events</h6>
      <Paginator noOfPages={5} onChange={(...args) => console.log(...args)} />
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

export default withHeader(PaginatorDemo);
