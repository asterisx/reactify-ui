import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberCounter extends Component {
    static propTypes = {
      theme: PropTypes.oneOf([
        'dark',
        'light',
        'info',
        'warning',
        'danger',
        'success',
      ]),
      from: PropTypes.number,
      to: PropTypes.number.isRequired,
      delay: PropTypes.number,
      reset: PropTypes.bool,
      interval: PropTypes.number,
    }

    static defaultProps = {
      theme: 'info',
      from: 0,
      delay: 0,
      reset: false,
      interval: 10,
    }


    state = { valueToAdd: this.to > this.from ? +1 : -1, ticker: this.from };

    Interval = {};

    Timeout = {};

    componentDidMount() {
      this.resetTimeoutAndInterval();
    }

    componentWillUnmount() {
      clearTimeout(this.Timeout);
      clearInterval(this.Interval);
    }

    getDerivedStateFromProps(props, state) {
      this.resetTimeoutAndInterval();
      const newValueToAdd = props.to > props.from ? +1 : -1;
      if (props.reset) {
        return { valueToAdd: newValueToAdd, ticker: props.from };
      } if (newValueToAdd !== state.valueToAdd) {
        return { valueToAdd: newValueToAdd, ticker: state.ticker };
      }
      return null;
    }

    updateTicker = () => {
      this.setState(prevState => prevState.ticker + prevState.valueToAdd);
    }

    startTicker = () => {
      this.Interval = () => {
        const interval = setInterval(
          () => this.updateTicker,
          this.props.interval,
        ); return interval;
      };
      this.Timeout = setTimeout(
        this.interval(), this.props.delay,
      );
    }

    resetTimeoutAndInterval = () => {
      clearTimeout(this.Timeout);
      clearInterval(this.Interval);
    }

    render() {
      const {
        children, className, theme, from, to, delay, reset, interval, ...otherProps
      } = this.props;
      return (
        <div className={`reactify-number-counter__container ${className || ''}`} {...otherProps}>
          <span className={`reactify-number-counter--theme-${theme}`}>{from}</span>
          {children}
        </div>
      );
    }
}

export default NumberCounter;
