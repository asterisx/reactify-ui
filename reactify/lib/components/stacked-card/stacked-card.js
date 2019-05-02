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
  bordered: PropTypes.bool,
};

StackedCard.Body.defaultProps = {
  bordered: false,
};

StackedCard.Footer.propTypes = {
  bordered: PropTypes.bool,
};

StackedCard.Footer.defaultProps = {
  bordered: false,
};

StackedCard.propTypes = {
  ...sizePropTypes,
  disabled: PropTypes.bool,
  shadowed: PropTypes.bool,
};

StackedCard.defaultProps = {
  ...defaultSizePropTypes,
  disabled: false,
  shadowed: true,
};

export default StackedCard;
