/* eslint-disable no-underscore-dangle */
import { css } from '@emotion/core';

const disabledStyle = {
  cursor: 'not-allowed',
  pointerEvents: 'none',
  opacity: '0.6 !important',
  '&:hover': {
    pointerEvents: ' none !important',
  },
};

const sizes = {
  small: {
    fontSize: '0.5em',
  },
  medium: {
    fontSize: '1em',
  },
  large: {
    fontSize: '1.5em',
  },
};

const hidden = {
  display: 'none !important',
};

const zdIndex = {
  z1: {
    zIndex: '1',
  },
  z10: {
    zIndex: '10',
  },
  z11: {
    zIndex: '11',
  },
  z100: {
    zIndex: '100',
  },
  z101: {
    zIndex: '101',
  },
  z1000: {
    zIndex: '1000',
  },
  z1001: {
    zIndex: '1001',
  },
  z10000: {
    zIndex: '10000',
  },
  z10001: {
    zIndex: '10001',
  },
  z100000: {
    zIndex: '100000',
  },
  z100001: {
    zIndex: '100001',
  },
};

const get = {
  font: {
    color: {
      forTheme: ({
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
        color: get.theme.fontColor({
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
      ofTheme: ({
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
        color: get.theme.color({
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
    },
    size: ({
      small,
      medium,
      large,
      defaultSize = 'medium',
    }) => {
      const sizeObject = { small, medium, large };
      delete sizeObject[defaultSize];
      return Object.entries(sizeObject).reduce(
        (sizeStyle, [key, isTrue]) => (
          isTrue ? sizes[key] : sizeStyle
        ), sizes[defaultSize],
      );
    },
  },
  backgroundColor: {
    forTheme: ({
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
      backgroundColor: get.theme.color({
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
  },
  disabled: {
    style: ({ disabled }) => (disabled ? disabledStyle : undefined),
  },
  theme: {
    color: ({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    }) => Object.entries({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
    }).reduce((color, [key, isTrue]) => (isTrue ? theme[key].color : color), undefined),
    fontColor: ({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    }) => Object.entries({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
    }).reduce((color, [key, isTrue]) => (isTrue ? theme[key].fontColor : color), undefined),
  },
  rotating: css`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
  `,
};

export const commonStyles = {
  disabledStyle,
  hidden,
  zdIndex,
  get,
  sizes,
};
