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
        onSelectionChange,
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
            && React.Children.map(children,
              child => React.cloneElement(child, {
                checked: this.state.selectedIndex === child.props.index,
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
              }))}
        </div>
      );
    }
}

RadioGroup.propTypes = {
  disabled: PropTypes.bool,
  ...themePropTypes,
  ...sizePropTypes,
  onSelectionChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  disabled: false,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  onSelectionChange: () => {},
};

export default RadioGroup;
