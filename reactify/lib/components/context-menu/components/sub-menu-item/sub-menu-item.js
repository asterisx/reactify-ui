import React, { Component } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import SubMenu from '../sub-menu';
import { styles } from './styles';

class Item extends Component {
  state = { showChild: true };

  showSub = () => {
    this.setState({ showChild: true });
  };

  hideSub = () => {
    this.setState({ showChild: true });
  };

  render() {
    const {
      icon, key, text, sub,
    } = this.props;
    const { showChild } = this.state;
    const { showSub, hideSub } = this;
    return (
      // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      <li
        key={key}
        css={styles.item}
        onMouseOver={showSub}
        onMouseOut={hideSub}
      >
        {icon}
        {text}
        {sub && (<FaAngleRight /> && (showChild && <SubMenu items={sub} />))}
      </li>
    );
  }
}

export default Item;
