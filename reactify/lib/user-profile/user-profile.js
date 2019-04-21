/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './user-profile.scss';

class UserProfile extends Component {
  state = { trayOpen: true }

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
      imagePath,
      theme,
      ...otherProps
    } = this.props;

    const breakpoints = []
      .concat(breakPoints)
      .map(bp => `reactify-user_profile--hide-breakpoint-${bp}`)
      .join(' ');

    const image = (
      <div className="reactify-user_profile__img-container">
        <img className="reactify-user_profile__img" src={imagePath} />
      </div>
    );
    return (
      <div className={`reactify-user_profile__container ${className || ''}`} {...otherProps}>
        <div className={`reactify-user_profile__info reactify-user_profile--theme-${theme}`}>
          {avatarPosition === 'left' && image}
          <p>
            {showMessage && <span>{welcomeMessage}</span>}
            {', '}
            <span>{userName}</span>
          </p>
          {avatarPosition === 'right' && image}
        </div>
        {
          this.state.trayOpen
          && (
          <div className={`reactify--z-index-10000 reactify-user_profile__tray--placement-${dropDownPLacement} ${breakpoints}`}>
            {children(this.closeTray)}
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
  dropDownPLacement: PropTypes.string,
  breakPoints: PropTypes.string,
  theme: PropTypes.oneOf([
    'default',
    'dark',
    'light',
    'info',
    'warning',
    'danger',
    'success',
  ]),
};

UserProfile.defaultProps = {
  avatarPosition: 'left',
  showMessage: true,
  welcomeMessage: 'Welcome',
  dropDownPLacement: 'up',
  breakPoints: undefined,
  theme: 'default',
};

export default UserProfile;
