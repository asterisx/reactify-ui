import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

class FileUpload extends Component {
  static propTypes = {
    /**
     * Callback fired when files are dropped/changes.
     *
     * @param {object} obj Use something like { files } = obj to get the files
     */
    onChange: PropTypes.func,
    /**
     * If 'true' clicking the component triggers a file chooser
     * Default to 'false'
     */
    clickable: PropTypes.bool,
    /**
     * If 'true', no events
     * Default is 'false'
     */
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    onChange: undefined,
    clickable: false,
    disabled: false,
  }

  state = {
    dragOver: false,
  };

  inputRef = React.createRef();

  onDrop = (event) => {
    event.preventDefault();
    this.onDragLeave();

    let filesAdded = event.dataTransfer ? event.dataTransfer.files : event.target.files;

    if (typeof filesAdded === 'object') {
      filesAdded = Object.values(filesAdded)
        .map(value => value)
        .filter(value => typeof value === 'object');
    }

    const {
      onChange,
    } = this.props;

    if (onChange) {
      onChange({ files: filesAdded });
    }
  }

  onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragEnter = () => {
    this.setState({ dragOver: true });
  }

  onDragLeave = () => {
    this.setState({ dragOver: false });
  }

  clickFileInput = () => {
    this.inputRef.current.value = null;
    this.inputRef.current.click();
  }

  render() {
    const {
      children,
      onChange,
      clickable,
      disabled,
      ...otherProps
    } = this.props;

    const {
      onDrop,
      onDragOver,
      onDragEnter,
      onDragLeave,
      clickFileInput,
      inputRef,
    } = this;

    const {
      dragOver,
    } = this.state;

    return (
      <div
        css={[
          disabled && styles.getDisabledStyle({
            disabled,
          }),
        ]}
        {...otherProps}
      >
        <input
          type="file"
          css={[
            styles.noDisplay,
          ]}
          ref={inputRef}
          onChange={onDrop}
        />
        <div
          onClick={() => clickable && clickFileInput()}
          css={[
            clickable && styles.cursorPointer,
          ]}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
        >
          {typeof children === 'function' ? children({ dragOver }) : children}
        </div>
      </div>
    );
  }
}
export default FileUpload;
