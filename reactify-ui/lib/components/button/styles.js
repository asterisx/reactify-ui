import { darken } from 'polished';
import {
  commonStyles,
  darkenBy,
} from '../../common';

export const styles = {
  container: {
    color: 'white',
    cursor: 'pointer',
    display: 'inline-flex',
    alignContent: 'center',
    alignItems: 'center',
    padding: '0.2em 0.4em',
    borderRadius: '2px',
    justifyContent: 'space-between',
    transitionDuration: '0.3s',
    userSelect: 'none',
  },
  margin: {
    left: {
      marginLeft: '0.2em',
    },
    right: {
      marginRight: '0.2em',
    },
  },

  getClearThemedStyle: ({
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
    bordered,
  }) => ({
    backgroundColor: 'transparent',
    ...(commonStyles.get.font.color.ofTheme({
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
    border: bordered ? '2px solid' : undefined,
    borderColor: bordered ? commonStyles.get.theme.color({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    }) : undefined,
    '@media (hover: hover)': {
      ':hover': {
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
      },
    },
  }),

  getBackgroundColorStyle: ({
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

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getFontSizeStyle: commonStyles.get.font.size,

  getDisabledStyle: commonStyles.get.disabled.style,
};
