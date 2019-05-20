import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
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
      const { index, selected } = child.props;
      if (this.props.singular && !this.props.multiple) {
        items = {};
      }
      items[index] = { selected };
    });
    this.setState({
      items,
    });
  }

  toggleSelect = (index) => {
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
            index,
            selected: this.state.items[index].selected,
          });
        }
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
          if (child.type === ListPanel.Item) {
            return React.cloneElement(child, {
              selected: items[child.props.index]
              && items[child.props.index].selected,
              onClick: (evt) => {
                if (child.props.isSelectable) this.toggleSelect(child.props.index);
                if (child.props.onClick) child.props.onClick(evt);
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
  singular: PropTypes.bool,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  ...themePropTypes,
  ...sizePropTypes,
  onSelectionChange: PropTypes.func,
};

ListPanel.defaultProps = {
  bordered: true,
  singular: true,
  multiple: false,
  disabled: false,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  onSelectionChange: () => {},
};

ListPanel.Item.propTypes = {
  selected: PropTypes.bool,
  bordered: PropTypes.bool,
  index: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  isSelectable: PropTypes.bool,
  ...themePropTypes,
  ...sizePropTypes,
};

ListPanel.Item.defaultProps = {
  selected: false,
  bordered: true,
  disabled: false,
  isSelectable: true,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

ListPanel.Item.displayName = 'ListPanel.Item';

export default ListPanel;
