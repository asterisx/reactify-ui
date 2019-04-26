import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const oneOfValidSizes = size => ['small', 'medium', 'large'].find(sz => sz === size);

const Card = ({
  className, children, size, disabled, shadowed, ...otherProps
}) => (
  <div
    className={`reactify-card__container ${
      oneOfValidSizes(size) ? `reactify-card--size-${size}` : ''
    } ${disabled ? 'reactify--disabled' : ''} ${className || ''} ${shadowed ? 'reactify-card--shadowed' : ''}`}
    style={{ width: !oneOfValidSizes(size) ? size : undefined }}
    {...otherProps}
  >
    {children}
  </div>
);

Card.Header = ({ className, children, ...otherProps }) => (
  <div
    className={`reactify-card__header ${className || ''}`}
    {...otherProps}
  >
    {children}
  </div>
);

Card.Body = ({
  bordered, borderColor, className, children, ...otherProps
}) => (
  <div
    className={`reactify-card__body ${
      bordered ? 'reactify-card--bordered' : ''
    } ${className || ''}`}
    style={{ borderColor }}
    {...otherProps}
  >
    {children}
  </div>
);

Card.Footer = ({
  bordered, borderColor, className, children, ...otherProps
}) => (
  <div
    className={`reactify-card__footer ${
      bordered ? 'reactify-card--bordered' : ''
    } ${className || ''}`}
    style={{ borderColor }}
    {...otherProps}
  >
    {children}
  </div>
);

Card.Body.propTypes = {
  bordered: PropTypes.bool,
  borderColor: PropTypes.string,
};

Card.Body.defaultProps = {
  bordered: false,
  borderColor: undefined,
};

Card.Footer.propTypes = {
  bordered: PropTypes.bool,
  borderColor: PropTypes.string,
};

Card.Footer.defaultProps = {
  bordered: false,
  borderColor: undefined,
};

Card.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  shadowed: PropTypes.bool,
};

Card.defaultProps = {
  size: 'medium',
  disabled: false,
  shadowed: true,
};

export default Card;
