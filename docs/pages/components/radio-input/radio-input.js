/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { RadioInput } from '@../../../../reactify-ui/build';
import {
  childrenCode,
  controlledCode,
  customClassCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  onChangeCode,
  labelCode,
  labelPositionCode,
  simpleCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const RadioInputDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <RadioInput />
    </DemoCard>

    <DemoCard
      title="Controlled (checked)"
      uniqueIdentifier="checkedUse"
      sourceCode={controlledCode}
    >
      <RadioInput checked isControlled className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabled"
      sourceCode={disabledCode}
    >
      <RadioInput disabled checked className="align-self-center">This is disabled</RadioInput>
    </DemoCard>

    <DemoCard
      title="Label"
      uniqueIdentifier="label"
      sourceCode={labelCode}
    >
      <RadioInput checked>Dogs, cats and birds</RadioInput>
    </DemoCard>

    <DemoCard
      title="Label Position"
      uniqueIdentifier="labelPosition"
      sourceCode={labelPositionCode}
    >
      <RadioInput checked>Dogs, cats and birds</RadioInput>
      <br />
      <RadioInput checked style={{ flexDirection: 'row-reverse' }}>Dogs, cats and birds</RadioInput>
    </DemoCard>

    <DemoCard
      title="Children"
      uniqueIdentifier="children"
      sourceCode={childrenCode}
    >
      <RadioInput checked>
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
      <RadioInput iconColor="red" checked>Dogs, cats and birds</RadioInput>
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
      <RadioInput primary className="pb-2" checked>Primary</RadioInput>
      <br />
      <RadioInput secondary className="pb-2" checked>Secondary</RadioInput>
      <br />
      <RadioInput dark className="pb-2" checked>Dark</RadioInput>
      <br />
      <RadioInput light className="pb-2" checked>Light</RadioInput>
      <br />
      <RadioInput info className="pb-2" checked>Info</RadioInput>
      <br />
      <RadioInput warning className="pb-2" checked>Warning</RadioInput>
      <br />
      <RadioInput danger className="pb-2" checked>Danger</RadioInput>
      <br />
      <RadioInput success className="pb-2" checked>Success</RadioInput>
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

export default withHeader(RadioInputDemo);
