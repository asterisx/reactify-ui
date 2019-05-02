import React from 'react';
import PropTypes from 'prop-types';
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

Alert.propTypes = {
  borderLeft: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderTop: PropTypes.bool,
  borderBottom: PropTypes.bool,
  ...themePropTypes,
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

export default Alert;
