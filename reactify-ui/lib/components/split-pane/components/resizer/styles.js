import { darken } from 'polished';
import {
  commonStyles,
  darkenBy,
} from '../../../../common';

export const styles = {
  resizer: {
    width: '1em',
    cursor: 'col-resize',
    flexShrink: 0,
    userSelect: 'none',
  },

  verticalStyle: {
    width: '100%',
    height: '1em',
  },

  getDisabledStyle: commonStyles.get.disabled.style,

  getThemedStyle: ({
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
    ...(commonStyles.get.backgroundColor.forTheme({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    })),
    ...(commonStyles.get.font.color.forTheme({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    })),
    '@media (hover: hover)': {
      ':hover': {
        backgroundColor:
        darken(darkenBy, commonStyles.get.theme.color({
          primary,
          secondary,
          dark,
          light,
          info,
          warning,
          danger,
          success,
          theme,
        })),
      },
    },
  }),
};
