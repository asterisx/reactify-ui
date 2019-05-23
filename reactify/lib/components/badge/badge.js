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
  /**
   * If 'true', the badge is placed top left
   * Default is 'false'
   */
  topLeft: PropTypes.bool,
  /**
   * If 'true', the badge is placed top right
   * Default is 'true'
   */
  topRight: PropTypes.bool,
  /**
   * If 'true', the badge is placed bottom left
   * Default is 'false'
   */
  bottomLeft: PropTypes.bool,
  /**
   * If 'true', the badge is placed bottom right
   * Default is 'false'
   */
  bottomRight: PropTypes.bool,
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
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
