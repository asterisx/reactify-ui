import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spWaveAf = keyframes`
  from {
    transform: scale(0.5, 0.5);
    opacity: 0;
  }
  to {
    transform: scale(1, 1);
    opacity: 1;
  }
`;

const spWaveBe = keyframes`
  from {
    transform: scale(1, 1);
    opacity: 1;
  }
  to {
    transform: scale(1.5, 1.5);
    opacity: 0;
  }
`;

const commonPesudoStyles = ({ color }) => ({
  content: '""',
  border: `1px ${color} solid`,
  borderRadius: '50%',
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
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
    height: '2em',
    width: '2em',
    borderRadius: '50%',
    position: 'relative',
    opacity: 1,

    '&:before': {
      ...commonPesudoStyles({ color }),
      transform: 'scale(1, 1)',
      opacity: 1,
      animation: `${spWaveBe} ${animationDuration} infinite linear`,
    },

    '&:after': {
      ...commonPesudoStyles({ color }),
      transform: 'scale(0, 0)',
      opacity: 0,
      animation: `${spWaveAf} ${animationDuration} infinite linear`,
    },
  }),
};
