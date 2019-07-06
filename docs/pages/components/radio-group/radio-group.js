/* eslint-disable no-alert */
import React from 'react';
import { RadioGroup, RadioInput } from '@../../../../reactify-ui/build';
import {
  onSelectionCode,
  simpleCode,
  disabledCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const RadioGroupDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <RadioGroup>
        <RadioInput index={0}>option 1</RadioInput>
        <RadioInput index={1}>option 2</RadioInput>
        <RadioInput index={2}>option 3</RadioInput>
      </RadioGroup>
    </DemoCard>

    <DemoCard
      title="onSelection"
      uniqueIdentifier="onSelectionUse"
      sourceCode={onSelectionCode}
    >
      <RadioGroup onSelectionChange={({ index }) => alert(`Selected index: ${index}`)}>
        <RadioInput index={0}>option 1</RadioInput>
        <RadioInput index={1}>option 2</RadioInput>
        <RadioInput index={2}>option 3</RadioInput>
      </RadioGroup>
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <RadioGroup disabled>
        <RadioInput index={0}>option 1</RadioInput>
        <RadioInput index={1}>option 2</RadioInput>
        <RadioInput index={2}>option 3</RadioInput>
      </RadioGroup>
    </DemoCard>
  </div>
);

export default withHeader(RadioGroupDemo);
