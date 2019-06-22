import React from 'react';
import PropTypes from 'prop-types';

const Pane = ({
  children,
  eleRef,
  ...otherProps
}) => (
  <div
    ref={eleRef}
    {...otherProps}
  >
    {children}
  </div>
);

Pane.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  eleRef: PropTypes.object,
};

Pane.defaultProps = {
  eleRef: undefined,
};

export default Pane;
