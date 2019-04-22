import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './snackbar.scss';

class SnackBar extends Component {
  state = { isHidden: false };

  static propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.oneOf([
      'default',
      'dark',
      'light',
      'info',
      'warning',
      'danger',
      'success',
      'transparent',
    ]),
    message: PropTypes.string,
    action: PropTypes.string,
    delay: PropTypes.number,
    position: PropTypes.oneOf([
      'top-left',
      'top-right',
      'bottom-right',
      'bottom-left',
    ]),
    onActionClick: PropTypes.func,
    onClose: PropTypes.func,
  }

  timeout = {};

  static defaultProps = {
    color: undefined,
    disabled: false,
    theme: 'dark',
    message: '',
    action: undefined,
    delay: 1000,
    position: 'top-right',
    onActionClick: () => {},
    onClose: () => {},
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.dismiss(), this.props.delay);
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
      color,
      disabled,
      theme,
      message,
      action,
      delay,
      position,
      onActionClick,
      onClose,
      showDismiss,
      ...otherProps
    } = this.props;
    return (
      !this.state.isHidden && (
      <div
        className={
          `reactify-snackbar__container reactify-snackbar--position-${position} reactify-snackbar--theme-${theme} ${className || ''} ${!disabled || 'reactify--disabled'}`
        }
        style={{ backgroundColor: color || undefined }}
        {...otherProps}
      >
        {children || (
        <div className="reactify-snackbar__options">
          <span className="reactify-snackbar__message reactify--pl-1 reactify--pr-1">{message}</span>
          {!!action && <span className="reactify-snackbar__action reactify--pl-1 reactify--pr-1" onClick={onActionClick}>{action}</span>}
          {showDismiss && <span className="reactify-snackbar__dismiss reactify--pl-1 reactify--pr-1" onClick={this.dismiss}>dismiss</span>}
        </div>
        )}
      </div>
      )
    );
  }
}

export default SnackBar;
