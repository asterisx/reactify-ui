/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ListPanel } from 'reactify';
import {
  FaApple,
  FaAndroid,
  FaAmazon,
  FaAudible,
  FaBitcoin,
} from 'react-icons/fa';
import {
  selectionModeCode,
  defaultSelectionCode,
  disabledCode,
  customColorCode,
  customListCode,
  customThemeCode,
  customSizesCode,
  borderedCode,
  onSelectionChangeCode,
  simpleCode,
} from './code-refrence';
import './list-panel.scss';
import DemoCard from '../../components/demo-card';

const ListPanelDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <ListPanel>
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>
    </DemoCard>

    <DemoCard
      title="Selection Mode"
      uniqueIdentifier="selectionModeUse"
      sourceCode={selectionModeCode}
    >
      <h6 className="pt-3 pb-3">mode="multiple"</h6>
      <ListPanel mode="multiple">
        <ListPanel.Item selected index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item selected index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>
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
      <ListPanel disabled>
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>

      <h6>
        disabled
        {' '}
        <b>On List Items</b>
      </h6>
      <ListPanel>
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item disabled index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item disabled index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>
    </DemoCard>

    <DemoCard
      title="Bordered"
      uniqueIdentifier="borderedUse"
      sourceCode={borderedCode}
    >
      <h6 className="pt-3 pb-3">
        ListPanel Item has a bordered property for top border
        {' '}
        <b>default is bordered for all List Panel Items</b>
      </h6>
      <ListPanel mode="multiple">
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2} bordered={false}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4} bordered={false}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>
    </DemoCard>

    <DemoCard
      title="Default Selected"
      uniqueIdentifier="defaultSelectionUse"
      sourceCode={defaultSelectionCode}
    >
      <ListPanel mode="multiple">
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item selected index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item selected index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      uniqueIdentifier="customSizesUse"
      sourceCode={customSizesCode}
    >
      <h6 className="pt-3 pb-3">size="small"</h6>
      <ListPanel size="small">
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>

      <h5 className="pt-3 pb-3">
        size="medium"
        {' '}
        <b className="pl-2">default</b>
      </h5>
      <ListPanel size="medium">
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>

      <h4 className="pt-3 pb-3">size="large"</h4>
      <ListPanel size="large">
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>

      <h3 className="pt-3 pb-3">size="40px"</h3>
      <ListPanel size="40px">
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>
    </DemoCard>

    <DemoCard
      title="Custom List"
      uniqueIdentifier="customListUse"
      sourceCode={customListCode}
    >
      <ListPanel mode="multiple">
        <ListPanel.Item index={1} bordered={false}>
          <div className="d-inline-flex justify-content-between align-items-center">
            <FaApple className="mr-4" />
            <span className="ml-4">Apple</span>
          </div>
        </ListPanel.Item>
        <ListPanel.Item selected index={2}>
          <div className="d-inline-flex justify-content-between align-items-center">
            <FaAndroid className="mr-4" />
            <span className="ml-4">Android</span>
          </div>
        </ListPanel.Item>
        <ListPanel.Item index={3}>
          <div className="d-inline-flex justify-content-between align-items-center">
            <FaAmazon className="mr-4" />
            <span className="ml-4">Amazon</span>
          </div>
        </ListPanel.Item>
        <ListPanel.Item selected index={4}>
          <div className="d-inline-flex justify-content-between align-items-center">
            <FaAudible className="mr-4" />
            <span className="ml-4">Audible</span>
          </div>
        </ListPanel.Item>
        <ListPanel.Item index={5}>
          <div className="d-inline-flex justify-content-between align-items-center">
            <FaBitcoin className="mr-4" />
            <span className="ml-4">Bitcoin</span>
          </div>
        </ListPanel.Item>
      </ListPanel>
    </DemoCard>

    <DemoCard
      title="Theme Use"
      uniqueIdentifier="themeUse"
      sourceCode={customThemeCode}
    >
      <h6 className="pt-3 pb-3">Default theme</h6>
      <ListPanel mode="multiple" theme="default">
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Dark theme</h6>
      <ListPanel mode="multiple" theme="dark">
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Light theme</h6>
      <ListPanel mode="multiple" theme="light">
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Info theme</h6>
      <ListPanel mode="multiple" theme="info">
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Warning theme</h6>
      <ListPanel mode="multiple" theme="warning">
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Danger theme</h6>
      <ListPanel mode="multiple" theme="danger">
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Success theme</h6>
      <ListPanel mode="multiple" theme="success">
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Mixed theme</h6>
      <ListPanel mode="multiple">
        <ListPanel.Item theme="light" className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item theme="dark" className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item theme="info" className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item theme="warning" className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item theme="danger" className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
        <ListPanel.Item theme="success" className="pl-5 pr-5 pt-2 pb-2" index={6}>Item 6</ListPanel.Item>
        <ListPanel.Item color="violet" className="pl-5 pr-5 pt-2 pb-2" index={7}>Item 7</ListPanel.Item>
      </ListPanel>
    </DemoCard>

    <DemoCard
      title="Custom Color"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <ListPanel color="violet">
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>
    </DemoCard>

    <DemoCard
      title="onSelectionChange"
      uniqueIdentifier="onSelectionChangeUse"
      sourceCode={onSelectionChangeCode}
    >
      <ListPanel mode="singular" onSelectionChange={({ index, selected }) => alert(`Index: ${index}\nSelected: ${selected}`)}>
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>
    </DemoCard>
  </div>
);

export default ListPanelDemo;
