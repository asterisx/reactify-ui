import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

import { IoIosSquareOutline, IoIosCheckboxOutline } from 'react-icons/io';

const oneOfValidSizes = size => ['small', 'medium', 'large'].find(sz => sz === size);

class Checkbox extends Component {
  state = { checked: !!this.props.checked }

  handleCheckboxClick = (evt) => {
    this.setState(prevState => ({ checked: !prevState.checked }), () => {
      if (this.props.onChange) { this.props.onChange(this.state.checked); }
      if (this.props.onClick) { this.props.onClick(evt); }
    });
  }

  getCheckbox = (isChecked, theme, color) => <div className={`reactify-checkbox__icon reactify-checkbox__icon--theme-${theme}`} style={{ color }}>{isChecked ? <IoIosCheckboxOutline /> : <IoIosSquareOutline />}</div>

  render() {
    const {
      theme, disabled, label, size, color, labelPosition, className, children, onClick, ...otherProps
    } = this.props;
    const text = !!label && <label className={`reactify-checkbox__label--position-${labelPosition}`}>{label}</label>;
    return (
      <div className={`reactify-checkbox__container ${disabled ? 'reactify--disabled' : ''} ${className || ''} ${oneOfValidSizes(size) ? `reactify-checkbox--font-${size}` : ''}`} style={{ fontSize: !oneOfValidSizes(size) ? size : undefined }} onClick={this.handleCheckboxClick} {...otherProps}>
        {labelPosition === 'left' && text}
        {this.getCheckbox(this.state.checked, theme, color)}
        {labelPosition === 'right' && text}
        {children}
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  theme: PropTypes.oneOf([
    'default',
    'dark',
    'light',
    'info',
    'warning',
    'danger',
    'success',
  ]),
  label: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  labelPosition: PropTypes.oneOf([
    'left',
    'right',
  ]),
};

Checkbox.defaultProps = {
  checked: false,
  theme: 'default',
  label: undefined,
  size: 'medium',
  color: undefined,
  disabled: false,
  onChange: () => {},
  labelPosition: 'right',
};

export default Checkbox;
