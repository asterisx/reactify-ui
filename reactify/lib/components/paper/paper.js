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
  /**
   * If 'true', no shaodow is applied to the component
   * Default is 'false'
   */
  noShadow: PropTypes.bool,
};

Paper.defaultProps = {
  disabled: false,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  noShadow: false,
};

export default Paper;
