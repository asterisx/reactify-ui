import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

class GroupToggle extends Component {
    state = { selectedIndex: undefined };

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
        className,
        children,
        onSelectionChange,
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
              children({ selectedIndex: this.state.selectedIndex }).props.children,
              child => React.cloneElement(child, {
                onClick: (evt) => {
                  this.toggleSelect(child.props.index);
                  if (child.props.onClick) child.props.onClick(evt);
                },
              }),
            )}
        </div>
      );
    }
}

GroupToggle.propTypes = {
  disabled: PropTypes.bool,
  onSelectionChange: PropTypes.func,
};

GroupToggle.defaultProps = {
  disabled: false,
  onSelectionChange: () => {},
};

export default GroupToggle;
