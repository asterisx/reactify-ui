/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Typeahead, Paper } from '@../../../../reactify-ui/build';
import {
  controlledCode,
  customSizeCode,
  customThemeCode,
  declarativeCode,
  disabledCode,
  eventsCode,
  notSelectableCode,
  preSearchTermCode,
  simpleCode,
} from './code-refrence';

import {
  controlledLink,
  customSizeLink,
  customThemeLink,
  declarativeLink,
  disabledLink,
  eventsLink,
  notSelectableLink,
  preSearchTermLink,
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
    text: 'Tree View',
    link: `${Constants.componentsPath}/tree-view`,
  },
  nextLink: {
    text: 'User Profile',
    link: `${Constants.componentsPath}/user-profile`,
  },
};

const suggestions = [
  {
    index: 1,
    value: 'value 1',
  },
  {
    index: 2,
    value: 'value 2',
  },
  {
    index: 3,
    value: 'value 3',
  },
];

const PaginatorDemo = () => (
  <DemoPage componentName="Typeahead">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/typeahead`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Controlled"
      sourceCode={controlledCode}
      externalSampleLink={controlledLink}
    >
      <h6>
        Passing in isControlled makes this to be controlled,
        which means no filtering is performed.
      </h6>
      <Typeahead style={{ background: 'white' }} isControlled suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Not Selectable"
      sourceCode={notSelectableCode}
      externalSampleLink={notSelectableLink}
    >
      <h6>
        Passing in isSelectable false will make the suggestion non selectable
      </h6>
      <Typeahead style={{ background: 'white' }} isSelectable={false} suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Typeahead style={{ background: 'white' }} disabled suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Pre SearchTerm"
      sourceCode={preSearchTermCode}
      externalSampleLink={preSearchTermLink}
    >
      <Typeahead style={{ background: 'white' }} searchTerm="value" suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Size"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6>small</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} small />

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} medium />

      <h6 className="pt-3">large</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} large />

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Typeahead style={{ background: 'white', fontSize: '75px' }} suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h6>Primary</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} primary />

      <h6>Secondary</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} secondary />

      <h6 className="pt-3">Dark</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} dark />

      <h6 className="pt-3">Light</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} light />

      <h6 className="pt-3">Info</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} info />

      <h6 className="pt-3">Warning</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} warning />

      <h6 className="pt-3">Danger</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} danger />

      <h6 className="pt-3">Success</h6>
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} success />
    </DemoCard>

    <DemoCard
      title="Declarative"
      sourceCode={declarativeCode}
      externalSampleLink={declarativeLink}
    >
      <Typeahead style={{ background: 'white' }} onChange={(...args) => console.log(...args)}>
        <Typeahead.Suggestion
          isSelectable={false}
          index={1}
          value="value 1"
        >
          <Paper className="w-100" warning>NON SELECTABLE SUGGESTION</Paper>
        </Typeahead.Suggestion>
        <Typeahead.Suggestion
          index={2}
          value="value 2"
        >
          <Paper className="w-100" danger>VALUE 2</Paper>
        </Typeahead.Suggestion>
        <Typeahead.Suggestion
          index={3}
          value="value 3"
        >
          <Paper className="w-100" success>VALUE 3</Paper>
        </Typeahead.Suggestion>
      </Typeahead>
    </DemoCard>

    <DemoCard
      title="Events"
      sourceCode={eventsCode}
      externalSampleLink={eventsLink}
    >
      <Typeahead style={{ background: 'white' }} suggestions={suggestions} onChange={(...args) => console.log(...args)} />
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
