import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
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
import {
  defaultSizePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
} from '../../common';
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
  style: { animationDuration, color, ...otherStyles },
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
    style={otherStyles}
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
      theme: merge(defaultThemePropTypes.theme, theme),
      style: {
        animationDuration,
        color,
      },
    })}
  </div>
);


Spinner.propTypes = {
  /**
   * If 'true' the balls type is used
   * Default is 'true'
   */
  balls: PropTypes.bool,
  /**
   * If 'true' the bars type is used
   * Default is 'false'
   */
  bars: PropTypes.bool,
  /**
   * If 'true' the circle type is used
   * Default is 'false'
   */
  circle: PropTypes.bool,
  /**
   * If 'true' the clock type is used
   * Default is 'false'
   */
  clock: PropTypes.bool,
  /**
   * If 'true' the hydrogen type is used
   * Default is 'false'
   */
  hydrogen: PropTypes.bool,
  /**
   * If 'true' the loadbar type is used
   * Default is 'false'
   */
  loadbar: PropTypes.bool,
  /**
   * If 'true' the sphere type is used
   * Default is 'false'
   */
  sphere: PropTypes.bool,
  /**
   * If 'true' the slices type is used
   * Default is 'false'
   */
  slices: PropTypes.bool,
  /**
   * If 'true' the texture type is used
   * Default is 'false'
   */
  texture: PropTypes.bool,
  /**
   * If 'true' the volume type is used
   * Default is 'false'
   */
  volume: PropTypes.bool,
  /**
   * If 'true' the vortex type is used
   * Default is 'false'
   */
  vortex: PropTypes.bool,
  /**
   * If 'true' the wave type is used
   * Default is 'false'
   */
  wave: PropTypes.bool,
  /**
   * A collection of valid size types, all boolean values
   */
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
  style: { animationDuration: '1s', color: undefined },
  ...defaultSizePropTypes,
};

export default withTheme(Spinner);
