import { darken } from 'polished';
import {
  commonStyles,
  darkenBy,
  libraryName,
} from '../../../../common';

const componentName = 'sub-menu-item';

export const BEMClassNames = {
  container: `${libraryName}-${componentName}__container`,
};

export const styles = {
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    margin: 0,
    position: 'relative',
    whiteSpace: 'nowrap',
    padding: '5px 10px',
    '> ul': {
      left: '99%',
      top: '.5em',
    },
  },
  icon: {
    marginRight: '0.2em',
  },

  marginLeftAuto: {
    marginLeft: 'auto',
  },

  getItemThemedStyle: ({
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

  getDisabledStyle: commonStyles.get.disabled.style,
};
