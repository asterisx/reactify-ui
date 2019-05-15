import React from 'react';
import { Select } from '@../../../../reactify/build';
import {
  simpleCode,
} from './code-refrence';
import './select.scss';
import DemoCard from '../../components/demo-card';

const SelectDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Select>
        <Select.Item index={1}>Item 1</Select.Item>
        <Select.Item index={2}>Item 2</Select.Item>
        <Select.Item index={3}>Item 3</Select.Item>
        <Select.Item index={4}>Item 4</Select.Item>
      </Select>
    </DemoCard>
  </div>
);

export default SelectDemo;
