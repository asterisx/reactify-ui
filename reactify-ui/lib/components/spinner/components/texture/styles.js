import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spTexture = keyframes`
  from {
    background-position: 0px 0px;
  } 
  to {
    background-position: -0.5em 0px;
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
    height: '2em',
    border: `0.05em ${color} solid`,
    borderRadius: '0.125em',
    position: 'relative',
    background: `linear-gradient(45deg, transparent 49%, ${color} 50%, ${color} 50%, transparent 51%, transparent),
    linear-gradient(-45deg, transparent 49%, ${color} 50%, ${color} 50%, transparent 51%, transparent)`,
    backgroundSize: '0.5em 0.5em',
    backgroundPosition: '0% 0%',
    animation: `${spTexture} ${animationDuration} infinite linear`,
  }),
};
