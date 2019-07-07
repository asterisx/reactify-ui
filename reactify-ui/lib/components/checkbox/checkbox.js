import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoIosSquareOutline, IoIosCheckboxOutline } from 'react-icons/io';
import {
  defaultThemePropTypes,
  defaultSizePropTypes,
  themePropTypes,
  sizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class Checkbox extends Component {
  static propTypes = {
    /**
     * If 'true', sets checkbox to checked
     * Default to 'false'.
     */
    checked: PropTypes.bool,
    /**
     * If 'true', makes the checkbox component 'Controlled'
     * Default to 'false'
     */
    isControlled: PropTypes.bool,
    /**
     * The color of the checkbox 'icon'
     * aceepts any valid CSS value for this
     */
    iconColor: PropTypes.string,
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
    /**
     * Callback fired when the state is changed.
     * @param {object} val of shape:
     * @param {object} event The event source for the callback.
     * @param {boolean} checked The `checked` value of the checkbox is also passed.
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    checked: undefined,
    isControlled: false,
    iconColor: undefined,
    disabled: false,
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    onChange: () => {},
  }

  state = { checked: this.props.checked }

  handleCheckboxClick = (event) => {
    if (!this.props.isControlled) {
      this.setState(prevState => ({ checked: !prevState.checked }),
        () => {
          if (this.props.onChange) {
            this.props.onChange({ event, checked: this.state.checked });
          }
        });
    } else if (this.props.onChange) {
      this.props.onChange({ event, checked: !this.props.checked });
    }

    if (this.props.onClick) { this.props.onClick(event); }
  }

  render() {
    const {
      disabled,
      checked,
      isControlled,
      iconColor,
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
      children,
      onClick,
      ...otherProps
    } = this.props;

    const { handleCheckboxClick } = this;

    const { checked: checkedInState } = this.state;

    const currChecked = isControlled
      ? checked
      : checkedInState;

    return (
      <div
        css={[
          styles.container,
          styles.getFontSizeStyle({
            small,
            medium,
            large,
          }),
          styles.getDisabledStyle({
            disabled,
          }),
        ]}
        onClick={handleCheckboxClick}
        {...otherProps}
      >
        <div
          css={[
            styles.icon,
            !iconColor && styles.getThemedFontStyle({
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
          ]}
          style={{ color: iconColor }}
          className={BEMClassNames.icon}
        >
          {currChecked ? (
            <IoIosCheckboxOutline />
          ) : <IoIosSquareOutline />}
        </div>
        {children}
      </div>
    );
  }
}

export default Checkbox;
