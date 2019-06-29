import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  defaultThemePropTypes,
  defaultSizePropTypes,
  themePropTypes,
  sizePropTypes,
} from '../../common';
import Dropdown from '../dropdown';
import CheckBox from '../checkbox';
import SearchBar from '../search-bar';
import ListPanel from '../list-panel';
import { styles } from './styles';

class Select extends Component {
  static propTypes = {
    /**
     * If 'true' select items are searcable
     * i.e Shows a search box which filters select items
     * Defaults to false
     */
    searchable: PropTypes.bool,
    /**
     * If 'true' select items are all selectable
     * i.e Shows a check box which select all items
     * Defaults to false
     */
    allSelectable: PropTypes.bool,
    /**
     * If 'true' multiple items can be open at a time.
     * Defaults to true
     */
    multiple: PropTypes.bool,
    /**
     * A collection of valid theme types, all boolean values
     */
    ...themePropTypes,
    /**
     * A collection of valid size types, all boolean values
     */
    ...sizePropTypes,
    /**
     * If 'true', the view is optimized for sm screens
     * Defaults to 'false'
     */
    sm: PropTypes.bool,
    /**
     * If 'true', the view is optimized for md screens
     * Defaults to 'false'
     */
    md: PropTypes.bool,
    /**
     * If 'true', the view is optimized for lg screens
     * Defaults to 'false'
     */
    lg: PropTypes.bool,
    /**
     * If 'true', the view is optimized for xl screens
     * Defaults to 'false'
     */
    xl: PropTypes.bool,
    /**
     * Callback fired when the state is changed.
     *
     * @param {number} index The value of index prop of the selected value.
     * @param {boolean} selected The `selected` value of the selected item is also passed
     */
    onSelectionChange: PropTypes.func,
  }

  static defaultProps = {
    searchable: false,
    allSelectable: false,
    multiple: true,
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    onSelectionChange: undefined,
  }

  static Item = ({ children, ...otherProps }) => <span {...otherProps}>{children}</span>;

  state = {
    items: [], filterText: '',
  }

  componentDidMount() {
    const items = [];
    React.Children.map(this.props.children, (child) => {
      if (this.state.items.findIndex(item => child.props.index === item.index) < 0) {
        const { index, selected = false, children } = child.props;
        let content;
        if (typeof children === 'string') { content = children.toLowerCase(); }
        items.push({
          index,
          selected,
          visible: true,
          content,
        });
      }
    });
    this.setState({ items });
  }

  static getDerivedStateFromProps(props, state) {
    const { items } = state;
    React.Children.map(props.children, (child) => {
      if (state.items.findIndex(item => child.props.index === item.index) < 0) {
        const { index, selected = false, children } = child.props;
        let content;
        if (typeof children === 'string') { content = children.toLowerCase(); }
        items.push({
          index,
          selected,
          visible: true,
          content,
        });
      }
    });
    return { items };
  }

  getItem = (child) => {
    const {
      // eslint-disable-next-line no-unused-vars
      children, index, selected = false, ...otherProps
    } = child.props;
    const filteredItems = this.state.filterText.length
      ? this.state.items.filter(
        item => item.content && item.content.indexOf(this.state.filterText) >= 0,
      )
      : this.state.items;

    const itemInState = filteredItems.find(item => item.index === index);
    return (itemInState && itemInState.visible) ? (
      <ListPanel.Item
        index={index}
        key={index}
        selected={itemInState.selected}
        {...otherProps}
      >
        {children}
      </ListPanel.Item>
    ) : undefined;
  }

  handleOnChange = ({ index }) => {
    this.setState(
      prevState => (
        {
          items: prevState.items.map(
            item => ((item.index === index)
              ? Object.assign(item, { selected: !item.selected })
              : item),
          ),
        }
      ), () => {
        if (this.props.onSelectionChange) {
          this.props.onSelectionChange(
            ({ index, selected: this.state.items.find(item => item.index === index).selected }),
          );
        }
      },
    );
  }

  filterItems = ({ value }) => {
    this.setState({ filterText: value.toLowerCase() });
  }

  toggleAll = (checked) => {
    this.setState(prevState => (
      {
        items: prevState.items.map(item => Object.assign(item, { selected: checked })),
      }
    ), () => {
      if (this.props.onSelectionChange) {
        this.props.onSelectionChange(
          this.state.items.map(item => ({ index: item.index, selected: item.selected })),
        );
      }
    });
  }

  render() {
    const {
      children,
      searchable,
      allSelectable,
      onClick,
      multiple,
      onSelectionChange,
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
      sm,
      md,
      lg,
      xl,
      ...otherProps
    } = this.props;

    const {
      getItem, handleOnChange, filterItems, toggleAll,
    } = this;

    let items = [];

    if (allSelectable) {
      items.push(
        <ListPanel.Item style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }} index={100000} key={100000} isSelectable={false}>
          <CheckBox light style={{ width: '100%', padding: '0px', fontSize: '100%' }} onChange={({ checked }) => toggleAll(checked)}><span style={{ paddingLeft: '0.4em', fontSize: '80%' }}>Select All</span></CheckBox>
        </ListPanel.Item>,
      );
    }
    if (searchable) {
      items.push(
        <ListPanel.Item style={{ padding: 0 }} index={100001} key={100002} isSelectable={false}>
          <SearchBar value={this.state.filterText} style={{ width: '100%', backgroundColor: 'white', fontSize: '80%' }} onChange={filterItems} />
        </ListPanel.Item>,
      );
    }
    items = items.concat(React.Children.map(children,
      child => getItem(child)));

    return (
      <Dropdown
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        label="Please select a value"
        {...otherProps}
      >
        <ListPanel
          multiple={multiple}
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
          onClick={(evt) => { evt.stopPropagation(); evt.preventDefault(); }}
          onItemClicked={handleOnChange}
          css={[
            styles.list,
          ]}
        >
          {items}
        </ListPanel>
      </Dropdown>
    );
  }
}

export default Select;
