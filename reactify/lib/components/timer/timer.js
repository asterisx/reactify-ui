import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Time from './components';
import { styles } from './styles';
import {
  getTimeFromMillis,
  defaultThemePropTypes,
  themePropTypes,
  defaultSizePropTypes,
  sizePropTypes,
} from '../../common';

class Timer extends Component {
    interval = undefined;

    state = {
      direction: Date.now() > this.props.milliseconds ? +1 : -1,
      millis: Math.abs(Date.now() - this.props.milliseconds),
      interval: 1000,
    };

    componentDidMount() {
      this.interval = setInterval(() => this.updateMillis(), this.state.interval);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    updateMillis = () => {
      const {
        interval,
        direction,
        millis,
      } = this.state;
      if (direction === 1) {
        this.setState(({ millis: Date.now() - this.props.milliseconds }));
      } else if (millis - interval <= 0) {
        this.setState(({ millis: 0 }));
        clearInterval(this.interval);
      } else {
        this.setState(({ millis: millis - interval }));
      }
    }

    getChildren = () => {
      const { millis } = this.state;

      const {
        days,
        hours,
        minutes,
        seconds,
      } = getTimeFromMillis(millis);

      const {
        showDays,
        showHours,
        showMinutes,
        showSeconds,
      } = this.props;

      const components = [];

      if (showDays) components.push(<Time key={4} value={Math.floor(days)} label="days" />);

      if (showHours) components.push(<Time key={3} value={Math.floor(hours)} label="hours" />);

      if (showMinutes) components.push(<Time key={2} value={Math.floor(minutes)} label="minutes" />);

      if (showSeconds) components.push(<Time key={1} value={Math.floor(seconds)} label="seconds" />);

      return [].concat(
        ...components.map(
          // eslint-disable-next-line react/no-array-index-key
          (e, index) => [<span key={index + 10} css={[styles.seperator]}>:</span>, e],
        ),
      ).slice(1);
    }

    render() {
      const {
        showDays,
        showHours,
        showMinutes,
        showSeconds,
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
      return (
        <div
          css={[
            styles.container,
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
            styles.getFontSizeStyle({
              small,
              medium,
              large,
            }),
          ]}
          {...otherProps}
        >
          {this.getChildren().map(comp => comp)}
        </div>
      );
    }
}

Timer.propTypes = {
  showSeconds: PropTypes.bool,
  showMinutes: PropTypes.bool,
  showHours: PropTypes.bool,
  showDays: PropTypes.bool,
  ...themePropTypes,
  ...sizePropTypes,
  milliseconds: PropTypes.number.isRequired,
};

Timer.defaultProps = {
  showDays: true,
  showHours: true,
  showMinutes: true,
  showSeconds: true,
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

export default Timer;
