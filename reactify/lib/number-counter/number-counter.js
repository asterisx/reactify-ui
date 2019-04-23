import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './number-counter.scss';

class NumberCounter extends Component {
    static propTypes = {
      theme: PropTypes.oneOf([
        'default',
        'dark',
        'light',
        'info',
        'warning',
        'danger',
        'success',
      ]),
      color: PropTypes.string,
      size: PropTypes.string,
      from: PropTypes.number,
      to: PropTypes.number.isRequired,
      delay: PropTypes.number,
      disabled: PropTypes.bool,
      interval: PropTypes.number,
      step: PropTypes.number,
    }

    static defaultProps = {
      theme: 'info',
      color: undefined,
      size: 'medium',
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
      } else if (this.state.valueToAdd >= 0
        && this.state.ticker + this.state.valueToAdd >= this.props.to) {
        this.setState(({ ticker: this.props.to }));
      } else if (this.state.valueToAdd <= 0
        && this.state.ticker + this.state.valueToAdd <= this.props.to) {
        this.setState(({ ticker: this.props.to }));
      } else {
        this.setState(prevState => ({ ticker: prevState.ticker + prevState.valueToAdd }));
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

    oneOfValidSizes = size => ['small', 'medium', 'large'].find(sz => sz === size);

    render() {
      const {
        children,
        className,
        theme, size,
        from,
        to,
        delay,
        disabled,
        reset,
        color,
        interval,
        ...otherProps
      } = this.props;
      return (
        <div className={`reactify-number-counter__container ${disabled ? 'reactify--disabled' : ''} ${className || ''}`} {...otherProps}>
          <span
            className={`reactify-number-counter--theme-${theme} ${this.oneOfValidSizes(size) ? `reactify-number-counter--size-${size}` : ''}`}
            style={{ fontSize: !this.oneOfValidSizes(size) ? size : undefined, color }}
          >
            {this.state.ticker}
          </span>
          {children && (typeof children === 'function' ? children(this.reset) : children)}
        </div>
      );
    }
}

export default NumberCounter;
