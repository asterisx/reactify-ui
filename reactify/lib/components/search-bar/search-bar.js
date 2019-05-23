import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

class SearchBar extends Component {
  static propTypes = {
    /**
     * If 'true' the slider is disabled
     */
    disabled: PropTypes.bool,
    /**
     * Used to set the value of the searchbar,
     * passing this makes the searchbar 'controlled'
     */
    value: PropTypes.string,
    /**
     * Used to set the default value
     */
    defaultValue: PropTypes.string,
    /**
     * A placeholder for input
     */
    placeholder: PropTypes.string,
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
     * You can use `event.target.value` to get the new value
     * @param {number} value The `value` of the searchbar is also passed
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    disabled: false,
    value: undefined,
    defaultValue: '',
    placeholder: '',
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    onChange: undefined,
  }

  state = { value: this.props.defaultValue || '' };

  isControlled = () => this.props.value !== undefined;

  handleOnChange = (event) => {
    // eslint-disable-next-line prefer-destructuring
    const value = event.target.value;
    if (!this.isControlled()) {
      this.setState({ value });
    }

    if (this.props.onChange) {
      this.props.onChange({ event, value });
    }
  }

  clearInput = (event) => {
    if (!this.isControlled()) {
      this.setState({ value: '' });
    }

    if (this.props.onChange) {
      this.props.onChange({ event, value: '' });
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
      disabled,
      onChange,
      value,
      placeholder,
      ...otherProps
    } = this.props;

    const { value: valueInState } = this.state;

    const { isControlled, handleOnChange, clearInput } = this;

    const currValue = isControlled()
      ? value
      : valueInState;

    return (
      <div
        css={[
          styles.container,
          styles.getFontSizeStyle({
            small,
            medium,
            large,
          }),
          styles.getFontColorStyle({
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
          styles.getDisabledStyle({ disabled }),
        ]}
        {...otherProps}
      >
        <FaSearch />
        <input
          css={[
            styles.input,
          ]}
          type="text"
          value={currValue}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
        <IoIosCloseCircle
          css={[
            (currValue === undefined || currValue.length < 1) && styles.hidden,
          ]}
          onClick={clearInput}
        />
      </div>
    );
  }
}

export default SearchBar;
