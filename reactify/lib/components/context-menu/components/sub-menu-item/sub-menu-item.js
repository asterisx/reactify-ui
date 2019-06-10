import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaAngleRight } from 'react-icons/fa';
import {
  defaultThemePropTypes,
  themePropTypes,
} from '../../../../common';
import { SubMenu } from '..';
import { styles } from './styles';

class SubMenuItem extends Component {
  static propTypes = {
    /**
     * `Optional` An optional icon to show
     */
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.any,
    text: PropTypes.string,
    /**
     * If passed, this is all that goes inside the menu item,
     * text, icon and drop down icon are not shown/ ignored
     */
    // eslint-disable-next-line react/forbid-prop-types
    content: PropTypes.any,
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
    ...defaultThemePropTypes,
  }

  state = { showChild: false };

  showSub = () => {
    this.setState({ showChild: true });
  };

  hideSub = () => {
    this.setState({ showChild: false });
  };

  render() {
    const {
      disabled,
      children,
      icon,
      text,
      content,
      sub,
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
    const { showChild } = this.state;
    const { showSub, hideSub } = this;
    const childrenArray = React.Children.toArray(children);

    /* If 'sub' is passed, submenu is to be programatically created
     */
    const subMenu = sub ? (
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
        items={sub}
      />
    ) : (
      childrenArray.find(child => child && child.type === SubMenu)
    );
    return (
      // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        css={[
          !content && styles.item,
          styles.getItemThemedStyle({
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
        onMouseEnter={showSub}
        onMouseLeave={hideSub}
        {...otherProps}
      >
        {content
        || (
        <>
          {icon ? <span css={[styles.icon]}>{icon}</span> : undefined}
          {text}
          {subMenu && <FaAngleRight css={[styles.marginLeftAuto]} />}
        </>
        )
        }
        {(subMenu && showChild) && (subMenu)}
      </li>
    );
  }
}

export default SubMenuItem;
