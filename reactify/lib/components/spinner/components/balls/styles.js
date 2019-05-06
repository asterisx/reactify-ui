import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spScaleAlpha = keyframes`
  0% {
    opacity: 1;
  }
  33% {
    opacity: 0.25;
  }
  66% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
`;

const spScaleAlphaBefore = keyframes`
  0% {
    opacity: 0.25;
  }
  33% {
    opacity: 1;
  }
  66% {
    opacity: 0.25;
  }
`;

const spScaleAlphaAfter = keyframes`
  33% {
    opacity: 0.25;
  }
  66% {
    opacity: 1;
  }
  100% {
    opacity: 0.25;
  }
`;

const commonPseudoStyle = ({
  borderRadius: '50%',
  backgroundColor: 'inherit',
  width: '1em',
  height: '1em',
  transformOrigin: 'center center',
  display: 'inline-block',
  content: '""',
  position: 'relative',
  opacity: '0.25',
});

export const styles = {
  getContainerStyle: ({
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
    animationDuration,
    color = commonStyles.get.theme.color({
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
  }) => ({
    borderRadius: '50%',
    backgroundColor: color,
    width: '1em',
    height: '1em',
    top: '1em',
    marginLeft: '1.5em',
    transformOrigin: 'center center',
    display: 'inline-block',
    position: 'relative',
    opacity: 1,
    animation: `${spScaleAlpha} ${animationDuration} infinite linear`,
    transform: 'rotate(-90deg)',

    '&:before': {
      ...commonPseudoStyle,
      top: '-1.5em',
      animation: `${spScaleAlphaBefore} ${animationDuration} infinite linear`,
    },
    '&:after': {
      ...commonPseudoStyle,
      animation: `${spScaleAlphaAfter} ${animationDuration} infinite linear`,
    },
  }),
};
