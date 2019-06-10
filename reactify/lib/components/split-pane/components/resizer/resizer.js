import React from 'react';
import PropTypes from 'prop-types';
import {
  themePropTypes,
  defaultThemePropTypes,
  errorLogger,
} from '../../../../common';
import { errors } from '../../errors';
import { styles } from './styles';

const componentName = 'Resizer';

const Resizer = ({
  disabled,
  vertical,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  children,
  onMouseDown,
  ...otherProps
}) => {
  /**
   * If resize is passed it should have a render prop as children
   */
  if (children) {
    if (typeof children !== 'function') {
      errorLogger({ component: componentName, error: errors.nonFunctionChildrenInsideResizer });
      return null;
    }
    return children({ onMouseDown });
  }

  return (
    <span
      role="presentation"
      css={[
        styles.resizer,
        vertical && styles.verticalStyle,
        styles.getThemedStyle({
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
        styles.getDisabledStyle({ disabled }),
      ]}
      onTouchStart={onMouseDown}
      onMouseDown={onMouseDown}
      {...otherProps}
    />
  );
};


Resizer.propTypes = {
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * If 'true', the reszizing is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
  /**
   * If 'true' the split pane is in vertical mode
   * Defaults to 'false'
   */
  vertical: PropTypes.bool,
};

Resizer.defaultProps = {
  ...defaultThemePropTypes,
  disabled: false,
  vertical: false,
};

export default Resizer;
