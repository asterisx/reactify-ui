/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Paper } from '@../../../../reactify-ui/build';
import {
  customThemeCode,
  simpleCode,
  sizeCode,
  noShadowCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const NumberCounterDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Paper>Paper has some text, it can act as a base for building components</Paper>
    </DemoCard>

    <DemoCard
      title="No Shadow"
      uniqueIdentifier="noShadowUse"
      sourceCode={noShadowCode}
    >
      <Paper noShadow>Paper has some text, it can act as a base for building components</Paper>
    </DemoCard>

    <DemoCard
      title="Size"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6>small</h6>
      <Paper small>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Paper medium>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">large</h6>
      <Paper large>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Paper style={{ fontSize: '75px' }}>Paper has some text, it can act as a base for building components</Paper>
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themeUse"
      sourceCode={customThemeCode}
    >
      <h6>Primary</h6>
      <Paper primary>Paper has some text, it can act as a base for building components</Paper>

      <h6>Secondary</h6>
      <Paper secondary>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Dark</h6>
      <Paper dark>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Light</h6>
      <Paper light>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Info</h6>
      <Paper info>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Warning</h6>
      <Paper warning>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Danger</h6>
      <Paper danger>Paper has some text, it can act as a base for building components</Paper>

      <h6 className="pt-3">Success</h6>
      <Paper success>Paper has some text, it can act as a base for building components</Paper>
    </DemoCard>
  </div>
);

export default withHeader(NumberCounterDemo);
