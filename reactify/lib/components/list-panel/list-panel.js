import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  areArraysDifferent,
  defaultThemePropTypes,
  defaultSizePropTypes,
  themePropTypes,
  sizePropTypes,
} from '../../common';
import { styles } from './styles';

class ListPanel extends Component {
  static Item = ({
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
    selected,
    defaultSelected,
    bordered,
    children,
    disabled,
    isSelectable,
    onClick,
    ...otherProps
  }) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      css={[
        styles.listItem,
        styles.getDisabledStyle({
          disabled,
        }),
        styles.getListItemThemedStyle({
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
        selected && styles.getListItemSelectedBackgroundColorStyle({
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
        bordered && styles.bordered,
        styles.getFontSizeStyle({
          small,
          medium,
          large,
        }),
      ]}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </li>
  );

  state = { items: {} };

  componentDidMount() {
    let items = {};
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.props) {
        const { index, selected, defaultSelected } = child.props;
        // Is selected is not passed, it means the component is set
        // to be controlled
        if (selected === undefined) {
          if (this.props.singular && !this.props.multiple) {
            items = {};
          }
          items[index] = { selected: defaultSelected };
        }
      }
    });
    this.setState({
      items,
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (!areArraysDifferent(state.items, props.children, ['index', 'selected'])) { return null; }
    let { items } = state;
    React.Children.forEach(props.children, (child) => {
      if (child && child.props) {
        const { index, selected, defaultSelected } = child.props;
        // If selected is not passed, it means the component is set
        // to be controlled
        if (selected === undefined) {
          if (props.singular && !props.multiple) {
            items = {};
          }
          items[index] = { selected: defaultSelected };
        }
      }
    });
    return { items };
  }

  itemClicked = ({ event, index, isControlled }) => {
    if (!isControlled) {
      if (this.props.singular && !this.props.multiple) {
        const items = {};
        if (Object.prototype.hasOwnProperty.call(this.state.items, index)) {
          items[index] = { selected: !this.state.items[index].selected };
        } else items[index] = { selected: true };
        this.setState({
          items,
        }, () => {
          if (this.props.onSelectionChange) {
            this.props.onSelectionChange({
              event,
              index,
              selected: this.state.items[index].selected,
            });
          }
        });
      } else {
        const { items } = this.state;
        items[index].selected = !items[index].selected;
        this.setState({
          items,
        }, () => {
          if (this.props.onSelectionChange) {
            this.props.onSelectionChange({
              event,
              index,
              selected: this.state.items[index].selected,
            });
          }
        });
      }
    }

    if (this.props.onItemClicked) {
      this.props.onItemClicked({
        event,
        index,
      });
    }
  }

  render() {
    const {
      bordered,
      singular,
      multiple,
      children,
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
      small,
      medium,
      large,
      onSelectionChange,
      onItemClicked,
      ...otherProps
    } = this.props;

    const { items } = this.state;

    return (
      <ul
        css={[
          styles.container,
          styles.getDisabledStyle({
            disabled,
          }),
          styles.getBackgroundColorStyle({
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
        {...otherProps}
      >
        {React.Children.map(children, (child) => {
          if (child && child.type === ListPanel.Item) {
            const isControlled = child.props.selected !== undefined;
            return React.cloneElement(child, {
              onClick: (event) => {
                if (child.props.isSelectable) {
                  this.itemClicked({
                    event,
                    index: child.props.index,
                    isControlled,
                  });
                }
                if (child.props.onClick) child.props.onClick(event);
              },
              primary: child.props.primary || primary,
              secondary: child.props.secondary || secondary,
              dark: child.props.dark || dark,
              light: child.props.light || light,
              info: child.props.info || info,
              warning: child.props.warning || warning,
              danger: child.props.danger || danger,
              success: child.props.success || success,
              theme: child.props.theme || theme,
              small: child.props.small || small,
              medium: child.props.medium || medium,
              large: child.props.large || large,
              disabled: child.props.disabled || disabled,
              selected: isControlled ? child.props.selected : (items[child.props.index]
              && items[child.props.index].selected),
            });
          }
          return child;
        })}
      </ul>
    );
  }
}

ListPanel.propTypes = {
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  singular: PropTypes.bool,
  multiple: PropTypes.bool,
  ...themePropTypes,
  ...sizePropTypes,
  onItemClicked: PropTypes.func,
};

ListPanel.defaultProps = {
  bordered: true,
  disabled: false,
  singular: true,
  multiple: false,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  onItemClicked: undefined,
};

ListPanel.Item.propTypes = {
  selected: PropTypes.bool,
  defaultSelected: PropTypes.bool,
  bordered: PropTypes.bool,
  index: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  isSelectable: PropTypes.bool,
  ...themePropTypes,
  ...sizePropTypes,
};

ListPanel.Item.defaultProps = {
  selected: undefined,
  defaultSelected: false,
  bordered: true,
  disabled: false,
  isSelectable: true,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

ListPanel.Item.displayName = 'ListPanel.Item';

export default ListPanel;
