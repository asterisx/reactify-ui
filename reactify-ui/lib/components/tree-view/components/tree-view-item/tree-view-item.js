
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import {
  defaultThemePropTypes,
  themePropTypes,
} from '../../../../common';
import { TreeView } from '../..';
import { styles } from './styles';
import { styles as TreeViewStyles } from '../../styles';

class TreeViewItem extends Component {
  static propTypes = {
    /**
     * This icon is shown when the sub tree is closed for the node
     */
    // eslint-disable-next-line react/forbid-prop-types
    closeIcon: PropTypes.any,
    /**
     * This icon is shown when the sub tree is open for the node
     */
    // eslint-disable-next-line react/forbid-prop-types
    openIcon: PropTypes.any,
    /**
     * The text value itself
     */
    text: PropTypes.string,
    /**
     * If passed, this is all that goes inside the menu item,
     * text, icon and drop down icon are not shown/ ignored
     */
    // eslint-disable-next-line react/forbid-prop-types
    content: PropTypes.any,
    /**
     * An object of shape
     * openIcon: PropTypes.any,
     * closeIcon: PropTypes.any,
     * text: PropTypes.string,
     * content: PropTypes.any,
     * `Of same shape as sub`
     * sub: PropTypes.any,
     * disabled: PropTypes.bool,
     */
    // eslint-disable-next-line react/forbid-prop-types
    sub: PropTypes.any,
    /**
     * If 'true', the menu item is disabled,
     * Default is 'false'
     */
    disabled: PropTypes.bool,
    /**
     * A collection of valid theme types, all boolean values
     */
    ...themePropTypes,
  }

  static defaultProps = {
    text: '',
    disabled: false,
    content: undefined,
    sub: undefined,
    closeIcon: <FaAngleRight />,
    openIcon: <FaAngleDown />,
    ...defaultThemePropTypes,
  }

  state = { treeOpen: false };

  toggleTree = () => {
    this.setState(prevState => ({ treeOpen: !prevState.treeOpen }));
  };

  render() {
    const {
      children,
      closeIcon,
      openIcon,
      text,
      content,
      sub,
      disabled,
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
    } = this.props;
    const { treeOpen } = this.state;
    const { toggleTree } = this;
    const childrenArray = React.Children.toArray(children);

    /* If 'sub' is passed, subtree is to be programatically created
     */
    let subTree = sub ? (
      <TreeView
        items={sub}
      />
    ) : (
      childrenArray.find(child => child && child.type === TreeView)
    );

    subTree = subTree
      ? React.cloneElement(subTree,
        {
          css: [styles.positionLeft, TreeViewStyles.container],
          primary,
          secondary,
          dark,
          light,
          info,
          warning,
          danger,
          success,
          theme,
        }) : undefined;

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        css={[
          !content && styles.item,
        ]}
        {...otherProps}
      >
        {/* eslint-disable-next-line no-nested-ternary */}
        {content
          ? (typeof content === 'function' ? content({ isTreeOpen: treeOpen, toggleSubTree: toggleTree }) : content)
          : (
            <span css={[
              styles.dflexCenter,
            ]}
            >
              {subTree
                ? (
                  <span
                    onClick={(event) => { event.stopPropagation(); toggleTree(); }}
                    css={[
                      styles.icon,
                      styles.dflexCenter,
                      styles.getIconThemedStyle({
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
                    ]}
                  >
                    {treeOpen
                      ? openIcon : closeIcon}
                  </span>
                )
                : (
                  <span css={[
                    styles.placeHolder,
                  ]}
                  />
                )}
              {text}
            </span>
          )
        }
        {treeOpen && subTree}
      </li>
    );
  }
}

export default TreeViewItem;
