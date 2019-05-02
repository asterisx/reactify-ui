import React from 'react';
import PropTypes from 'prop-types';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
} from '../../common';
import { styles } from './styles';

const Button = ({
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
  small,
  medium,
  large,
  clear,
  bordered,
  disabled,
  ...otherProps
}) => (
  <div
    css={[
      styles.container,
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
      styles.getBackgroundColorStyle({
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
      clear && styles.getClearThemedStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
        bordered,
      }),
      styles.getDisabledStyle({
        disabled,
      }),
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Button.propTypes = {
  clear: PropTypes.bool,
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  ...themePropTypes,
  ...sizePropTypes,
};

Button.defaultProps = {
  clear: false,
  bordered: false,
  disabled: false,
  ...defaultThemePropTypes,
};

export default Button;
