/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from '@../../../../reactify/build';
import {
  customColorCode,
  customClassCode,
  customThemeCode,
  simpleCode,
  sizeCode,
} from './code-refrence';
import './link.scss';
import DemoCard from '../../components/demo-card';

const LinkDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Link href="http://www.google.com">A simple Link</Link>
    </DemoCard>

    <DemoCard
      title="Size"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6>small</h6>
      <Link href="http://www.google.com" small>A small Link</Link>

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Link href="http://www.google.com" medium>A medium Link</Link>

      <h6 className="pt-3">large</h6>
      <Link href="http://www.google.com" large>A large Link</Link>

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Link href="http://www.google.com" style={{ fontSize: '75px' }}>A custom size Link</Link>
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Link href="http://www.google.com" style={{ color: 'violet' }}>A custom color Link</Link>
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themeUse"
      sourceCode={customThemeCode}
    >
      <h6>Primary</h6>
      <Link href="http://www.google.com" primary>A primary Link</Link>

      <h6>Secondary</h6>
      <Link href="http://www.google.com" secondary>A secondary Link</Link>

      <h6 className="pt-3">Dark</h6>
      <Link href="http://www.google.com" dark>A dark Link</Link>

      <h6 className="pt-3">Light</h6>
      <Link href="http://www.google.com" light>A light Link</Link>

      <h6 className="pt-3">Info</h6>
      <Link href="http://www.google.com" info>A info Link</Link>

      <h6 className="pt-3">Warning</h6>
      <Link href="http://www.google.com" warning>A warning Link</Link>

      <h6 className="pt-3">Danger</h6>
      <Link href="http://www.google.com" danger>A danger Link</Link>

      <h6 className="pt-3">Success</h6>
      <Link href="http://www.google.com" success>A success Link</Link>

    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Link href="http://www.google.com" className="bg-dark Link-light p-1">A custom class Link</Link>
    </DemoCard>
  </div>
);

export default LinkDemo;
