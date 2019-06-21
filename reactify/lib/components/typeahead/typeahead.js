import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  themePropTypes,
  sizePropTypes,
} from '../../common';
import ListPanel from '../list-panel';
import SearchBar from '../search-bar';
import { styles } from './styles';

class Typeahead extends Component {
  static propTypes = {
    /**
     * If 'true' the components is disabled
     */
    disabled: PropTypes.bool,
    /**
     * If 'true' the components is set to controlled
     * Defaults to 'false'
     */
    isControlled: PropTypes.bool,
    /**
     * If 'true' the suggestions can be selected
     * Defaults to 'true'
     */
    isSelectable: PropTypes.bool,
    /**
     * The search term itself
     */
    searchTerm: PropTypes.string,
    /**
     * The collection which makes up the
     * suggestions
     */
    suggestions: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        content: PropTypes.any,
      }),
    ),
    /**
     * Callback fired when the state is changed.
     * @param {string} value The new `value` itself
     */
    onChange: PropTypes.func,
    /**
     * A collection of valid theme types, all boolean values
     * This is drilled directly to ListPanel.Item 'as is'
     */
    ...themePropTypes,
    /**
     * A collection of valid size types, all boolean values
     * This is drilled directly to ListPanel.Item 'as is'
     */
    ...sizePropTypes,
  }

  static defaultProps = {
    disabled: false,
    isControlled: false,
    isSelectable: true,
    searchTerm: undefined,
    onChange: undefined,
    suggestions: [],
  }

  /**
   * This static component is merely a placeholder
   * and does not serve any other purpose.
   * This is to make the Typeahead 'behave' like a
   * declarative component, but its props are used to
   * build the ListPanel instead.
   *
   * @static
   * @memberof Typeahead
   */
  static Suggestion = ({
    value,
    index,
    children,
  }) => (
    <span>
      {value}
      {index}
      {children}
    </span>
  );

  state = {
    /**
     * The following keeps a track of search value on change
     * This value becomes the searchterm whenever there is a key down
     */
    searchValue: this.props.searchTerm || '',
    searchTerm: this.props.searchTerm || '',
    filteredSuggestions: [],
    showSuggestions: false,
  };

  filterSuggestions = () => {
    this.setState(prevState => ({
      filteredSuggestions: this.props.suggestions
        .map(suggestion => ({
          index: suggestion.index,
          value: suggestion.value,
          isSelectable: suggestion.isSelectable || this.props.isSelectable,
          content: suggestion.content || suggestion.value,
        }))
        .filter(suggestion => this.props.isControlled
          || suggestion.value.indexOf(prevState.searchTerm) >= 0),
    }));
  }

  handleListItemOnClick = ({ value }) => {
    this.setState(({
      searchValue: value,
      filteredSuggestions: [],
      showSuggestions: false,
    }),
    () => { if (this.props.onChange) this.props.onChange({ value: this.state.searchValue }); });
  }

  handleOnChange = ({ value }) => {
    this.setState({ searchValue: value, showSuggestions: (value && value.length > 0) },
      () => { if (this.props.onChange) this.props.onChange({ value: this.state.searchValue }); });
  }

  handleOnKeyUp = () => {
    this.setState(prevState => ({ searchTerm: prevState.searchValue, showSuggestions: true }),
      () => this.filterSuggestions());
  }

  render() {
    const {
      filteredSuggestions,
      searchValue,
      searchTerm: searchTermInState,
      showSuggestions,
    } = this.state;

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
      children,
      isControlled,
      isSelectable,
      disabled,
      searchTerm,
      suggestions,
      onChange,
      ...otherProps
    } = this.props;

    const {
      handleOnKeyUp,
      handleOnChange,
      handleListItemOnClick,
    } = this;

    const suggestionChildren = React.Children.toArray(children)
      .filter(child => child.type === Typeahead.Suggestion)
      .filter(child => isControlled || child.props.value.indexOf(searchTermInState) >= 0)
      .map(child => ({
        index: child.props.index,
        value: child.props.value,
        content: child.props.children,
        isSelectable: child.props.isSelectable !== undefined
          ? child.props.isSelectable : (this.props.isSelectable || false),
      }));

    const mergedFilteredSuggestions = filteredSuggestions.concat(suggestionChildren);

    return (
      <div
        css={[
          styles.container,
          disabled && styles.getDisabledStyle({ disabled }),
        ]}
        {...otherProps}
      >
        <SearchBar
          value={searchValue}
          onKeyUp={handleOnKeyUp}
          onChange={handleOnChange}
          primary={primary}
          secondary={secondary}
          dark={dark}
          light={light}
          info={info}
          warning={warning}
          danger={danger}
          success={success}
          theme={theme}
          small={small}
          medium={medium}
          large={large}
        />
        {showSuggestions
        && (
        <ListPanel
          css={[
            styles.suggestionList,
          ]}
          primary={primary}
          secondary={secondary}
          dark={dark}
          light={light}
          info={info}
          warning={warning}
          danger={danger}
          success={success}
          theme={theme}
          small={small}
          medium={medium}
          large={large}
          noItemDefaultStyling
        >
          {mergedFilteredSuggestions
            .map(item => (
              <ListPanel.Item
                onClick={() => item.isSelectable && handleListItemOnClick({ value: item.value })}
                isSelectable={item.isSelectable}
                key={item.index}
                index={item.index}
              >
                {item.content}
              </ListPanel.Item>
            ))}
        </ListPanel>
        )}
      </div>
    );
  }
}

Typeahead.Suggestion.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  /**
   * If 'true' the suggestions can be selected
   * Defaults to 'false'
   */
  isSelectable: PropTypes.bool,
};

Typeahead.Suggestion.defaultProps = {
  /**
   * This undefined is reconcillied later to a false,
   * if the Typeahead's isSelectable is false, it is not used
   * if Typeahead's isSelectable is true
   */
  isSelectable: undefined,
};

export default Typeahead;
