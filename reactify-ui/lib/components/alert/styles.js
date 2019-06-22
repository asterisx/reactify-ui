import { commonStyles } from '../../common';

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

  getBorderStyle: ({
    borderLeft,
    borderTop,
    borderRight,
    borderBottom,
  }) => Object.entries({
    borderLeft,
    borderTop,
    borderRight,
    borderBottom,
  }).reduce(
    (borderStyle, [key, isTrue]) => (
      isTrue ? Object.assign({}, { ...borderStyle }, styles[key]) : borderStyle
    ), {},
  ),

  getBorderColorStyle: ({
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
  }) => ({
    borderColor: commonStyles.get.theme.color({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    }),
  }),

  getDisabledStyle: commonStyles.get.disabled.style,
};
