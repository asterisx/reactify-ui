import { keyframes } from '@emotion/core';
import { rgba } from 'polished';
import { commonStyles } from '../../../../common';

const spSlices = ({ color }) => keyframes`
  0% {
    border-top: 0.5em ${rgba(color, 0.75)} solid;
    border-right: 0.5em ${rgba(color, 0.25)} solid;
    border-bottom: 0.5em ${rgba(color, 0.25)} solid;
    border-left: 0.5em ${rgba(color, 0.25)} solid;
  }
  25% {
    border-top: 0.5em ${rgba(color, 0.25)} solid;
    border-right: 0.5em ${rgba(color, 0.75)} solid;
    border-bottom: 0.5em ${rgba(color, 0.25)} solid;
    border-left: 0.5em ${rgba(color, 0.25)} solid;
  }
  50% {
    border-top: 0.5em ${rgba(color, 0.25)} solid;
    border-right: 0.5em ${rgba(color, 0.25)} solid;
    border-bottom: 0.5em ${rgba(color, 0.75)} solid;
    border-left: 0.5em ${rgba(color, 0.25)} solid;
  }
  75% {
    border-top: 0.5em ${rgba(color, 0.25)} solid;
    border-right: 0.5em ${rgba(color, 0.25)} solid;
    border-bottom: 0.5em ${rgba(color, 0.25)} solid;
    border-left: 0.5em ${rgba(color, 0.75)} solid;
  }
  100% {
    border-top: 0.5em ${rgba(color, 0.75)} solid;
    border-right: 0.5em ${rgba(color, 0.25)} solid;
    border-bottom: 0.5em ${rgba(color, 0.25)} solid;
    border-left: 0.5em ${rgba(color, 0.25)} solid;
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
    height: '2em',
    width: '2em',
    borderRadius: '50%',
    borderTop: `0.5em ${rgba(color, 0.75)} solid`,
    borderLeft: `0.5em ${rgba(color, 0.25)} solid`,
    borderBottom: `0.5em ${rgba(color, 0.25)} solid`,
    borderRight: `0.5em ${rgba(color, 0.25)} solid`,
    animation: `${spSlices({ color })} ${animationDuration} infinite linear`,
  }),
};
