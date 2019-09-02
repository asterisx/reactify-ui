import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
import { throttle } from 'throttle-debounce';
import {
  themePropTypes,
  defaultThemePropTypes,
  errorLogger,
} from '../../common';
import { Pane, Resizer } from './components';
import { styles } from './styles';
import { errors } from './errors';

class SplitPane extends React.Component {
  /**
   * Used for error logging
   * @static
   * @memberof SplitPane
   */
  static componentName = 'Split Pane';

  static propTypes = {
    /**
     * A collection of valid theme types, all boolean values
     */
    ...themePropTypes,
    /**
     * If 'true' the split pane is in vertical mode
     * Defaults to 'false'
     */
    vertical: PropTypes.bool,
    disabled: PropTypes.bool,
    /**
     * Callback fired when the resize occurs.
     *
     * @param {number} delta The value change
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    ...defaultThemePropTypes,
    vertical: false,
    disabled: false,
    onChange: undefined,
  }

  containerRef = React.createRef();

  pane1Ref = React.createRef();

  pane2Ref = React.createRef();

  state = {
    isDragging: false,
    initialSizePane1: undefined,
    initialSizePane2: undefined,
  }

  throttledResizeListener = undefined;

  componentDidMount() {
    this.throttledResizeListener = throttle(10, this.resizePanel);
    this.addEventListeners();
    this.calculateAndSetClientSize();
  }

  calculateAndSetClientSize = () => {
    if (!this.pane1Ref.current || !this.pane2Ref.current) { return; }

    const { vertical } = this.props;

    const sizePane1 = vertical
      ? this.pane1Ref.current.clientHeight
      : this.pane1Ref.current.clientWidth;

    const sizePane2 = vertical
      ? this.pane2Ref.current.clientWidth
      : this.pane2Ref.current.clientWidth;

    this.setState({
      initialSizePane1: sizePane1,
      initialSizePane2: sizePane2,
      currentSizePane1: sizePane1,
      currentSizePane2: sizePane2,
    });
  }

  addEventListeners = () => {
    const currentContainerRef = this.containerRef.current;
    if (currentContainerRef) {
      currentContainerRef.addEventListener('mousemove', this.throttledResizeListener);
      currentContainerRef.addEventListener('mouseup', this.stopResize);
      currentContainerRef.addEventListener('touchmove', this.resizePanel);
      currentContainerRef.addEventListener('touchend', this.stopResize);
    }
  }

  removeEventListeners = () => {
    const currentContainerRef = this.containerRef.current;
    if (currentContainerRef) {
      currentContainerRef.removeEventListener('mousemove', this.throttledResizeListener);
      currentContainerRef.removeEventListener('mouseup', this.stopResize);
      currentContainerRef.removeEventListener('touchmove', this.resizePanel);
      currentContainerRef.removeEventListener('touchend', this.stopResize);
    }
  }


  startResize = (event) => {
    let startPoint;
    if (event.type === 'touchstart') {
      startPoint = this.props.vertical ? event.touches[0].clientY : event.touches[0].clientX;
    } else {
      startPoint = this.props.vertical ? event.clientY : event.clientX;
    }
    this.setState({
      isDragging: true,
      dragStartPoint: startPoint,
    });
  }

  stopResize = () => {
    if (this.state.isDragging) {
      this.setState(prevState => ({
        /**
         * For the next drag, the initial size becomes the size when the current resizing ends
         * This is important because the initial size is used for comparing the resize change
         */
        initialSizePane1: prevState.currentSizePane1,
        initialSizePane2: prevState.currentSizePane2,
        isDragging: false,
      }));
    }
  }

  resizePanel = (event) => {
    if (this.state.isDragging) {
      event.preventDefault();
      let movePoint;
      if (event.type === 'touchmove') {
        movePoint = this.props.vertical ? event.touches[0].clientY : event.touches[0].clientX;
      } else {
        movePoint = this.props.vertical ? event.clientY : event.clientX;
      }
      const delta = movePoint - this.state.dragStartPoint;
      this.setState(prevState => ({
        /*
         * The initial size is the size at the time of beginning of resize (i.e) mouse down
         */
        currentSizePane1: Math.max(prevState.initialSizePane1 + delta, 0),
        currentSizePane2: Math.max(prevState.initialSizePane2 - delta, 0),
      }),
      () => {
        if (this.props.onChange) {
          this.props.onChange({ delta });
        }
      });
    }
  }

  render() {
    const {
      pane1Ref,
      pane2Ref,
      startResize,
    } = this;

    const {
      children,
      vertical,
      disabled,
      props,
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
      ...otherProps
    } = this.props;

    const childrenArray = React.Children.toArray(children);

    const onlyPaneAndResizerChildrens = childrenArray
      .filter(child => child.type === Pane || child.type === Resizer);

    const panesInChildren = onlyPaneAndResizerChildrens.filter(child => child.type === Pane);

    if (panesInChildren.length !== 2) {
      errorLogger({ component: SplitPane.componentName, error: errors.notTwoPanesError });
      return null;
    }

    const resizerInChildren = onlyPaneAndResizerChildrens.filter(child => child.type === Resizer);

    if (resizerInChildren.length > 1) {
      errorLogger({ component: SplitPane.componentName, error: errors.moreThanOneResizer });
      return null;
    }

    let resizer;

    if (resizerInChildren.length === 1) {
      [resizer] = resizerInChildren;
    }

    if (!resizer) {
      resizer = (
        <Resizer
          disabled={disabled}
          primary={primary}
          secondary={secondary}
          dark={dark}
          light={light}
          info={info}
          warning={warning}
          danger={danger}
          success={success}
          theme={merge(defaultThemePropTypes.theme, theme)}
        />
      );
    }

    const childComponents = [
      panesInChildren[0],
      resizer,
      panesInChildren[1],
    ];

    return (
      <div
        ref={this.containerRef}
        css={[
          styles.container,
          vertical && styles.verticalStyle,
        ]}
        {...otherProps}
      >
        {childComponents.map((child, index) => {
          if (child.type === Pane) {
            const size = index === 0
              ? this.state.currentSizePane1 : this.state.currentSizePane2;
            const key = index === 0 ? 'pane_1' : 'pane_2';
            const eleRef = index === 0 ? pane1Ref : pane2Ref;

            const styleObj = {};
            if (size >= 0) {
              if (vertical) {
                styleObj.height = `${size}px`;
              } else {
                styleObj.width = `${size}px`;
              }
            }
            const style = { ...child.props.style, ...styleObj };

            return React.cloneElement(child, {
              key,
              eleRef,
              style,
            });
          }

          if (child.type === Resizer) {
            return React.cloneElement(child, {
              key: 'resizer',
              onMouseDown: startResize,
              vertical,
              disabled,
            });
          }
          return null;
        })}
      </div>
    );
  }
}

export default withTheme(SplitPane);
