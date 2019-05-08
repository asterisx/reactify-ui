import React, { Component } from 'react';
import {
  Button, Tabs, Tab, Paper,
} from '@../../../../reactify/build';
import {
  simpleCode,
  stylingCode,
  tabsDisabledCode,
} from './code-refrence';
import './tabs.scss';
import DemoCard from '../../components/demo-card';

class TabsDemo extends Component {
  state = {
    simpleSelectedIndex: 0,
    stylingSelectedIndex: 0,
  };

  render() {
    return (
      <div>
        <DemoCard
          title="Simple Use"
          uniqueIdentifier="simpleUse"
          sourceCode={simpleCode}
        >
          <Tabs
            selectedIndex={1}
            onSelectionChange={
              selectedIndex => this.setState({ simpleSelectedIndex: selectedIndex })
            }
          >
            <Tab index={0} selectedIndex={this.state.simpleSelectedIndex}>
              <Tab.Header>
                <Button
                  style={{ borderRadius: 0 }}
                  primary
                  dark={this.state.simpleSelectedIndex !== 0}
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
                  danger={this.state.simpleSelectedIndex === 1}
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
                  warning={this.state.simpleSelectedIndex === 2}
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

        <DemoCard
          title="Tabs Disabled"
          uniqueIdentifier="tabsDisabledUse"
          sourceCode={tabsDisabledCode}
        >
          <Tabs
            tabsDisabled
            className="d-flex flex-column"
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
          uniqueIdentifier="stylingUse"
          sourceCode={stylingCode}
        >
          <Tabs
            onSelectionChange={
              selectedIndex => this.setState({ stylingSelectedIndex: selectedIndex })
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
      </div>
    );
  }
}

export default TabsDemo;