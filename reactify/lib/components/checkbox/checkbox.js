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
     * If 'true', sets switch to checked
     * This also makes the switch component 'Controlled'
     */
    checked: PropTypes.bool,
    /**
     * If 'true', sets switch's default state to checked.
     * Default is 'false'
     * This does not makes the switch component 'Controlled'
     */
    defaultChecked: PropTypes.bool,
    /**
     * The color of the switch 'icon'
     * Switch component aceepts any valid CSS value for this
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
     *
     * @param {object} event The event source for the callback.
     * You can use `event.target.checked` to get the new value
     * @param {boolean} checked The `checked` value of the switch is also passed
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    checked: undefined,
    defaultChecked: undefined,
    iconColor: undefined,
    disabled: false,
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    onChange: () => {},
  }

  state = { checked: this.props.defaultChecked || false }

  isControlled = () => this.props.checked !== undefined;

  handleCheckboxClick = (event) => {
    if (!this.isControlled()) {
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
      defaultChecked,
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

    const { handleCheckboxClick, isControlled } = this;

    const { checked: checkedInState } = this.state;

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
          {(isControlled() ? checked : checkedInState) ? (
            <IoIosCheckboxOutline />
          ) : <IoIosSquareOutline />}
        </div>
        {children}
      </div>
    );
  }
}

export default Checkbox;
