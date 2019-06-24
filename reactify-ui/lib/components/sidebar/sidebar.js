import React from 'react';
import PropTypes from 'prop-types';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import SidebarItem from './components/sidebar-item';
import { styles } from './styles';
import { styles as subSidebarStyles } from './components/sub-sidebar/styles';

const Sidebar = ({
  items,
  children,
  positionFull,
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
  disabled,
  ...otherProps
}) => (
  <ul
    css={[
      styles.container,
      subSidebarStyles.list,
      styles.overflowAuto,
      styles.positionRelative,
      styles.getFontSizeStyle({
        small,
        medium,
        large,
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
      styles.getDisabledStyle({
        disabled,
      }),
      styles.getBackgroundColorStyle({
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
    {...otherProps}
  >
    {children
      ? React.Children.map(children,
        child => (child.type !== SidebarItem ? child : React.cloneElement(child, {
          positionFull,
        }))) : (items && items.length && items.map(item => (
          <SidebarItem
            positionFull={positionFull}
            {...item}
          />
      )))}
  </ul>
);

Sidebar.propTypes = {
  /**
   * A collection of a array of shape
   * text: PropTypes.string,
   * content: PropTypes.any,
   * `Of same shape as items`
   * sub: PropTypes.any,
   * disabled: PropTypes.bool,
   */
  // eslint-disable-next-line react/require-default-props
  items: PropTypes.arrayOf(PropTypes.any),
  /**
   * If 'true', the sub sidebar are position
   * absolutely and take up the whole space
   * This makes it possible to have a 'stack' like effect
   * Default is 'false'
   */
  positionFull: PropTypes.bool,
  /**
   * If 'true', component is disabled
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
};

Sidebar.defaultProps = {
  items: undefined,
  positionFull: false,
  disabled: false,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

export default Sidebar;
