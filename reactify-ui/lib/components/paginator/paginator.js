import React, { Component } from 'react';
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { styles, BEMClassNames } from './styles';
import { defaultThemePropTypes, themePropTypes } from '../../common';

class Paginator extends Component {
  static propTypes = {
    /**
       * The current page itself
       */
    currentPage: PropTypes.number,
    /**
       * The total no. of pages
       */
    noOfPages: PropTypes.number.isRequired,
    /**
       * If 'true', the component is in controlled mode
       * Defaults to 'false'
       */
    isControlled: PropTypes.bool,
    /**
       * Callback fired when the value is changed.
       *
       * @param {object} obj Use { values } = obj to ge the new value
       */
    onChange: PropTypes.func,
    /**
       * If 'true', the layout changes flex direction to 'row'
       * Defaults to 'false'
       */
    sm: PropTypes.bool,
    /**
       * If 'true', the layout changes flex direction to 'row'
       * Defaults to 'false'
       */
    md: PropTypes.bool,
    /**
       * If 'true', the layout changes flex direction to 'row'
       * Defaults to 'false'
       */
    lg: PropTypes.bool,
    /**
       * If 'true', the layout changes flex direction to 'row'
       * Defaults to 'false'
       */
    xl: PropTypes.bool,
    /**
     * If 'true', component is disabled
     * Default is 'false'
     */
    disabled: PropTypes.bool,
    /**
       * A collection of valid theme types, all boolean values
       */
    ...themePropTypes,
  };

  static defaultProps = {
    currentPage: 1,
    isControlled: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    disabled: false,
    ...defaultThemePropTypes,
  }

  static Before = ({ children, ...otherProps }) => <div {...otherProps}>{children}</div>;

  static After = ({ children, ...otherProps }) => <div {...otherProps}>{children}</div>;

  state = {
    currentPage: 1,
  };

  onChange = (value) => {
    const {
      isControlled,
      noOfPages,
      onChange,
    } = this.props;

    const newValue = Math.max(1, Math.min(value, noOfPages));

    if (onChange) {
      onChange({ value: newValue });
    }

    if (!isControlled) {
      this.setState({ currentPage: newValue });
    }
  }

  render() {
    const {
      children,
      currentPage,
      noOfPages,
      isControlled,
      onChange,
      sm,
      md,
      lg,
      xl,
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
      disabled,
      ...otherProps
    } = this.props;

    const current = isControlled ? currentPage : this.state.currentPage;

    const before = React.Children.toArray(children)
      .find(child => child.type === Paginator.Before);
    const after = React.Children.toArray(children)
      .find(child => child.type === Paginator.After);

    return (
      <div
        css={[
          styles.container,
          styles.getBackgroundStyle({
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
          styles.getFontColorStyle({
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
          styles.getDisabledStyle({ disabled }),
          sm && styles.flexColumnDirectionOn.breakpoint.sm,
          md && styles.flexColumnDirectionOn.breakpoint.md,
          lg && styles.flexColumnDirectionOn.breakpoint.lg,
          xl && styles.flexColumnDirectionOn.breakpoint.xl,
        ]}
        {...otherProps}
      >
        {before}
        <div
          css={[
            styles.middle,
          ]}
        >
          <div
            css={[
              styles.justifySelfFlexStart,
              styles.alignItemCenter,
            ]}
            className={BEMClassNames.middle}
          >
            <FaAngleDoubleLeft
              css={[
                styles.getDisabledStyle({ disabled: current === 1 }),
              ]}
              onClick={() => this.onChange(1)}
            />
            <FaAngleLeft
              css={[
                styles.getDisabledStyle({ disabled: current === 1 }),
                styles.paddingLeft,
              ]}
              onClick={() => this.onChange(current - 1)}
            />
          </div>

          <span
            css={[
              styles.justifySelfFlexCenter,
              styles.alignItemCenter,
              styles.justifyContentCenter,
            ]}
          >
              Page
            <input
              type="number"
              value={current}
              css={[
                styles.input,
              ]}
              onChange={evt => this.onChange(evt.target.value)}
            />
              of
            <span
              css={[
                styles.paddingLeft,
              ]}
            >
              {noOfPages}
            </span>
          </span>

          <div
            css={[
              styles.justifySelfFlexEnd,
              styles.alignItemCenter,
            ]}
          >
            <FaAngleRight
              css={[
                styles.getDisabledStyle({ disabled: current === noOfPages }),
              ]}
              onClick={() => this.onChange(current + 1)}
            />
            <FaAngleDoubleRight
              css={[
                styles.getDisabledStyle({ disabled: current === noOfPages }),
                styles.paddingLeft,
              ]}
              onClick={() => this.onChange(noOfPages)}
            />
          </div>
        </div>
        {after}
      </div>
    );
  }
}

export default Paginator;
