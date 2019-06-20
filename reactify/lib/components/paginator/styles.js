import { css } from '@emotion/core';
import {
  commonStyles,
  libraryName,
  screenSizes,
} from '../../common';

const componentName = 'paginator';

export const BEMClassNames = {
  container: `${libraryName}-${componentName}__middle`,
};

export const styles = {
  container: {
    display: 'inline-flex',
    userSelect: 'none',
  },

  justifySelfFlexStart: {
    justifySelf: 'flex-start',
  },

  justifySelfFlexCenter: {
    justifySelf: 'center',
  },

  justifySelfFlexEnd: {
    justifySelf: 'flex-end',
  },

  middle: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: '3px',
    paddingRight: '3px',
  },

  input: {
    width: '20%',
    marginLeft: '5px',
    marginRight: '5px',
  },

  alignItemCenter: {
    display: 'flex',
    alignItems: 'center',
  },

  justifyContentCenter: {
    justifyContent: 'center',
  },

  paddingLeft: {
    paddingLeft: '5px',
  },

  flexColumnDirectionOn: {
    breakpoint: {
      sm: css`
       @media (max-width: ${screenSizes.screenSm}) {
          flex-direction: column;
        }
      `,
      md: css`
       @media (max-width: ${screenSizes.screenMd}) {
          flex-direction: column;
        }
      `,
      lg: css`
       @media (max-width: ${screenSizes.screenLg}) {
          flex-direction: column;
        }
      `,
      xl: css`
        @media (max-width: ${screenSizes.screenXl}) {
          flex-direction: column;
        }
      `,
    },
  },

  getBackgroundStyle: commonStyles.get.backgroundColor.forTheme,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
