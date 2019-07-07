/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { SearchBar } from '@../../../../reactify-ui/build';
import {
  controlledCode,
  customColorCode,
  customClassCode,
  customThemeCode,
  disabledCode,
  eventCode,
  placeholderCode,
  simpleCode,
  sizeCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const SearchBarDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <SearchBar />
    </DemoCard>

    <DemoCard
      title="Events"
      uniqueIdentifier="eventsUse"
      sourceCode={eventCode}
    >
      <h6>Check the console for events logs</h6>
      <SearchBar onChange={({ event, value }) => console.log(event, value)} />
    </DemoCard>

    <DemoCard
      title="Controlled"
      uniqueIdentifier="valueUse"
      sourceCode={controlledCode}
    >
      <h6>Passing the value makes the searchbar controlled, check the log for events</h6>
      <SearchBar value="" isControlled onChange={({ event, value }) => console.log(event, value)} />
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <SearchBar disabled />
    </DemoCard>

    <DemoCard
      title="Placeholder"
      uniqueIdentifier="placeHolderUse"
      sourceCode={placeholderCode}
    >
      <SearchBar placeholder="Some Placeholder" />
    </DemoCard>

    <DemoCard
      title="Size"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
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
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <SearchBar style={{ color: 'violet' }} />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themeUse"
      sourceCode={customThemeCode}
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
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <SearchBar className="bg-dark p-3" />
    </DemoCard>
  </div>
);


export default withHeader(SearchBarDemo);
