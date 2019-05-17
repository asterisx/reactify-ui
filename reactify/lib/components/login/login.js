import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Spinner from '../spinner';
import { styles } from './styles';

export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
   * Deep merge two objects.
   * @param target
   * @param ...sources
   */
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

const defaultState = {
  fields: {
    username: {
      value: '',
      isError: false,
      errorText: '',
      isLoading: false,
      disabled: false,
    },
    password: {
      value: '',
      isError: false,
      errorText: '',
      isLoading: false,
      disabled: false,
    },
    submit: {
      isLoading: false,
      disabled: false,
    },
    error: {
      visible: false,
      text: '',
    },
  },
};


class Login extends React.Component {
    static actionTypes = { username: 'username', password: 'password', submit: 'submit' };

    static propTypes = {
      updateState: PropTypes.func.isRequired,
    }

    state = mergeDeep(defaultState, this.props.state);

    static getDerivedStateFromProps(props, state) {
      return mergeDeep(state, props.state);
    }


    handleValueChange = ({ action, value }) => {
      this.props.updateState({ action, value, prevState: this.state });
    }

    render() {
      const {
        fields: {
          username, password, error, submit,
        },
      } = this.state;
      const { state, updateState, ...otherProps } = this.props;
      return (
        <div
          css={[
            styles.container,
          ]}
          {...otherProps}
        >
          <h4>Login</h4>
          <div
            css={[
              styles.fieldContainer,
            ]}
          >
            <div
              css={[
                styles.inputContainer,
                styles.getDisabledStyle({ disabled: username.disabled }),
              ]}
            >
              <input
                css={[
                  styles.input,
                ]}
                type="text"
                placeholder="username"
                value={username.value}
                onChange={evt => this.handleValueChange(
                  {
                    action: Login.actionTypes.username,
                    value: evt.target.value,
                  },
                )
                }
              />
              <Spinner
                css={[
                  username.isLoading && styles.opacity1,
                ]}
                style={{ fontSize: '70%', opacity: 0 }}
                slices
                primary
              />
            </div>
            {username.isError && (
            <span
              css={[
                styles.error,
                styles.flexStart]}
            >
              {username.errorText}
            </span>
            )}
          </div>

          <div
            css={[
              styles.fieldContainer,
            ]}
          >
            <div
              css={[
                styles.inputContainer,
                styles.getDisabledStyle({ disabled: username.disabled }),
              ]}
            >
              <input
                css={[
                  styles.input,
                ]}
                type="password"
                placeholder="password"
                value={password.value}
                onChange={evt => this.handleValueChange(
                  {
                    action: Login.actionTypes.password,
                    value: evt.target.value,
                  },
                )
                }
              />
              <Spinner
                css={[
                  password.isLoading && styles.opacity1,
                ]}
                style={{ fontSize: '70%', opacity: 0 }}
                slices
                primary
              />
            </div>
            {password.isError && (
            <span
              css={[
                styles.error,
                styles.flexStart]}
            >
              {password.errorText}
            </span>
            )}
          </div>
          <div
            css={[
              styles.fieldContainer,
            ]}
          >
            {error.visible && <span css={[styles.error]}>{error.text}</span>}
            <Button
              success
              disabled={submit.disabled}
              onClick={() => this.handleValueChange(
                {
                  action: Login.actionTypes.submit,
                },
              )
            }
            >
              {submit.isLoading && <Spinner small slices light />}
            Submit
            </Button>
          </div>
        </div>
      );
    }
}

export default Login;
