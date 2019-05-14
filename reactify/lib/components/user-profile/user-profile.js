/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';
import { styles, BEMClassNames } from './styles';
import { defaultThemePropTypes, themePropTypes } from '../../common';

class UserProfile extends Component {
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
        onClick={() => { this.toggleTray(); if (onClick) { onClick(); } }}
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

UserProfile.propTypes = {
  userName: PropTypes.string.isRequired,
  avatarLeft: PropTypes.bool,
  avatarRight: PropTypes.bool,
  showMessage: PropTypes.bool,
  welcomeMessage: PropTypes.string,
  imgPath: PropTypes.string.isRequired,
  dropDownTop: PropTypes.bool,
  dropDownBottom: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  disabled: PropTypes.bool,
  ...themePropTypes,
};

UserProfile.defaultProps = {
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
};

export default UserProfile;
