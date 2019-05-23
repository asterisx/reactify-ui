/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ListPanel } from '@../../../../reactify/build';
import {
  FaApple,
  FaAndroid,
  FaAmazon,
  FaAudible,
  FaBitcoin,
} from 'react-icons/fa';
import {
  defaultSelectionCode,
  disabledCode,
  customListCode,
  customThemeCode,
  customSizesCode,
  borderedCode,
  eventsCode,
  multipleCode,
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
      title="Multiple Use"
      uniqueIdentifier="multipleUse"
      sourceCode={multipleCode}
    >
      <ListPanel multiple>
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
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
      <ListPanel>
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
      <ListPanel multiple onItemClicked={props => console.log(props)}>
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
      <ListPanel small>
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
      <ListPanel medium>
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>

      <h4 className="pt-3 pb-3">size="large"</h4>
      <ListPanel large>
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>

      <h3 className="pt-3 pb-3">size="40px"</h3>
      <ListPanel style={{ fontSize: '40px' }}>
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
      <ListPanel>
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
      <h6 className="pt-3 pb-3">Primary theme</h6>
      <ListPanel primary>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Secondary theme</h6>
      <ListPanel secondary>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Dark theme</h6>
      <ListPanel dark>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Light theme</h6>
      <ListPanel light>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Info theme</h6>
      <ListPanel info>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Warning theme</h6>
      <ListPanel warning>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Danger theme</h6>
      <ListPanel danger>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Success theme</h6>
      <ListPanel success>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
      </ListPanel>
      <h6 className="pt-3 pb-3">Mixed theme</h6>
      <ListPanel>
        <ListPanel.Item primary className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item secondary className="pl-5 pr-5 pt-2 pb-2" index={2} bordered={false}>Item 2</ListPanel.Item>
        <ListPanel.Item light className="pl-5 pr-5 pt-2 pb-2" index={3} bordered={false}>Item 3</ListPanel.Item>
        <ListPanel.Item dark className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item info className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
        <ListPanel.Item warning className="pl-5 pr-5 pt-2 pb-2" index={6}>Item 6</ListPanel.Item>
        <ListPanel.Item danger className="pl-5 pr-5 pt-2 pb-2" index={7}>Item 7</ListPanel.Item>
        <ListPanel.Item success className="pl-5 pr-5 pt-2 pb-2" index={8}>Item 8</ListPanel.Item>
        <ListPanel.Item style={{ backgroundColor: 'violet' }} className="pl-5 pr-5 pt-2 pb-2" index={9}>Item 9</ListPanel.Item>
      </ListPanel>
    </DemoCard>

    <DemoCard
      title="Events Code"
      uniqueIdentifier="eventsUse"
      sourceCode={eventsCode}
    >
      <h6>
        <b>*</b>
        Listpanel item can also be unseletable via prop
        {' isSelectable={false}'}
      </h6>
      <ListPanel onSelectionChange={({ event, index, selected }) => console.log(event, index, selected)} onItemClicked={({ event, index }) => console.log(event, index)}>
        <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
        <ListPanel.Item isSelectable={false} index={2}>Item 2</ListPanel.Item>
        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
        <ListPanel.Item index={4}>Item 4</ListPanel.Item>
        <ListPanel.Item index={5}>Item 5</ListPanel.Item>
      </ListPanel>
    </DemoCard>
  </div>
);

export default ListPanelDemo;
