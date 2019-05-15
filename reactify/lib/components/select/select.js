import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown';
import CheckBox from '../checkbox';
import SearchBar from '../search-bar';

class Select extends Component {
    static Item = ({ children, ...otherProps }) => <span {...otherProps}>{children}</span>;

    static propTypes = {
      searchable: PropTypes.bool,
      allSelectable: PropTypes.bool,
    }

    static defaultProps = {
      searchable: true,
      allSelectable: true,
    }

    state = { items: [], filterText: '' }

    componentDidMount() {
      const items = [];
      React.Children.map(this.props.children, (child) => {
        if (this.state.items.findIndex(item => child.props.index === item.index) < 0) {
          const { index, selected = false, children } = child.props;
          items.push({
            index,
            selected,
            visible: true,
            content: children.toLowerCase(),
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
          items.push({
            index,
            selected,
            visible: true,
            content: children.toLowerCase(),
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
        ? this.state.items.filter(item => item.content.indexOf(this.state.filterText) >= 0)
        : this.state.items;

      const itemInState = filteredItems.find(item => item.index === index);
      return (itemInState && itemInState.visible) ? (
        <Dropdown.Item
          index={index}
          key={index}
          selected={itemInState.selected}
          {...otherProps}
        >
          {children}
        </Dropdown.Item>
      ) : undefined;
    }

    handleOnChange = ({ index, selected }) => {
      this.setState(
        prevState => (
          {
            items: prevState.items.map(
              item => ((item.index === index) ? Object.assign(item, { selected }) : item),
            ),
          }
        ),
      );
    }

    filterItems = (value) => {
      this.setState({ filterText: value.toLowerCase().trim() });
    }

    toggleAll = (select) => {
      this.setState(prevState => (
        {
          items: prevState.items.map(item => Object.assign(item, { selected: select })),
        }
      ));
    }

    render() {
      const {
        children,
        searchable,
        allSelectable,
        ...otherProps
      } = this.props;
      const {
        getItem, handleOnChange, filterItems, toggleAll,
      } = this;
      let items = [];
      if (allSelectable) {
        items.push(
          <Dropdown.Item style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }} index={100000} key={100000} isSelectable={false}>
            <CheckBox light style={{ width: '100%', padding: '0px', fontSize: '100%' }} onChange={checked => toggleAll(checked)}><span style={{ paddingLeft: '0.4em', fontSize: '80%' }}>Select All</span></CheckBox>
          </Dropdown.Item>,
        );
      }
      if (searchable) {
        items.push(
          <Dropdown.Item style={{ padding: 0 }} index={100001} key={100002} isSelectable={false}>
            <SearchBar style={{ width: '100%', backgroundColor: 'white', fontSize: '80%' }} onChange={filterItems} />
          </Dropdown.Item>,
        );
      }
      items = items.concat(React.Children.map(children, child => getItem(child)));
      return (
        <Dropdown multiple={allSelectable} {...otherProps} onSelectionChange={handleOnChange}>
          {items}
        </Dropdown>
      );
    }
}

export default Select;
