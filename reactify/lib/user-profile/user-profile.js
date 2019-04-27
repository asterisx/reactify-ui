/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './user-profile.scss';
import { IoMdArrowDropdown } from 'react-icons/io';

class UserProfile extends Component {
  state = { trayOpen: false }

  closeTray = () => {
    this.setState({ trayOpen: false });
  }

  toggleTray = () => {
    this.setState(prevState => ({ trayOpen: !prevState.trayOpen }));
  }

  closeTray = () => {
    this.setState({ trayOpen: false });
  }

  render() {
    const {
      children,
      className,
      userName,
      avatarPosition,
      showMessage,
      welcomeMessage,
      dropDownPLacement,
      breakPoints,
      imgPath,
      theme,
      color,
      disabled,
      onClick,
      ...otherProps
    } = this.props;

    const breakpoints = []
      .concat(breakPoints)
      .map(bp => `reactify-user_profile--hide-breakpoint-${bp}`)
      .join(' ');

    const image = (
      <div className="reactify-user_profile__img-container">
        <img className="reactify-user_profile__img" src={imgPath} />
      </div>
    );
    return (
      <div className={`reactify-user_profile__container ${disabled ? 'reactify--disabled' : ''} ${className || ''}`} onClick={() => { this.toggleTray(); if (onClick) { onClick(); } }} {...otherProps}>
        <div
          className={`reactify-user_profile__main reactify-user_profile--theme-${theme}`}
          style={{ backgroundColor: color }}
        >
          <div className="reactify-user_profile__info-container">
            {avatarPosition === 'left' && image}
            <span className={`reactify-user_profile__info ${breakpoints}`}>
              {showMessage && <span className="reactify-user_profile__message">{welcomeMessage}</span>}
              {(showMessage && userName) && ', '}
              <span className="reactify-user_profile__username">{userName}</span>
            </span>
            {avatarPosition === 'right' && image}
          </div>
          <IoMdArrowDropdown className="reactify-user_profile__dropdown-icon" />
        </div>
        {
          this.state.trayOpen
          && (
          <div className={`reactify--z-index-10000 reactify-user_profile__tray--placement-${dropDownPLacement}`}>
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
  avatarPosition: PropTypes.string,
  showMessage: PropTypes.bool,
  welcomeMessage: PropTypes.string,
  imgPath: PropTypes.string.isRequired,
  dropDownPLacement: PropTypes.oneOf([
    'top',
    'bottom',
  ]),
  breakPoints: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  theme: PropTypes.oneOf([
    'default',
    'dark',
    'light',
    'info',
    'warning',
    'danger',
    'success',
  ]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

UserProfile.defaultProps = {
  avatarPosition: 'left',
  showMessage: true,
  welcomeMessage: 'Welcome',
  dropDownPLacement: 'bottom',
  breakPoints: undefined,
  theme: 'light',
  color: undefined,
  disabled: false,
};

export default UserProfile;
