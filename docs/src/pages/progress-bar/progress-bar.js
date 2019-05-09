import React, { Component } from 'react';
import { ProgressBar } from '@../../../../reactify/build';
import {
  customColorCode,
  customThemeCode,
  noTextCode,
  runningCode,
  simpleCode,
  sizeCode,
  stripedCode,
} from './code-refrence';
import './progress-bar.scss';
import DemoCard from '../../components/demo-card';

class ProgressBarDemo extends Component {
  state = { runningPercentage: 0 }


  interval = undefined;

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ runningPercentage: prevState.runningPercentage + 1 }),
        () => { if (this.state.runningPercentage === 100) clearInterval(this.interval); }), 1000,
    );
  }

  render() {
    return (
      <div>
        <DemoCard
          title="Simple Use"
          uniqueIdentifier="simpleUse"
          sourceCode={simpleCode}
        >
          <ProgressBar percentage={30}>30% complete</ProgressBar>
        </DemoCard>

        <DemoCard
          title="Striped Use"
          uniqueIdentifier="stripedUse"
          sourceCode={stripedCode}
        >
          <ProgressBar striped percentage={30}>30% complete</ProgressBar>
        </DemoCard>

        <DemoCard
          title="Running Demo"
          uniqueIdentifier="runningDemoUse"
          sourceCode={runningCode}
        >
          <ProgressBar striped dark style={{ transitionDuration: '700ms' }} percentage={this.state.runningPercentage}>{`${this.state.runningPercentage}% complete`}</ProgressBar>
        </DemoCard>

        <DemoCard
          title="No text Demo"
          uniqueIdentifier="noTextUse"
          sourceCode={noTextCode}
        >
          <ProgressBar striped percentage={30} />
        </DemoCard>

        <DemoCard
          title="Custom Color Demo"
          uniqueIdentifier="customColorUse"
          sourceCode={customColorCode}
        >
          <ProgressBar className="CustomColor" striped percentage={30}>30% Complete</ProgressBar>
        </DemoCard>

        <DemoCard
          title="Sizes"
          uniqueIdentifier="sizeUse"
          sourceCode={sizeCode}
        >
          <ProgressBar striped small percentage={30}>30% complete</ProgressBar>
          <br />
          <ProgressBar striped medium percentage={30}>30% complete</ProgressBar>
          <br />
          <ProgressBar striped large percentage={30}>30% complete</ProgressBar>
          <br />
          <ProgressBar striped style={{ fontSize: '8px' }} percentage={30} />
        </DemoCard>

        <DemoCard
          title="Theme"
          uniqueIdentifier="themeUse"
          sourceCode={customThemeCode}
        >
          <ProgressBar striped primary percentage={60}>60% complete</ProgressBar>
          <br />
          <ProgressBar striped secondary percentage={60}>60% complete</ProgressBar>
          <br />
          <ProgressBar striped dark percentage={60}>60% complete</ProgressBar>
          <br />
          <ProgressBar striped light percentage={60}>60% complete</ProgressBar>
          <br />
          <ProgressBar striped info percentage={60}>60% complete</ProgressBar>
          <br />
          <ProgressBar striped warning percentage={60}>60% complete</ProgressBar>
          <br />
          <ProgressBar striped danger percentage={60}>60% complete</ProgressBar>
          <br />
          <ProgressBar striped success percentage={60}>60% complete</ProgressBar>
        </DemoCard>
      </div>
    );
  }
}

export default ProgressBarDemo;
