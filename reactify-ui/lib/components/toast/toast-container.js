import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
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

ToastContainer.propTypes = {
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
};
