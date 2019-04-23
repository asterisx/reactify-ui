/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NumberCounter } from 'reactify';
import {
  customColorCode,
  customClassCode,
  customThemeCode,
  disabledCode,
  delayCode,
  dynamicCode,
  intervalCode,
  resetCode,
  simpleCode,
  sizeCode,
} from './code-refrence';
import './number-counter.scss';
import DemoCard from '../../components/demo-card';

class NumberCounterDemo extends Component {
  state = {
    simpleCounter: { from: 1000, to: 9876 },
    directionCounter: { from: 1000, to: 9876 },
  };

  render() {
    return (
      <div>
        <DemoCard
          title="Simple Use"
          uniqueIdentifier="simpleUse"
          sourceCode={simpleCode}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
          />
        </DemoCard>

        <DemoCard
          title="Reset"
          uniqueIdentifier="resetUse"
          sourceCode={resetCode}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            interval={100}
          >
            {reset => (
              <button
                type="button"
                className="btn btn-primary d-block ml-3"
                onClick={() => reset()}
              >
                Reset
              </button>
            )}
          </NumberCounter>
        </DemoCard>

        <DemoCard
          title="Change Values Dynamically"
          uniqueIdentifier="changeDirectionUse"
          sourceCode={dynamicCode}
        >
          <div>
            <NumberCounter
              from={this.state.directionCounter.from}
              to={this.state.directionCounter.to}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary d-inline"
            onClick={
              () => this.setState({ directionCounter: { to: Math.floor(Math.random() * 10000) } })
            }
          >
            Random
          </button>
          <span className="pl-3">
            <b className="pr-3">New to:</b>
            {this.state.directionCounter.to}
          </span>
          <br />
        </DemoCard>

        <DemoCard
          title="Interval"
          uniqueIdentifier="intervalUse"
          sourceCode={intervalCode}
        >
          <h6>{'interval={1000}'}</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            interval={1000}
          />
        </DemoCard>

        <DemoCard
          title="Delay"
          uniqueIdentifier="delayUse"
          sourceCode={delayCode}
        >
          <h6>{'delay={15000}'}</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            delay={15000}
          />
        </DemoCard>

        <DemoCard
          title="Disabled Use"
          uniqueIdentifier="disabledUse"
          sourceCode={disabledCode}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            disabled
          />
        </DemoCard>

        <DemoCard
          title="Size"
          uniqueIdentifier="sizeUse"
          sourceCode={sizeCode}
        >
          <h6>size="small"</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            size="small"
          />

          <h6 className="pt-3">
            size="medium"
            {' '}
            <b className="pl-3">default</b>
          </h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            size="medium"
          />

          <h6 className="pt-3">size="large"</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            size="large"
          />

          <h6 className="pt-3">size="75px"</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            size="75px"
          />
        </DemoCard>

        <DemoCard
          title="Custom Color (any valid CSS solor)"
          uniqueIdentifier="customColorUse"
          sourceCode={customColorCode}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            color="violet"
          />
        </DemoCard>

        <DemoCard
          title="Themes"
          uniqueIdentifier="themeUse"
          sourceCode={customThemeCode}
        >
          <h6>theme="default"</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            theme="default"
          />

          <h6 className="pt-3">theme="dark"</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            theme="dark"
          />

          <h6 className="pt-3">theme="light"</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            theme="light"
          />

          <h6 className="pt-3">
            theme="info"
            {' '}
            <b className="pl-3">default</b>
          </h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            theme="info"
          />

          <h6 className="pt-3">theme="warning"</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            theme="warning"
          />

          <h6 className="pt-3">theme="danger"</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            theme="danger"
          />

          <h6 className="pt-3">theme="success"</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            theme="success"
          />
        </DemoCard>

        <DemoCard
          title="Custom Class"
          uniqueIdentifier="customClassUse"
          sourceCode={customClassCode}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            className="bg-dark p-3"
          />
        </DemoCard>
      </div>
    );
  }
}

export default NumberCounterDemo;
