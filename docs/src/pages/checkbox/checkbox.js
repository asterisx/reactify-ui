/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Checkbox } from 'reactify';
import {
  simpleCode,
  checkedCode,
  disabledCode,
  customColorCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
  labelPositionCode,
  childrenCode,
  customClassCode,
} from './code-refrence';
import './checkbox.scss';
import DemoCard from '../../components/demo-card';

const CheckboxDemo = () => (
  <div>
    <DemoCard title="Simple Use" uniqueIdentifier="simpleUse" sourceCode={simpleCode}>
      <Checkbox label="This is a checkbox" />
    </DemoCard>

    <DemoCard title="Checked" uniqueIdentifier="checkedUse" sourceCode={checkedCode}>
      <Checkbox checked label="This is a checked label" />
    </DemoCard>

    <DemoCard title="Disabled" uniqueIdentifier="disabledUse" sourceCode={disabledCode}>
      <Checkbox checked disabled label="This checkbox is disabled" />
    </DemoCard>

    <DemoCard title="Position (left, right)" uniqueIdentifier="checkboxUse" sourceCode={labelPositionCode}>
      <Checkbox labelPosition="left" label="This is a checkbox with left position" />
      <br />
      <Checkbox labelPosition="right" label="This is a checkbox with right position" />
    </DemoCard>

    <DemoCard title="Children" uniqueIdentifier="childrenUse" sourceCode={childrenCode}>
      <Checkbox checked>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Checkbox>
    </DemoCard>

    <DemoCard title="Custom Color" uniqueIdentifier="customColorUse" sourceCode={customColorCode}>
      <Checkbox checked color="violet" />
    </DemoCard>


    <DemoCard title="Custom Class" uniqueIdentifier="customClassUse" sourceCode={customClassCode}>
      <Checkbox checked className="bg-dark p-5" />
    </DemoCard>

    <DemoCard title="Custom Size" uniqueIdentifier="customSizeUse" sourceCode={customSizeCode}>
      <Checkbox size="small" label='size="small"' />
      <br />
      <Checkbox size="medium" label='size="medium"' />
      <br />
      <Checkbox size="large" label='size="large"' />
      <br />
      <Checkbox size="40px" label='size="40px"' />
      <br />
    </DemoCard>

    <DemoCard title="Thmes" uniqueIdentifier="customThemeUse" sourceCode={customThemeCode}>
      <Checkbox theme="default" className="pb-2" checked />
      <br />
      <Checkbox theme="dark" className="pb-2" checked />
      <br />
      <Checkbox theme="light" className="pb-2" checked />
      <br />
      <Checkbox theme="info" className="pb-2" checked />
      <br />
      <Checkbox theme="warning" className="pb-2" checked />
      <br />
      <Checkbox theme="danger" className="pb-2" checked />
      <br />
      <Checkbox theme="success" checked />
      <br />
    </DemoCard>

    <DemoCard title="onChange Event" uniqueIdentifier="onChangeUse" sourceCode={onChangeCode}>
      <Checkbox onChange={val => alert(`checked: ${val}`)} />
    </DemoCard>
  </div>
);

export default CheckboxDemo;
