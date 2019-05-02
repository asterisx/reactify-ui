import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
} from '../../common';

const Label = ({
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
        medium,
        small,
        large,
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
      styles.getDisabledStyle({
        disabled,
      }),
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Label.propTypes = {
  ...sizePropTypes,
  disabled: PropTypes.bool,
  ...themePropTypes,
};
Label.defaultProps = {
  disabled: false,
  ...defaultThemePropTypes,
};

export default Label;
