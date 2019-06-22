import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoIosExpand, IoIosContract } from 'react-icons/io';
import { styles, BEMClassNames } from './styles';

class FullScreen extends Component {
  static propTypes = {
    /**
     * If 'true', the component is expanded by default
     * Default is 'false'
     */
    expanded: PropTypes.bool,
    /**
     * If 'true', the icon is hidden
     * Default is 'false'
     */
    hideIcon: PropTypes.bool,
    /**
     * If 'true', the expanded state can be contracted with esc key
     * Default is 'false'
     */
    contractOnEscapeKey: PropTypes.bool,
    /**
     * If 'true', the component is disabled
     * Default is 'false'
     */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    expanded: false,
    hideIcon: false,
    contractOnEscapeKey: false,
    disabled: false,
  };

  state = { prevContainerState: {}, expanded: this.props.expanded };

  containerRef = React.createRef();

  componentDidMount() {
    if (this.props.contractOnEscapeKey) {
      this.containerRef.current.addEventListener('keydown', this.handleKeyDown, true);
    }
  }

  componentWillUnmount() {
    if (this.props.contractOnEscapeKey) {
      this.containerRef.current.removeEventListener('keydown', this.handleKeyDown, true);
    }
  }

  handleKeyDown = (event) => {
    const ESCAPE_KEY = 27;
    switch (event.keyCode) {
      case ESCAPE_KEY:
        if (this.state.expanded) { this.setState({ expanded: false }); }
        break;
      default:
        break;
    }
  }

  saveCurrentContainerState = () => {
    const currentElement = this.containerRef.current;
    this.setState({
      prevContainerState: {
        position: currentElement.style.position,
        width: currentElement.style.width,
        height: currentElement.style.height,
        left: currentElement.style.left,
        top: currentElement.style.top,
        right: currentElement.style.right,
        bottom: currentElement.style.bottom,
      },
    });
  }

  resetContainerState = () => {
    const previousContainerState = this.state.prevContainerState;
    const currentContainerStyle = this.containerRef.current.style;

    const cssProperties = ['position', 'width', 'height', 'left', 'top', 'right', 'bottom'];
    cssProperties.forEach(
      (prop) => { currentContainerStyle[prop] = previousContainerState[prop]; },
    );
  }

  expand = () => {
    this.saveCurrentContainerState();
    this.setState({ expanded: true });
  }

  reset = () => {
    this.resetContainerState();
    this.setState({ expanded: false });
  }

  render() {
    const {
      contractOnEscapeKey,
      disabled,
      expanded,
      hideIcon,
      children,
      ...otherProps
    } = this.props;
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    const iconExpand = <span onClick={this.expand}><IoIosExpand /></span>;
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    const iconContract = <span onClick={this.reset}><IoIosContract /></span>;

    const iconToShow = this.state.expanded ? iconContract : iconExpand;
    return (
      <div
        css={[
          styles.container,
          this.state.expanded ? styles.expanded : undefined,
        ]}
        tabIndex="-1"
        ref={this.containerRef}
        {...otherProps}
      >
        {!hideIcon && (
        <div
          css={[
            styles.icon,
            styles.getDisabledStyle({
              disabled,
            }),
          ]}
          className={BEMClassNames.icon}
        >
          {iconToShow}
        </div>
        )}
        {typeof children === 'function' ? children({ expand: this.expand, reset: this.reset }) : children}
      </div>
    );
  }
}

export default FullScreen;
