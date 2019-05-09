import React from 'react';
import { styles } from './styles';

export const Toast = ({
  children,
  pauseOnHover,
  topLeft,
  topCenter,
  topRight,
  bottomLeft,
  bottomCenter,
  bottomRight,
  transitionDuration,
  transitionState,
  onMouseEnter,
  onMouseLeave,
  // TODO
  /* autoDismissTimeout,
  isRunning, */
}) => (
  <div
    css={[
      styles.toastStyle({ transitionDuration }),
      styles.getStateDivStyle({
        topLeft,
        topCenter,
        topRight,
        bottomLeft,
        bottomCenter,
        bottomRight,
        transitionState,
      }),
    ]}
    onMouseEnter={() => { if (pauseOnHover) onMouseEnter(); }}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);
