import React, { Component } from 'react';
import { SubMenu } from './components';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

class ContextMenu extends Component {
  static propTypes = {
    /**
     * A collection of valid theme types, all boolean values
     * This is drilled directly to SubMenu 'as is'
     */
    ...themePropTypes,
    /**
     * A collection of valid size types, all boolean values
     * This is drilled directly to SubMenu 'as is'
     */
    ...sizePropTypes,
  }

  static defaultProps = {
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
  }

  state = { showMenu: false, left: 0, top: 0 };

  containerRef = React.createRef();

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown);
  }

  showMenu = (x, y) => {
    const containerRect = this.containerRef.current.getBoundingClientRect();
    this.setState({ showMenu: true, left: x - containerRect.left, top: y - containerRect.top });
  };

  hideMenu = () => {
    this.setState({ showMenu: false });
  };

  onContextMenu = (e) => {
    e.preventDefault();
    this.showMenu(e.clientX, e.clientY);
    document.addEventListener('mousedown', this.onMouseDown, false);
  };

  onMouseDown = () => {
    this.hideMenu();
    document.removeEventListener('mousedown', this.onMouseDown);
  };


  render() {
    const {
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
      small,
      medium,
      large,
      ...otherProps
    } = this.props;
    const { onContextMenu, containerRef } = this;
    const { showMenu, top, left } = this.state;

    const childrenArray = React.Children.toArray(children);

    /* If 'items' is passed, submenu is to be programatically created
     */
    const subMenu = items ? (
      <SubMenu
        primary={primary}
        secondary={secondary}
        dark={dark}
        light={light}
        info={info}
        warning={warning}
        danger={danger}
        success={success}
        theme={theme}
        small={small}
        medium={medium}
        large={large}
        items={items}
        isBaseMenu
        css={[
          styles.position({ left, top }),
          styles.getFontSizeStyle({
            small,
            medium,
            large,
          }),
        ]}
      />
    ) : (() => {
      const childSubMenu = childrenArray.find(child => child && child.type === SubMenu);
      if (childSubMenu) {
        return (
          <SubMenu
            {...childSubMenu.props}
            css={[
              styles.position({ left, top }),
              styles.getFontSizeStyle({
                small,
                medium,
                large,
              }),
            ]}
          />
        );
      }
      return undefined;
    })();


    /* If 'items' is passed, children does (should) not contain any SubMenu component,
     else otherwise
     */
    const nonSubMenuChildren = items
      ? children
      : childrenArray.filter(child => child && child.type !== SubMenu);

    return (
      <div
        ref={containerRef}
        onContextMenu={onContextMenu}
        css={[styles.container]}
        {...otherProps}
      >
        {nonSubMenuChildren}
        {showMenu && subMenu}
      </div>
    );
  }
}

export default ContextMenu;
