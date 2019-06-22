import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spLoadBar = keyframes`
  from {
    background-position: 0px 0px;
  }
  to {
    background-position: -1em 0px;
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
    width: '2em',
    height: '1em',
    marginTop: '0.5em',
    border: `0.05em ${color} solid`,
    borderRadius: '0.125em',
    background: `linear-gradient(-60deg, transparent 0%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent)`,
    backgroundSize: '1em 1.7em',
    backgroundPosition: '0px 0px',
    animation: `${spLoadBar} ${animationDuration} infinite linear`,
  }),
};
