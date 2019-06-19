/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FileUpload } from 'reactify';
import {
  clickableCode,
  disabledCode,
  simpleCode,
} from './code-refrence';
import './file-upload.scss';
import DemoCard from '../../components/demo-card';

const FileUploadDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <h6>Check console for onChange event</h6>
      <FileUpload
        onChange={(...args) => console.log(...args)}
      >
        {({ dragOver }) => (
          <div className={`d-flex justify-content-center align-items-center fixed-size ${dragOver ? 'hovered' : ''}`}>
            Drop Files Here
          </div>
        )}
      </FileUpload>
    </DemoCard>

    <DemoCard
      title="Clickable"
      uniqueIdentifier="clickableUse"
      sourceCode={clickableCode}
    >
      <h6>Check console for onChange event</h6>
      <FileUpload
        clickable
        onChange={(...args) => console.log(...args)}
      >
        {({ dragOver }) => (
          <div className={`d-flex justify-content-center align-items-center fixed-size hoverable ${dragOver ? 'hovered' : ''}`}>
            Drop Files Here or Click
          </div>
        )}
      </FileUpload>
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <FileUpload
        disabled
      >
        {({ dragOver }) => (
          <div className={`d-flex justify-content-center align-items-center fixed-size ${dragOver ? 'hovered' : ''}`}>
            Drop Files Here
          </div>
        )}
      </FileUpload>
    </DemoCard>
  </div>
);

export default FileUploadDemo;
