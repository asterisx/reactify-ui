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

class Select extends Component {
  static Item = ({ children, ...otherProps }) => <span {...otherProps}>{children}</span>;

  static propTypes = {
    searchable: PropTypes.bool,
    allSelectable: PropTypes.bool,
    singular: PropTypes.bool,
    multiple: PropTypes.bool,
    onSelectionChange: PropTypes.func,
    ...themePropTypes,
    ...sizePropTypes,
  }

  static defaultProps = {
    searchable: false,
    allSelectable: false,
    singular: false,
    multiple: true,
    onSelectionChange: undefined,
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
  }

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
      singular,
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
      <Dropdown label="Please select a value" {...otherProps}>
        <ListPanel
          singular={singular}
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
        >
          {items}
        </ListPanel>
      </Dropdown>
    );
  }
}

export default Select;
