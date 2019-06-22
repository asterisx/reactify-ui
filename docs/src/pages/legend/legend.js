/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Legend, LegendItem } from '@../../../../reactify-ui/build';
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
        <LegendItem>Inventory</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Direction (vertical or horizontal), default is horizontal"
      uniqueIdentifier="directionUse"
      sourceCode={directionCode}
    >
      <h6>Vertical</h6>
      <Legend vertical>
        <LegendItem>Inventory 1</LegendItem>
        <LegendItem>Inventory 2</LegendItem>
      </Legend>
      <br />
      <br />
      <h6>Horizontal</h6>
      <Legend horizontal>
        <LegendItem>Inventory 1</LegendItem>
        <LegendItem>Inventory 2</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Children, Legend and Legend items both accept children"
      uniqueIdentifier="childrenUse"
      sourceCode={childrenCode}
    >
      <h6>LegendItem's are usually used as children for Legend, but both Legend and LegendItems's can accept any children</h6>
      <Legend vertical>
        <LegendItem><b className="pl-2">Legend items also accept children</b></LegendItem>
        <LegendItem>Inventory 2</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Custom Color"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Legend>
        <LegendItem iconColor="violet">Inventory</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Theme"
      uniqueIdentifier="customTheme"
      sourceCode={customThemeCode}
    >
      <Legend vertical>
        <LegendItem primary>Primary Theme</LegendItem>
        <LegendItem secondary>Secondary Theme</LegendItem>
        <LegendItem dark>Dark Theme</LegendItem>
        <LegendItem light>Light Theme</LegendItem>
        <LegendItem info>Info Theme</LegendItem>
        <LegendItem warning>Warning Theme</LegendItem>
        <LegendItem danger>Danger Theme</LegendItem>
        <LegendItem success>Success Theme</LegendItem>
      </Legend>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Legend className="p-2 bg-primary">
        <LegendItem className="text-light bg-secondary pr-1 pl-1">Inventory</LegendItem>
      </Legend>
    </DemoCard>
  </div>
);

export default LegendDemo;
