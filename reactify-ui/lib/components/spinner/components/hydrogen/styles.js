import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spHydro = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

const commonPesudoStyles = ({ color }) => ({
  content: '""',
  position: 'absolute',
  width: '0.625em',
  height: '0.625em',
  backgroundColor: color,
  borderRadius: '50%',
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
    border: `0.05em ${color} solid`,
    borderRadius: '50%',
    position: 'relative',
    height: '2em',
    width: '2em',
    animation: `${spHydro} ${animationDuration} infinite linear`,

    '&:before': {
      ...commonPesudoStyles({ color }),
      top: 'calc(50% - 0.3125em)',
      left: 'calc(50% - 0.3125em)',
    },

    '&:after': {
      ...commonPesudoStyles({ color }),
      top: '67%',
      left: '-0.0625em',
    },
  }),
};
