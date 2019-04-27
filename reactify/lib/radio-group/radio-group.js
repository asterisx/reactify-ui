import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radio-group.scss';

class RadioGroup extends Component {
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
        ...otherProps
      } = this.props;
      return (
        <div className={`reactify-radio-group__container ${className || ''}`} {...otherProps}>
          {React.Children.map(children,
            child => React.cloneElement(child, {
              checked: this.state.selectedIndex === child.props.index,
              onClick: (evt) => {
                this.toggleSelect(child.props.index);
                if (child.props.onClick) child.props.onClick(evt);
              },
            }))}
        </div>
      );
    }
}

RadioGroup.propTypes = {
  onSelectionChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  onSelectionChange: () => {},
};

export default RadioGroup;
