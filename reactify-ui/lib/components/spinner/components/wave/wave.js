import React from 'react';
import { styles } from './styles';
import { defaultThemePropTypes, themePropTypes } from '../../../../common';

const Vortex = ({
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  style: { animationDuration = '1s', color, ...otherStyles },
  ...otherProps
}) => (
  <span
    css={[
      styles.getContainerStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      })({ animationDuration, color }),
    ]}
    style={otherStyles}
    {...otherProps}
  />
);

Vortex.propTypes = {
  ...themePropTypes,
};

Vortex.defaultProps = {
  ...defaultThemePropTypes,
  style: { animationDuration: '1s', color: undefined },
};

export default Vortex;
