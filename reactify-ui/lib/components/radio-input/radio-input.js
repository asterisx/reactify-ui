
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class RadioInput extends Component {
  static propTypes = {
    /**
     * If 'true', sets radio-input to checked
     * Defaults to 'false'.
     */
    checked: PropTypes.bool,
    /**
     * If 'true', makes the radio-input component 'Controlled'
     * Default to 'false'
     */
    isControlled: PropTypes.bool,
    /**
     * The color of the radio-input 'icon'
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
     * You can use `event.target.checked` to get the new value
     * @param {boolean} checked The `checked` value of the radio-input is also passed
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

  handleOnChange = (event) => {
    // eslint-disable-next-line prefer-destructuring
    const checked = event.target.checked;

    if (!this.props.isControlled) {
      this.setState(prevProps => ({ checked: !prevProps.checked }));
    }

    if (this.props.onChange) {
      this.props.onChange({ event, checked });
    }
  }

  getStyle = () => {
    const style = {};
    const { iconColor } = this.props;
    if (iconColor) { style.color = iconColor; }
    return style;
  }

  render() {
    const {
      children,
      checked,
      isControlled,
      iconColor,
      disabled,
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
      onChange,
      onClick,
      ...otherProps
    } = this.props;

    const { handleOnChange } = this;

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
        {...otherProps}
      >
        <input
          css={[
            styles.input,
            !iconColor && styles.getFontColorStyle({
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
          ]}
          type="checkbox"
          style={{ color: iconColor }}
          onChange={evt => handleOnChange(evt)}
          // eslint-disable-next-line no-nested-ternary
          checked={currChecked}
          className={BEMClassNames.icon}
        />
        {children}
      </div>
    );
  }
}

export default withTheme(RadioInput);
