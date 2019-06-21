/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Typeahead, Paper } from '@../../../../reactify/build';
import {
  controlledCode,
  customThemeCode,
  declarativeCode,
  disabledCode,
  eventsCode,
  preSearchTermUse,
  notSelectableCode,
  simpleCode,
  sizeCode,
} from './code-refrence';
import './typeahead.scss';
import DemoCard from '../../components/demo-card';

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
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Typeahead suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Controlled"
      uniqueIdentifier="isControlledUse"
      sourceCode={controlledCode}
    >
      <h6>
        Passing in isControlled makes this to be controlled,
        which means no filtering is performed.
      </h6>
      <Typeahead isControlled suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Not Selectable"
      uniqueIdentifier="notSelectable"
      sourceCode={notSelectableCode}
    >
      <h6>
        Passing in isSelectable false will make the suggestion non selectable
      </h6>
      <Typeahead isSelectable={false} suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <Typeahead disabled suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Pre SearchTerm"
      uniqueIdentifier="preSearchTermUse"
      sourceCode={preSearchTermUse}
    >
      <Typeahead searchTerm="value" suggestions={suggestions} />
    </DemoCard>

    <DemoCard
      title="Size"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6>small</h6>
      <Typeahead suggestions={suggestions} small />

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Typeahead suggestions={suggestions} medium />

      <h6 className="pt-3">large</h6>
      <Typeahead suggestions={suggestions} large />

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Typeahead suggestions={suggestions} style={{ fontSize: '75px' }} />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themesUse"
      sourceCode={customThemeCode}
    >
      <h6>Primary</h6>
      <Typeahead suggestions={suggestions} primary />

      <h6>Secondary</h6>
      <Typeahead suggestions={suggestions} secondary />

      <h6 className="pt-3">Dark</h6>
      <Typeahead suggestions={suggestions} dark />

      <h6 className="pt-3">Light</h6>
      <Typeahead suggestions={suggestions} light />

      <h6 className="pt-3">Info</h6>
      <Typeahead suggestions={suggestions} info />

      <h6 className="pt-3">Warning</h6>
      <Typeahead suggestions={suggestions} warning />

      <h6 className="pt-3">Danger</h6>
      <Typeahead suggestions={suggestions} danger />

      <h6 className="pt-3">Success</h6>
      <Typeahead suggestions={suggestions} success />
    </DemoCard>

    <DemoCard
      title="Declarative"
      uniqueIdentifier="declarativeUse"
      sourceCode={declarativeCode}
    >
      <Typeahead onChange={(...args) => console.log(...args)}>
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
      uniqueIdentifier="eventsUse"
      sourceCode={eventsCode}
    >
      <Typeahead suggestions={suggestions} onChange={(...args) => console.log(...args)} />
    </DemoCard>
  </div>
);

export default PaginatorDemo;
