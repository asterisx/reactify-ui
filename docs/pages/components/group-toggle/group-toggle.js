/* eslint-disable no-console */
import React from 'react';
import { GroupToggle, Button } from '../../../../reactify-ui/build';
import {
  disabledCode,
  onSelectionCode,
  selectedIndexCode,
  simpleCode,
} from './code-refrence';

import {
  disabledLink,
  onSelectionLink,
  selectedIndexLink,
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
    text: 'Full Screen',
    link: `${Constants.componentsPath}/full-screen`,
  },
  nextLink: {
    text: 'Heat Map',
    link: `${Constants.componentsPath}/heat-map`,
  },
};

const GroupToggleDemo = () => (
  <DemoPage componentName="Group Toggle">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/group-toggle`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <GroupToggle>
        {({ selectedIndex }) => (
          <>
            <Button
              index={0}
              success={selectedIndex === 0}
            >
              Option 1
            </Button>
            <Button
              index={1}
              success={selectedIndex === 1}
            >
              Option 2
            </Button>
            <Button
              index={2}
              success={selectedIndex === 2}
            >
              Option 3
            </Button>
          </>
        )}
      </GroupToggle>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <GroupToggle disabled>
        {({ selectedIndex }) => (
          <>
            <Button
              index={0}
              success={selectedIndex === 0}
            >
              Option 1
            </Button>
            <Button
              index={1}
              success={selectedIndex === 1}
            >
              Option 2
            </Button>
            <Button
              index={2}
              success={selectedIndex === 2}
            >
              Option 3
            </Button>
          </>
        )}
      </GroupToggle>
    </DemoCard>

    <DemoCard
      title="Selected Index"
      sourceCode={selectedIndexCode}
      externalSampleLink={selectedIndexLink}
    >
      <GroupToggle selectedIndex={1}>
        {({ selectedIndex }) => (
          <>
            <Button
              index={0}
              success={selectedIndex === 0}
              default={selectedIndex !== 0}
            >
              Option 1
            </Button>
            <Button
              index={1}
              success={selectedIndex === 1}
              default={selectedIndex !== 1}
            >
              Option 2
            </Button>
            <Button
              index={2}
              success={selectedIndex === 2}
              default={selectedIndex !== 2}
            >
              Option 3
            </Button>
          </>
        )}
      </GroupToggle>
    </DemoCard>

    <DemoCard
      title="onSelection"
      sourceCode={onSelectionCode}
      externalSampleLink={onSelectionLink}
    >
      <GroupToggle onSelectionChange={({ event, index }) => console.log(event, index)}>
        {({ selectedIndex }) => (
          <>
            <Button
              index={0}
              success={selectedIndex === 0}
            >
              Option 1
            </Button>
            <Button
              index={1}
              success={selectedIndex === 1}
            >
              Option 2
            </Button>
            <Button
              index={2}
              success={selectedIndex === 2}
            >
              Option 3
            </Button>
          </>
        )}
      </GroupToggle>
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

export default withHeader(GroupToggleDemo);
