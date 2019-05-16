import React from 'react';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

const Link = ({
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
  ...otherProps
}) => (
  <a
    css={[
      styles.linkStyle({
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
    ]}
    {...otherProps}
  >
    {children}
  </a>
);

Link.propTypes = {
  ...themePropTypes,
  ...sizePropTypes,
};

Link.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

export default Link;
