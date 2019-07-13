/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { ProgressBar } from '@../../../../reactify-ui/build';
import {
  customColorCode,
  customSizeCode,
  customThemeCode,
  noTextCode,
  runningCode,
  simpleCode,
  stripedCode,
} from './code-refrence';

import {
  customColorLink,
  customSizeLink,
  customThemeLink,
  noTextLink,
  runningLink,
  simpleLink,
  stripedLink,
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
    text: 'Portal',
    link: `${Constants.componentsPath}/portal`,
  },
  nextLink: {
    text: 'Radio Group',
    link: `${Constants.componentsPath}/radio-group`,
  },
};

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
      <DemoPage componentName="Progress Bar">
        <ComponentInfo
          productionReady
          responsive
          githubLink={`${Constants.githubComponentsPath}/progress-bar`}
        />
        <DemoCard
          title="Simple"
          sourceCode={simpleCode}
          externalSampleLink={simpleLink}
        >
          <ProgressBar percentage={30}>30% complete</ProgressBar>
        </DemoCard>

        <DemoCard
          title="Striped"
          sourceCode={stripedCode}
          externalSampleLink={stripedLink}
        >
          <ProgressBar striped percentage={30}>30% complete</ProgressBar>
        </DemoCard>

        <DemoCard
          title="Running"
          sourceCode={runningCode}
          externalSampleLink={runningLink}
        >
          <ProgressBar striped dark style={{ transitionDuration: '700ms' }} percentage={this.state.runningPercentage}>{`${this.state.runningPercentage}% complete`}</ProgressBar>
        </DemoCard>

        <DemoCard
          title="No text"
          sourceCode={noTextCode}
          externalSampleLink={noTextLink}
        >
          <ProgressBar striped percentage={30} />
        </DemoCard>

        <DemoCard
          title="Custom Color"
          sourceCode={customColorCode}
          externalSampleLink={customColorLink}
        >
          <h6 className="pb-3">
            You have to directly add the background-color css property
            to '.reactify-ui-progress-bar__progress'.
            <b className="pl-1">
              Warning! Don't do it directly but instead
              pass Progress Bar a class which modifies the
               '.reactify-ui-progress-bar__progress' class
            </b>
          </h6>
          <ProgressBar className="bgViolet" striped percentage={30}>30% Complete</ProgressBar>
        </DemoCard>

        <DemoCard
          title="Sizes"
          sourceCode={customSizeCode}
          externalSampleLink={customSizeLink}
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
          title="Themes"
          sourceCode={customThemeCode}
          externalSampleLink={customThemeLink}
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

export default withHeader(ProgressBarDemo);
