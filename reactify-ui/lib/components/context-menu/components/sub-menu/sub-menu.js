import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubMenuItem } from '..';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
  isWithinWindow,
} from '../../../../common';
import { styles, BEMClassNames } from './styles';

class SubMenu extends Component {
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
    isBaseMenu: PropTypes.bool,
  }

  static defaultProps = {
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    isBaseMenu: false,
  }

  state = { left: 0, top: 0 };

  menuRef = React.createRef();

  static getPos = ({
    left,
    top,
    width,
    height,
    parentWidth,
    small,
    medium,
    large,
    isBaseMenu,
    isInView,
  }) => {
    if (isInView(left, top, width, height)) {
      return [0, 0];
    }

    const topLeftPosTop = top - height;
    if (isInView(left, topLeftPosTop, width, height)) {
      return [0, -height];
    }

    /**
     * Defined how much each menu should overlap with parent menu
     * Values are in 'px' by nature of how its calculated in javascript
     * Refer to following usage of overlap
     */
    let overlap = 10;
    if (small) { overlap = 5; }
    if (medium) { overlap = 10; }
    if (large) { overlap = 15; }

    /**
     * If this is a base menu, it cannot be positioned relative to any parent
     * but itself
     */
    const posLeftOfParentMenu = -width - (isBaseMenu ? 0 : parentWidth);
    const leftPos = left + posLeftOfParentMenu;
    if (isInView(leftPos, top, width, height)) {
      return [posLeftOfParentMenu + overlap, 0];
    }

    const topRightPosTop = top - height;
    if (isInView(leftPos, topRightPosTop, width, height)) {
      return [posLeftOfParentMenu + overlap, -height];
    }

    return [0, 0];
  };

  componentDidMount() {
    const currentRefReact = this.menuRef.current.getBoundingClientRect();

    const { left, top } = currentRefReact;
    const { offsetWidth: width, offsetHeight: height } = this.menuRef.current;

    const { parentNode: parent } = this.menuRef.current;
    const { offsetWidth: parentWidth } = parent;

    const {
      small, medium, large, isBaseMenu,
    } = this.props;

    const [finalLeft, finalTop] = SubMenu.getPos({
      left,
      top,
      width,
      height,
      parentWidth,
      small,
      medium,
      large,
      isBaseMenu,
      isInView: isWithinWindow,
    });
    this.setState({ left: finalLeft, top: finalTop });
  }

  render() {
    const { menuRef } = this;
    const {
      items,
      isBaseMenu,
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
      className,
      ...otherProps
    } = this.props;
    const { left, top } = this.state;
    return (
      <ul
        ref={menuRef}
        css={[styles.sub, styles.position({ left, top })]}
        className={`${className || ''} ${BEMClassNames.container}`}
        {...otherProps}
      >
        {children || (items && items.length && items.map(item => (
          <SubMenuItem
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
  }
}

export default SubMenu;
