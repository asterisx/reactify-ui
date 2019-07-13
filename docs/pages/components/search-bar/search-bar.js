/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { SearchBar } from '@../../../../reactify-ui/build';
import {
  controlledCode,
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  eventCode,
  placeholderCode,
  simpleCode,
} from './code-refrence';

import {
  controlledLink,
  customColorLink,
  customClassLink,
  customSizeLink,
  customThemeLink,
  disabledLink,
  eventLink,
  placeholderLink,
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
    text: 'Radio Input',
    link: `${Constants.componentsPath}/radio-input`,
  },
  nextLink: {
    text: 'Select',
    link: `${Constants.componentsPath}/select`,
  },
};

const SearchBarDemo = () => (
  <DemoPage componentName="Search Bar">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/search-bar`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <SearchBar />
    </DemoCard>

    <DemoCard
      title="Events"
      sourceCode={eventCode}
      externalSampleLink={eventLink}
    >
      <h6>Check the console for events logs</h6>
      <SearchBar onChange={({ event, value }) => console.log(event, value)} />
    </DemoCard>

    <DemoCard
      title="Controlled"
      sourceCode={controlledCode}
      externalSampleLink={controlledLink}
    >
      <h6>Passing the value makes the searchbar controlled, check the log for events</h6>
      <SearchBar value="" isControlled onChange={({ event, value }) => console.log(event, value)} />
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <SearchBar disabled />
    </DemoCard>

    <DemoCard
      title="Placeholder"
      sourceCode={placeholderCode}
      externalSampleLink={placeholderLink}
    >
      <SearchBar placeholder="Some Placeholder" />
    </DemoCard>

    <DemoCard
      title="Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6>small</h6>
      <SearchBar small />

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <SearchBar medium />

      <h6 className="pt-3">large</h6>
      <SearchBar large />

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <SearchBar style={{ fontSize: '75px' }} />
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <SearchBar style={{ color: 'violet' }} />
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h6>Primary</h6>
      <SearchBar primary />

      <h6>Secondary</h6>
      <SearchBar secondary />

      <h6 className="pt-3">Dark</h6>
      <SearchBar dark />

      <h6 className="pt-3">Light</h6>
      <SearchBar light />

      <h6 className="pt-3">Info</h6>
      <SearchBar info />

      <h6 className="pt-3">Warning</h6>
      <SearchBar warning />

      <h6 className="pt-3">Danger</h6>
      <SearchBar danger />

      <h6 className="pt-3">Success</h6>
      <SearchBar success />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <SearchBar className="bg-dark p-3" />
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


export default withHeader(SearchBarDemo);
