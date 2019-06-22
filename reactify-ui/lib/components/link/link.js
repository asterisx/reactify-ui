import React from 'react';
import PropTypes from 'prop-types';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

const Link = ({
  children,
  disabled,
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
      styles.getDisabledStyle({
        disabled,
      }),
    ]}
    {...otherProps}
  >
    {children}
  </a>
);

Link.propTypes = {
  /**
    * If 'true', component is disabled
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

Link.defaultProps = {
  disabled: false,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

export default Link;
