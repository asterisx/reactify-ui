import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
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
        theme: merge(defaultThemePropTypes.theme, theme),
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
        theme: merge(defaultThemePropTypes.theme, theme),
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
        theme: merge(defaultThemePropTypes.theme, theme),
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
  /**
   * If 'true', the background is transparent
   * and the font color matches the passed theme's color
   * Default is 'false'
   */
  clear: PropTypes.bool,
  /**
   * Used in conjunction with 'clear'
   * If 'true' all same as clear prop + border is same as theme's color
   * Default is 'false'
   */
  bordered: PropTypes.bool,
  /**
   * If 'true', the component is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
};

Button.defaultProps = {
  clear: false,
  bordered: false,
  disabled: false,
  ...defaultThemePropTypes,
};

export default withTheme(Button);
