import React, { Component } from 'react';
import {
  Timer,
} from '@../../../../reactify/build';
import {
  simpleCode,
} from './code-refrence';
import './timer.scss';
import DemoCard from '../../components/demo-card';

const millisOfFuture = Date.now() + (1000 * 60 * 30);

const TimerDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Timer milliseconds={millisOfFuture}></Timer>
    </DemoCard>
  </div>
)

export default TimerDemo;
