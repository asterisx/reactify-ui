import PropTypes from 'prop-types';
import { defaultThemeColors } from './constants';

export const themePropTypes = {
  /**
   * If true, the primary theme is applied
   */
  primary: PropTypes.bool,
  /**
   * If true, the secondary theme is applied
   */
  secondary: PropTypes.bool,
  /**
   * If true, the dark theme is applied
   */
  dark: PropTypes.bool,
  /**
   * If true, the light theme is applied
   */
  light: PropTypes.bool,
  /**
   * If true, the info theme is applied
   */
  info: PropTypes.bool,
  /**
   * If true, the warning theme is applied
   */
  warning: PropTypes.bool,
  /**
   * If true, the danger theme is applied
   */
  danger: PropTypes.bool,
  /**
   * If true, the success theme is applied
   */
  success: PropTypes.bool,
  /**
   * A collection of specifying theme values for each theme
   * color specifies the respective theme color
   * fontColor specifies the font color to be used for that theme
   * This can be injected via a Provider or can be injected per component as a prop.
   */
  theme: PropTypes.shape({
    primary: PropTypes.shape({
      color: PropTypes.string,
      fontColor: PropTypes.string,
    }),
    secondary: PropTypes.shape({
      color: PropTypes.string,
      fontColor: PropTypes.string,
    }),
    dark: PropTypes.shape({
      color: PropTypes.string,
      fontColor: PropTypes.string,
    }),
    light: PropTypes.shape({
      color: PropTypes.string,
      fontColor: PropTypes.string,
    }),
    info: PropTypes.shape({
      color: PropTypes.string,
      fontColor: PropTypes.string,
    }),
    warning: PropTypes.shape({
      color: PropTypes.string,
      fontColor: PropTypes.string,
    }),
    danger: PropTypes.shape({
      color: PropTypes.string,
      fontColor: PropTypes.string,
    }),
    success: PropTypes.shape({
      color: PropTypes.string,
      fontColor: PropTypes.string,
    }),
  }),
};

export const defaultThemePropTypes = {
  primary: true,
  secondary: false,
  dark: false,
  light: false,
  info: false,
  warning: false,
  danger: false,
  success: false,
  theme: defaultThemeColors,
};

export const sizePropTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
};

export const defaultSizePropTypes = {
  small: false,
  medium: true,
  large: false,
};
