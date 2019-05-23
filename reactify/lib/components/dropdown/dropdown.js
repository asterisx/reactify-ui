import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'throttle-debounce';
import { IoMdArrowDropdown } from 'react-icons/io';
import Portal from '../portal';
import {
  screenSizesInPx,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class Dropdown extends Component {
  static propTypes = {
    /**
     * If 'true', the component is disabled
     * Default is 'false'
     */
    disabled: PropTypes.bool,
    /**
     * If 'true', the dropdown's try is open, i.e dropdown is displaying content
     * Default is 'false'
     */
    trayOpen: PropTypes.bool,
    /**
     * The label prop, can be any valid react element,
     */
    // eslint-disable-next-line react/forbid-prop-types
    label: PropTypes.any,
    /**
     * If 'true', the view is optimized for sm screens
     * Defaults to 'false'
     */
    sm: PropTypes.bool,
    /**
     * If 'true', the view is optimized for md screens
     * Defaults to 'false'
     */
    md: PropTypes.bool,
    /**
     * If 'true', the view is optimized for lg screens
     * Defaults to 'false'
     */
    lg: PropTypes.bool,
    /**
     * If 'true', the view is optimized for xl screens
     * Defaults to 'false'
     */
    xl: PropTypes.bool,
  }

  static defaultProps = {
    disabled: false,
    trayOpen: false,
    label: '',
    sm: false,
    md: false,
    lg: false,
    xl: false,
  }

  state = {
    screenIsSm: false,
    screenIsMd: false,
    screenIsLg: false,
    screenIsXl: false,
    isTrayOpen: this.props.trayOpen,
    prevOpenProp: this.props.trayOpen,
  }

  throttledResizeListener = undefined;

  static getDerivedStateFromProps(props, state) {
    if (props.trayOpen !== state.prevOpenProp) {
      return {
        isTrayOpen: props.trayOpen,
        prevOpenProp: props.trayOpen,
      };
    }
    return null;
  }

  componentDidMount() {
    this.throttledResizeListener = throttle(200, this.updateWindowDimensions);
    window.addEventListener('resize', this.throttledResizeListener);
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttledResizeListener);
  }

  closeTray = () => {
    this.setState(({ isTrayOpen: false }));
  }

  toggleTray = () => {
    this.setState(prevState => ({ isTrayOpen: !prevState.isTrayOpen }));
  }

  updateWindowDimensions = () => {
    if (window.innerWidth <= screenSizesInPx.screenSm) {
      this.setState({
        screenIsSm: true,
        screenIsMd: false,
        screenIsLg: false,
        screenIsXl: false,
      });
    } else if (window.innerWidth <= screenSizesInPx.screenMd) {
      this.setState({
        screenIsSm: false,
        screenIsMd: true,
        screenIsLg: false,
        screenIsXl: false,
      });
    } else if (window.innerWidth <= screenSizesInPx.screenLg) {
      this.setState({
        screenIsSm: false,
        screenIsMd: false,
        screenIsLg: true,
        screenIsXl: false,
      });
    } else if (window.innerWidth <= screenSizesInPx.screenXl) {
      this.setState({
        screenIsSm: false,
        screenIsMd: false,
        screenIsLg: false,
        screenIsXl: true,
      });
    }
  }

  render() {
    const {
      children,
      label,
      sm,
      md,
      lg,
      xl,
      trayOpen,
      disabled,
      ...otherProps
    } = this.props;

    const {
      screenIsSm, screenIsMd, screenIsLg, screenIsXl, isTrayOpen,
    } = this.state;

    const {
      toggleTray, closeTray,
    } = this;

    return (
      <div
        css={[styles.container, styles.getDisabledStyle({ disabled })]}
        onClick={toggleTray}
        {...otherProps}
      >

        {isTrayOpen && <div css={styles.hiddenFixed} />}

        <span>{label}</span>

        <IoMdArrowDropdown className={BEMClassNames.icon} />

        {isTrayOpen && (((sm && screenIsSm)
            || (md && screenIsMd)
            || (lg && screenIsLg)
            || (xl && screenIsXl))
          ? (
            <Portal
              bottom
            >
              {closePortal => (typeof children === 'function' ? children({ closeTray: () => { closePortal(); closeTray(); } }) : children)}
            </Portal>
          )
          : (
            <div
              css={[styles.absolute]}
            >
              {typeof children === 'function' ? children({ closeTray }) : children}
            </div>
          )
        )}
      </div>
    );
  }
}

export default Dropdown;
