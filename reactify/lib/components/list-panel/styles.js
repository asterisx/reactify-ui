import { darken } from 'polished';
import { commonStyles, darkenBy } from '../../common';

export const styles = {
  container: {
    display: 'inline-block',
    borderRadius: '0.2em',
    color: 'white',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    transitionDuration: '0.3s',
  },
  bordered: {
    borderTop: '1px solid darkgray',
  },
  listItem: {
    paddingTop: '0.2em',
    paddingBottom: '0.2em',
    paddingLeft: '0.4em',
    paddingRight: '0.4em',
    cursor: 'pointer',
    color: 'white',
  },

  getFontSizeStyle: commonStyles.get.font.size,

  getBackgroundColorStyle: commonStyles.get.backgroundColor.forTheme,

  getListItemThemedStyle: ({
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
    '&:hover': {
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
  }),

  getListItemSelectedBackgroundColorStyle: ({
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
  }),

  getDisabledStyle: commonStyles.get.disabled.style,
};
