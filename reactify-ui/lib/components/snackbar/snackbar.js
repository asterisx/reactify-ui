import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { defaultThemePropTypes, themePropTypes } from '../../common';
import { styles, BEMClassNames } from './styles';

class Snackbar extends Component {
  static propTypes = {
    /**
     * If 'true', the component is disabled
     * Default is 'false'
     */
    disabled: PropTypes.bool,
    /**
     * The message to show
     */
    message: PropTypes.string,
    /**
     * The name of optional action
     */
    action: PropTypes.string,
    /**
     * The duration to make the snackbar visible for
     */
    duration: PropTypes.number,
    /**
     * If 'true', the snackbar will be positioned top left
     * Defaults to 'true'
     */
    topLeft: PropTypes.bool,
    /**
     * If 'true', the snackbar will be positioned top right
     * Defaults to 'false'
     */
    topRight: PropTypes.bool,
    /**
     * If 'true', the snackbar will be positioned bottom left
     * Defaults to 'false'
     */
    bottomLeft: PropTypes.bool,
    /**
     * If 'true', the snackbar will be positioned bottom right
     * Defaults to 'false'
     */
    bottomRight: PropTypes.bool,
    /**
     * If 'true', the snackbar will be positioned bottom center
     * Defaults to 'false'
     */
    bottomCenter: PropTypes.bool,
    /**
     * If 'true', the snackbar will be positioned top center
     * Defaults to 'false'
     */
    topCenter: PropTypes.bool,
    /**
     * A collection of valid theme types, all boolean values
     */
    ...themePropTypes,
    /**
     * The callback called when action is clicked
     * @param {object} event The `event` itself
     */
    onActionClick: PropTypes.func,
    /**
     * The callback when snackbar is closed
     */
    onClose: PropTypes.func,
  }

  static defaultProps = {
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

  state = { in: true };

  timeout = {};

  componentWillUnmount() {
    this.clearTimeout();
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
              ...styles.getTransitionStyles({
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
                    onClick={(event) => {
                      if (this.props.onActionClick) this.props.onActionClick(event);
                    }}
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
