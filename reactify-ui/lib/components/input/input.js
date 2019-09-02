import React from 'react';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

const Input = ({
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
  ...otherProps
}) => (
  <input
    css={[
      styles.inputStyle({
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
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
    ]}
    {...otherProps}
  />
);

Input.propTypes = {
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
};

Input.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

export default withTheme(Input);
