/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { styles, BEMClassNames } from './styles';

class Portal extends PureComponent {
  static defaultProps = {
    left: false,
    right: false,
    bottom: false,
    top: true,
    autoClose: true,
    hideBackDrop: false,
    onClose: undefined,
  };

  static propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    bottom: PropTypes.bool,
    top: PropTypes.bool,
    autoClose: PropTypes.bool,
    hideBackDrop: PropTypes.bool,
    onClose: PropTypes.func,
  };

  containerChildRef = React.createRef();

  conatinerBgRef = React.createRef();

  containerRef = React.createRef();

  componentDidMount() {
    const {
      left, right, bottom, top, hideBackDrop,
    } = this.props;
    this.animateIn(
      left,
      right,
      bottom,
      top,
      this.containerRef.current,
      this.containerChildRef.current,
      this.conatinerBgRef.current,
      hideBackDrop,
    );
  }

  animateIn = (
    left,
    right,
    bottom,
    top,
    container,
    elem,
    elemBg,
    hideBackDrop,
    duration = 300,
  ) => {
    $(container).show();
    $(elemBg).animate(
      {
        opacity: hideBackDrop ? 1 : 0.6,
      },
      duration,
    );
    if (left) {
      elem.style.marginLeft = `${elem.offsetWidth * -1}px`;
      $(elem).animate(
        {
          marginLeft: 0,
        },
        duration,
      );
    } else if (right) {
      elem.style.marginRight = `${elem.offsetWidth * -1}px`;
      $(elem).animate(
        {
          marginRight: 0,
        },
        duration,
      );
    } else if (bottom) {
      elem.style.marginBottom = `${elem.offsetHeight * -1}px`;
      $(elem).animate(
        {
          marginBottom: 0,
        },
        duration,
      );
    } else if (top) {
      elem.style.marginTop = `${elem.offsetHeight * -1}px`;
      $(elem).animate(
        {
          marginTop: 0,
        },
        duration,
      );
    }
  };

  animateOut = (
    left,
    right,
    bottom,
    top,
    container,
    elem,
    elemBg,
    callBack,
    duration = 300,
  ) => {
    $(container).hide();
    $(elemBg).animate(
      {
        opacity: 0,
      },
      duration,
      callBack,
    );
    if (left) {
      $(elem).animate(
        {
          marginLeft: `${elem.offsetWidth * -1}px`,
        },
        duration,
      );
    } else if (right) {
      $(elem).animate(
        {
          marginRight: `${elem.offsetWidth * -1}px`,
        },
        duration,
      );
    } else if (bottom) {
      $(elem).animate(
        {
          marginBottom: `${elem.offsetHeight * -1}px`,
        },
        duration,
      );
    } else if (top) {
      $(elem).animate(
        {
          marginTop: `${elem.offsetHeight * -1}px`,
        },
        duration,
      );
    }
  };

  getContainerDefaultStyle = (left, right, bottom, top) => {
    if (left) {
      return {
        left: 0,
        height: '100%',
        width: 'auto',
      };
    }
    if (right) {
      return {
        right: 0,
        height: '100%',
        width: 'auto',
      };
    }
    if (bottom) {
      return {
        bottom: 0,
        width: '100%',
        height: 'auto',
      };
    }
    if (top) {
      return {
        top: 0,
        width: '100%',
        height: 'auto',
      };
    }
    return null;
  };

  close = (event) => {
    const {
      left, right, bottom, top,
    } = this.props;
    this.animateOut(
      left,
      right,
      bottom,
      top,
      this.containerRef.current,
      this.containerChildRef.current,
      this.conatinerBgRef.current,
      () => { if (this.props.onClose) this.props.onClose({ event }); },
    );
  };

  render() {
    const {
      left,
      right,
      bottom,
      top,
      autoClose,
      hideBackDrop,
      children,
      ...otherProps
    } = this.props;
    return (
      <div
        ref={this.containerRef}
        css={[
          styles.container,
        ]}
        {...otherProps}
      >
        <div
          ref={this.conatinerBgRef}
          onClick={autoClose ? this.close : undefined}
          css={[
            styles.bg,
          ]}
          className={BEMClassNames.bg}
        />

        <div
          ref={this.containerChildRef}
          css={[
            styles.child,
            this.getContainerDefaultStyle(left, right, bottom, top),
          ]}
          className={BEMClassNames.children}
        >
          {typeof children === 'function' ? children(this.close) : children}
        </div>
      </div>
    );
  }
}

export default Portal;
