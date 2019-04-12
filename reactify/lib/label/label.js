import React from 'react';
import PropTypes from 'prop-types';
import './label.scss';

const oneOfdefaultSizes = (size) => ['small', 'medium', 'large'].find(ds => ds === size);

const Label = ({
  children,
  className,
  theme,
  color,
  size,
  disabled,
  ...otherProps
}) => (
    <div style = {{fontSize: !oneOfdefaultSizes(size) ? size : undefined, backgroundColor: color}} className={`reactify-label__container reactify-label--font-size-${size} reactify-label--theme-${theme} ${disabled ? 'reactify--disabled' : ''} ${className || ''}`} {...otherProps}>
    {children}
  </div>
);

Label.propTypes = {
  theme: PropTypes.oneOf([
    'default',
    'dark',
    'light',
    'info',
    'warning',
    'danger',
    'success',
  ]),
  color: PropTypes.string,
  size: PropTypes.string,
};
Label.defaultProps = {
  theme: 'default',
  color: undefined,
  size: 'small',
};

export default Label;
