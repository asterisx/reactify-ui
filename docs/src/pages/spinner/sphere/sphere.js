/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Spinner } from '@../../../../reactify-ui/build';
import {
  customColorCode,
  customClassCode,
  customThemeCode,
  customSpeedCode,
  simpleCode,
  sizeCode,
} from './code-refrence';
import './sphere.scss';
import DemoCard from '../../../components/demo-card';

const SphereDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Spinner
        sphere
      />
    </DemoCard>

    <DemoCard
      title="Size"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6>small</h6>
      <Spinner
        sphere
        small
      />

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Spinner
        sphere
        medium
      />

      <h6 className="pt-3">large</h6>
      <Spinner
        sphere
        large
      />

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Spinner
        sphere
        style={{ fontSize: '75px' }}
      />
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Spinner
        sphere
        style={{ color: 'violet' }}
      />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themeUse"
      sourceCode={customThemeCode}
    >
      <h6>Primary</h6>
      <Spinner
        sphere
        primary
      />

      <h6>Secondary</h6>
      <Spinner
        sphere
        secondary
      />

      <h6 className="pt-3">Dark</h6>
      <Spinner
        sphere
        dark
      />

      <h6 className="pt-3">Light</h6>
      <Spinner
        sphere
        light
      />

      <h6 className="pt-3">Info</h6>
      <Spinner
        sphere
        info
      />

      <h6 className="pt-3">Warning</h6>
      <Spinner
        sphere
        warning
      />

      <h6 className="pt-3">Danger</h6>
      <Spinner
        sphere
        danger
      />

      <h6 className="pt-3">Success</h6>
      <Spinner
        sphere
        success
      />
    </DemoCard>

    <DemoCard
      title="Controlling Speed"
      uniqueIdentifier="customSpeedUse"
      sourceCode={customSpeedCode}
    >
      <h6 className="mt-3 mb-3">Slow</h6>
      <Spinner
        sphere
        style={{ animationDuration: '3s' }}
      />

      <h6 className="mt-3 mb-3">Fast</h6>
      <Spinner
        sphere
        style={{ animationDuration: '500ms' }}
      />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Spinner
        sphere
        className="bg-dark"
      />
    </DemoCard>
  </div>
);

export default SphereDemo;
