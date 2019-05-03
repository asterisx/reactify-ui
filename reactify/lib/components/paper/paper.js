import React from 'react';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

const Paper = ({
  children,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  small,
  medium,
  large,
  disabled,
  theme,
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
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Paper.propTypes = {
  ...sizePropTypes,
  ...themePropTypes,
};

Paper.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

export default Paper;
