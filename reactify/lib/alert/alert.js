import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const Alert = ({
  children,
  direction,
  disabled,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
  borderColor,
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
      styles.getPropBasedStyles({
        disabled,
        borderLeft,
        borderRight,
        borderTop,
        borderBottom,
        borderColor,
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

Alert.propTypes = {
  borderLeft: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderTop: PropTypes.bool,
  borderBottom: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

Alert.defaultProps = {
  borderLeft: true,
  borderRight: false,
  borderTop: false,
  borderBottom: false,
  primary: true,
  secondary: false,
  dark: false,
  light: false,
  info: false,
  warning: false,
  danger: false,
  success: false,
  disabled: false,
};

export default Alert;
