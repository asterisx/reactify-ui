import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
import {
  areArraysDifferent,
  defaultThemePropTypes,
  defaultSizePropTypes,
  themePropTypes,
  sizePropTypes,
  reconcileThemeProps,
} from '../../common';
import { styles } from './styles';

class ListPanel extends Component {
  static propTypes = {
    /**
     * This is used to set a borderTop to list items
     * This is drilled directly to ListPanel.Item 'as is'
     */
    bordered: PropTypes.bool,
    /**
     * If 'true', the component is disabled
     * Default is 'false'
     */
    disabled: PropTypes.bool,
    /**
     * If 'true' multiple items can be open at a time.
     * Defaults to true
     */
    multiple: PropTypes.bool,
    /**
     * If 'true', makes the item controlled
     * Default is 'false'.
     */
    isControlled: PropTypes.bool,
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
    /**
     * Callback fired when the state is changed.
     * @param {object} val of shape:
     * @param {number} index The value of index prop of the selected value.
     * @param {object} event The 'event' itself
     * @param {boolean} [selected] The `selected` value of the selected item is also passed
     */
    onItemClicked: PropTypes.func,
    /**
     * If 'true', no styling is applied to list panel items'
     */
    noItemDefaultStyling: PropTypes.bool,
  };

  static defaultProps = {
    bordered: true,
    disabled: false,
    multiple: false,
    isControlled: false,
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    onItemClicked: undefined,
    noItemDefaultStyling: false,
  };

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
    isControlled,
    onClick,
    noItemDefaultStyling,
    ...otherProps
  }) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      css={[
        !noItemDefaultStyling && styles.listItem,
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
          theme: merge(defaultThemePropTypes.theme, theme),
          isSelectable,
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
          theme: merge(defaultThemePropTypes.theme, theme),
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
    const { isControlled } = this.props;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.props) {
        const { index, selected } = child.props;
        if (!isControlled) {
          if (!this.props.multiple) {
            items = {};
          }
          items[index] = { selected };
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
    const { isControlled } = this.props;
    React.Children.forEach(props.children, (child) => {
      if (child && child.props) {
        const { index, selected } = child.props;
        if (!isControlled) {
          if (!props.multiple) {
            items = {};
          }
          items[index] = { selected };
        }
      }
    });
    return { items };
  }

  itemClicked = ({ event, index }) => {
    if (!this.props.isControlled) {
      if (!this.props.multiple) {
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
      isControlled,
      onSelectionChange,
      onItemClicked,
      noItemDefaultStyling,
      ...otherProps
    } = this.props;

    const { items } = this.state;

    const { itemClicked } = this;

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
            theme: merge(defaultThemePropTypes.theme, theme),
          }),
        ]}
        {...otherProps}
      >
        {React.Children.toArray(children).map((child, index) => {
          if (child && child.type === ListPanel.Item) {
            return React.cloneElement(child, {
              onClick: (event) => {
                if (child.props.isSelectable) {
                  itemClicked({
                    event,
                    index: child.props.index,
                  });
                }
                if (child.props.onClick) child.props.onClick(event);
              },
              ...reconcileThemeProps(
                {
                  props: child.props,
                  primary,
                  secondary,
                  dark,
                  light,
                  info,
                  warning,
                  danger,
                  success,
                },
              ),
              theme: child.props.theme || theme,
              small: child.props.small || small,
              medium: child.props.medium || medium,
              large: child.props.large || large,
              disabled: child.props.disabled || disabled,
              key: child.props.index,
              selected: isControlled
                ? child.props.selected
                : (items[child.props.index]
              && items[child.props.index].selected),
              bordered: child.props.bordered !== undefined
                ? child.props.bordered
                : (!(index === 0 && child.type === ListPanel.Item)),
              noItemDefaultStyling: child.props.noItemDefaultStyling || noItemDefaultStyling,
            });
          }
          return child;
        })}
      </ul>
    );
  }
}

ListPanel.Item.propTypes = {
  /**
   * If 'true', makes the item selected
   * Default to 'false'.
   */
  selected: PropTypes.bool,
  /**
   * This is used to set a borderTop to the item
   */
  bordered: PropTypes.bool,
  /**
   * Uniquely identifies an item,
   * the same is returned to event handlers
   */
  index: PropTypes.number.isRequired,
  /**
   * If 'true', the component is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
  /**
   * If 'false', the item cannot be selected and will not raise any events
   * Default is 'true'
   */
  isSelectable: PropTypes.bool,
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
  /**
   * If 'true', no styling is applied to list panel items'
   */
  noItemDefaultStyling: PropTypes.bool,
};

ListPanel.Item.defaultProps = {
  selected: false,
  bordered: undefined,
  disabled: false,
  isSelectable: true,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  noItemDefaultStyling: false,
};

ListPanel.Item.displayName = 'ListPanel.Item';

export default withTheme(ListPanel);
