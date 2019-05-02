/* eslint-disable no-underscore-dangle */
import { css } from '@emotion/core';
import { darken } from 'polished';
import { commonStyles, libraryName, darkenBy } from '../../common';

const componentName = 'user-profile';

export const BEMClassNames = {
  container: `${libraryName}-${componentName}__container`,
  children: `${libraryName}-${componentName}__children`,
  imgContainer: `${libraryName}-${componentName}__imgContainer`,
  img: `${libraryName}-${componentName}__img`,
  main: `${libraryName}-${componentName}__main`,
  infoContainer: `${libraryName}-${componentName}__infoContainer`,
  info: `${libraryName}-${componentName}__info`,
  icon: `${libraryName}-${componentName}__icon`,
};

const values = {
  screenSm: '576px',
  screenMd: '768px',
  screenLg: '992px',
  screenXl: '1200px',
};

export const styles = {
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    alignContent: 'center',
    transitionDuration: '0.5s',
    position: 'relative',
    cursor: 'pointer',
  },
  main: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    padding: '0.2em',
  },
  info: {
    paddingLeft: '0.2em',
    paddingRight: '0.2em',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    width: '2em',
    height: '2em',
    borderRadius: '2.4em',
    boxShadow: '0 0 1px #fff',
    overflow: 'hidden',
  },
  tray: {
    placement: {
      top: {
        position: 'absolute',
        right: '0px',
        bottom: '1.9em',
      },
      bottom: {
        position: 'absolute',
        right: '0px',
        top: '1.9em',
      },
    },
  },
  hide: {
    breakpoint: {
      sm: css`
       @media (max-width: ${values.screenSm}) {
            display: none;
        }
      `,
      md: css`
       @media (max-width: ${values.screenMd}) {
            display: none;
        }
      `,
      lg: css`
       @media (max-width: ${values.screenLg}) {
            display: none;
        }
      `,
      xl: css`
        @media (max-width: ${values.screenXl}) {
             display: none;
         }
       `,
    },
  },

  zdIndex: commonStyles.zdIndex,

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

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
