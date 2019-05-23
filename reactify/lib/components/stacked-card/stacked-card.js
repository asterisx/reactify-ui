import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import {
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';

const StackedCard = ({
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

StackedCard.Header = ({ children, ...otherProps }) => (
  <div
    css={[
      styles.header,
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

StackedCard.Body = ({
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

StackedCard.Footer = ({
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

StackedCard.Body.propTypes = {
  /**
   * If 'true', shows a borderLeft
   * Default to 'false'
   */
  bordered: PropTypes.bool,
};

StackedCard.Body.defaultProps = {
  bordered: false,
};

StackedCard.Footer.propTypes = {
  /**
   * If 'true', shows a borderLeft
   * Default to 'false'
   */
  bordered: PropTypes.bool,
};

StackedCard.Footer.defaultProps = {
  bordered: false,
};

StackedCard.propTypes = {
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

StackedCard.defaultProps = {
  ...defaultSizePropTypes,
  disabled: false,
  shadowed: true,
};

export default StackedCard;
