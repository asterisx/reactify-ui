import { Children } from 'react';
import { keyframes } from '@emotion/core';

export const borderRadius = 4;
export const gutter = 8;
export const toastWidth = 360;
export const shrink = keyframes`from { height: 100%; } to { height: 0% }`;

export const styles = {
  toastContainer: ({
    children,
  }) => ({
    boxSizing: 'border-box',
    maxHeight: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    padding: gutter,
    pointerEvents: Children.count(children) ? 'auto' : 'none',
    position: 'fixed',
  }),
  toastStyle: ({ transitionDuration }) => ({
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.175)',
    display: 'flex',
    marginBottom: gutter,
    transition: `transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1)`,
    maxWidth: toastWidth,
    width: 'auto',
  }),
  getPlacements: ({
    topLeft,
    topCenter,
    topRight,
    bottomLeft,
    bottomCenter,
    bottomRight,
  }) => {
    if (topLeft) return { top: 0, left: 0 };
    if (topCenter) return { top: 0, left: '50%', transform: 'translateX(-50%)' };
    if (bottomLeft) return { bottom: 0, left: 0 };
    if (bottomCenter) return { bottom: 0, left: '50%', transform: 'translateX(-50%)' };
    if (bottomRight) return { bottom: 0, right: 0 };
    if (topRight) return { top: 0, right: 0 };
    return null;
  },
  getTranslate: ({
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
  },
  toastStates: (placement, transitionState) => ({
    entering: { transform: styles.getTranslate(placement) },
    entered: { transform: 'translate3d(0,0,0)' },
    exiting: { transform: styles.getTranslate(placement) },
    exited: { transform: styles.getTranslate(placement) },
  }[transitionState]),
  getStateDivStyle: ({
    topLeft,
    topCenter,
    topRight,
    bottomLeft,
    bottomCenter,
    bottomRight,
    transitionState,
  }) => {
    const statesStyles = styles.toastStates({
      topLeft,
      topCenter,
      topRight,
      bottomLeft,
      bottomCenter,
      bottomRight,
    }, transitionState);
    return statesStyles;
  },
};
