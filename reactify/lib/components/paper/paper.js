import React from 'react';
import PropTypes from 'prop-types';
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
  noShadow,
  ...otherProps
}) => (
  <div
    css={[
      styles.container({ noShadow }),
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
  noShadow: PropTypes.bool,
};

Paper.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  noShadow: false,
};

export default Paper;
