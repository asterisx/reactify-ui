import React from 'react';
import PropTypes from 'prop-types';
import { styles, BEMClassNames } from './styles';
import { defaultThemePropTypes, themePropTypes } from '../../common';

const Legend = ({
  children,
  className,
  horizontal,
  vertical,
  ...otherProps
}) => (
  <div
    css={[
      horizontal && styles.container.horizontal,
      vertical && styles.container.vertical,
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

const LegendItem = ({
  children,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  label,
  iconColor,
  ...otherProps
}) => (
  <div
    css={[
      styles.item.container,
    ]}
    {...otherProps}
  >
    <span
      css={[
        styles.item.icon,
        styles.item.getThemeBackgroundStyle({
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
      ]}
      style={{ backgroundColor: iconColor }}
      className={BEMClassNames.legendItem.icon}
    />
    {children}
  </div>
);

Legend.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};

Legend.defaultProps = {
  horizontal: true,
  vertical: false,
};

LegendItem.propTypes = {
  label: PropTypes.string,
  iconColor: PropTypes.string,
  ...themePropTypes,
};

LegendItem.defaultProps = {
  label: undefined,
  iconColor: undefined,
  ...defaultThemePropTypes,
};

export {
  Legend,
  LegendItem,
};
