import { darken } from 'polished';
import { commonStyles, darkenBy, libraryName } from '../../common';

const componentName = 'accordion';

export const BEMClassNames = {
  icon: `${libraryName}-${componentName}__icon`,
};


export const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    paddingTop: '1.2em',
    paddingBottom: '1.2em',
    paddingLeft: '0.8em',
    paddingRight: '0.8em',
    color: '#444',
    userSelect: 'none',
    backgroundColor: '#eee',
    ':hover': {
      backgroundColor: '#ccc',
    },
  },
  body: {
    padding: '10px',
  },

  getDisabledStyle: commonStyles.get.disabled.style,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getBackgroundStyle: ({
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
};
