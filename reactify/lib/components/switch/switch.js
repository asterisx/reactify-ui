
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class Switch extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    iconColor: PropTypes.string,
    disabled: PropTypes.bool,
    ...themePropTypes,
    ...sizePropTypes,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
    iconColor: undefined,
    disabled: false,
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    onChange: () => {},

  }

  state = { checked: this.props.checked }

  componentDidUpdate(prevProps) {
    if (this.props.checked !== prevProps.checked && this.props.checked !== this.state.checked) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ checked: this.props.checked });
    }
  }

  toggle = () => {
    this.setState(
      prevProps => ({ checked: !prevProps.checked }),
      () => {
        if (this.props.onChange) { this.props.onChange(this.state.checked); }
      },
    );
  }

  render() {
    const {
      children,
      checked,
      iconColor,
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
      small,
      medium,
      large,
      disabled,
      onChange,
      ...otherProps
    } = this.props;
    return (
      <div
        css={[
          styles.container,
          styles.getFontSizeStyle({
            small,
            medium,
            large,
          }),
          styles.getDisabledStyle({
            disabled,
          }),
        ]}
        {...otherProps}
      >
        <input
          css={[
            styles.input,
            !iconColor && styles.getThemedStyle({
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
          ]}
          type="checkbox"
          style={{ color: iconColor }}
          onClick={this.toggle}
          onChange={() => {}}
          checked={this.state.checked}
          className={BEMClassNames.icon}
        />
        {children}
      </div>
    );
  }
}

export default Switch;
