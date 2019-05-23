import React from 'react';
import PropTypes from 'prop-types';
import { styles, BEMClassNames } from './styles';
import { defaultThemePropTypes, themePropTypes } from '../../common';

const Legend = ({
  children,
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
  /**
   * If 'true' the layout is horizontal
   * Default is 'true'
   */
  horizontal: PropTypes.bool,
  /**
   * If 'true' the layout is vertical
   * Default is 'false'
   */
  vertical: PropTypes.bool,
};

Legend.defaultProps = {
  horizontal: true,
  vertical: false,
};

LegendItem.propTypes = {
  /**
   * The label value string
   */
  label: PropTypes.string,
  /**
   * The color for the icon
   * Accepts any valid css color value
   */
  iconColor: PropTypes.string,
  /**
   * A collection of valid theme types, all boolean values
   */
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
