
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  defaultThemePropTypes,
  themePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class RadioInput extends Component {
    static propTypes = {
      checked: PropTypes.bool,
      iconColor: PropTypes.string,
      disabled: PropTypes.bool,
      ...themePropTypes,
      ...sizePropTypes,
      onChange: PropTypes.func,
      onClick: PropTypes.func,
    }

    static defaultProps = {
      checked: false,
      iconColor: undefined,
      disabled: false,
      ...defaultThemePropTypes,
      ...defaultSizePropTypes,
      onChange: () => {},
      onClick: () => {},
    }

    state = { checked: this.props.checked };


    componentDidUpdate(prevProps) {
      if (this.props.checked !== prevProps.checked && this.props.checked !== this.state.checked) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ checked: this.props.checked });
      }
    }

    toggle = (evt) => {
      this.setState(
        prevProps => ({ checked: !prevProps.checked }),
        () => {
          if (this.props.onChange) { this.props.onChange(this.state.checked); }
          if (this.props.onClick) { this.props.onClick(evt); }
        },
      );
    }

    getStyle = () => {
      const style = {};
      const { iconColor } = this.props;
      if (iconColor) { style.color = iconColor; }
      return style;
    }

    render() {
      const {
        children,
        checked,
        iconColor,
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
        onChange,
        onClick,
        ...otherProps
      } = this.props;
      return (
        <div
          css={[
            styles.container,
            styles.getFontSizeStyle({
              small,
              medium,
              large,
            }),
            styles.getDisabledStyle({
              disabled,
            }),
          ]}
          onClick={evt => this.toggle(evt)}
          {...otherProps}
        >
          <input
            css={[
              styles.input,
              styles.getFontStyle({
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
            className={BEMClassNames.icon}
            style={{ color: iconColor }}
            type="radio"
            onChange={() => {}}
            checked={this.state.checked}
          />
          {children}
        </div>
      );
    }
}

export default RadioInput;
