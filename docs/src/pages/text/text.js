/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text } from '@../../../../reactify/build';
import {
  customColorCode,
  customClassCode,
  customThemeCode,
  simpleCode,
  sizeCode,
} from './code-refrence';
import './text.scss';
import DemoCard from '../../components/demo-card';

const TextDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Text>A simple text</Text>
    </DemoCard>

    <DemoCard
      title="Size"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6>small</h6>
      <Text small>A small text</Text>

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Text medium>A medium text</Text>

      <h6 className="pt-3">large</h6>
      <Text large>A large text</Text>

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Text style={{ fontSize: '75px' }}>A custom size text</Text>
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Text style={{ color: 'violet' }}>A custom color text</Text>
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themeUse"
      sourceCode={customThemeCode}
    >
      <h6>Primary</h6>
      <Text primary>A primary text</Text>

      <h6>Secondary</h6>
      <Text secondary>A secondary text</Text>

      <h6 className="pt-3">Dark</h6>
      <Text dark>A dark text</Text>

      <h6 className="pt-3">Light</h6>
      <Text light>A light text</Text>

      <h6 className="pt-3">Info</h6>
      <Text info>A info text</Text>

      <h6 className="pt-3">Warning</h6>
      <Text warning>A warning text</Text>

      <h6 className="pt-3">Danger</h6>
      <Text danger>A danger text</Text>

      <h6 className="pt-3">Success</h6>
      <Text success>A success text</Text>

    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Text className="bg-dark text-light p-1">A custom class text</Text>
    </DemoCard>
  </div>
);

export default TextDemo;
