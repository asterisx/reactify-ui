import React, { Component } from 'react';
import {
  Button,
  Timer,
} from '@../../../../reactify-ui/build';
import {
  customColorCode,
  customSizeCode,
  customThemeCode,
  customClassCode,
  propsCode,
  simpleCode,
} from './code-refrence';

import {
  customColorLink,
  customSizeLink,
  customThemeLink,
  customClassLink,
  propsLink,
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
    text: 'Text',
    link: `${Constants.componentsPath}/text`,
  },
  nextLink: {
    text: 'Toast',
    link: `${Constants.componentsPath}/toast`,
  },
};

const millisOfFuture = Date.now() + (1000 * 5 * 30);
const millisOfPast = Date.now() - (1000 * 5);
const millisOfSomeDistantPast = Date.now() - (1000 * 5 * 30);

class TimerDemo extends Component {
  state = {
    showDays: true,
    showHours: true,
    showMinutes: true,
    showSeconds: true,
  }

  toggle = (prop) => {
    if (prop === 'showDays') { this.setState(prevState => ({ showDays: !prevState.showDays })); }

    if (prop === 'showHours') { this.setState(prevState => ({ showHours: !prevState.showHours })); }

    if (prop === 'showMinutes') { this.setState(prevState => ({ showMinutes: !prevState.showMinutes })); }

    if (prop === 'showSeconds') { this.setState(prevState => ({ showSeconds: !prevState.showSeconds })); }
  }

  render() {
    return (
      <DemoPage componentName="Timer">
        <ComponentInfo
          productionReady
          responsive
          githubLink={`${Constants.githubComponentsPath}/timer`}
        />
        <DemoCard
          title="Simple Use"
          sourceCode={simpleCode}
          externalSampleLink={simpleLink}
        >
          <Timer milliseconds={millisOfFuture} />
          <br />
          <Timer milliseconds={millisOfPast} />
        </DemoCard>

        <DemoCard
          title="Props"
          sourceCode={propsCode}
          externalSampleLink={propsLink}
        >
          <Timer
            milliseconds={millisOfSomeDistantPast}
            showDays={this.state.showDays}
            showHours={this.state.showHours}
            showMinutes={this.state.showMinutes}
            showSeconds={this.state.showSeconds}
          />
          <br />
          <br />
          <Button
            onClick={() => this.toggle('showDays')}
          >
            Toggle Days
          </Button>
          <br />
          <br />
          <Button
            onClick={() => this.toggle('showHours')}
          >
            Toggle Hours
          </Button>
          <br />
          <br />
          <Button
            onClick={() => this.toggle('showMinutes')}
          >
            Toggle Minutes
          </Button>
          <br />
          <br />
          <Button
            onClick={() => this.toggle('showSeconds')}
          >
            Toggle Seconds
          </Button>
        </DemoCard>

        <DemoCard
          title="Size"
          sourceCode={customSizeCode}
          externalSampleLink={customSizeLink}
        >
          <h6>small</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            small
          />
          <br />

          <h6 className="pt-3">
            medium
            {' '}
            <b className="pl-3">default</b>
          </h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            medium
          />
          <br />

          <h6 className="pt-3">large</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            large
          />
          <br />

          <h6 className="pt-3">{'style={{ fontSize: \'15px\' }}'}</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            style={{ fontSize: '15px' }}
          />
        </DemoCard>

        <DemoCard
          title="Custom Color (any valid CSS solor)"
          sourceCode={customColorCode}
          externalSampleLink={customColorLink}
        >
          <Timer
            milliseconds={millisOfSomeDistantPast}
            style={{ color: 'violet' }}
          />
        </DemoCard>

        <DemoCard
          title="Themes"
          sourceCode={customThemeCode}
          externalSampleLink={customThemeLink}
        >
          <h6>Primary</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            primary
          />
          <br />

          <h6>Secondary</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            secondary
          />
          <br />

          <h6 className="pt-3">Dark</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            dark
          />
          <br />

          <h6 className="pt-3">Light</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            light
          />
          <br />

          <h6 className="pt-3">Info</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            info
          />
          <br />

          <h6 className="pt-3">Warning</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            warning
          />
          <br />

          <h6 className="pt-3">Danger</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            danger
          />
          <br />

          <h6 className="pt-3">Success</h6>
          <Timer
            milliseconds={millisOfSomeDistantPast}
            success
          />
        </DemoCard>

        <DemoCard
          title="Custom Class"
          sourceCode={customClassCode}
          externalSampleLink={customClassLink}
        >
          <Timer
            milliseconds={millisOfSomeDistantPast}
            className="bg-dark text-light p-3"
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

export default withHeader(TimerDemo);
