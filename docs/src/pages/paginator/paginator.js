/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Paginator, Paper, SearchBar } from '@../../../../reactify-ui/build';
import { FaFileDownload, FaFileExport } from 'react-icons/fa';
import {
  controlledCode,
  customThemeCode,
  contentCode,
  disabledCode,
  eventsCode,
  responsiveCode,
  simpleCode,
} from './code-refrence';
import './paginator.scss';
import DemoCard from '../../components/demo-card';

const PaginatorDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Paginator noOfPages={5} />
    </DemoCard>

    <DemoCard
      title="Controlled"
      uniqueIdentifier="controlledUse"
      sourceCode={controlledCode}
    >
      <h6>
        Passing the isControlled prop makes the paginator controlled,
        check console for events
      </h6>
      <Paginator noOfPages={5} isControlled onChange={(...args) => console.log(...args)} />
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <Paginator noOfPages={5} disabled />
    </DemoCard>

    <DemoCard
      title="Putting Content Before and After"
      uniqueIdentifier="contentBeforeAfterUse"
      sourceCode={contentCode}
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
      uniqueIdentifier="responsiveUse"
      sourceCode={responsiveCode}
    >
      <Paginator noOfPages={5} sm md>
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
      uniqueIdentifier="themeUse"
      sourceCode={customThemeCode}
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
      uniqueIdentifier="eventsUse"
      sourceCode={eventsCode}
    >
      <h6>Check console for events</h6>
      <Paginator noOfPages={5} onChange={(...args) => console.log(...args)} />
    </DemoCard>
  </div>
);

export default PaginatorDemo;
