import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

class GroupToggle extends Component {
  static propTypes = {
    /**
     * If 'true', the component is disabled
     * Default is 'false'
     */
    disabled: PropTypes.bool,
    /**
     * The current selectedIndex
     */
    selectedIndex: PropTypes.number,
    /**
     * Callback fired when the state is changed.
     *
     * @param {object} event The event source for the callback (its a click event)
     * @param {number} index The `index` of the selected toggle
     */
    onSelectionChange: PropTypes.func,
  }

  static defaultProps = {
    disabled: false,
    selectedIndex: 0,
    onSelectionChange: () => {},
  }

  state = { selectedIndex: this.props.selectedIndex };

  toggleSelect = ({ event, index }) => {
    if (this.state.selectedIndex !== index) {
      this.setState({ selectedIndex: index }, () => {
        if (this.props.onSelectionChange) {
          this.props.onSelectionChange({ event, index });
        }
      });
    }
  }

  render() {
    const {
      children,
      onSelectionChange,
      selectedIndex,
      disabled,
      ...otherProps
    } = this.props;
    return (
      <div
        css={[
          styles.container,
          styles.getDisabledStyle({
            disabled,
          }),
        ]}
        {...otherProps}
      >
        {children
          && React.Children.map(
            typeof children === 'function' ? children({ selectedIndex: this.state.selectedIndex }).props.children : children,
            child => React.cloneElement(child, {
              onClick: (event) => {
                this.toggleSelect({ event, index: child.props.index });
                if (child.props.onClick) child.props.onClick(event);
              },
              index: null,
              key: child.props.index,
            }),
          )}
      </div>
    );
  }
}


export default GroupToggle;
