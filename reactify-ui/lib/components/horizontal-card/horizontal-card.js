import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { sizePropTypes, defaultSizePropTypes } from '../../common';

const HorizontalCard = ({
  children, small, medium, large, disabled, shadowed, ...otherProps
}) => (
  <div
    css={[
      styles.container,
      styles.getHeightStyle({
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

HorizontalCard.Header = ({ children, ...otherProps }) => (
  <div
    {...otherProps}
  >
    {children}
  </div>
);

HorizontalCard.Body = ({
  bordered, children, ...otherProps
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

HorizontalCard.Footer = ({
  bordered, children, ...otherProps
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

HorizontalCard.Body.propTypes = {
  /**
   * If 'true', shows a borderLeft
   * Default to 'false'
   */
  bordered: PropTypes.bool,
};

HorizontalCard.Body.defaultProps = {
  bordered: false,
};

HorizontalCard.Footer.propTypes = {
  /**
   * If 'true', shows a borderLeft
   * Default to 'false'
   */
  bordered: PropTypes.bool,
};

HorizontalCard.Footer.defaultProps = {
  bordered: false,
};

HorizontalCard.propTypes = {
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

HorizontalCard.defaultProps = {
  ...defaultSizePropTypes,
  disabled: false,
  shadowed: true,
};

export default HorizontalCard;
