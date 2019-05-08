import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { defaultThemePropTypes, themePropTypes } from '../../common';
import { styles, BEMClassNames } from './styles';

const transitionStyles = ({
  topLeft, topRight, bottomLeft, bottomRight,
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
class SnackBar extends Component {
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
      topRight,
      bottomRight,
      bottomLeft,
      topLeft,
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
                topLeft, topRight, bottomLeft, bottomRight,
              })[state],
            }}
          >
            {children || (
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
                  onClick={this.dismiss}
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

export default SnackBar;
