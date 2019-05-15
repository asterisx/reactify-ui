import React from 'react';
import PropTypes from 'prop-types';
import {
  Balls,
  Bars,
  Circle,
  Clock,
  Hydrogen,
  Loadbar,
  Sphere,
  Slices,
  Texture,
  Volume,
  Vortex,
  Wave,
} from './components';
import { defaultSizePropTypes, sizePropTypes } from '../../common';
import { styles } from './styles';

const getSpinner = ({
  balls,
  bars,
  circle,
  clock,
  hydrogen,
  loadbar,
  sphere,
  slices,
  texture,
  volume,
  vortex,
  wave,
  ...otherProps
}) => {
  if (bars) return <Bars {...otherProps} />;

  if (circle) return <Circle {...otherProps} />;

  if (clock) return <Clock {...otherProps} />;

  if (hydrogen) return <Hydrogen {...otherProps} />;

  if (loadbar) return <Loadbar {...otherProps} />;

  if (sphere) return <Sphere {...otherProps} />;

  if (slices) return <Slices {...otherProps} />;

  if (texture) return <Texture {...otherProps} />;

  if (volume) return <Volume {...otherProps} />;

  if (vortex) return <Vortex {...otherProps} />;

  if (wave) return <Wave {...otherProps} />;

  if (balls) return <Balls {...otherProps} />;

  return undefined;
};

const Spinner = ({
  balls,
  bars,
  circle,
  clock,
  hydrogen,
  loadbar,
  sphere,
  slices,
  texture,
  volume,
  vortex,
  wave,
  small,
  medium,
  large,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  ...otherProps
}) => (
  <div
    css={[
      styles.container,
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
    ]}
    {...otherProps}
  >
    {getSpinner({
      balls,
      bars,
      circle,
      clock,
      hydrogen,
      loadbar,
      sphere,
      slices,
      texture,
      volume,
      vortex,
      wave,
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    })}
  </div>
);


Spinner.propTypes = {
  balls: PropTypes.bool,
  bars: PropTypes.bool,
  circle: PropTypes.bool,
  clock: PropTypes.bool,
  hydrogen: PropTypes.bool,
  loadbar: PropTypes.bool,
  sphere: PropTypes.bool,
  slices: PropTypes.bool,
  texture: PropTypes.bool,
  volume: PropTypes.bool,
  vortex: PropTypes.bool,
  wave: PropTypes.bool,
  ...sizePropTypes,
};

Spinner.defaultProps = {
  balls: true,
  bars: false,
  circle: false,
  clock: false,
  hydrogen: false,
  loadbar: false,
  sphere: false,
  slices: false,
  texture: false,
  volume: false,
  vortex: false,
  wave: false,
  ...defaultSizePropTypes,
};

export default Spinner;
