import React from 'react';
import { RadioGroup, RadioInput } from 'reactify';
import {
  onSelectionCode,
  simpleCode,
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
        <RadioInput label="option 1" index={0} />
        <RadioInput label="option 2" index={1} />
        <RadioInput label="option 3" index={2} />
      </RadioGroup>
    </DemoCard>

    <DemoCard
      title="onSelection"
      uniqueIdentifier="onSelectionUse"
      sourceCode={onSelectionCode}
    >
      <RadioGroup onSelectionChange={index => alert(`Selected index: ${index}`)}>
        <RadioInput label="option 1" index={0} />
        <RadioInput label="option 2" index={1} />
        <RadioInput label="option 3" index={2} />
      </RadioGroup>
    </DemoCard>
  </div>
);

export default RadioGroupDemo;
