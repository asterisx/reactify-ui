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
    /**
     * If 'true', the tooltip will be positioned top
     * Defaults to 'true'
     */
    top: PropTypes.bool,
    /**
     * If 'true', the tooltip will be positioned bottom
     * Defaults to 'false'
     */
    bottom: PropTypes.bool,
    /**
     * If 'true', the tooltip will be positioned left
     * Defaults to 'false'
     */
    left: PropTypes.bool,
    /**
     * If 'true', the tooltip will be positioned right
     * Defaults to 'false'
     */
    right: PropTypes.bool,
    /**
     * A collection of valid theme types, all boolean values
     */
    ...themePropTypes,
    /**
     * A collection of valid size types, all boolean values
     */
    ...sizePropTypes,
  }

  static defaultProps = {
    top: true,
    bottom: false,
    left: false,
    right: false,
    ...defaultThemePropTypes,
    ...defaultSizePropTypes,
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
