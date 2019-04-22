import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './number-counter.scss';

class NumberCounter extends PureComponent {
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
      size: PropTypes.string,
      from: PropTypes.number,
      to: PropTypes.number.isRequired,
      delay: PropTypes.number,
      interval: PropTypes.number,
      step: PropTypes.number,
    }

    static defaultProps = {
      theme: 'info',
      size: 'medium',
      from: 0,
      delay: 0,
      interval: 10,
      step: 23,
    }

    state = { valueToAdd: this.props.step * (this.props.to > this.props.from ? +1 : -1), ticker: this.props.from, wasReset: false };

    Interval = {};

    Timeout = {};

    componentDidMount() {
      this.clearTimeoutAndInterval();
      this.startTicker();
    }

    componentWillUnmount() {
     this.clearTimeoutAndInterval();
    }

    componentDidUpdate(prevProps) {
      if ((prevProps.from !== this.props.from) 
          || (prevProps.to !== this.props.to)) {
        this.clearTimeoutAndInterval();
        const newValueToAdd = this.props.step * (this.props.to > this.props.from ? +1 : -1);
        this.setState({ valueToAdd: newValueToAdd, ticker: this.props.from });
        this.startTicker();
      }
    }

    updateTicker = () => {
      if(this.props.to === this.state.ticker) {
        clearInterval(this.Interval);
      } else if (this.state.ticker + this.state.valueToAdd >= this.props.to) {
        this.setState(({ ticker: this.props.to }));
      } else {
        this.setState(prevState => ({ ticker: prevState.ticker + this.state.valueToAdd }));
      }
    }

    startTicker = () => {
      this.Interval = () => {
        const interval = setInterval(
          () => this.updateTicker(),
          this.props.interval,
        ); return interval;
      };
      this.Timeout = setTimeout(
        () => this.Interval(), 
        this.props.delay
      );
    }

    clearTimeoutAndInterval = () => {
      clearTimeout(this.Timeout);
      clearInterval(this.Interval);
    }

    render() {
      const {
        children, className, theme, from, to, delay, reset, interval, ...otherProps
      } = this.props;
      return (
        <div className={`reactify-number-counter__container ${className || ''}`} {...otherProps}>
          <span className={`reactify-number-counter--theme-${theme}`}>{this.state.ticker}</span>
          {children}
        </div>
      );
    }
}

export default NumberCounter;
