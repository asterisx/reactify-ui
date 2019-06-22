import { keyframes } from '@emotion/core';
import { rgba } from 'polished';
import { commonStyles } from '../../../../common';

const spCircRot = keyframes`
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
    border: `1em ${rgba(color, 0.25)} solid`,
    borderTop: `1em ${rgba(color, 1)} solid`,
    borderRadius: '50%',
    animation: `${spCircRot} ${animationDuration} infinite linear`,
  }),
};
