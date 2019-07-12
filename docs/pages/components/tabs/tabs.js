import React, { Component } from 'react';
import {
  Button, Tabs, Tab, Paper,
} from '@../../../../reactify-ui/build';
import {
  simpleCode,
  stylingCode,
  tabsDisabledCode,
} from './code-refrence';

import {
  simpleLink,
  stylingLink,
  tabsDisabledLink,
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
    text: 'Switch',
    link: `${Constants.componentsPath}/switch`,
  },
  nextLink: {
    text: 'Text',
    link: `${Constants.componentsPath}/text`,
  },
};

class TabsDemo extends Component {
  state = {
    simpleSelectedIndex: 0,
    stylingSelectedIndex: 0,
  };

  render() {
    return (
      <DemoPage componentName="Tabs">
        <ComponentInfo
          productionReady
          responsive
          githubLink={`${Constants.githubComponentsPath}/tabs`}
        />
        <DemoCard
          title="Simple Use"
          sourceCode={simpleCode}
          externalSampleLink={simpleLink}
        >
          <Tabs
            selectedIndex={this.state.simpleSelectedIndex}
            onSelectionChange={
              ({ index }) => this.setState({ simpleSelectedIndex: index })
            }
          >
            <Tab index={0}>
              <Tab.Header>
                <Button
                  style={{ borderRadius: 0 }}
                  primary={this.state.simpleSelectedIndex === 0}
                  dark={this.state.simpleSelectedIndex !== 0}
                >
                  Tab 1
                </Button>
              </Tab.Header>
              <Tab.Body>
                <Paper
                  primary
                  style={{ height: '300px', transitionDuration: '0.3s' }}
                  className="d-flex w-100 align-items-center align-content-center justify-content-center font-large"
                >
                  Tab 1
                </Paper>
              </Tab.Body>
            </Tab>
            <Tab index={1}>
              <Tab.Header>
                <Button
                  style={{ borderRadius: 0 }}
                  dark
                  danger={this.state.simpleSelectedIndex === 1}
                >
                  Tab 2
                </Button>
              </Tab.Header>
              <Tab.Body>
                <Paper
                  danger
                  style={{ height: '300px', transitionDuration: '0.3s' }}
                  className="d-flex w-100 align-items-center align-content-center justify-content-center font-large"
                >
                  Tab 2
                </Paper>
              </Tab.Body>
            </Tab>
            <Tab index={2}>
              <Tab.Header>
                <Button
                  style={{ borderRadius: 0 }}
                  dark
                  warning={this.state.simpleSelectedIndex === 2}
                >
                  Tab 3
                </Button>
              </Tab.Header>
              <Tab.Body>
                <Paper
                  warning
                  style={{ height: '300px', transitionDuration: '0.3s' }}
                  className="d-flex w-100 align-items-center align-content-center justify-content-center font-large"
                >
                  Tab 3
                </Paper>
              </Tab.Body>
            </Tab>
          </Tabs>
        </DemoCard>

        <DemoCard
          title="Tabs Disabled"
          sourceCode={tabsDisabledCode}
          externalSampleLink={tabsDisabledLink}
        >
          <Tabs
            tabsDisabled
          >
            <Tab index={0}>
              <Tab.Header>
                <Button
                  primary
                >
                  Tab 1
                </Button>
              </Tab.Header>
              <Tab.Body>
                <Paper primary style={{ height: '300px', transitionDuration: '0.3s' }} className="d-flex w-100 align-items-center align-content-center justify-content-center font-large">Tab 1</Paper>
              </Tab.Body>
            </Tab>
            <Tab index={1}>
              <Tab.Header>
                <Button
                  style={{ borderRadius: 0 }}
                  danger
                >
                  Tab 2
                </Button>
              </Tab.Header>
            </Tab>
            <Tab index={2}>
              <Tab.Header>
                <Button
                  style={{ borderRadius: 0 }}
                  warning
                >
                  Tab 3
                </Button>
              </Tab.Header>
            </Tab>
          </Tabs>
        </DemoCard>

        <DemoCard
          title="Styling"
          sourceCode={stylingCode}
          externalSampleLink={stylingLink}
        >
          <Tabs
            onSelectionChange={
              ({ index }) => this.setState({ stylingSelectedIndex: index })
            }
            className="d-flex flex-column"
          >
            <Tab index={0} selectedIndex={this.state.stylingSelectedIndex}>
              <Tab.Header>
                <Button
                  style={{ borderRadius: 0 }}
                  primary
                  dark={this.state.stylingSelectedIndex !== 0}
                >
                  Tab 1
                </Button>
              </Tab.Header>
              <Tab.Body>
                <Paper primary style={{ height: '300px', transitionDuration: '0.3s' }} className="d-flex w-100 align-items-center align-content-center justify-content-center font-large">Tab 1</Paper>
              </Tab.Body>
            </Tab>
            <Tab index={1}>
              <Tab.Header>
                <Button
                  style={{ borderRadius: 0 }}
                  dark
                  danger={this.state.stylingSelectedIndex === 1}
                >
                  Tab 2
                </Button>
              </Tab.Header>
              <Tab.Body>
                <Paper danger style={{ height: '300px', transitionDuration: '0.3s' }} className="d-flex w-100 align-items-center align-content-center justify-content-center font-large">Tab 2</Paper>
              </Tab.Body>
            </Tab>
            <Tab index={2}>
              <Tab.Header>
                <Button
                  style={{ borderRadius: 0 }}
                  dark
                  warning={this.state.stylingSelectedIndex === 2}
                >
                  Tab 3
                </Button>
              </Tab.Header>
              <Tab.Body>
                <Paper warning style={{ height: '300px', transitionDuration: '0.3s' }} className="d-flex w-100 align-items-center align-content-center justify-content-center font-large">Tab 3</Paper>
              </Tab.Body>
            </Tab>
          </Tabs>
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

export default withHeader(TabsDemo);
