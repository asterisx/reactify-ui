import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
import {
  FaRegDotCircle,
  FaInfo,
  FaExclamation,
  FaRegTimesCircle,
  FaCheck,
} from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import {
  defaultThemePropTypes,
  defaultSizePropTypes,
  themePropTypes,
  sizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class Dismiss extends Component {
  state = { closed: false };

  static propTypes = {
    onClose: PropTypes.func,
    onCloseIconClick: PropTypes.func,
    /**
     * If 'true', the component is disabled
     * Default is 'false'
     */
    disabled: PropTypes.bool,
    /**
     * A collection of valid theme types, all boolean values
     */
    ...themePropTypes,
    /**
     * A collection of valid size types, all boolean values
     */
    ...sizePropTypes,
  }

  static defaultProps = {
    autoDismiss: true,
    onClose: undefined,
    onCloseIconClick: undefined,
    disabled: false,
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
  }

  getIcon = ({
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
  }) => {
    if (secondary) return <FaRegDotCircle />;

    if (dark) return <FaRegDotCircle />;

    if (light) return <FaRegDotCircle />;

    if (warning) return <FaExclamation />;

    if (danger) return <FaRegTimesCircle />;

    if (success) return <FaCheck />;

    if (info) return <FaInfo />;

    if (primary) return <FaRegDotCircle />;

    return null;
  }

  close = (event) => {
    this.setState(
      {
        closed: true,
      },
      () => { if (this.props.onClose) this.props.onClose({ event }); },
    );
  }

  render() {
    const {
      children,
      disabled,
      small,
      medium,
      large,
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
      icon,
      closeIcon,
      onClose,
      onCloseIconClick,
      autoDismiss,
      ...otherProps
    } = this.props;
    const { closed } = this.state;
    const { close } = this;
    return !closed && (
    <div
      css={[
        styles.container,
        styles.getBackgroundStyle({
          primary,
          secondary,
          dark,
          light,
          info,
          warning,
          danger,
          success,
          theme: merge(defaultThemePropTypes.theme, theme),
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
          theme: merge(defaultThemePropTypes.theme, theme),
        }),
        styles.getFontSizeStyle({
          small,
          medium,
          large,
        }),
        styles.getDisabledStyle({
          disabled,
        }),
      ]}
      {...otherProps}
    >
      <span css={[styles.icon]} className={BEMClassNames.icon}>
        {icon || this.getIcon({
          primary,
          secondary,
          dark,
          light,
          info,
          warning,
          danger,
          success,
        })}
      </span>
      <span className={BEMClassNames.children} css={[styles.children]}>
        {children}
      </span>
      <span
        className={BEMClassNames.close}
        css={[styles.close]}
        onClick={
          (event) => {
            if (autoDismiss) { close(event); }
            if (onCloseIconClick) onCloseIconClick(event);
          }}
      >
        {closeIcon || <IoIosClose />}
      </span>
    </div>
    );
  }
}

export default withTheme(Dismiss);
