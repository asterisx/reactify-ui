/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';
import { styles, BEMClassNames } from './styles';
import { defaultThemePropTypes, themePropTypes } from '../../common';

class UserProfile extends Component {
  static propTypes = {
    /**
     * The username value of the user
     */
    userName: PropTypes.string.isRequired,
    /**
     * If 'true', the avatar is place left of username
     */
    avatarLeft: PropTypes.bool,
    /**
     * If 'true', the avatar is place right of username
     */
    avatarRight: PropTypes.bool,
    /**
     * If 'true', the message is to shown
     * Defaults to 'true'
     */
    showMessage: PropTypes.bool,
    /**
     * The welcome mesaage
     */
    welcomeMessage: PropTypes.string,
    /**
     * The `path` of the avatar
     */
    imgPath: PropTypes.string.isRequired,
    /**
     * If 'true', the dropdown is shown top
     * Defaults to 'false'
     */
    dropDownTop: PropTypes.bool,
    /**
     * If 'true', the dropdown is shown bottom
     * Defaults to 'true'
     */
    dropDownBottom: PropTypes.bool,
    /**
     * If 'true', the message and username is
     * not shown on sm screens.
     * Defaults to 'false'
     */
    sm: PropTypes.bool,
    /**
     * If 'true', the message and username is
     * not shown on sm screens.
     * Defaults to 'false'
     */
    md: PropTypes.bool,
    /**
     * If 'true', the message and username is
     * not shown on lg screens.
     * Defaults to 'false'
     */
    lg: PropTypes.bool,
    /**
     * If 'true', the message and username is
     * not shown on xl screens.
     * Defaults to 'false'
     */
    xl: PropTypes.bool,
    /**
     * If 'true', the component is disabled
     * Default is 'false'
     */
    disabled: PropTypes.bool,
    /**
     * A collection of valid theme types, all boolean values
     */
    ...themePropTypes,
  }

  static defaultProps = {
    avatarLeft: true,
    avatarRight: false,
    showMessage: true,
    welcomeMessage: 'Welcome',
    dropDownTop: false,
    dropDownBottom: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    disabled: false,
    ...defaultThemePropTypes,
  }

  state = { trayOpen: false }

  closeTray = () => {
    this.setState({ trayOpen: false });
  }

  toggleTray = () => {
    this.setState(prevState => ({ trayOpen: !prevState.trayOpen }));
  }

  render() {
    const {
      children,
      userName,
      avatarLeft,
      avatarRight,
      showMessage,
      welcomeMessage,
      dropDownTop,
      dropDownBottom,
      sm,
      md,
      lg,
      xl,
      imgPath,
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
      disabled,
      onClick,
      ...otherProps
    } = this.props;

    const image = (
      <div
        css={[styles.imgContainer]}
        className={BEMClassNames.imgContainer}
      >
        <img
          css={[styles.img]}
          className={BEMClassNames.img}
          src={imgPath}
        />
      </div>
    );
    return (
      <div
        css={[
          styles.container,
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
        ]}
        onClick={(event) => { this.toggleTray(); if (onClick) { onClick({ event }); } }}
        {...otherProps}
      >
        <div
          css={[
            styles.main,
          ]}
          className={BEMClassNames.main}
        >
          <div css={[styles.infoContainer]} className={BEMClassNames.infoContainer}>
            {(avatarLeft && !avatarRight) && image}
            <span
              css={[
                styles.info,
                sm && styles.hide.breakpoint.sm,
                md && styles.hide.breakpoint.md,
                lg && styles.hide.breakpoint.lg,
                xl && styles.hide.breakpoint.xl,
              ]}
              className={BEMClassNames.info}
            >
              {showMessage && <span>{welcomeMessage}</span>}
              {(showMessage && userName) && ', '}
              <span>{userName}</span>
            </span>
            {avatarRight && image}
          </div>
          <IoMdArrowDropdown className={BEMClassNames.icon} />
        </div>
        {
          this.state.trayOpen
          && (
          <div
            css={[
              dropDownTop && styles.tray.placement.top,
              (dropDownBottom && !dropDownTop) && styles.tray.placement.bottom,
              styles.zdIndex.z10000,
            ]}
            className={BEMClassNames.children}
          >
            {children && (typeof children === 'function' ? children(this.closeTray) : children)}
          </div>
          )
        }
      </div>
    );
  }
}

export default UserProfile;
