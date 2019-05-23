import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { styles, BEMClassNames } from './styles';
import {
  defaultThemePropTypes,
  themePropTypes,
} from '../../common';

class Accordion extends Component {
  static Item = ({
    children,
    index,
    open,
    disabled,
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
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
            primary: child.props.primary || primary,
            secondary: child.props.secondary || secondary,
            dark: child.props.dark || dark,
            light: child.props.light || light,
            info: child.props.info || info,
            warning: child.props.warning || warning,
            danger: child.props.danger || danger,
            success: child.props.success || success,
            theme: child.props.theme || theme,
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
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
    open,
    toggleItem,
    ...otherProps
  }) => (typeof children === 'function' ? children({ toggleItem, disabled })
    : (
      <div
        css={[
          styles.header,
          styles.getDisabledStyle({ disabled }),
          styles.getBackgroundStyle({
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
    /* items store the accordion items's open state
     * If the mode is singular, items is an object with a single
     * key matching the open items's index with value like: { open: true | false }
     * If the mode is multiple, items is a collection of fields
     * where the keys are same as index and values is an object like: { open: true | false }
     */
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
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
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
              primary: child.props.primary || primary,
              secondary: child.props.secondary || secondary,
              dark: child.props.dark || dark,
              light: child.props.light || light,
              info: child.props.info || info,
              warning: child.props.warning || warning,
              danger: child.props.danger || danger,
              success: child.props.success || success,
              theme: child.props.theme || theme,
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
  /**
   * If 'true' only one accordion item can be open at a time.
   * Defaults to false
   */
  singular: PropTypes.bool,
  /**
   * If 'true' multiple accordion items can be open at a time.
   * Defaults to true
   */
  multiple: PropTypes.bool,
  /**
   * If 'true' accordion will be disabled and will have no events
   */
  disabled: PropTypes.bool,
  ...themePropTypes,
};

Accordion.defaultProps = {
  singular: false,
  multiple: true,
  disabled: false,
  ...defaultThemePropTypes,
};

Accordion.Item.propTypes = {
  /**
   * A unique identifier for each item,
   * This is passed on as to event handlers
   */
  index: PropTypes.number.isRequired,
  /**
   * If 'true' the accordion item is opened by default
   */
  open: PropTypes.bool,
  /**
   * If 'true' accordion item will be disabled and will have no events
   */
  disabled: PropTypes.bool,
  /**
   * Callback fired when the state is changed.
   *
   * @param {number} index The `index` of the accordion item on which the state change occurs.
   * @param {boolean} selected The `selected` value of the accordion item is also passed
   */
  onChange: PropTypes.func,
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
};

Accordion.Item.defaultProps = {
  open: false,
  disabled: false,
  onChange: undefined,
  ...defaultThemePropTypes,
};

Accordion.Header.propTypes = {
  icon: PropTypes.element,
  showIcon: PropTypes.bool,
  ...themePropTypes,
};

Accordion.Header.defaultProps = {
  icon: undefined,
  showIcon: true,
  ...defaultThemePropTypes,
};

export default Accordion;
