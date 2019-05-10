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
  ...themePropTypes,
  ...sizePropTypes,
  disabled: PropTypes.bool,
  onCloseClick: PropTypes.func,
};

Chip.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  disabled: false,
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
  disabled: PropTypes.bool,
};

Chips.defaultProps = {
  disabled: false,
};

export {
  Chip,
  Chips,
};
