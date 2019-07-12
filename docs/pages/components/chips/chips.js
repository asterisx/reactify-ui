/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */

import React, { Component } from 'react';
import { Chips, Chip } from '@../../../../reactify-ui/build';
import {
  customColorCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  onCloseCode,
  simpleCode,
} from './code-refrence';

import {
  customColorLink,
  customSizesLink,
  customThemeLink,
  disabledLink,
  onCloseLink,
  simpleLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Checkbox',
    link: `${Constants.componentsPath}/checkbox`,
  },
  nextLink: {
    text: 'Context Menu',
    link: `${Constants.componentsPath}/context-menu`,
  },
};

class ListPanelDemo extends Component {
  state = { simpleItems: ['Chip 1', 'Chip 2', 'Chip 3'] };

  render() {
    return (
      <DemoPage componentName="Chips">
        <ComponentInfo
          productionReady
          responsive
          githubLink={`${Constants.githubComponentsPath}/chips`}
        />
        <DemoCard
          title="Simple Use"
          sourceCode={simpleCode}
          externalSampleLink={simpleLink}
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
          sourceCode={customColorCode}
          externalSampleLink={customColorLink}
        >
          <Chip style={{ backgroundColor: 'violet' }}>Custom Color</Chip>
        </DemoCard>

        <DemoCard
          title="Disabled Use"
          sourceCode={disabledCode}
          externalSampleLink={disabledLink}
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
          sourceCode={customSizeCode}
          externalSampleLink={customSizesLink}
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
          sourceCode={customThemeCode}
          externalSampleLink={customThemeLink}
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
          sourceCode={onCloseCode}
          externalSampleLink={onCloseLink}
        >
          <Chip onCloseClick={() => alert('Close Clicked')}>Item 1</Chip>
        </DemoCard>

        <BottomNav
          className="mt-4 mb-4"
          prevLinkText={bottomNavLinks.prevLink.text}
          prevLink={bottomNavLinks.prevLink.link}
          nextLinkText={bottomNavLinks.nextLink.text}
          nextLink={bottomNavLinks.nextLink.link}
        />
      </DemoPage>
    );
  }
}


export default withHeader(ListPanelDemo);
