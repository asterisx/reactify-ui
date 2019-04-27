import React from 'react';
import PropTypes from 'prop-types';
import './stacked-card.scss';

const oneOfValidSizes = size => ['small', 'medium', 'large'].find(sz => sz === size);

const StackedCard = ({
  className, children, size, disabled, shadowed, ...otherProps
}) => (
  <div
    className={`reactify-stacked-card__container ${
      oneOfValidSizes(size) ? `reactify-stacked-card--size-${size}` : ''
    } ${disabled ? 'reactify--disabled' : ''} ${className || ''} ${shadowed ? 'reactify-stacked-card--shadowed' : ''}`}
    style={{ height: !oneOfValidSizes(size) ? size : undefined }}
    {...otherProps}
  >
    {children}
  </div>
);

StackedCard.Header = ({ className, children, ...otherProps }) => (
  <div
    className={`reactify-stacked-card__header ${className || ''}`}
    {...otherProps}
  >
    {children}
  </div>
);

StackedCard.Body = ({
  bordered, borderColor, className, children, ...otherProps
}) => (
  <div
    className={`reactify-stacked-card__body ${
      bordered ? 'reactify-stacked-card--bordered' : ''
    } ${className || ''}`}
    style={{ borderColor }}
    {...otherProps}
  >
    {children}
  </div>
);

StackedCard.Footer = ({
  bordered, borderColor, className, children, ...otherProps
}) => (
  <div
    className={`reactify-stacked-card__footer ${
      bordered ? 'reactify-stacked-card--bordered' : ''
    } ${className || ''}`}
    style={{ borderColor }}
    {...otherProps}
  >
    {children}
  </div>
);

StackedCard.Body.propTypes = {
  bordered: PropTypes.bool,
  borderColor: PropTypes.string,
};

StackedCard.Body.defaultProps = {
  bordered: false,
  borderColor: undefined,
};

StackedCard.Footer.propTypes = {
  bordered: PropTypes.bool,
  borderColor: PropTypes.string,
};

StackedCard.Footer.defaultProps = {
  bordered: false,
  borderColor: undefined,
};

StackedCard.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  shadowed: PropTypes.bool,
};

StackedCard.defaultProps = {
  size: 'medium',
  disabled: false,
  shadowed: true,
};

export default StackedCard;
