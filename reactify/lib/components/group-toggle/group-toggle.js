import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

class GroupToggle extends Component {
    state = { selectedIndex: this.props.selectedIndex };

    toggleSelect = (index) => {
      if (this.state.selectedIndex !== index) {
        this.setState({ selectedIndex: index }, () => {
          if (this.props.onSelectionChange) {
            this.props.onSelectionChange(index);
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
                onClick: (evt) => {
                  this.toggleSelect(child.props.index);
                  if (child.props.onClick) child.props.onClick(evt);
                },
                index: null,
                key: child.props.index,
              }),
            )}
        </div>
      );
    }
}

GroupToggle.propTypes = {
  disabled: PropTypes.bool,
  selectedIndex: PropTypes.number,
  onSelectionChange: PropTypes.func,
};

GroupToggle.defaultProps = {
  disabled: false,
  selectedIndex: 0,
  onSelectionChange: () => {},
};

export default GroupToggle;
