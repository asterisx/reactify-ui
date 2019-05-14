import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

class SearchBar extends Component {
    state = { value: '' };

    onHandleChange = (event) => {
      const { target: { value } } = event;
      this.setState({ value },
        () => { if (this.props.onChange) this.props.onChange(this.state.value); });
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
        placeholder,
        onChange,
        ...otherProps
      } = this.props;
      const { value } = this.state;
      const { onHandleChange } = this;
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
            type="search"
            placeholder={placeholder}
            value={value}
            onChange={onHandleChange}
          />
        </div>
      );
    }
}

SearchBar.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  ...themePropTypes,
  ...sizePropTypes,
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  disabled: false,
  placeholder: 'Search...',
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  onChange: undefined,
};

export default SearchBar;
