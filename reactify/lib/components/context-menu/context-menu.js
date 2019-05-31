import React, { Component } from 'react';
import SubMenu from './components';
import { styles } from './styles';

class ContextMenu extends Component {
  static Content = ({ children }) => children;

  state = { menuShow: false, left: 0, top: 0 };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown);
  }

  showMenu = (x, y) => {
    this.setState({ menuShow: true, left: x, top: y });
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
    const { onContextMenu } = this;
    const { menuShow, top, left } = this.state;

    const childrenArray = React.Children.toArray(children);

    /* If 'items' is passed, submenu is to be automatically generated
     */
    const subMenu = items ? (
      <SubMenu item={items} css={styles.position(top, left)} />
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
      <div onContextMenu={onContextMenu} {...otherProps}>
        {nonSubMenuChildren}
        {menuShow && subMenu}
      </div>
    );
  }
}

export default ContextMenu;
