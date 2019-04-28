/* eslint-disable no-underscore-dangle */
import { css } from '@emotion/core';
import { defaultThemeColors, commonStyles } from '../../common';

export const styles = {
  container: {
    padding: '0.4em 0.6em',
    border: '1px solid',
  },
  borderLeft: {
    borderLeft: '0.4em solid',
  },
  borderTop: {
    borderTop: '0.4em solid',
  },
  borderRight: {
    borderRight: '0.4em solid',
  },
  borderBottom: {
    borderBottom: '0.4em solid',
  },


  _getBorderStyles: (
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
  ) => Object.entries({
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
  }).reduce(
    (borderStyle, [key, isTrue]) => (
      isTrue ? Object.assign({}, { ...borderStyle }, styles[key]) : borderStyle
    ), {},
  ),


  _getBorderColor: (
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
  ) => Object.entries({
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
  }).reduce((color, [key, isTrue]) => (isTrue ? theme[key] : color), undefined),


  getPropBasedStyles: ({
    disabled,
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme = defaultThemeColors,
  }) => css`
  ${styles._getBorderStyles(borderLeft, borderRight, borderTop, borderBottom, theme)}
  border-color: ${styles._getBorderColor(primary, secondary, dark, light, info, warning, danger, success)};
  ${disabled ? commonStyles.disabled : undefined}
`,
};
