import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoIosSquareOutline, IoIosCheckboxOutline } from 'react-icons/io';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class Checkbox extends Component {
  state = { checked: this.props.checked }

  componentDidUpdate(prevProps) {
    if (this.props.checked !== prevProps.checked && this.props.checked !== this.state.checked) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ checked: this.props.checked });
    }
  }

  handleCheckboxClick = (evt) => {
    this.setState(prevState => ({ checked: !prevState.checked }), () => {
      if (this.props.onChange) { this.props.onChange(this.state.checked); }
      if (this.props.onClick) { this.props.onClick(evt); }
    });
  }

  render() {
    const {
      disabled,
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
      children,
      onClick,
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
        onClick={this.handleCheckboxClick}
        {...otherProps}
      >
        <div
          css={[
            styles.icon,
            !iconColor && styles.getThemedFontStyle({
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
          style={{ color: iconColor }}
          className={BEMClassNames.icon}
        >
          {this.state.checked ? <IoIosCheckboxOutline /> : <IoIosSquareOutline />}
        </div>
        {children}
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  ...themePropTypes,
  ...sizePropTypes,
};

Checkbox.defaultProps = {
  checked: false,
  iconColor: undefined,
  disabled: false,
  onChange: () => {},
  ...defaultThemePropTypes,
};

export default Checkbox;
