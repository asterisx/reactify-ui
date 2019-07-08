/* eslint-disable no-console */
import React from 'react';
import { GroupToggle, Button } from '@../../../../reactify-ui/build';
import {
  onSelectionCode,
  simpleCode,
  disabledCode,
  selectedIndexCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const GroupToggleDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
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
      title="Selected Index"
      uniqueIdentifier="selectedIndexUse"
      sourceCode={selectedIndexCode}
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
      uniqueIdentifier="onSelectionUse"
      sourceCode={onSelectionCode}
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

    <DemoCard
      title="Disabled"
      uniqueIdentifier="diabledUse"
      sourceCode={disabledCode}
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
  </div>
);

export default withHeader(GroupToggleDemo);