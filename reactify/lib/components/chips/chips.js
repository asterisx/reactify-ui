import React from 'react';
import PropTypes from 'prop-types';
import { IoIosCloseCircle } from 'react-icons/io';
import { styles } from './styles';
import {
  defaultThemePropTypes,
  themePropTypes,
  defaultSizePropTypes,
  sizePropTypes,
} from '../../common';

const Chip = ({
  children,
  disabled,
  small,
  medium,
  large,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  onCloseClick,
  ...otherProps
}) => (
  <div
    css={[
      styles.chip,
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
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
      styles.getDisabledStyle({ disabled }),
    ]}
    {...otherProps}
  >
    <div
      css={[
        styles.content,
      ]}
    >
      {children}
      <IoIosCloseCircle
        css={[styles.svg({
          primary,
          secondary,
          dark,
          light,
          info,
          warning,
          danger,
          success,
          theme,
        })]}
        onClick={onCloseClick}
      />
    </div>
  </div>
);

Chip.propTypes = {
  /**
   * If 'true', the component is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
  /**
   * Callback fired when the close icons is clicked
   *
   * @param {object} event The event source for the callback.
   */
  onCloseClick: PropTypes.func,
};

Chip.defaultProps = {
  disabled: false,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  onCloseClick: undefined,
};

const Chips = ({
  children,
  disabled,
  ...otherProps
}) => (
  <div
    css={[
      styles.container,
      styles.getDisabledStyle({ disabled }),
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

Chips.propTypes = {
  /**
   * If 'true', the component is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
};

Chips.defaultProps = {
  disabled: false,
};

export {
  Chip,
  Chips,
};
