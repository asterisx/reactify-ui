import React from 'react';
import { RadioGroup, RadioInput } from '@../../../../reactify/build';
import {
  onSelectionCode,
  simpleCode,
  disabledCode,
} from './code-refrence';
import './radio-group.scss';
import DemoCard from '../../components/demo-card';

const RadioGroupDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <RadioGroup>
        <RadioInput index={0}>option 1</RadioInput>
        <RadioInput index={1}>option 1</RadioInput>
        <RadioInput index={2}>option 1</RadioInput>
      </RadioGroup>
    </DemoCard>

    <DemoCard
      title="onSelection"
      uniqueIdentifier="onSelectionUse"
      sourceCode={onSelectionCode}
    >
      <RadioGroup onSelectionChange={index => alert(`Selected index: ${index}`)}>
        <RadioInput index={0}>option 1</RadioInput>
        <RadioInput index={1}>option 1</RadioInput>
        <RadioInput index={2}>option 1</RadioInput>
      </RadioGroup>
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <RadioGroup disabled>
        <RadioInput index={0}>option 1</RadioInput>
        <RadioInput index={1}>option 1</RadioInput>
        <RadioInput index={2}>option 1</RadioInput>
      </RadioGroup>
    </DemoCard>
  </div>
);

export default RadioGroupDemo;
