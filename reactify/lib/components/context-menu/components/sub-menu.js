import React, { Component } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { isWithinWindow } from '../../../common';
import { styles } from './styles';

class SubMenu extends Component {
  static Item = ({ icon, text, sub }) => (
    <li css={styles.item}>
      {icon}
      {text}
      {sub && (<FaAngleRight /> && <SubMenu items={sub} />)}
    </li>
  );

  state = { visible: false, left: 0, top: 0 };


  menuRef = React.createRef();

  componentDidMount() {
    setTimeout(() => {
      const [left, top] = this.getPos();
      this.setState({ visible: true, left, top });
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
    const { visible, left, top } = this.state;
    return (
      <div
        ref={menuRef}
        css={[styles.sub, styles.position(left, top), visible && styles.visible]}
        {...otherProps}
      >
        {children || items.map(item => <SubMenu.Item {...item} />)}
      </div>
    );
  }
}

export default SubMenu;
