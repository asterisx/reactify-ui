import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './group-toggle.scss';

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
      } = this.props;
      return (
        <div className={`reactify-group-toggle__container ${className || ''}`}>
          {children
          && React.Children.map(children({ selectedIndex: this.state.selectedIndex }).props.children,
            (child) => {
              const cloned = React.cloneElement(child, {
                onClick: (evt) => {
                  this.toggleSelect(child.props.index);
                  if (child.props.onClick) child.props.onClick(evt);
                },
              });
              return cloned;
            })}
        </div>
      );
    }
}

GroupToggle.propTypes = {
  onSelectionChange: PropTypes.func,
};

GroupToggle.defaultProps = {
  onSelectionChange: () => {},
};

export default GroupToggle;
