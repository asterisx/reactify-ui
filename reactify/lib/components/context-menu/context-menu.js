import React, { Component } from 'react';
import SubMenu from './components';
import {
  defaultThemePropTypes,
  themePropTypes,
} from '../../common';
import { styles } from './styles';

class ContextMenu extends Component {
  static propTypes = {
    /**
     * A collection of valid theme types, all boolean values
     * This is drilled directly to ListPanel.Item 'as is'
     */
    ...themePropTypes,
  }

  static defaultProps = {
    ...defaultThemePropTypes,
  }

  state = { menuShow: false, left: 0, top: 0 };

  containerRef = React.createRef();

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown);
  }

  showMenu = (x, y) => {
    const containerRect = this.containerRef.current.getBoundingClientRect();
    this.setState({ menuShow: true, left: x - containerRect.left, top: y - containerRect.top });
  };

  hideMenu = () => {
    this.setState({ menuShow: false });
  };

  onContextMenu = (e) => {
    e.preventDefault();
    this.showMenu(e.pageX, e.pageY);
    document.addEventListener('mousedown', this.onMouseDown, false);
  };

  onMouseDown = () => {
    this.hideMenu();
    document.removeEventListener('mousedown', this.onMouseDown);
  };


  render() {
    const { items, children, ...otherProps } = this.props;
    const { onContextMenu, containerRef } = this;
    const { menuShow, top, left } = this.state;

    const childrenArray = React.Children.toArray(children);

    /* If 'items' is passed, submenu is to be programatically created
     */
    const subMenu = items ? (
      <SubMenu items={items} css={[styles.position({ left, top })]} />
    ) : (
      childrenArray.filter(child => child && child.type === SubMenu)
    );

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
        {...otherProps}
      >
        {nonSubMenuChildren}
        {menuShow && subMenu}
      </div>
    );
  }
}

export default ContextMenu;
