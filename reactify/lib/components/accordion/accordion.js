import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { styles, BEMClassNames } from './styles';

class Accordion extends Component {
  static Item = ({
    children,
    index,
    open,
    disabled,
    onHeaderClick,
    ...otherProps
  }) => (
    <div
      {...otherProps}
    >
      {React.Children.map(children, (child) => {
        if ((child.type === Accordion.Body) && !open) {
          return null;
        } if (child.type === Accordion.Header) {
          return React.cloneElement(child, {
            toggleItem: () => { if (onHeaderClick) onHeaderClick(index); },
            open,
            disabled,
          });
        }
        return child;
      })}
    </div>
  )

  static Header = ({
    children,
    icon,
    showIcon,
    disabled,
    open,
    toggleItem,
    ...otherProps
  }) => (typeof children === 'function' ? children({ toggleItem, disabled })
    : (
      <div
        css={[
          styles.header,
          styles.getDisabledStyle({ disabled }),
        ]}
        onClick={toggleItem}
        {...otherProps}
      >
        {children}
        {showIcon && (
          <span>
            {icon || (open
              ? <FaMinus className={BEMClassNames.icon} />
              : <FaPlus className={BEMClassNames.icon} />)}
          </span>
        )}
      </div>
    ))

  static Body = ({
    children,
    ...otherProps
  }) => (
    <div
      css={[
        styles.body,
      ]}
      {...otherProps}
    >
      {children}
    </div>
  )

  state = {
    items: {},
  }

  componentDidMount() {
    const { children, singular } = this.props;
    let items = {};
    React.Children.forEach(children, (child) => {
      const { index, open } = child.props;
      if (singular && child.open) {
        items = {};
      }
      items[index] = { open };
    });
    this.setState({ items });
  }

  toggleItem = (index) => {
    if (this.props.multiple && !this.props.singular) {
      const { items } = this.state;
      items[index].open = !items[index].open;
      this.setState({
        items,
      }, () => {
        if (this.props.onChange) {
          this.props.onChange({ index, opened: this.state.items[index].open });
        }
      });
    } else {
      const items = {};
      if (Object.prototype.hasOwnProperty.call(this.state.items, index)) {
        items[index] = { open: !this.state.items[index].open };
      } else items[index] = { open: true };
      this.setState({
        items,
      }, () => {
        if (this.props.onChange) {
          this.props.onChange({ index, opened: this.state.items[index].open });
        }
      });
    }
  }

  render() {
    const {
      children,
      singular,
      multiple,
      disabled,
      ...otherProps
    } = this.props;
    const { items } = this.state;
    const { toggleItem } = this;
    return (
      <div
        {...otherProps}
        css={[
          styles.getDisabledStyle({ disabled }),
        ]}
      >
        {React.Children.map(children, (child) => {
          if (child.type === Accordion.Item) {
            return React.cloneElement(child, {
              open: items[child.props.index] && items[child.props.index].open,
              onHeaderClick: () => toggleItem(child.props.index),
            });
          }
          return child;
        })}
      </div>
    );
  }
}

Accordion.Item.displayName = 'Accordion.Item';
Accordion.Header.displayName = 'Accordion.Header';
Accordion.Body.displayName = 'Accordion.Body';

Accordion.propTypes = {
  singular: PropTypes.bool,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
};

Accordion.defaultProps = {
  singular: false,
  multiple: true,
  disabled: false,
};

Accordion.Item.propTypes = {
  index: PropTypes.number.isRequired,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Accordion.Item.defaultProps = {
  open: false,
  disabled: false,
  onChange: undefined,
};

Accordion.Header.propTypes = {
  icon: PropTypes.element,
  showIcon: PropTypes.bool,
};

Accordion.Header.defaultProps = {
  icon: undefined,
  showIcon: true,
};

export default Accordion;
