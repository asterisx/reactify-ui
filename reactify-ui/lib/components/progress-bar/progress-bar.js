import React from 'react';
import PropTypes from 'prop-types';
import {
  defaultThemePropTypes,
  themePropTypes,
  defaultSizePropTypes,
  sizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

const ProgressBar = ({
  percentage,
  children,
  striped,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  small,
  medium,
  large,
  textLeft,
  textRight,
  textCenter,
  ...otherProps
}) => (
  <div
    css={[
      styles.progressContainer,
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
    ]}
    {...otherProps}
  >
    <div
      css={[
        styles.progress,
        styles.getBackgroundStyle({
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
        styles.getFontColorStyle({
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
        styles.animation,
        striped && styles.striped,
      ]}
      style={{ ...styles.getWidth({ percentage }) }}
      className={BEMClassNames.progress}
    >
      <span
        css={[
          styles.text,
          textLeft && styles.textLeft,
          textRight && styles.textRight,
          textCenter && styles.textCenter,
        ]}
      >
        {children}
      </span>
    </div>
  </div>
);

ProgressBar.propTypes = {
  /**
   * If 'true', the text is left inside the progress bar
   * Default value is 'true'
   */
  textLeft: PropTypes.bool,
  /**
   * If 'true', the text is right inside the progress bar
   * Default value is 'false'
   */
  textRight: PropTypes.bool,
  /**
   * If 'true', the text is center inside the progress bar
   * Default value is 'false'
   */
  textCenter: PropTypes.bool,
  /**
   * If 'true', stripes are shown
   * Default value is 'false'
   */
  striped: PropTypes.bool,
  /**
   * Required
   * The current progress bar value
   */
  percentage(props, propName, componentName) {
    const percentage = props[propName];

    if (percentage === undefined) {
      return new Error(`Percentage is a required prop in ${componentName}`);
    }

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(percentage)) {
      return new Error(`Percentage must be a number in ${componentName}`);
    }

    return percentage >= 0 && percentage <= 100 ? null : new Error(`Percentage must be between 0 to 100 in ${componentName}`);
  },
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
};

ProgressBar.defaultProps = {
  textLeft: true,
  textRight: false,
  textCenter: false,
  striped: false,
  ...defaultSizePropTypes,
  ...defaultThemePropTypes,
};

export default ProgressBar;
