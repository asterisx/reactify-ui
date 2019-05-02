import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { defaultThemePropTypes, themePropTypes } from '../../common';
import { styles, BEMClassNames } from './styles';

class SnackBar extends Component {
  state = { isHidden: false };

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
    onActionClick: () => {},
    onClose: () => {},
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.dismiss(), this.props.duration);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  dismiss = () => {
    this.setState({ isHidden: true }, () => { clearTimeout(this.timeout); this.props.onClose(); });
  }

  render() {
    const {
      children,
      className,
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
      ...otherProps
    } = this.props;
    return (
      !this.state.isHidden && (
      <div
        css={[
          styles.container,
          styles.getPositionStyles({
            topRight,
            bottomRight,
            bottomLeft,
            topLeft,
          }),
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
        className={clsx(BEMClassNames.container, className)}
        {...otherProps}
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
            onClick={onActionClick}
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
      )
    );
  }
}

export default SnackBar;
