import { keyframes } from '@emotion/core';
import { commonStyles } from '../../../../common';

const spVolRot = keyframes`
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
    backgroundColor: color,
    borderRadius: '50%',
    position: 'relative',
    width: '2em',
    height: '2em',
    animation: `${spVolRot} ${animationDuration} infinite linear`,

    '&:after': {
      content: '""',
      borderRadius: '50%',
      position: 'absolute',
      display: 'block',
      width: '0.6250em',
      height: '0.6250em',
      left: '0.15625em',
      top: '0.15625em',
      backgroundColor: 'white',
    },
  }),
};
