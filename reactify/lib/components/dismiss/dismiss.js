import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FaRegDotCircle,
  FaInfo,
  FaExclamation,
  FaRegTimesCircle,
  FaCheck,
  FaWindowClose,
} from 'react-icons/fa';
import {
  defaultThemePropTypes,
  defaultSizePropTypes,
  themePropTypes,
  sizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class Dismiss extends Component {
  state = { closed: false };

  static defaultProps = {
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    onClose: undefined,
    disabled: false,
  }

  static propTypes = {
    ...themePropTypes,
    ...sizePropTypes,
    onClose: PropTypes.func,
    disabled: PropTypes.bool,
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

    if (info) return <FaInfo />;

    if (warning) return <FaExclamation />;

    if (danger) return <FaRegTimesCircle />;

    if (success) return <FaCheck />;

    if (primary) return <FaRegDotCircle />;

    return null;
  }

  close = () => {
    this.setState({ closed: true }, () => { if (this.props.onClose) this.props.onClose(); });
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
      ...otherProps
    } = this.props;
    const { closed } = this.state;
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
      <span className={BEMClassNames.close} css={[styles.close]} onClick={this.close}>
        {closeIcon || <FaWindowClose />}
      </span>
    </div>
    );
  }
}

export default Dismiss;
