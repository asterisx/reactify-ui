// @flow

import React, { Children } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { gutter } from './Toast';

const getPlacements = ({
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
};

export const ToastContainer = ({
  children,
  topLeft,
  topCenter,
  topRight,
  bottomLeft,
  bottomCenter,
  bottomRight,
}) => (
  <div
    css={{
      boxSizing: 'border-box',
      maxHeight: '100%',
      overflowX: 'hidden',
      overflowY: 'hidden',
      padding: gutter,
      pointerEvents: Children.count(children) ? 'auto' : 'none',
      position: 'fixed',
      ...getPlacements({
        topLeft,
        topCenter,
        topRight,
        bottomLeft,
        bottomCenter,
        bottomRight,
      }),
    }}
  >
    <TransitionGroup component={null}>{children}</TransitionGroup>
  </div>
);
