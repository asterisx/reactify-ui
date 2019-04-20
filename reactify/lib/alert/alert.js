import React from 'react';
import PropTypes from 'prop-types';
import './alert.scss';

const Alert = ({
  children, theme, className, direction, color, disabled, ...otherProps
}) => {
  const borderDirectionClasses = []
    .concat(direction)
    .map(dir => `reactify-alert-border-${dir}`);

  const cssClass = ['reactify-alert__container']
    .concat(`${!color ? `reactify-alert-border--theme-${theme}` : ''} ${disabled ? 'reactify--disabled' : ''}`, ...borderDirectionClasses, className)
    .join(' ');

  return (
    <div style={color ? { borderColor: color } : undefined} className={cssClass} {...otherProps}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  theme: PropTypes.oneOf([
    'default',
    'dark',
    'light',
    'info',
    'warning',
    'danger',
    'success',
  ]),
  direction: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Alert.defaultProps = {
  theme: 'default',
  direction: 'left',
  color: undefined,
  disabled: false,
};

export default Alert;
