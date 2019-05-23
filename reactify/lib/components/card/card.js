import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { sizePropTypes, defaultSizePropTypes } from '../../common';

const Card = ({
  children,
  small,
  medium,
  large,
  disabled,
  shadowed,
  ...otherProps
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

Card.Header = ({
  children,
  ...otherProps
}) => (
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
  bordered,
  borderColor,
  children,
  ...otherProps
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
  bordered,
  borderColor,
  children,
  ...otherProps
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
  /**
   * If 'true', shows a borderTop
   * Default to 'false'
   */
  bordered: PropTypes.bool,
};

Card.Body.defaultProps = {
  bordered: false,
};

Card.Footer.propTypes = {
  /**
   * If 'true', shows a borderTop
   * Default to 'false'
   */
  bordered: PropTypes.bool,
};

Card.Footer.defaultProps = {
  bordered: false,
};

Card.propTypes = {
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
  /**
   * If 'true', the component is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
  /**
   * If 'true', shows a shadow
   * Default to 'true'
   */
  shadowed: PropTypes.bool,
};

Card.defaultProps = {
  ...defaultSizePropTypes,
  disabled: false,
  shadowed: true,
};

export default Card;
