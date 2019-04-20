import React from 'react';
import PropTypes from 'prop-types';
import './badge.scss';

const oneOfDefaultSizes = (size) => {
  const validSizes = ['small', 'medium', 'large'];
  return validSizes.find(vs => vs === size);
};

const Badge = ({
  className,
  children,
  theme,
  count,
  position,
  disabled,
  size,
  color,
  ...otherProps
}) => (
  <div className={`reactify-badge__container ${className || ''}`} {...otherProps}>
    <div className="reactify-badge__children">
      <div
        style={{ backgroundColor: color, fontSize: !oneOfDefaultSizes(size) ? size : undefined, borderRadius: !oneOfDefaultSizes(size) ? size : undefined }}
        className={`reactify-badge-bubble reactify-badge-bubble--theme-${theme} ${oneOfDefaultSizes(size) ? `reactify-badge-bubble--font-size-${size}` : ''} reactify-badge-bubble--position-${position} ${disabled ? 'reactify--disabled' : ''} `}
      >
        {count}

      </div>
      {children}
    </div>
  </div>
);

Badge.propTypes = {
  theme: PropTypes.oneOf([
    'default',
    'dark',
    'light',
    'info',
    'warning',
    'danger',
    'success',
  ]),
  count: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]),
};

Badge.defaultProps = {
  theme: 'default',
  count: undefined,
  color: undefined,
  disabled: false,
  size: 'small',
  position: 'top-right',
};

export default Badge;
