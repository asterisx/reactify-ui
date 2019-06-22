import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spVortex = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

const commonPesudoStyles = ({ animationDuration }) => ({
  content: '""',
  borderRadius: '50%',
  position: 'absolute',
  width: 'inherit',
  height: 'inherit',
  animation: `${spVortex} ${animationDuration} infinite linear`,
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
    border: `1px ${color} solid`,
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',

    '&:before': {
      ...commonPesudoStyles({ animationDuration }),
      borderTop: `0.5em ${color} solid`,
      top: '-0.25em',
      left: 'calc(-50% - 0.25em)',
      transformOrigin: 'right center',
    },

    '&:after': {
      ...commonPesudoStyles({ animationDuration }),
      borderBottom: `0.5em ${color} solid`,
      top: '0.25em',
      right: 'calc(-50% - 0.25em)',
      transformOrigin: 'left center',
    },
  }),
};
