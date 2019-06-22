/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NumberCounter } from '@../../../../reactify-ui/build';
import {
  customColorCode,
  customClassCode,
  customThemeCode,
  disabledCode,
  delayCode,
  dynamicCode,
  eventCode,
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
          title="Events"
          uniqueIdentifier="eventsUse"
          sourceCode={eventCode}
        >
          <h6>Check the console for events logs</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            onValueChange={value => console.log(`Number Counter: Value Changed to: ${value}`)}
            onComplete={value => console.log(`Number Counter: Final Value: ${value}`)}
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
          <h6>small</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            small
          />

          <h6 className="pt-3">
            medium
            {' '}
            <b className="pl-3">default</b>
          </h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            medium
          />

          <h6 className="pt-3">large</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            large
          />

          <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            style={{ fontSize: '75px' }}
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
            style={{ color: 'violet' }}
          />
        </DemoCard>

        <DemoCard
          title="Themes"
          uniqueIdentifier="themeUse"
          sourceCode={customThemeCode}
        >
          <h6>Primary</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            primary
          />

          <h6>Secondary</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            secondary
          />

          <h6 className="pt-3">Dark</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            dark
          />

          <h6 className="pt-3">Light</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            light
          />

          <h6 className="pt-3">Info</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            info
          />

          <h6 className="pt-3">Warning</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            warning
          />

          <h6 className="pt-3">Danger</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            danger
          />

          <h6 className="pt-3">Success</h6>
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            success
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
