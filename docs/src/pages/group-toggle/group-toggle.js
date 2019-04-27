import React from 'react';
import { GroupToggle, Button } from 'reactify';
import {
  onSelectionCode,
  simpleCode,
} from './code-refrence';
import './group-toggle.scss';
import DemoCard from '../../components/demo-card';

const GroupToggleDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <GroupToggle>
        {({ selectedIndex }) => (
          <>
            <Button index={0} theme={selectedIndex === 0 ? 'success' : 'default'} text="Option 1" />
            <Button index={1} theme={selectedIndex === 1 ? 'success' : 'default'} text="Option 2" />
            <Button index={2} theme={selectedIndex === 2 ? 'success' : 'default'} text="Option 3" />
          </>
        )}
      </GroupToggle>
    </DemoCard>

    <DemoCard
      title="onSelection"
      uniqueIdentifier="onSelectionUse"
      sourceCode={onSelectionCode}
    >
      <GroupToggle onSelectionChange={index => alert(`Selected index ${index}`)}>
        {({ selectedIndex }) => (
          <>
            <Button index={0} theme={selectedIndex === 0 ? 'success' : 'default'} text="Option 1" />
            <Button index={1} theme={selectedIndex === 1 ? 'success' : 'default'} text="Option 2" />
            <Button index={2} theme={selectedIndex === 2 ? 'success' : 'default'} text="Option 3" />
          </>
        )}
      </GroupToggle>
    </DemoCard>
  </div>
);

export default GroupToggleDemo;
