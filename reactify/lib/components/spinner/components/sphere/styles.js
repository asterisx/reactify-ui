import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spSphere = ({ color }) => keyframes`
  0% {
    border-left: 0px ${color} solid;
    border-right: 0px ${color} solid;
  }
  33% {
    border-left: 2em ${color} solid;
    border-right: 0px ${color} solid;
  }
  34% {
    border-left: 0px ${color} solid;
    border-right: 2em ${color} solid;
  }
  66% {
    border-left: 0px ${color}solid;
    border-right: 0px ${color} solid;
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
    borderRadius: '50%',
    borderLeft: `0px ${color} solid`,
    borderRight: `0px ${color} solid`,
    animation: `${spSphere({ color })} ${animationDuration} infinite linear`,
  }),
};
