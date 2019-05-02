import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoIosExpand, IoIosContract } from 'react-icons/io';
import { styles, BEMClassNames } from './styles';

class FullScreen extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    showIcon: PropTypes.bool,
    contractOnEscapeKey: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    expanded: false,
    showIcon: true,
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
      showIcon,
      className,
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
        {showIcon && (
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
        {children}
      </div>
    );
  }
}

export default FullScreen;
