import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FullScreen extends Component {
    state = {}
    render() {
        const { containerId, expanded, children } = this.props;
        return (<div className="reactify-fullScreen__container">{children}</div>);
    }
}

FullScreen.propTypes = {
    containerId: PropsTypes.string,
    expanded: PropTypes.bool,
    showIcon: PropsTypes.bbol
}

FullScreen.defaultProps = {
    expanded: false
}

export default FullScreen;