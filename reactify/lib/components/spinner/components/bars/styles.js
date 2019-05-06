import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spBars = keyframes`
  0% {
      transform: scale(1, 1);
  }
  25% {
      transform: scale(1, 1);
  }
  50% {
      transform: scale(1, 1.25);
  }
  75% {
      transform: scale(1, 1);
  }
  100% {
      transform: scale(1, 1);
  }
`;

const spBarsBefore = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1.25);
  }
  50% {
    transform: scale(1, 0.75);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const spBarsAfter = keyframes`
  0% {
      transform: scale(1, 1);
  }
  25% {
      transform: scale(1, 1);
  }
  50% {
      transform: scale(1, 0.75);
  }
  75% {
      transform: scale(1, 1.25);
  }
  100% {
      transform: scale(1, 1);
  }
`;

const commonPseudoStyle = ({
  content: '""',
  position: 'absolute',
  width: 'inherit',
  height: 'inherit',
  border: 'inherit',
  backgroundColor: 'inherit',
  top: '-1px',
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
    display: 'inline-block',
    position: 'relative',
    width: '.6125em',
    height: '1.5em',
    left: '1em',
    border: `1px ${color} solid`,
    backgroundColor: `${color}`,
    opacity: 0.85,
    animation: `${spBars} ${animationDuration} infinite linear`,

    '&:before': {
      ...commonPseudoStyle,
      left: '-1em',
      animation: `${spBarsBefore} ${animationDuration} infinite linear`,
    },
    '&:after': {
      ...commonPseudoStyle,
      right: '-1em',
      animation: `${spBarsAfter} ${animationDuration} infinite linear`,
    },
  }),
};
