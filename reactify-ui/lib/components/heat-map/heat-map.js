import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
import {
  themePropTypes,
  defaultThemePropTypes,
} from '../../common';
import { styles } from './styles';

const HeatMap = ({
  items,
  children,
  baseColor,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  theme,
  disabled,
  onCellClick,
  ...otherProps
}) => {
  const flattenedValuesArray = items.reduce((acc, row) => acc.concat(row), []);
  /**
   * The below two values are useful in finding the darkest shade and the lightest shade
   */
  const maxValInItems = Math.max(...flattenedValuesArray);
  const minValInItems = Math.min(...flattenedValuesArray);

  const spread = maxValInItems - minValInItems;

  /**
   * If children is passed, use them
   * The component supports declaration style too.
   * <HeatMap>
   *    <HeatMap.Row>
   *        <HeatMap.Cell>
   *        .
   *        .
   *        .
   *        <HeatMap.Cell>
   *    <HeatMap.Row>
   * <HeatMap>
   */
  const rows = children || items.map((row, xIndex) => (
    <HeatMap.Row key={row.reduce((acc, curr) => `${acc}-${curr}`, '')}>
      {row.map((columnValue, yIndex) => (
        <HeatMap.Cell
            // eslint-disable-next-line react/no-array-index-key
          key={`${xIndex} - ${yIndex} - ${columnValue}`}
          onClick={() => {
            if (onCellClick) { onCellClick({ row: xIndex, column: yIndex }); }
          }}
          style={{
            background: `${styles.getBackgroundColor({
              baseColor,
              primary,
              secondary,
              dark,
              light,
              info,
              warning,
              danger,
              success,
              theme: merge(defaultThemePropTypes.theme, theme),
              opacity: (+columnValue - minValInItems) / spread,
            })}`,
          }}
          disabled={disabled}
        >
          {columnValue}
        </HeatMap.Cell>
      ))}
    </HeatMap.Row>
  ));

  return (
    <div
      css={[
        styles.container,
      ]}
      {...otherProps}
    >
      {rows}
    </div>
  );
};


HeatMap.Row = ({
  children,
  ...otherProps
}) => (
  <div
    css={[
      styles.row,
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

HeatMap.Cell = ({
  children,
  disabled,
  ...otherProps
}) => (
  <span
    css={[
      styles.cell,
      disabled && styles.noPointerEvents,
    ]}
    {...otherProps}
  >
    {children}
  </span>
);

HeatMap.Cell.displayName = 'Cell';

HeatMap.Cell.propTypes = {
  /**
   * If 'true', no pointer events
   * Default is 'false'
   */
  disabled: PropTypes.bool,
};

HeatMap.Cell.defaultProps = {
  disabled: false,
};

HeatMap.propTypes = {
  /**
   * The dataset itself,
   * This is a multdimensional array of numbers.
   * You can also pass `undefined` and that cell
   * will be there but won't show anything.
   */
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  /**
   * The baseColor acts as a base for cell background colors,
   * The maximum value in the items has the baseColor,
   * The least value has no background color
   * All other cells get a compound ratio of `alpha` applied to the baseColor
   * depending on their item value
   */
  baseColor: PropTypes.string,
  /**
   * Callback fired when a cell is clicked
   * @param {number} row This is the row number
   * @param {number} column This is the column number
   */
  onCellClick: PropTypes.func,
  /**
   * If 'true', no pointer events on Cells
   * Default is 'false'
   */
  disabled: PropTypes.bool,
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
};

HeatMap.defaultProps = {
  items: [],
  baseColor: undefined,
  onCellClick: undefined,
  disabled: false,
  ...defaultThemePropTypes,
};

export default withTheme(HeatMap);
