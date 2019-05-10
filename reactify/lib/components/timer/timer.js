import React, { Component } from 'react';
import { Time } from './components';
import { getTime } from '../../common';

const getInterval = ({
    showSeconds,
    showMinutes,
    showHours,
    showDays,
}) => {
    if (showSeconds) return 1000;

    if (showMinutes) return 1000 * 60;

    if (showHours) return 1000 * 60 * 60;

    if (showDays) return 1000 * 60 * 60 * 24;

    return undefined;
}

class Timer extends Component {
    interval = undefined;

    state = {
        direction: (Date.now() > this.props.milliseconds ? +1 : -1),
        millis: this.props.milliseconds,
    };

    updateMillis = () => {
        this.setState((prevState) => ({
            millis: prevState.millis + (prevState.interval * prevState.direction)
        }));
    }

    componentDidMount() {
        const {
            showSeconds,
            showMinutes,
            showHours,
            showDays,
        } = this.props;
        const interval = getInterval({
            showSeconds,
            showMinutes,
            showHours,
            showDays,
        });
        this.setState({ direction: interval });
        this.interval = setInterval(() => updateMillis());
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getChildren = () => {
        const { millis } = this.state;

        const {
            days,
            hours,
            minutes,
            seconds
        } = getTime(millis);

        const {
            showDays,
            showHours,
            showMinutes,
            showSeconds,
        } = this.props;

        const components = [];

        if (showDays) components.push(<Time value={days} label="days" />);

        if (showHours) components.push(<Time value={hours} label="hourse" />);

        if (showMinutes) components.push(<Time value={minutes} label="minutes" />);

        if (showSeconds) components.push(<Time value={seconds} label="seconds" />);

        return components.join(<span>:</span>)
    }

    render() {
        return (
            <div>
                {this.getChildren()}
            </div>
        );
    }
}

export default Timer;