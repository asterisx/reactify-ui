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

  state = { selectedindexs: [] };

  componentDidMount() {
    React.Children.forEach(this.props.children, (child) => {
      if (child.props.selected) { this.toggleState(child.props.index); }
    });
  }

  toggleState = (index) => {
    if (this.props.singular && !this.props.multiple) {
      this.setState(
        prevState => (
          {
            selectedindexs:
             prevState.selectedindexs.findIndex(sk => sk === index) !== -1 ? [] : [index],
          }),
      );
    } else if (this.props.multiple) {
      this.setState(
        prevState => ({
          selectedindexs: prevState.selectedindexs.findIndex(sk => sk === index) !== -1
            ? prevState.selectedindexs.filter(sk => sk !== index)
            : prevState.selectedindexs.concat([index]),
        }),
      );
    }
  }

  toggleSelect = (index) => {
    this.toggleState(index);
    if (this.props.onSelectionChange) {
      this.props.onSelectionChange({
        index,
        selected: this.state.selectedindexs.findIndex(sk => sk === index) === -1,
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
              selected: this.state.selectedindexs.findIndex(sk => sk === child.props.index) !== -1,
              onClick: (evt) => {
                this.toggleSelect(child.props.index);
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
  ...themePropTypes,
  ...sizePropTypes,
};

ListPanel.Item.defaultProps = {
  selected: false,
  bordered: true,
  disabled: false,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

ListPanel.Item.displayName = 'ListPanel.Item';

export default ListPanel;
