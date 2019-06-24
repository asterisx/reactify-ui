/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */

import React, { Component } from 'react';
import { Chips, Chip } from '@../../../../reactify-ui/build';
import {
  disabledCode,
  customColorCode,
  customThemeCode,
  customSizesCode,
  onCloseCode,
  simpleCode,
} from './code-refrence';
import './chips.scss';
import DemoCard from '../../components/demo-card';

class ListPanelDemo extends Component {
  state = { simpleItems: ['Chip 1', 'Chip 2', 'Chip 3'] };

  render() {
    return (
      <div className="w-100">
        <DemoCard
          title="Simple Use"
          uniqueIdentifier="simpleUse"
          sourceCode={simpleCode}
        >
          <Chips>
            {this.state.simpleItems.map((si, index) => (
              <Chip
                key={index}
                onCloseClick={
              () => this.setState(prevState => (
                { simpleItems: prevState.simpleItems.filter(sit => sit !== si) }))}
              >
                {si}
              </Chip>
            ))}
          </Chips>
        </DemoCard>

        <DemoCard
          title="Custom Color"
          uniqueIdentifier="customColorUse"
          sourceCode={customColorCode}
        >
          <Chip style={{ backgroundColor: 'violet' }}>Custom Color</Chip>
        </DemoCard>

        <DemoCard
          title="Disabled Use"
          uniqueIdentifier="disabledUse"
          sourceCode={disabledCode}
        >
          <h6>
            disabled
            {' '}
            <b>On Whole List</b>
          </h6>
          <Chips disabled>
            <Chip key={1}>Item 1</Chip>
            <Chip key={2}>Item 2</Chip>
            <Chip key={3}>Item 3</Chip>
          </Chips>

          <h6 className="mt-3">
            disabled
            <b className="ml-2">On List Items</b>
          </h6>
          <Chips>
            <Chip disabled key={1}>Item 1</Chip>
            <Chip key={2}>Item 2</Chip>
            <Chip key={3}>Item 3</Chip>
          </Chips>
        </DemoCard>

        <DemoCard
          title="Custom Sizes"
          uniqueIdentifier="customSizesUse"
          sourceCode={customSizesCode}
        >
          <h6 className="pt-3 pb-3">size="small"</h6>
          <Chip small>Item 1</Chip>

          <h5 className="pt-3 pb-3">
            size="medium"
            <b className="ml-2">default</b>
          </h5>
          <Chip medium>Item 1</Chip>

          <h4 className="pt-3 pb-3">size="large"</h4>
          <Chip large>Item 1</Chip>

          <h3 className="pt-3 pb-3">size="40px"</h3>
          <Chip style={{ fontSize: '40px' }}>Item 1</Chip>

        </DemoCard>

        <DemoCard
          title="Theme Use"
          uniqueIdentifier="themeUse"
          sourceCode={customThemeCode}
        >
          <h6 className="pt-3 pb-3">Primary theme</h6>
          <Chip primary>Item 1</Chip>

          <h6 className="pt-3 pb-3">Secondary theme</h6>
          <Chip secondary>Item 1</Chip>

          <h6 className="pt-3 pb-3">Dark theme</h6>
          <Chip dark>Item 1</Chip>

          <h6 className="pt-3 pb-3">Light theme</h6>
          <Chip light>Item 1</Chip>

          <h6 className="pt-3 pb-3">Info theme</h6>
          <Chip info>Item 1</Chip>

          <h6 className="pt-3 pb-3">Warning theme</h6>
          <Chip warning>Item 1</Chip>

          <h6 className="pt-3 pb-3">Danger theme</h6>
          <Chip danger>Item 1</Chip>

          <h6 className="pt-3 pb-3">Success theme</h6>
          <Chip success>Item 1</Chip>

        </DemoCard>

        <DemoCard
          title="onCloseEvent"
          uniqueIdentifier="onCloseChangeUse"
          sourceCode={onCloseCode}
        >
          <Chip onCloseClick={() => alert('Close Clicked')}>Item 1</Chip>
        </DemoCard>
      </div>
    );
  }
}


export default ListPanelDemo;
