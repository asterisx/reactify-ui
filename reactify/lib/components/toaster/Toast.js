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
    onMouseEnter={(event) => { if (pauseOnHover && onMouseEnter) onMouseEnter(event); }}
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
  topLeft: PropTypes.bool.isRequired,
  /**
       * If 'true', the Toast will be positioned top right
       * Defaults to 'false'
       */
  topRight: PropTypes.bool.isRequired,
  /**
       * If 'true', the tooltip will be positioned bottom left
       * Defaults to 'false'
       */
  bottomLeft: PropTypes.bool.isRequired,
  /**
       * If 'true', the Toast will be positioned bottom right
       * Defaults to 'false'
       */
  bottomRight: PropTypes.bool.isRequired,
  /**
       * If 'true', the Toast will be positioned bottom center
       * Defaults to 'false'
       */
  bottomCenter: PropTypes.bool.isRequired,
  /**
       * If 'true', the Toast will be positioned top center
       * Defaults to 'false'
       */
  topCenter: PropTypes.bool.isRequired,
  /**
   * The transition duration for the Toast transitions
   */
  transitionDuration: PropTypes.number.isRequired,
  /**
   * If 'true', the countdown is paused on hover
   * Defaults to 'false'
   */
  pauseOnHover: PropTypes.bool.isRequired,
  transitionState: PropTypes.oneOf(
    ['entering', 'entered', 'exiting', 'exited'],
  ).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

Toast.defaultProps = {
  onMouseEnter: undefined,
  onMouseLeave: undefined,
};
