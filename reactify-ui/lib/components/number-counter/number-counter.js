import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
import { styles, BEMClassNames } from './styles';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';

class NumberCounter extends Component {
    static propTypes = {
      /**
       * A collection of valid theme types, all boolean values
       */
      ...themePropTypes,
      /**
       * A collection of valid size types, all boolean values
       */
      ...sizePropTypes,
      /**
       * The 'from' where the counter starts from
       */
      from: PropTypes.number,
      /**
       * The 'to' where the counter goes to
       */
      to: PropTypes.number.isRequired,
      /**
       * The delay before the counter starts
       */
      delay: PropTypes.number,
      /**
       * If 'true', the component is disabled
       * Default is 'false'
       */
      disabled: PropTypes.bool,
      /**
       * The interval for the setInterval
       */
      interval: PropTypes.number,
      /**
       * By how much the counter steps by
       */
      step: PropTypes.number,
      /**
       * Callback fired when the value is changed.
       *
       * @param {number} value The new `value` value of the number counter
       */
      onValueChange: PropTypes.func,
      onComplete: PropTypes.func,
    }

    static defaultProps = {
      ...defaultThemePropTypes,
      ...defaultSizePropTypes,
      from: 0,
      delay: 0,
      disabled: false,
      interval: 10,
      step: 23,
    }

    state = {
      valueToAdd: this.props.step * (this.props.to > this.props.from ? +1 : -1),
      ticker: this.props.from,
    };

    Interval = {};

    Timeout = {};

    componentDidMount() {
      this.clearTimeoutAndInterval();
      this.startTicker();
    }

    componentDidUpdate(prevProps, prevState) {
      if ((prevProps.from !== this.props.from)
          || (prevProps.to !== this.props.to)) {
        this.reset(prevState.ticker);
      }
    }

    componentWillUnmount() {
      this.clearTimeoutAndInterval();
    }

    reset = (ticker) => {
      this.clearTimeoutAndInterval();
      const from = ticker || this.props.from;
      const newValueToAdd = this.props.step * (this.props.to > from ? +1 : -1);
      this.setState({ valueToAdd: newValueToAdd, ticker: from });
      this.startTicker();
    }

    updateTicker = () => {
      if (this.props.to === this.state.ticker) {
        this.clearTimeoutAndInterval();
        if (this.props.onComplete) this.props.onComplete(this.state.ticker);
      } else if (this.state.valueToAdd >= 0
        && this.state.ticker + this.state.valueToAdd >= this.props.to) {
        this.setState(({ ticker: this.props.to }),
          () => { if (this.props.onValueChange) this.props.onValueChange(this.state.ticker); });
      } else if (this.state.valueToAdd <= 0
        && this.state.ticker + this.state.valueToAdd <= this.props.to) {
        this.setState(({ ticker: this.props.to }),
          () => { if (this.props.onValueChange) this.props.onValueChange(this.state.ticker); });
      } else {
        this.setState(prevState => ({ ticker: prevState.ticker + prevState.valueToAdd }),
          () => { if (this.props.onValueChange) this.props.onValueChange(this.state.ticker); });
      }
    }

    createInterval = () => {
      const interval = setInterval(
        () => this.updateTicker(),
        this.props.interval,
      ); return interval;
    };

    createTimeout = () => {
      const timeout = setTimeout(
        () => { this.Interval = this.createInterval(); },
        this.props.delay,
      ); return timeout;
    };

    startTicker = () => {
      this.Timeout = this.createTimeout();
    }

    clearTimeoutAndInterval = () => {
      clearTimeout(this.Timeout);
      clearInterval(this.Interval);
    }

    render() {
      const {
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
        disabled,
        from,
        to,
        delay,
        reset,
        color,
        interval,
        onValueChange,
        onComplete,
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
            styles.getFontColorStyle({
              primary,
              secondary,
              dark,
              light,
              info,
              warning,
              danger,
              success,
              theme: merge(defaultThemePropTypes.theme, theme),
            }),
            styles.getDisabledStyle({
              disabled,
            }),
          ]}
          {...otherProps}
        >
          <span className={BEMClassNames.ticker}>
            {this.state.ticker}
          </span>
          {children && (typeof children === 'function' ? children(this.reset) : children)}
        </div>
      );
    }
}

export default withTheme(NumberCounter);
