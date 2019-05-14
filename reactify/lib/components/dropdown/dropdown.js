import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'throttle-debounce';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Portal, ListPanel } from '../..';
import {
  defaultThemePropTypes,
  defaultSizePropTypes,
  themePropTypes,
  sizePropTypes,
  screenSizesInPx,
} from '../../common';
import { styles, BEMClassNames } from './styles';

class Dropdown extends Component {
    static Item = ({ children, ...otherProps }) => <span {...otherProps}>{children}</span>

    state = {
      screenIsSm: false,
      screenIsMd: false,
      screenIsLg: false,
      screenIsXl: false,
      isTrayOpen: this.props.trayOpen,
    }

    throttledResizeListener = undefined;

    absoluteContainerRef = React.createRef();

    componentDidMount() {
      this.throttledResizeListener = throttle(300, this.updateWindowDimensions);
      window.addEventListener('resize', this.throttledResizeListener);
      this.updateWindowDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.throttledResizeListener);
    }

    getListPanel = (items, props, callback) => (
      <ListPanel css={[styles.listPanel]} {...props} onSelectionChange={callback}>
        {React.Children.map(items,
          (item) => {
            const { children, ...otherProps } = item.props;
            return <ListPanel.Item {...otherProps}>{children}</ListPanel.Item>;
          })}
      </ListPanel>
    )

    trayToggle = () => {
      this.setState(prevProps => ({ isTrayOpen: !prevProps.isTrayOpen }));
    }

    onSelectedIndex = ({ index, selected }) => {
      const { onSelectionChange } = this.props;
      if (onSelectionChange) onSelectionChange({ index, selected });
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

    setToFocus = (elem) => {
      elem.focus();
    }

    render() {
      const {
        children,
        label,
        sm,
        md,
        lg,
        xl,
        onSelectionChange,
        trayOpen,
        disabled,
        className,
        ...otherProps
      } = this.props;
      const {
        screenIsSm, screenIsMd, screenIsLg, screenIsXl, isTrayOpen,
      } = this.state;
      const { getListPanel, onSelectedIndex, trayToggle } = this;

      return (
        <div
          css={[styles.container, styles.getDisabledStyle({ disabled })]}
          onClick={() => trayToggle()}
          className={className}
        >
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
                {closePortal => getListPanel(children, otherProps,
                  ({ index, selected }) => { onSelectedIndex({ index, selected }); closePortal(); })
                }
              </Portal>
            )
            : (() => {
              setTimeout(() => this.setToFocus(this.absoluteContainerRef.current), 0); return (
                <div
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                  tabIndex={0}
                  css={[styles.absolute]}
                  ref={this.absoluteContainerRef}
                  onBlur={trayToggle}
                >
                  {getListPanel(
                    children,
                    otherProps,
                    ({ index, selected }) => { onSelectedIndex({ index, selected }); },
                  )
                }
                </div>
              );
            })())}
        </div>
      );
    }
}

Dropdown.propTypes = {
  bordered: PropTypes.bool,
  singular: PropTypes.bool,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  trayOpen: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  label: PropTypes.any,
  ...themePropTypes,
  ...sizePropTypes,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  onSelectionChange: PropTypes.func,
};

Dropdown.defaultProps = {
  bordered: true,
  singular: true,
  multiple: false,
  disabled: false,
  trayOpen: false,
  label: 'Please select a value',
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  onSelectionChange: () => {},
};

export default Dropdown;
