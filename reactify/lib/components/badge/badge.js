import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
} from '../../common';

const Badge = ({
  children,
  disabled,
  ...otherProps
}) => (
  <div
    css={[
      styles.container,
      styles.getDisabledStyle({
        disabled,
      }),
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Badge.Bubble = ({
  children,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  topRight,
  bottomRight,
  bottomLeft,
  topLeft,
  small,
  medium,
  large,
  theme,
  ...otherProps
}) => (
  <div
    css={[
      styles.bubble,
      styles.getPositionStyle({
        topRight,
        bottomRight,
        bottomLeft,
        topLeft,
      }),
      styles.getFontSizeStyle({
        small,
        medium,
        large,
        defaultSize: 'small',
      }),
      styles.getThemeBackgroundStyle({
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
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Badge.Bubble.propTypes = {
  topLeft: PropTypes.bool,
  topRight: PropTypes.bool,
  bottomLeft: PropTypes.bool,
  bottomRight: PropTypes.bool,
  ...sizePropTypes,
  ...themePropTypes,
};

Badge.Bubble.defaultProps = {
  topLeft: false,
  topRight: true,
  bottomLeft: false,
  bottomRight: false,
  ...defaultThemePropTypes,
};

Badge.propTypes = {
  disabled: PropTypes.bool,
};

Badge.defaultProps = {
  disabled: false,
};

export default Badge;
