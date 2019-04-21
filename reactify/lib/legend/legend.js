import React from 'react';
import PropTypes from 'prop-types';
import './legend.scss';

const Legend = ({
  children,
  className,
  direction,
  ...otherProps
}) => (
  <div className={`reactify-legend__container--${direction} ${className || ''}`} {...otherProps}>
    {children}
  </div>
);

const LegendItem = ({
  children,
  className,
  theme,
  label,
  iconColor,
  ...otherProps
}) => (
  <div className={`reactify-legend-item__container ${className || ''}`} {...otherProps}>
    <span className={`reactify-legend-item__icon ${theme ? `reactify-legend-item__icon--theme-${theme}` : ''}`} style={{ backgroundColor: iconColor || undefined }} />
    <span>{label}</span>
    {children}
  </div>
);

Legend.propTypes = {
  direction: PropTypes.oneOf([
    'horizontal',
    'vertical',
  ]),
};

Legend.defaultProps = {
  direction: 'horizontal',
};

LegendItem.propTypes = {
  label: PropTypes.string,
  iconColor: PropTypes.string,
  theme: PropTypes.oneOf([
    'default',
    'dark',
    'light',
    'info',
    'warning',
    'danger',
    'success',
  ]),
};

LegendItem.defaultProps = {
  label: undefined,
  iconColor: undefined,
  theme: 'default',
};

export {
  Legend,
  LegendItem,
};
