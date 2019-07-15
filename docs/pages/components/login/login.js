/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Login } from '../../../../reactify-ui/build';
import {
  simpleCode,
} from './code-refrence';

import {
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
    text: 'List Panel',
    link: `${Constants.componentsPath}/list-panel`,
  },
  nextLink: {
    text: 'Modal',
    link: `${Constants.componentsPath}/modal`,
  },
};

class ModalDemo extends Component {
  state = {
    config: {
      fields: {
        username: {
          value: '',
          isError: false,
          errorText: 'username error',
          disabled: false,
        },
        password: {
          value: '',
          isError: false,
          errorText: 'password error',
          disabled: false,
        },
        submit: {
          isLoading: false,
          disabled: false,
        },
        error: {
          visible: false,
          text: 'main error',
        },
      },
    },
  };

  handleLogin = ({ action, value }) => {
    if (action === Login.actionTypes.username) {
      if (value.indexOf(' ') >= 0) {
        this.setState({
          config: {
            fields: {
              username: {
                value, isError: true, errorText: 'Username cannot have spaces',
              },
            },
          },
        });
      } else {
        this.setState({
          config: {
            fields: {
              username: {
                value, isError: false, errorText: '',
              },
            },
          },
        });
      }
    } else if (action === Login.actionTypes.password) {
      this.setState({ config: { fields: { password: { value } } } });
    } else if (action === Login.actionTypes.submit) {
      this.setState(
        {
          config: {
            fields: {
              username: {
                disabled: true,
              },
              password: {
                disabled: true,
              },
              submit: {
                isLoading: true,
                disabled: true,
              },
            },
          },
        },
      );
    }
  }

  render() {
    return (
      <DemoPage componentName="Login">
        <ComponentInfo
          productionReady
          responsive
          githubLink={`${Constants.githubComponentsPath}/login`}
        />
        <DemoCard
          title="Simple Use"
          sourceCode={simpleCode}
          externalSampleLink={simpleLink}
        >
          <p>
            You can consider this login component as similar to a controlled component.
            You set the internal state via the prop 'state'
            and any trigger inside the control calls the prop
            updateState with a actionType, value and prevState
          </p>
          <Login state={this.state.config} updateState={this.handleLogin} />
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

export default withHeader(ModalDemo);
