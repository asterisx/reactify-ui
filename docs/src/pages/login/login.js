/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Login } from '@../../../../reactify-ui/build';
import {
  simpleCode,
} from './code-refrence';
import './login.scss';
import DemoCard from '../../components/demo-card';

class ModalDemo extends Component {
    state = {
      config: {
        fields: {
          username: {
            value: '',
            isError: true,
            errorText: 'username error',
            isLoading: false,
            disabled: false,
          },
          password: {
            value: '',
            isError: true,
            errorText: 'password error',
            isLoading: false,
            disabled: false,
          },
          submit: {
            isLoading: false,
            disabled: false,
          },
          error: {
            visible: true,
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
                  value, isLoading: false, isError: true, errorText: 'Username cannot have spaces',
                },
              },
            },
          });
        } else {
          this.setState({
            config: {
              fields: {
                username: {
                  value, isLoading: true, isError: false, errorText: '',
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
                  isLoading: true,
                  disabled: true,
                },
                password: {
                  isLoading: true,
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
        <div>
          <DemoCard
            title="Simple Use"
            uniqueIdentifier="simpleUse"
            sourceCode={simpleCode}
          >
            <p>
              You can consider this login component as similar to a controlled component.
              You set the internal state via the prop 'state'
              and any trigger inside the control calls the prop updateState with a actionType, value and prevState
            </p>
            <Login state={this.state.config} updateState={this.handleLogin} />
          </DemoCard>
        </div>
      );
    }
}

export default ModalDemo;
