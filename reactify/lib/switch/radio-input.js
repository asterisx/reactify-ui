
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radio-input.scss';

class RadioInput extends Component {
    static propTypes = {
      checked: PropTypes.bool,
      iconColor: PropTypes.string,
      size: PropTypes.string,
      disabled: PropTypes.bool,
      label: PropTypes.string,
      labelPosition: PropTypes.oneOf(['left', 'right']),
      theme: PropTypes.string,
      onChange: PropTypes.func,
      onClick: PropTypes.func
    }

    static defaultProps = {
      checked: false,
      iconColor: undefined,
      size: 'medium',
      disabled: false,
      theme: undefined,
      onChange: () => {},
      onClick: () => {}
    }

    state = { checked: this.props.checked || false }

    validFontSizes = ['small', 'medium', 'large'];

    toggle = (evt) => {
      this.setState(
        prevProps => ({ checked: !prevProps.checked }),
        () => {
          if (this.props.onChange) { this.props.onChange(this.state.checked); }
          if (this.props.onClick) { this.props.onClick(evt) }
        },
      );
    }

    getStyle = () => {
      const style = {};
      const { iconColor } = this.props;
      if (iconColor) { style.color = iconColor; }
      return style;
    }

    render() {
      const {
        className,
        children,
        checked,
        iconColor,
        size,
        disabled,
        label,
        labelPosition,
        theme,
        onChange,
        onClick,
        ...otherProps
      } = this.props;
      let fontClass;
      if (this.validFontSizes.find(elem => elem === size)) { fontClass = `reactify-radio-input--font-${size}`; }
      const style = this.getStyle();
      const text = label && <label class="reactify-radio-button__label">{label}</label>;
      return (
        <div
          className={`reactify-radio-input__container ${fontClass || ''} ${className || ''} ${disabled ? 'reactify--disabled' : ''}`}
          style={!this.validFontSizes.find(elem => elem === size) ? { fontSize: size } : {}}
          onClick={(evt) => this.toggle(evt)}
          {...otherProps}
        >
          {labelPosition === 'left' && text}
          <input
            className={`reactify-radio-input__input ${theme ? `reactify-radio-input__input--theme-${theme}` : ''} `}
            type="checkbox"
            style={style}
            type="radio"
            checked={this.state.checked}
          />
          {labelPosition === 'right' && text}
          {children}
        </div>
      );
    }
}

export default RadioInput;
