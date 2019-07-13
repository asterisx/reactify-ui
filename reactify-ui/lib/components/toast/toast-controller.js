import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Toast } from './toast';
import Dismiss from '../dismiss';
import { Timer } from '../../common';

export class ToastController extends Component {
  state = {
    autoDismissTimeout: this.props.autoDismissTimeout,
    isRunning: this.props.autoDismiss,
  };

  static propTypes = {
    /**
     * If 'true', the Toast is autodismissable and will dismiss
     * after the timeout runs out
     */
    autoDismiss: PropTypes.bool,
    /**
     * The autodimss timeout
     */
    autoDismissTimeout: PropTypes.number.isRequired,
    /**
     * The callback called when Toast is dismissed
     */
    onDismiss: PropTypes.func,
  }

  static defaultProps = {
    autoDismiss: false,
    onDismiss: undefined,
  };

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

    const { onMouseEnter, onMouseLeave } = this;

    const hasMouseEvents = pauseOnHover && autoDismiss;

    const handleMouseEnter = hasMouseEvents ? onMouseEnter : null;
    const handleMouseLeave = hasMouseEvents ? onMouseLeave : null;

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
