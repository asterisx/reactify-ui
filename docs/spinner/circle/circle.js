/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Spinner } from './reactify-ui/build';
import {
  customColorCode,
  customClassCode,
  customThemeCode,
  customSpeedCode,
  simpleCode,
  sizeCode,
} from './code-refrence';
import './circle.scss';
import { DemoCard, withHeader } from '../../../common';

const CircleDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Spinner
        circle
      />
    </DemoCard>

    <DemoCard
      title="Size"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6>small</h6>
      <Spinner
        circle
        small
      />

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Spinner
        circle
        medium
      />

      <h6 className="pt-3">large</h6>
      <Spinner
        circle
        large
      />

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Spinner
        circle
        style={{ fontSize: '75px' }}
      />
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Spinner
        circle
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
        circle
        primary
      />

      <h6>Secondary</h6>
      <Spinner
        circle
        secondary
      />

      <h6 className="pt-3">Dark</h6>
      <Spinner
        circle
        dark
      />

      <h6 className="pt-3">Light</h6>
      <Spinner
        circle
        light
      />

      <h6 className="pt-3">Info</h6>
      <Spinner
        circle
        info
      />

      <h6 className="pt-3">Warning</h6>
      <Spinner
        circle
        warning
      />

      <h6 className="pt-3">Danger</h6>
      <Spinner
        circle
        danger
      />

      <h6 className="pt-3">Success</h6>
      <Spinner
        circle
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
        circle
        style={{ animationDuration: '3s' }}
      />

      <h6 className="mt-3 mb-3">Fast</h6>
      <Spinner
        circle
        style={{ animationDuration: '500ms' }}
      />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Spinner
        circle
        className="bg-dark"
      />
    </DemoCard>
  </div>
);

export default withHeader(CircleDemo);
