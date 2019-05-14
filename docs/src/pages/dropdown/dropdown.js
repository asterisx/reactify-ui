import React from 'react';
import { Dropdown } from '@../../../../reactify/build';
import {
  breakpointCode,
  disabledCode,
  labelCode,
  onSelectionCode,
  propsCode,
  simpleCode,
  trayOpenCode,
} from './code-refrence';
import './dropdown.scss';
import DemoCard from '../../components/demo-card';

const DropdownDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Dropdown>
        <Dropdown.Item index={1}>Item 1</Dropdown.Item>
        <Dropdown.Item index={2}>Item 2</Dropdown.Item>
        <Dropdown.Item index={3}>Item 3</Dropdown.Item>
        <Dropdown.Item index={4}>Item 4</Dropdown.Item>
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Tray Open dy default"
      uniqueIdentifier="trayOpenDefaultUse"
      sourceCode={trayOpenCode}
    >
      <Dropdown trayOpen>
        <Dropdown.Item index={1}>Item 1</Dropdown.Item>
        <Dropdown.Item index={2}>Item 2</Dropdown.Item>
        <Dropdown.Item index={3}>Item 3</Dropdown.Item>
        <Dropdown.Item index={4}>Item 4</Dropdown.Item>
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Breakpoints"
      uniqueIdentifier="breakpointsUse"
      sourceCode={breakpointCode}
    >
      <h6 className="mt-3 mb-3">Options will show inside a portal on screen sizes marked by props sm, md, lg, xl. Open this dropdown on a md or xs screen size</h6>
      <Dropdown sm md>
        <Dropdown.Item index={1}>Item 1</Dropdown.Item>
        <Dropdown.Item index={2}>Item 2</Dropdown.Item>
        <Dropdown.Item index={3}>Item 3</Dropdown.Item>
        <Dropdown.Item index={4}>Item 4</Dropdown.Item>
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Selection Change"
      uniqueIdentifier="onSelectionChange"
      sourceCode={onSelectionCode}
    >
      <h6 className="mt-3 mb-3">Check the console for events</h6>
      <Dropdown sm md onSelectionChange={({ index, selected }) => console.log(`Index changed ${index}, selected ${selected}`)}>
        <Dropdown.Item selected index={1}>Item 1</Dropdown.Item>
        <Dropdown.Item index={2}>Item 2</Dropdown.Item>
        <Dropdown.Item index={3}>Item 3</Dropdown.Item>
        <Dropdown.Item index={4}>Item 4</Dropdown.Item>
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <Dropdown disabled>
        <Dropdown.Item index={1}>Item 1</Dropdown.Item>
        <Dropdown.Item index={2}>Item 2</Dropdown.Item>
        <Dropdown.Item index={3}>Item 3</Dropdown.Item>
        <Dropdown.Item index={4}>Item 4</Dropdown.Item>
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Props"
      uniqueIdentifier="Props"
      sourceCode={propsCode}
    >
      <h6 className="mt-3 mb-3">Dropdown unded the hood is a ListPanel, so all valid list panel props can be passed. Treat Dropdown as ListPanel and Dropdown.Item as ListPanel.Item</h6>
      <Dropdown sm md success>
        <Dropdown.Item selected index={1}>Item 1</Dropdown.Item>
        <Dropdown.Item index={2}>Item 2</Dropdown.Item>
        <Dropdown.Item index={3}>Item 3</Dropdown.Item>
        <Dropdown.Item index={4}>Item 4</Dropdown.Item>
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Label"
      uniqueIdentifier="Label"
      sourceCode={labelCode}
    >
      <h6 className="mt-3 mb-3">Because label is a render prop, you can pass anything you want to it.</h6>
      <Dropdown sm md warning label="Custom Label">
        <Dropdown.Item index={1}>Item 1</Dropdown.Item>
        <Dropdown.Item index={2}>Item 2</Dropdown.Item>
        <Dropdown.Item index={3}>Item 3</Dropdown.Item>
        <Dropdown.Item index={4}>Item 4</Dropdown.Item>
      </Dropdown>
    </DemoCard>
  </div>
);

export default DropdownDemo;
