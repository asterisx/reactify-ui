// @flow

import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { styles } from './styles';

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
    css={[
      styles.toastContainer({
        children,
      }),
      styles.getPlacements({
        topLeft,
        topCenter,
        topRight,
        bottomLeft,
        bottomCenter,
        bottomRight,
      }),
    ]}
  >
    <TransitionGroup component={null}>{children}</TransitionGroup>
  </div>
);
