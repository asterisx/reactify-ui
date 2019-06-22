import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spClock = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

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
    border: `1px ${color} solid`,
    borderRadius: '50%',
    position: 'relative',
    height: '2em',
    width: '2em',

    '&:before': {
      content: '""',
      borderLeft: `0.0625em ${color} solid`,
      position: 'absolute',
      top: '0.125em',
      width: '0.2em',
      left: '50%',
      height: 'calc(50% - 0.0625em)',
      transform: 'rotate(0deg)',
      transformOrigin: '0% 100%',
      animation: `${spClock} ${animationDuration} infinite linear`,
    },
  }),
};
