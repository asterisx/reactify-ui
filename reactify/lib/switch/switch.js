
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './switch.scss';

class Switch extends Component {
    static propTypes = {
      checked: PropTypes.bool,
      iconColor: PropTypes.string,
      size: PropTypes.string,
      disabled: PropTypes.bool,
      theme: PropTypes.oneOf([
        'default',
        'dark',
        'light',
        'info',
        'warning',
        'danger',
        'success',
      ]),
      onChange: PropTypes.func,
    }

    static defaultProps = {
      checked: false,
      iconColor: undefined,
      size: 'medium',
      disabled: false,
      theme: 'default',
      onChange: () => {},

    }

    state = { checked: this.props.checked || false }

    validFontSizes = ['small', 'medium', 'large'];

    toggle = () => {
      this.setState(
        prevProps => ({ checked: !prevProps.checked }),
        () => {
          if (this.props.onChange) { this.props.onChange(this.state.checked); }
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
        theme,
        onChange,
        ...otherProps
      } = this.props;
      let fontClass;
      if (this.validFontSizes.find(elem => elem === size)) { fontClass = `reactify-switch--font-${size}`; }
      const style = this.getStyle();
      return (
        <div
          className={`reactify-switch__container ${fontClass || ''} ${className || ''} ${disabled ? 'reactify--disabled' : ''}`}
          style={!this.validFontSizes.find(elem => elem === size) ? { fontSize: size } : {}}
          {...otherProps}
        >
          <input
            className={`reactify-switch__input ${theme ? `reactify-switch__input--theme-${theme}` : ''} `}
            type="checkbox"
            style={style}
            onClick={this.toggle}
            onChange={() => {}}
            checked={this.state.checked}
          />
          {children}
        </div>
      );
    }
}

export default Switch;
