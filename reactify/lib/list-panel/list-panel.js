import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './list-panel.scss';

const oneOfValidSizes = size => ['small', 'medium', 'large'].find(sz => sz === size);

class ListPanel extends Component {
  static Item = ({
    className,
    size,
    color,
    theme,
    selected,
    bordered,
    children,
    disabled,
    onClick,
    ...otherProps
  }) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className={`reactify-list-panel__list-item ${disabled ? 'reactify--disabled' : ''} ${bordered ? 'reactify-list-panel__list-item--bordered' : ''} ${selected ? `reactify-list-panel__list-item--theme-${theme}-selected` : ''} ${oneOfValidSizes(size) ? `reactify-list-panel__list-item--size-${size}` : ''} ${`reactify-list-panel__list-item--theme-${theme}`} ${className || ''}`}
      style={
        {
          backgroundColor: color || undefined,
          fontSize: !oneOfValidSizes(size) ? size : undefined,
        }
      }
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
    if (this.props.mode === 'singular') {
      this.setState(
        prevState => (
          {
            selectedindexs:
             prevState.selectedindexs.findIndex(sk => sk === index) !== -1 ? [] : [index],
          }),
      );
    } else if (this.props.mode === 'multiple') {
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
      className,
      bordered,
      mode,
      size,
      children,
      disabled,
      theme,
      color,
      onSelectionChange,
      ...otherProps
    } = this.props;

    return (
      <ul
        className={`reactify-list-panel__container ${disabled ? 'reactify--disabled' : ''} ${`reactify-list-panel--theme-${theme}`} ${className || ''}`}
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
              size: child.props.size || size,
              theme: child.props.theme || theme,
              color: child.props.color || color,
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
  mode: PropTypes.oneOf([
    'singular',
    'multiple',
  ]),
  size: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.oneOf([
    'default',
    'dark',
    'light',
    'info',
    'warning',
    'danger',
    'success',
  ]),
  disabled: PropTypes.bool,
  onSelectionChange: PropTypes.func,
};

ListPanel.defaultProps = {
  bordered: true,
  mode: 'singular',
  size: 'medium',
  color: undefined,
  theme: 'light',
  disabled: false,
  onSelectionChange: () => {},
};

ListPanel.Item.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.oneOf([
    'default',
    'dark',
    'light',
    'info',
    'warning',
    'danger',
    'success',
  ]),
  selected: PropTypes.bool,
  bordered: PropTypes.bool,
  index: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
};

ListPanel.Item.defaultProps = {
  size: undefined,
  color: undefined,
  theme: undefined,
  selected: false,
  bordered: true,
  disabled: false,
};

ListPanel.Item.displayName = 'ListPanel.Item';

export default ListPanel;
