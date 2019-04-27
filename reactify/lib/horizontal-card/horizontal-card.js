import React from 'react';
import PropTypes from 'prop-types';
import './horizontal-card.scss';

const oneOfValidSizes = size => ['small', 'medium', 'large'].find(sz => sz === size);

const HorizontalCard = ({
  className, children, size, disabled, shadowed, ...otherProps
}) => (
  <div
    className={`reactify-horizontal-card__container ${
      oneOfValidSizes(size) ? `reactify-horizontal-card--size-${size}` : ''
    } ${disabled ? 'reactify--disabled' : ''} ${className || ''} ${shadowed ? 'reactify-horizontal-card--shadowed' : ''}`}
    style={{ height: !oneOfValidSizes(size) ? size : undefined }}
    {...otherProps}
  >
    {children}
  </div>
);

HorizontalCard.Header = ({ className, children, ...otherProps }) => (
  <div
    className={`reactify-horizontal-card__header ${className || ''}`}
    {...otherProps}
  >
    {children}
  </div>
);

HorizontalCard.Body = ({
  bordered, borderColor, className, children, ...otherProps
}) => (
  <div
    className={`reactify-horizontal-card__body ${
      bordered ? 'reactify-horizontal-card--bordered' : ''
    } ${className || ''}`}
    style={{ borderColor }}
    {...otherProps}
  >
    {children}
  </div>
);

HorizontalCard.Footer = ({
  bordered, borderColor, className, children, ...otherProps
}) => (
  <div
    className={`reactify-horizontal-card__footer ${
      bordered ? 'reactify-horizontal-card--bordered' : ''
    } ${className || ''}`}
    style={{ borderColor }}
    {...otherProps}
  >
    {children}
  </div>
);

HorizontalCard.Body.propTypes = {
  bordered: PropTypes.bool,
  borderColor: PropTypes.string,
};

HorizontalCard.Body.defaultProps = {
  bordered: false,
  borderColor: undefined,
};

HorizontalCard.Footer.propTypes = {
  bordered: PropTypes.bool,
  borderColor: PropTypes.string,
};

HorizontalCard.Footer.defaultProps = {
  bordered: false,
  borderColor: undefined,
};

HorizontalCard.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  shadowed: PropTypes.bool,
};

HorizontalCard.defaultProps = {
  size: 'medium',
  disabled: false,
  shadowed: true,
};

export default HorizontalCard;
