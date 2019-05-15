/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class Tooltip extends Component {
  state = {
    displayTooltip: false,
  }

  static propTypes = {
    ...themePropTypes,
    ...sizePropTypes,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
  }

  static defaultProps = {
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
    top: true,
    bottom: false,
    left: false,
    right: false,
  }

  hideTooltip = () => {
    this.setState({ displayTooltip: false });
  }

  showTooltip = () => {
    this.setState({ displayTooltip: true });
  }

  render() {
    const {
      content,
      children,
      top,
      bottom,
      left,
      right,
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
      ...otherProps
    } = this.props;
    const { showTooltip, hideTooltip } = this;
    return (
      <span
        css={[
          styles.container,
        ]}
        onMouseLeave={hideTooltip}
        {...otherProps}
      >
        {this.state.displayTooltip
          && (
          <div
            css={[
              styles.bubble,
              styles.getPositionStyle({
                top,
                bottom,
                left,
                right,
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
            className={BEMClassNames.bubble}
          >
            <div css={[
              styles.getContentStyle({
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
              styles.getFontSizeStyle({
                small,
                medium,
                large,
              }),
            ]}
            >
              {content}
            </div>
          </div>
          )
          }
        <span
          onMouseOver={showTooltip}
        >
          {children}
        </span>
      </span>
    );
  }
}

export default Tooltip;
