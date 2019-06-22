import React from 'react';
import { Dropdown, ListPanel } from '@../../../../reactify-ui/build';
import {
  breakpointCode,
  disabledCode,
  labelCode,
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
      <Dropdown label="Please select a value">
        {closeTray => (
          <ListPanel onItemClicked={() => closeTray}>
            <ListPanel.Item index={1}>Item 1</ListPanel.Item>
            <ListPanel.Item index={2}>Item 2</ListPanel.Item>
            <ListPanel.Item index={3}>Item 3</ListPanel.Item>
            <ListPanel.Item index={4}>Item 4</ListPanel.Item>
          </ListPanel>
        )}
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Tray Open dy default"
      uniqueIdentifier="trayOpenDefaultUse"
      sourceCode={trayOpenCode}
    >
      <Dropdown trayOpen label="Please select a value">
        {closeTray => (
          <ListPanel onItemClicked={() => closeTray}>
            <ListPanel.Item index={1}>Item 1</ListPanel.Item>
            <ListPanel.Item index={2}>Item 2</ListPanel.Item>
            <ListPanel.Item index={3}>Item 3</ListPanel.Item>
            <ListPanel.Item index={4}>Item 4</ListPanel.Item>
          </ListPanel>
        )}
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Breakpoints"
      uniqueIdentifier="breakpointsUse"
      sourceCode={breakpointCode}
    >
      <h6 className="mt-3 mb-3">Options will show inside a portal on screen sizes marked by props sm, md, lg, xl. Open this dropdown on a md or xs screen size</h6>
      <Dropdown sm md label="Please select a value">
        {closeTray => (
          <ListPanel className="w-100" onItemClicked={() => closeTray}>
            <ListPanel.Item index={1}>Item 1</ListPanel.Item>
            <ListPanel.Item index={2}>Item 2</ListPanel.Item>
            <ListPanel.Item index={3}>Item 3</ListPanel.Item>
            <ListPanel.Item index={4}>Item 4</ListPanel.Item>
          </ListPanel>
        )}
      </Dropdown>
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <Dropdown disabled label="Please select a value" />
    </DemoCard>

    <DemoCard
      title="Label"
      uniqueIdentifier="Label"
      sourceCode={labelCode}
    >
      <h6 className="mt-3 mb-3">Because label is a render prop, you can pass anything you want to it.</h6>
      <Dropdown sm md label="Custom Label">
        <ListPanel.Item index={1}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
      </Dropdown>
    </DemoCard>
  </div>
);

export default DropdownDemo;
