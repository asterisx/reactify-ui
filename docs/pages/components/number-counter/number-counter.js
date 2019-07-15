/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import {
  Button,
  NumberCounter,
} from '../../../../reactify-ui/build';
import {
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  delayCode,
  dynamicCode,
  eventCode,
  intervalCode,
  resetCode,
  simpleCode,
} from './code-refrence';

import {
  customColorLink,
  customClassLink,
  customSizeLink,
  customThemeLink,
  disabledLink,
  delayLink,
  dynamicLink,
  eventLink,
  intervalLink,
  resetLink,
  simpleLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Modal',
    link: `${Constants.componentsPath}/modal`,
  },
  nextLink: {
    text: 'Paginator',
    link: `${Constants.componentsPath}/paginator`,
  },
};

class NumberCounterDemo extends Component {
  state = {
    simpleCounter: { from: 1000, to: 9876 },
    directionCounter: { from: 1000, to: 9876 },
  };

  render() {
    return (
      <DemoPage componentName="Number Counter">
        <ComponentInfo
          productionReady
          responsive
          githubLink={`${Constants.githubComponentsPath}/number-counter`}
        />
        <DemoCard
          title="Simple Use"
          sourceCode={simpleCode}
          externalSampleLink={simpleLink}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
          />
        </DemoCard>

        <DemoCard
          title="Events"
          sourceCode={eventCode}
          externalSampleLink={eventLink}
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
          sourceCode={resetCode}
          externalSampleLink={resetLink}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            interval={100}
          >
            {reset => (
              <Button
                className="ml-3"
                onClick={() => reset()}
              >
             Reset
              </Button>
            )}
          </NumberCounter>
        </DemoCard>

        <DemoCard
          title="Change Values Dynamically"
          sourceCode={dynamicCode}
          externalSampleLink={dynamicLink}
        >
          <div>
            <NumberCounter
              from={this.state.directionCounter.from}
              to={this.state.directionCounter.to}
            />
          </div>

          <Button
            onClick={
            () => this.setState({ directionCounter: { to: Math.floor(Math.random() * 10000) } })
          }
          >
            Random
          </Button>
          <span className="pl-3">
            <b className="pr-3">New to:</b>
            {this.state.directionCounter.to}
          </span>
          <br />
        </DemoCard>

        <DemoCard
          title="Interval"
          sourceCode={intervalCode}
          externalSampleLink={intervalLink}
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
          sourceCode={delayCode}
          externalSampleLink={delayLink}
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
          sourceCode={disabledCode}
          externalSampleLink={disabledLink}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            disabled
          />
        </DemoCard>

        <DemoCard
          title="Size"
          sourceCode={customSizeCode}
          externalSampleLink={customSizeLink}
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
          sourceCode={customColorCode}
          externalSampleLink={customColorLink}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            style={{ color: 'violet' }}
          />
        </DemoCard>

        <DemoCard
          title="Themes"
          sourceCode={customThemeCode}
          externalSampleLink={customThemeLink}
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
          sourceCode={customClassCode}
          externalSampleLink={customClassLink}
        >
          <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            className="bg-dark p-3"
          />
        </DemoCard>

        <BottomNav
          className="mt-4 mb-4"
          prevLinkText={bottomNavLinks.prevLink.text}
          prevLink={bottomNavLinks.prevLink.link}
          nextLinkText={bottomNavLinks.nextLink.text}
          nextLink={bottomNavLinks.nextLink.link}
        />
      </DemoPage>
    );
  }
}

export default withHeader(NumberCounterDemo);
