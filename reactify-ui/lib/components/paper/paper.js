import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
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
  theme,
  small,
  medium,
  large,
  disabled,
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
        theme: merge(defaultThemePropTypes.theme, theme),
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
        theme: merge(defaultThemePropTypes.theme, theme),
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

export default withTheme(Paper);
