import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Toast } from './Toast';
import Dismiss from '../dismiss';
import { Timer } from '../../common';

export class ToastController extends Component {
  state = {
    autoDismissTimeout: this.props.autoDismissTimeout,
    isRunning: this.props.autoDismiss,
  };

  static defaultProps = {
    autoDismiss: false,
    onDismiss: undefined,
    autoDismissTimeout: PropTypes.number.isRequired,
  };

  static propTypes = {
    autoDismiss: PropTypes.bool,
    onDismiss: PropTypes.func,
    autoDismissTimeout: PropTypes.number,
  }

  static getDerivedStateFromProps({
    autoDismiss,
    autoDismissTimeout,
  }) {
    if (!autoDismiss) return null;

    const timeout = typeof autoDismiss === 'number' ? autoDismiss : autoDismissTimeout;

    return { autoDismissTimeout: timeout };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer = () => {
    const { autoDismiss, onDismiss } = this.props;
    const { autoDismissTimeout } = this.state;

    if (!autoDismiss) return;

    this.setState({ isRunning: true });
    this.timeout = new Timer(onDismiss, autoDismissTimeout);
  };

  clearTimer = () => {
    if (!this.props.autoDismiss) return;

    if (this.timeout) this.timeout.clear();
  };

  onMouseEnter = () => {
    this.setState({ isRunning: false }, () => {
      if (this.timeout) this.timeout.pause();
    });
  };

  onMouseLeave = () => {
    this.setState({ isRunning: true }, () => {
      if (this.timeout) this.timeout.resume();
    });
  };

  render() {
    const { autoDismissTimeout, isRunning } = this.state;
    const {
      children,
      onDismiss,
      transitionDuration,
      pauseOnHover,
      autoDismiss,
      ...otherProps
    } = this.props;

    const hasMouseEvents = pauseOnHover && autoDismiss;
    // NOTE: conditions here so methods can be clean
    const handleMouseEnter = hasMouseEvents ? this.onMouseEnter : null;
    const handleMouseLeave = hasMouseEvents ? this.onMouseLeave : null;

    return (
      <Transition appear mountOnEnter unmountOnExit timeout={transitionDuration} {...otherProps}>
        {transitionState => (
          <Toast
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            autoDismissTimeout={autoDismissTimeout}
            isRunning={isRunning}
            transitionState={transitionState}
            transitionDuration={transitionDuration}
            pauseOnHover={pauseOnHover}
            {...otherProps}
          >
            {React.Children.map(children, (child) => {
              const newProps = {};
              if (child.type === Dismiss) {
                newProps.autoDismiss = false;
                newProps.onCloseIconClick = onDismiss;
              }
              return React.cloneElement(child, newProps);
            })}
          </Toast>
        )}
      </Transition>
    );
  }
}
