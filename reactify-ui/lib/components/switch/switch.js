
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class Switch extends Component {
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

  handleOnChange = (event) => {
    // eslint-disable-next-line prefer-destructuring
    const checked = event.target.checked;

    if (!this.isControlled()) {
      this.setState(prevProps => ({ checked: !prevProps.checked }));
    }

    if (this.props.onChange) {
      this.props.onChange({ event, checked });
    }
  }

  render() {
    const {
      children,
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
      disabled,
      onChange,
      ...otherProps
    } = this.props;

    const { handleOnChange, isControlled } = this;

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
        {...otherProps}
      >
        <input
          css={[
            styles.input,
            !iconColor && styles.getThemedStyle({
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
          defaultChecked={defaultChecked}
          type="checkbox"
          style={{ color: iconColor }}
          onChange={handleOnChange}
          // eslint-disable-next-line no-nested-ternary
          checked={defaultChecked ? undefined : (isControlled() ? checked : checkedInState)}
          className={BEMClassNames.icon}
        />
        {children}
      </div>
    );
  }
}

export default Switch;
