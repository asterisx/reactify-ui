import React from 'react';
import PropTypes from 'prop-types';
import {
  defaultThemePropTypes,
  themePropTypes,
} from '../../common';
import TreeViewItem from './components/tree-view-item';
import { styles } from './styles';

const TreeView = ({
  items,
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
  ...otherProps
}) => (
  <ul
    css={[styles.container]}
    {...otherProps}
  >
    {children || (items && items.length && items.map(item => (
      <TreeViewItem
        primary={primary}
        secondary={secondary}
        dark={dark}
        light={light}
        info={info}
        warning={warning}
        danger={danger}
        success={success}
        theme={theme}
        {...item}
      />
    )))}
  </ul>
);

TreeView.propTypes = {
  /**
   * A collection of a array of shape
   * openIcon: PropTypes.any,
   * closeIcon: PropTypes.any,
   * text: PropTypes.string,
   * content: PropTypes.any,
   * `Of same shape as items`
   * sub: PropTypes.any,
   * disabled: PropTypes.bool,
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    openIcon: PropTypes.any,
    closeIcon: PropTypes.any,
    text: PropTypes.string,
    content: PropTypes.any,
    sub: PropTypes.any,
    disabled: PropTypes.bool,
  })),
  /**
   * A collection of valid theme types, all boolean values
   * This is drilled directly to SubMenu 'as is'
   */
  ...themePropTypes,
};

TreeView.defaultProps = {
  items: undefined,
  ...defaultThemePropTypes,
};

export default TreeView;
