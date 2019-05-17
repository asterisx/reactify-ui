import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { defaultThemePropTypes, themePropTypes } from '../../common';
import { styles, BEMClassNames } from './styles';

const transitionStyles = ({
  topLeft,
  bottomLeft,
  bottomRight,
  bottomCenter,
  topCenter,
  topRight,
}) => {
  if (bottomRight) {
    return {
      entering: { transform: 'translateY(100%)', bottom: 0, right: '10px' },
      entered: { transform: 'translateY(0%)', bottom: '10px', right: '10px' },
      exiting: { transform: 'translateY(100%)', bottom: 0, right: '10px' },
      exited: { transform: 'translateY(100%)', bottom: 0, right: '10px' },
    };
  }
  if (bottomLeft) {
    return {
      entering: { transform: 'translateY(100%)', bottom: 0, left: '10px' },
      entered: { transform: 'translateY(0%)', bottom: '10px', left: '10px' },
      exiting: { transform: 'translateY(100%)', bottom: 0, left: '10px' },
      exited: { transform: 'translateY(100%)', bottom: 0, left: '10px' },
    };
  }
  if (topLeft) {
    return {
      entering: { transform: 'translateY(-100%)', top: 0, left: '10px' },
      entered: { transform: 'translateY(0%)', top: '10px', left: '10px' },
      exiting: { transform: 'translateY(-100%)', top: 0, left: '10px' },
      exited: { transform: 'translateY(-100%)', top: 0, left: '10px' },
    };
  }
  if (bottomCenter) {
    return {
      entering: { transform: 'translateY(100%) translateX(-50%)', bottom: 0, left: '50%' },
      entered: { transform: 'translateY(0%) translateX(-50%)', bottom: '10px', left: '50%' },
      exiting: { transform: 'translateY(100%) translateX(-50%)', bottom: 0, left: '50%' },
      exited: { transform: 'translateY(100%) translateX(-50%)', bottom: 0, left: '50%' },
    };
  }
  if (topCenter) {
    return {
      entering: { transform: 'translateY(-100%) translateX(-50%)', left: '50%' },
      entered: { transform: 'translateY(0%) translateX(-50%)', top: '10px', left: '50%' },
      exiting: { transform: 'translateY(-100%) translateX(-50%)', top: 0, left: '50%' },
      exited: { transform: 'translateY(-100%) translateX(-50%)', top: 0, left: '50%' },
    };
  }
  if (topRight) {
    return {
      entering: { transform: 'translateY(-100%)', top: 0, right: '10px' },
      entered: { transform: 'translateY(0%)', top: '10px', right: '10px' },
      exiting: { transform: 'translateY(-100%)', top: 0, right: '10px' },
      exited: { transform: 'translateY(-100%)', top: 0, right: '10px' },
    };
  }

  return null;
};
class Snackbar extends Component {
  state = { in: true };

  static propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    message: PropTypes.string,
    action: PropTypes.string,
    duration: PropTypes.number,
    topLeft: PropTypes.bool,
    topRight: PropTypes.bool,
    bottomLeft: PropTypes.bool,
    bottomRight: PropTypes.bool,
    bottomCenter: PropTypes.bool,
    topCenter: PropTypes.bool,
    ...themePropTypes,
    onActionClick: PropTypes.func,
    onClose: PropTypes.func,
  }

  timeout = {};

  static defaultProps = {
    color: undefined,
    disabled: false,
    message: '',
    action: undefined,
    duration: 1000,
    topLeft: false,
    topRight: true,
    bottomLeft: false,
    bottomRight: false,
    bottomCenter: false,
    topCenter: false,
    ...defaultThemePropTypes,
    onActionClick: undefined,
    onClose: undefined,
  }

  dismiss = () => {
    this.setState({ in: false });
  }

  closed = () => {
    this.clearTimeout();
    if (this.props.onClose) this.props.onClose();
  }

  startTimeout = () => {
    this.timeout = setTimeout(() => this.dismiss(), this.props.duration);
  }

  clearTimeout = () => {
    clearTimeout(this.timeout);
  }

  render() {
    const {
      children,
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
      topLeft,
      bottomLeft,
      bottomRight,
      bottomCenter,
      topCenter,
      topRight,
      disabled,
      message,
      action,
      duration,
      onActionClick,
      onClose,
      showDismiss,
      style,
      ...otherProps
    } = this.props;
    const { dismiss } = this;
    return createPortal(
      <Transition
        appear
        mountOnEnter
        unmountOnExit
        in={this.state.in}
        onEntered={this.startTimeout}
        onExited={() => this.closed()}
        timeout={50}
      >
        {state => (
          <div
            css={[
              styles.container,
              styles.getThemedBackgroundStyle({
                primary,
                secondary,
                dark,
                light,
                info,
                warning,
                danger,
                success,
                theme,
              }),
              styles.getFontColorStyle({
                primary,
                secondary,
                dark,
                light,
                info,
                warning,
                danger,
                success,
                theme,
              }),
              styles.getDisabledStyle({
                disabled,
              }),
            ]}
            {...otherProps}
            style={{
              ...style,
              ...transitionStyles({
                topLeft,
                bottomLeft,
                bottomRight,
                bottomCenter,
                topCenter,
                topRight,
              })[state],
            }}
          >
            {children
              ? (() => { if (typeof children === 'function') return children({ dismiss }); return children; })()
              : (
                <div
                  css={[styles.options]}
                >
                  <span
                    css={[
                      styles.cursorPointer,
                      styles.paddingBoth,
                    ]}
                    className={BEMClassNames.message}
                  >
                    {message}
                  </span>

                  {!!action && (
                  <span
                    css={[
                      styles.cursorPointer,
                      styles.paddingBoth,
                    ]}
                    className={BEMClassNames.action}
                    onClick={() => { if (this.props.onActionClick) this.props.onActionClick(); }}
                  >
                    {action}
                  </span>
                  )}

                  {showDismiss && (
                  <span
                    css={[
                      styles.cursorPointer,
                      styles.paddingBoth,
                    ]}
                    className={BEMClassNames.dismiss}
                    onClick={dismiss}
                  >
                    dismiss
                  </span>
                  )}
                </div>
              )}
          </div>
        )}
      </Transition>,
      document.body,
    );
  }
}

export default Snackbar;
