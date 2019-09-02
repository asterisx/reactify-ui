import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
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
     * If 'true' the SearchBar is disabled.
     * Default to 'false'.
     */
    disabled: PropTypes.bool,
    /**
     * Used to set the value of the searchbar,
     * passing this makes the searchbar 'controlled'
     */
    value: PropTypes.string,
    /**
     * If 'true', makes the searchBar component 'Controlled'
     * Default to 'false'
     */
    isControlled: PropTypes.bool,
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
     * @param {object} val of shape:
     * @param {object} event The event source for the callback.
     * You can use `event.target.value` to get the new value
     * @param {string} value The `value` of the searchbar is also passed
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    disabled: false,
    value: '',
    isControlled: false,
    placeholder: '',
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    onChange: undefined,
  }

  state = { value: this.props.value };

  handleOnChange = (event) => {
    const { value } = event.target;
    if (!this.props.isControlled) {
      this.setState({ value });
    }

    if (this.props.onChange) {
      this.props.onChange({ event, value });
    }
  }

  clearInput = (event) => {
    if (!this.props.isControlled) {
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
      isControlled,
      placeholder,
      ...otherProps
    } = this.props;

    const { value: valueInState } = this.state;

    const { handleOnChange, clearInput } = this;

    const currValue = isControlled
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
            theme: merge(defaultThemePropTypes.theme, theme),
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

export default withTheme(SearchBar);
