import PropTypes from 'prop-types';
import { defaultThemeColors } from './constants';

export const themePropTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
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
