import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FileUpload extends Component {
  static propTypes = {
    /**
     * Callback fired when files are dropped/changes.
     *
     * @param {object} obj Use { files } = obj to get the files
     */
    onChange: PropTypes.func,
    /**
     * Callback fired when files are dropped/changes.
     *
     * @param {object} obj Use { code } = obj and reconcile it with
     * FileUpload.errorMeta to check for available codes,
     * To access file itself, Use { file } = obj
     */
    onError: PropTypes.func,
    /**
     * Maps to a input type='file' accepts attribute,
     * but instead of a string,
     * pass an array of string
     */
    allowedFileTypes: PropTypes.arrayOf(PropTypes.string),
    /**
     * If 'true' multiple files can be uploaded
     * Default to 'false'
     */
    multiple: PropTypes.bool,
    /**
     * The upper limit to number of files than can be uploaded
     */
    maxFiles: PropTypes.number,
    /**
     * The upper limit to the size of a file
     */
    maxFileSize: PropTypes.number,
    /**
     * The lower limit to the size of a file
     */
    minFileSize: PropTypes.number,
    /**
     * If 'true' clicking the component triggers a file chooser
     * Default to 'false'
     */
    clickable: PropTypes.bool,
  }

  static defaultProps = {
    onChange: undefined,
    onError: undefined,
    allowedFileTypes: undefined,
    multiple: true,
    maxFiles: Infinity,
    maxFileSize: Infinity,
    minFileSize: 0,
    clickable: true,
  }

  static errorMeta = {
    notAValidType: {
      code: 1,
    },
    sizeTooLarge: {
      code: 2,
    },
    sizeTooSmall: {
      code: 3,
    },
    maxFileCountReached: {
      code: 4,
    },
  }

  state = {
    files: [],
    dragOver: false,
  };

  dropzoneRef = React.createRef();

  onDrop = (event) => {
    event.preventDefault();
    this.onDragLeave(event);

    let filesAdded = event.dataTransfer ? event.dataTransfer.files : event.target.files;

    if (this.props.multiple === false && filesAdded.length > 1) {
      filesAdded = [filesAdded[0]];
    }

    const files = [];
    for (let i = 0; i < filesAdded.length; i += 1) {
      const file = filesAdded[i];
      /**
       * These (meta) properties can be useful to the user
       * viz: extension, size (readable), preview
       */
      file.extension = this.fileExtension(file);
      file.sizeReadable = this.fileSizeReadable(file.size);
      if (file.type && this.mimeTypeLeft(file.type) === 'image') {
        file.preview = {
          type: 'image',
          url: window.URL.createObjectURL(file),
        };
      } else {
        file.preview = {
          type: 'file',
        };
      }

      if (this.state.files.length + files.length >= this.props.maxFiles) {
        this.onError({
          code: FileUpload.errorMeta.maxFileCountReached.code,
          file,
        });
        break;
      }

      if (this.fileTypeAcceptable(file) && this.fileSizeAcceptable(file)) {
        files.push(file);
      }
    }
    this.setState(prevState => ({
      files: this.props.multiple === false
        ? files
        : [...prevState.files, ...files],
    }), () => {
      this.props.onChange({ files: this.state.files });
    });
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

  onError = (error, file) => {
    this.props.onError({ error, file });
  }

  mimeTypeLeft = mime => mime.split('/')[0]

  mimeTypeRight = mime => mime.split('/')[1]

  fileSizeReadable = (size) => {
    switch (size) {
      case size >= 1000000000:
        return `${Math.ceil(size / 1000000000)}GB`;
      case size >= 1000000:
        return `${Math.ceil(size / 1000000)}MB`;
      case size >= 1000:
        return `${Math.ceil(size / 1000)}KB`;
      default:
        return `${Math.ceil(size)}B`;
    }
  }

  fileExtension = (file) => {
    const extensionSplit = file.name.split('.');
    if (extensionSplit.length > 1) {
      return extensionSplit[extensionSplit.length - 1];
    }
    return 'none';
  }

  fileTypeAcceptable = (file) => {
    const { allowedFileTypes } = this.props;

    if (!allowedFileTypes) {
      return true;
    }

    const isAcceptable = allowedFileTypes.some((allowedfileType) => {
      if (file.type) {
        const fileTypeLeft = this.mimeTypeLeft(file.type);
        const fileTypeRight = this.mimeTypeRight(file.type);
        const [allowedFileTypeLeftPart, allowedFileTypeRightPart] = allowedfileType.split('/');
        if (allowedFileTypeLeftPart && allowedFileTypeRightPart) {
          if (allowedFileTypeRightPart === fileTypeLeft && (allowedFileTypeRightPart === '*' || allowedFileTypeRightPart === fileTypeRight)) {
            return true;
          }
        }
      } else if (file.extension) {
        const ext = allowedfileType.substr(1);
        return file.extension.toLowerCase() === ext.toLowerCase();
      }
      return false;
    });

    if (!isAcceptable) {
      this.onError({
        code: FileUpload.errorMeta.notAValidType.code,
        file,
      });
    }

    return isAcceptable;
  }

  fileSizeAcceptable = (file) => {
    if (file.size > this.props.maxFileSize) {
      this.onError({
        code: FileUpload.errorMeta.sizeTooLarge.code,
        file,
      });
      return false;
    } if (file.size < this.props.minFileSize) {
      this.onError({
        code: FileUpload.errorMeta.sizeTsizeTooSmallooLarge.code,
        file,
      });
      return false;
    }
    return true;
  }

  openFileChooser = () => {
    this.inputElement.value = null;
    this.inputElement.click();
  }

  render() {
    const {
      children,
      onChange,
      onError,
      accepts,
      multiple,
      maxFiles,
      maxFileSize,
      minFileSize,
      clickable,
      ...otherProps
    } = this.props;

    const {
      onDrop,
      onDragOver,
      onDragEnter,
      onDragLeave,
      openFileChooser,
      dropzoneRef,
    } = this;

    const {
      dragOver,
    } = this.state;
    return (
      <div
        {...otherProps}
      >
        <div
          onClick={() => clickable && openFileChooser()}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          ref={dropzoneRef}
        >
          {typeof children === 'function' ? children({ dragOver }) : children}
        </div>
      </div>
    );
  }
}
export default FileUpload;
