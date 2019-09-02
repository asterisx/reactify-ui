import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
import { defaultThemePropTypes, themePropTypes } from '../../common';
import { styles } from './styles';

const Alert = ({
  children,
  direction,
  disabled,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  ...otherProps
}) => (
  <div
    css={[
      styles.container,
      styles.getBorderStyle({
        borderLeft,
        borderTop,
        borderRight,
        borderBottom,
      }),
      styles.getBorderColorStyle({
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
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Alert.propTypes = {
  /**
   * If 'true' shows a border on left
   * Default is 'true'
   */
  borderLeft: PropTypes.bool,
  /**
   * If 'true' shows a border on left
   * Default is 'false'
   */
  borderRight: PropTypes.bool,
  /**
   * If 'true' shows a border on left
   * Default is 'false'
   */
  borderTop: PropTypes.bool,
  /**
   * If 'true' shows a border on left
   * Default is 'false'
   */
  borderBottom: PropTypes.bool,
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * If 'true', the component is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
};

Alert.defaultProps = {
  borderLeft: true,
  borderRight: false,
  borderTop: false,
  borderBottom: false,
  ...defaultThemePropTypes,
  disabled: false,
};

Alert.displayName = 'Alert';

export default withTheme(Alert);
