/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { RadioInput } from 'reactify';
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
      title="Checked"
      uniqueIdentifier="checkedUse"
      sourceCode={checkedCode}
    >
      <RadioInput checked className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabled"
      sourceCode={disabledCode}
    >
      <RadioInput disabled checked className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Label (default is 'right')"
      uniqueIdentifier="label"
      sourceCode={labelCode}
    >
      <RadioInput checked label="Dogs, cats and birds" />
    </DemoCard>

    <DemoCard
      title="Label Position"
      uniqueIdentifier="labelPosition"
      sourceCode={labelPositionCode}
    >
      <RadioInput checked label="Dogs, cats and birds" labelPosition="left" />
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
      <RadioInput iconColor="red" checked />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClass"
      sourceCode={customClassCode}
    >
      <RadioInput className="text-light bg-dark p-2" label="This is a label" />
    </DemoCard>

    <DemoCard
      title="Custom Size"
      uniqueIdentifier="customSize"
      sourceCode={customSizeCode}
    >
      <RadioInput size="small" label='size="small"' />
      <br />
      <RadioInput size="medium" label='size="medium"' />
      <br />
      <RadioInput size="large" label='size="large"' />
      <br />
      <RadioInput size="40px" label='size="40px"' />
      <br />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themes"
      sourceCode={customThemeCode}
    >
      <RadioInput theme="default" className="pb-2" checked label={'theme="default"'} />
      <br />
      <RadioInput theme="dark" className="pb-2" checked label={'theme="dark"'} />
      <br />
      <RadioInput theme="light" className="pb-2" checked label={'theme="light"'} />
      <br />
      <RadioInput theme="info" className="pb-2" checked label={'theme="info"'} />
      <br />
      <RadioInput theme="warning" className="pb-2" checked label={'theme="warning"'} />
      <br />
      <RadioInput theme="danger" className="pb-2" checked label={'theme="danger"'} />
      <br />
      <RadioInput theme="success" checked label={'theme="success"'} />
      <br />
    </DemoCard>

    <DemoCard
      title="onChange Event"
      uniqueIdentifier="onChange"
      sourceCode={onChangeCode}
    >
      <RadioInput onChange={val => alert(`checked: ${val}`)} />
    </DemoCard>
  </div>
);

export default RadioInputDemo;
