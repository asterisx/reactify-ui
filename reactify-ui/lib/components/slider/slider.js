import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import {
  defaultThemePropTypes,
  themePropTypes,
  defaultSizePropTypes,
  sizePropTypes,
} from '../../common';

class Slider extends Component {
  static propTypes = {
    /**
     * If 'true' the background is filled
     */
    fill: PropTypes.bool,
    /**
     * If 'true' the slider is disabled
     */
    disabled: PropTypes.bool,
    /**
     * Used to set the value of the slider,
     */
    value: PropTypes.number,
    /**
     * If 'true', makes the slider component 'Controlled'
     * Default to 'false'
     */
    isControlled: PropTypes.bool,
    /**
     * The min value of the slider
     */
    min: PropTypes.number,
    /**
     * The max value of the slider
     */
    max: PropTypes.number,
    /**
     * The min value allowed for the slider
     */
    minAllowed: PropTypes.number,
    /**
     * The max value allowed for the slider
     */
    maxAllowed: PropTypes.number,
    /**
     * The fill color
     */
    fillColor: PropTypes.string,
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
     * You can use `event.target.value` to get the new value
     * @param {number} value The `value` of the slider is also passed
     */
    onChange: PropTypes.func,

  }

  static defaultProps = {
    fill: true,
    disabled: false,
    value: 0,
    isControlled: false,
    min: 0,
    max: 100,
    minAllowed: 0,
    maxAllowed: 100,
    fillColor: undefined,
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    onChange: undefined,

  }

  static getValue = (value, min, max) => Math.min(Math.max(value, min), max);

  state = {
    value:
    Slider.getValue(this.props.value, this.props.minAllowed, this.props.maxAllowed),
  };

  handleOnChange = (event) => {
    // eslint-disable-next-line prefer-destructuring
    const value = event.target.value;
    if (!this.props.isControlled) {
      this.setState(({
        value:
        Slider.getValue(value, this.props.minAllowed, this.props.maxAllowed),
      }));
    }

    if (this.props.onChange) {
      this.props.onChange({ event, value });
    }
  }

  render() {
    const {
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
      fill,
      disabled,
      fillColor,
      style,
      value,
      isControlled,
      min,
      max,
      maxAllowed,
      minAllowed,
      onChange,
      ...otherProps
    } = this.props;

    const { handleOnChange } = this;

    const { value: valueInState } = this.state;

    const currValue = isControlled
      ? Slider.getValue(value, minAllowed, maxAllowed)
      : valueInState;

    return (
      <input
        css={[
          styles.input,
          styles.getDisabledStyle({ disabled }),
          styles.getFontSizeStyle({ small, medium, large }),
        ]}
        style={{
          background: fill ? styles.getBackgroundfillStyle({
            primary,
            secondary,
            dark,
            light,
            info,
            warning,
            danger,
            success,
            theme,
            fillColor,
            value: currValue,
            min,
            max,
            maxAllowed,
            minAllowed,
          }) : undefined,
          ...style,
        }}
        {...otherProps}
        type="range"
        value={currValue}
        min={min}
        max={max}
        onChange={handleOnChange}
      />
    );
  }
}

export default Slider;
