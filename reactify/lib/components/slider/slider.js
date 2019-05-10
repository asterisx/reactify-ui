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
    state = { currValue: Math.min(Math.max(this.props.value, this.props.minAllowed), this.props.maxAllowed) };

    onChangeHandler = (event) => {
      const { target: { value } } = event;
      this.setState(({ currValue: Math.min(Math.max(value, this.props.minAllowed), this.props.maxAllowed) }), () => {
        if (this.props.onChange) this.props.onChange(this.state.currValue);
      });
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
        color,
        style,
        value,
        min,
        max,
        maxAllowed,
        minAllowed,
        step,
        onChange,
        ...otherProps
      } = this.props;
      const { onChangeHandler } = this;
      const { currValue } = this.state;
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
              color,
              currValue,
              min,
              max,
              maxAllowed,
              minAllowed,
            }) : undefined,
            ...style,
          }}
          {...otherProps}
          type="range"
          value={this.state.currValue}
          min={min}
          max={max}
          step={step}
          onChange={onChangeHandler}
        />
      );
    }
}

Slider.propTypes = {
  ...themePropTypes,
  ...sizePropTypes,
  fill: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  minAllowed: PropTypes.number,
  maxAllowed: PropTypes.number,
  color: PropTypes.string,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  fill: true,
  disabled: false,
  value: 0,
  min: 0,
  max: 100,
  minAllowed: 0,
  maxAllowed: 100,
  color: undefined,
  onChange: undefined,
};

export default Slider;
