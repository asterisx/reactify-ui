/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { defaultSizePropTypes, sizePropTypes } from '../../common';
import { styles, BEMClassNames } from './styles';

class Modal extends PureComponent {
  static defaultProps = {
    autoClose: true,
    hideBackDrop: false,
    ...defaultSizePropTypes,
    style: { width: undefined },
    onClose: () => {},
  };

  static propTypes = {
    autoClose: PropTypes.bool,
    hideBackDrop: PropTypes.bool,
    ...sizePropTypes,
    onClose: PropTypes.func,
  };

  containerChildRef = React.createRef();

  conatinerBgRef = React.createRef();

  containerRef = React.createRef();

  componentDidMount() {
    this.animateIn(
      this.containerRef.current,
      this.containerChildRef.current,
      this.conatinerBgRef.current,
      this.props.hideBackDrop,
    );
  }

  animateIn = (
    container,
    child,
    Bg,
    hideBackDrop,
    duration = 100,
  ) => {
    $(container).fadeIn();
    $(Bg).animate(
      {
        opacity: hideBackDrop ? 1 : 0.6,
      },
      duration,
    );
    $(child).hide().fadeIn(duration);
  };

  animateOut = (
    container,
    child,
    Bg,
    callBack,
    duration = 300,
  ) => {
    $(container).fadeOut(duration);
    $(Bg).fadeOut(duration);
    $(child).fadeOut(duration, callBack);
  };

  close = () => {
    this.animateOut(
      this.containerRef.current,
      this.containerChildRef.current,
      this.conatinerBgRef.current,
      this.props.onClose,
    );
  };

  render() {
    const {
      small,
      medium,
      large,
      autoClose,
      hideBackDrop,
      children,
      style: { width, ...otherStyles },
      ...otherProps
    } = this.props;
    return (
      <div
        ref={this.containerRef}
        css={[
          styles.container,
        ]}
        {...otherProps}
        {...otherStyles}
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
            styles.getSize({
              small,
              medium,
              large,
              width,
            }),
          ]}
          className={BEMClassNames.children}
        >
          {typeof children === 'function' ? children(this.close) : children}
        </div>
      </div>
    );
  }
}

export default Modal;
