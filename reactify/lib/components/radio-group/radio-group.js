import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

class RadioGroup extends Component {
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
        disabled,
        children,
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
        selectedIndex,
        onSelectionChange,
        ...otherProps
      } = this.props;

      const { selectedIndex: selectedIndexInState } = this.state;

      const { toggleSelect } = this;

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
            && React.Children.map(children,
              child => React.cloneElement(child, {
                checked: selectedIndexInState === child.props.index,
                onChange: () => toggleSelect(child.props.index),
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
              }))}
        </div>
      );
    }
}

RadioGroup.propTypes = {
  /**
   * If 'true', the component is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
  /**
   * Callback fired when new radio input is selected
   * @param {number} index The `index` of the new radio input
   */
  onSelectionChange: PropTypes.func,
  /**
   * The index of the currently selected radio input
   * This should match the `index` prop of the radio input
   */
  selectedIndex: PropTypes.number,
};

RadioGroup.defaultProps = {
  disabled: false,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  onSelectionChange: () => {},
};

export default RadioGroup;
