import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

import { IoIosSquareOutline, IoIosCheckboxOutline } from 'react-icons';

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
        theme, disabled, size, color, checkBoxPosition, className, children, onClick, ...otherProps
      } = this.props;
      return (
        <div className={`reactify-checkbox__container ${disabled ? 'reactify--disabled' : ''} ${className} ${oneOfValidSizes(size) ? `reactify-checkbox--font-size-${size}` : ''}`} style={{ fontSize: !oneOfValidSizes(size) ? size : undefined }} onClick={this.handleCheckboxClick} {...otherProps}>
          {checkBoxPosition === 'left' && this.getCheckbox(this.state.checked, theme, color)}
          {children}
          {checkBoxPosition === 'right' && this.getCheckbox(this.state.checked, theme, color)}
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
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checkBoxPosition: PropTypes.oneOf([
    'left',
    'right',
  ]),
};

Checkbox.defaultProps = {
  checked: false,
  theme: 'default',
  size: 'medium',
  color: undefined,
  disabled: false,
  onChange: () => {},
  checkBoxPosition: 'left',
};

export default Checkbox;
