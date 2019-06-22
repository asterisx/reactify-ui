import React from 'react';
import PropTypes from 'prop-types';
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
    onMouseEnter={pauseOnHover ? onMouseEnter : undefined}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);

Toast.propTypes = {
  /**
     * If 'true', the Toast will be positioned top left
     * Defaults to 'true'
     */
  topLeft: PropTypes.bool,
  /**
       * If 'true', the Toast will be positioned top right
       * Defaults to 'false'
       */
  topRight: PropTypes.bool,
  /**
       * If 'true', the tooltip will be positioned bottom left
       * Defaults to 'false'
       */
  bottomLeft: PropTypes.bool,
  /**
       * If 'true', the Toast will be positioned bottom right
       * Defaults to 'false'
       */
  bottomRight: PropTypes.bool,
  /**
       * If 'true', the Toast will be positioned bottom center
       * Defaults to 'false'
       */
  bottomCenter: PropTypes.bool,
  /**
       * If 'true', the Toast will be positioned top center
       * Defaults to 'false'
       */
  topCenter: PropTypes.bool,
  /**
   * The transition duration for the Toast transitions
   */
  transitionDuration: PropTypes.number,
  /**
   * If 'true', the countdown is paused on hover
   * Defaults to 'false'
   */
  pauseOnHover: PropTypes.bool.isRequired,
  transitionState: PropTypes.oneOf(
    ['entering', 'entered', 'exiting', 'exited'],
  ),
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

Toast.defaultProps = {
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  topLeft: false,
  topCenter: false,
  topRight: true,
  bottomLeft: false,
  bottomCenter: false,
  bottomRight: false,
  transitionDuration: 220,
  transitionState: 'entering',
};
