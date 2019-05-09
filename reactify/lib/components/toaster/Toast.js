// @flow

import React from 'react';
import { keyframes } from '@emotion/core';

export const borderRadius = 4;
export const gutter = 8;
export const toastWidth = 360;
export const shrink = keyframes`from { height: 100%; } to { height: 0% }`;

const getTranslate = ({
  topLeft,
  topCenter,
  topRight,
  bottomLeft,
  bottomCenter,
  bottomRight,
}) => {
  // const relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1];
  const translateMap = {
    right: 'translate3d(120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'translate3d(0, 120%, 0)',
    top: 'translate3d(0, -120%, 0)',
  };
  if (topLeft) return translateMap.left;
  if (topCenter) return translateMap.top;
  if (bottomCenter) return translateMap.bottom;
  if (bottomLeft) return translateMap.left;
  if (bottomRight) return translateMap.right;
  if (topRight) return translateMap.right;
  return null;
};

const toastStates = (placement, transitionState) => ({
  entering: { transform: getTranslate(placement) },
  entered: { transform: 'translate3d(0,0,0)' },
  exiting: { transform: getTranslate(placement) },
  exited: { transform: getTranslate(placement) },
}[transitionState]);

const getStateDivStyle = ({
  topLeft,
  topCenter,
  topRight,
  bottomLeft,
  bottomCenter,
  bottomRight,
  transitionState,
}) => {
  const statesStyles = toastStates({
    topLeft,
    topCenter,
    topRight,
    bottomLeft,
    bottomCenter,
    bottomRight,
  }, transitionState);
  return statesStyles;
};

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
  autoDismissTimeout,
  isRunning,
}) => (
  <div
    css={[
      {
        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.175)',
        display: 'flex',
        marginBottom: gutter,
        transition: `transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1)`,
        maxWidth: toastWidth,
        width: 'auto',
      },
      getStateDivStyle({
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
