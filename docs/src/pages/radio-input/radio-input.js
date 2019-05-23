/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { RadioInput } from '@../../../../reactify/build';
import {
  simpleCode,
  checkedCode,
  disabledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
  labelCode,
  labelPositionCode,
  childrenCode,
  customClassCode,
} from './code-refrence';
import './radio-input.scss';
import DemoCard from '../../components/demo-card';

const RadioInputDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <RadioInput />
    </DemoCard>

    <DemoCard
      title="Checked (Controlled)"
      uniqueIdentifier="checkedUse"
      sourceCode={checkedCode}
    >
      <RadioInput defaultChecked className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabled"
      sourceCode={disabledCode}
    >
      <RadioInput disabled defaultChecked className="align-self-center">This is disabled</RadioInput>
    </DemoCard>

    <DemoCard
      title="Label"
      uniqueIdentifier="label"
      sourceCode={labelCode}
    >
      <RadioInput defaultChecked>Dogs, cats and birds</RadioInput>
    </DemoCard>

    <DemoCard
      title="Label Position"
      uniqueIdentifier="labelPosition"
      sourceCode={labelPositionCode}
    >
      <RadioInput defaultChecked>Dogs, cats and birds</RadioInput>
      <br />
      <RadioInput defaultChecked style={{ flexDirection: 'row-reverse' }}>Dogs, cats and birds</RadioInput>
    </DemoCard>

    <DemoCard
      title="Children"
      uniqueIdentifier="children"
      sourceCode={childrenCode}
    >
      <RadioInput defaultChecked>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </RadioInput>
    </DemoCard>

    <DemoCard
      title="Custom Icon Color, any valid css color (hex, rgb etc...) will work."
      uniqueIdentifier="customIcon"
      sourceCode={customIconCode}
    >
      <RadioInput iconColor="red" defaultChecked>Dogs, cats and birds</RadioInput>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClass"
      sourceCode={customClassCode}
    >
      <RadioInput className="text-light bg-dark p-2">This RadioInput has custom class</RadioInput>
    </DemoCard>

    <DemoCard
      title="Custom Size"
      uniqueIdentifier="customSize"
      sourceCode={customSizeCode}
    >
      <RadioInput small>small</RadioInput>
      <br />
      <RadioInput medium>medium</RadioInput>
      <br />
      <RadioInput large>large</RadioInput>
      <br />
      <RadioInput style={{ fontSize: '40px' }}>{'style={{ fontSize: \'40px\' }}'}</RadioInput>
      <br />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themes"
      sourceCode={customThemeCode}
    >
      <RadioInput primary className="pb-2" defaultChecked>Primary</RadioInput>
      <br />
      <RadioInput secondary className="pb-2" defaultChecked>Secondary</RadioInput>
      <br />
      <RadioInput dark className="pb-2" defaultChecked>Dark</RadioInput>
      <br />
      <RadioInput light className="pb-2" defaultChecked>Light</RadioInput>
      <br />
      <RadioInput info className="pb-2" defaultChecked>Info</RadioInput>
      <br />
      <RadioInput warning className="pb-2" defaultChecked>Warning</RadioInput>
      <br />
      <RadioInput danger className="pb-2" defaultChecked>Danger</RadioInput>
      <br />
      <RadioInput success className="pb-2" defaultChecked>Success</RadioInput>
    </DemoCard>

    <DemoCard
      title="onChange Event"
      uniqueIdentifier="onChange"
      sourceCode={onChangeCode}
    >
      <RadioInput onChange={({ event, checked }) => console.log(event, checked)} />
    </DemoCard>
  </div>
);

export default RadioInputDemo;
