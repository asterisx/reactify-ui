import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { sizePropTypes, defaultSizePropTypes } from '../../common';

const Card = ({
  children, small, medium, large, disabled, shadowed, ...otherProps
}) => (
  <div
    css={[
      styles.container,
      styles.getWidthStyle({
        small,
        medium,
        large,
      }),
      styles.getDisabledStyle({
        disabled,
      }),
      shadowed && styles.shadowed,
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Card.Header = ({ children, ...otherProps }) => (
  <div
    css={[
      styles.header,
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Card.Body = ({
  bordered, borderColor, children, ...otherProps
}) => (
  <div
    css={[
      styles.body,
      bordered ? styles.bordered : undefined,
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Card.Footer = ({
  bordered, borderColor, children, ...otherProps
}) => (
  <div
    css={[
      styles.footer,
      bordered ? styles.bordered : undefined,
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Card.Body.propTypes = {
  bordered: PropTypes.bool,
};

Card.Body.defaultProps = {
  bordered: false,
};

Card.Footer.propTypes = {
  bordered: PropTypes.bool,
};

Card.Footer.defaultProps = {
  bordered: false,
};

Card.propTypes = {
  ...sizePropTypes,
  disabled: PropTypes.bool,
  shadowed: PropTypes.bool,
};

Card.defaultProps = {
  ...defaultSizePropTypes,
  disabled: false,
  shadowed: true,
};

export default Card;
