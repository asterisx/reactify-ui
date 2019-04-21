/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Legend, LegendItem } from 'reactify';
import {
  childrenCode,
  customColorCode,
  customClassCode,
  customThemeCode,
  directionCode,
  simpleCode,
} from './code-refrence';
import './legend.scss';
import DemoCard from '../../components/demo-card';

const LegendDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Legend>
        <LegendItem label="Inventory" />
      </Legend>
    </DemoCard>

    <DemoCard
      title="Direction (vertical or horizontal), default is horizontal"
      uniqueIdentifier="directionUse"
      sourceCode={directionCode}
    >
      <h6>Vertical</h6>
      <Legend direction="vertical">
        <LegendItem label="Inventory 1" />
        <LegendItem label="Inventory 2" />
      </Legend>
      <br />
      <br />
      <h6>Horizontal</h6>
      <Legend direction="horizontal">
        <LegendItem label="Inventory 1" />
        <LegendItem label="Inventory 2" />
      </Legend>
    </DemoCard>

    <DemoCard
      title="Children, Legend and Legend items both accept children"
      uniqueIdentifier="childrenUse"
      sourceCode={childrenCode}
    >
      <h6>LegendItem's are usually used as children for Legend, but both Legend and LegendItems's can accept any children</h6>
      <Legend direction="vertical">
        <LegendItem label="Inventory 1"><b className="pl-2">Legend items also accept children</b></LegendItem>
        <LegendItem label="Inventory 2" />
      </Legend>
    </DemoCard>

    <DemoCard
      title="Custom Color"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Legend>
        <LegendItem iconColor="violet" label="Inventory" />
      </Legend>
    </DemoCard>

    <DemoCard
      title="Theme"
      uniqueIdentifier="customTheme"
      sourceCode={customThemeCode}
    >
      <Legend direction="vertical">
        <LegendItem theme="default" label="Default Theme" />
        <LegendItem theme="dark" label="Dark Theme" />
        <LegendItem theme="light" label="Light Theme" />
        <LegendItem theme="info" label="Info Theme" />
        <LegendItem theme="warning" label="Warning Theme" />
        <LegendItem theme="danger" label="Danger Theme" />
        <LegendItem theme="success" label="Success Theme" />
      </Legend>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Legend className="p-2 bg-primary">
        <LegendItem label="Inventory" className="text-light bg-secondary pr-1 pl-1" />
      </Legend>
    </DemoCard>
  </div>
);

export default LegendDemo;
