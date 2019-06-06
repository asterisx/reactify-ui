import React, { Component } from 'react';
import Item from '../sub-menu-item';
import { isWithinWindow } from '../../../../common';
import { styles } from './styles';

class SubMenu extends Component {
  state = { left: 0, top: 0 };

  menuRef = React.createRef();

  componentDidMount() {
    setTimeout(() => {
      const [left, top] = this.getPos();
      this.setState({ left, top });
    }, 0);
  }


  getPos = () => {
    const currentRefReact = this.menuRef.current.getBoundingClientRect();

    const { left, top } = currentRefReact;
    const { height, width } = currentRefReact;

    if (isWithinWindow(left, top, width, height)) return [0, 0];

    const topLeftPosTop = top - height;
    if (isWithinWindow(left, topLeftPosTop, width, height)) {
      return [0, -height];
    }

    const { parentNode: parent } = this.menuRef.current;

    const { offsetWidth: parentWidth } = parent;

    const bottomRightPosLeft = left - width - parentWidth;
    if (isWithinWindow(bottomRightPosLeft, top, width, height)) {
      return [-width, 0];
    }

    const bottomLeftPosTop = top - height;
    if (isWithinWindow(left, bottomLeftPosTop, width, height)) {
      return [0, -height];
    }

    const topRightPosTop = top - height;
    const topRightPosLeft = left - width - parentWidth;
    if (isWithinWindow(topRightPosLeft, topRightPosTop, width, height)) {
      return [-width, -height];
    }

    return [0, 0];
  };


  render() {
    const { menuRef } = this;
    const { items, children, ...otherProps } = this.props;
    const { left, top } = this.state;
    return (
      <ul
        ref={menuRef}
        css={[styles.sub, styles.position({ left, top })]}
        {...otherProps}
      >
        {children || items.map(item => <Item {...item} />)}
      </ul>
    );
  }
}

export default SubMenu;
