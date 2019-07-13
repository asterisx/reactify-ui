/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FileUpload } from '@../../../../reactify-ui/build';
import {
  clickableCode,
  disabledCode,
  simpleCode,
} from './code-refrence';

import {
  clickableLink,
  disabledLink,
  simpleLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Dropdown',
    link: `${Constants.componentsPath}/dropdown`,
  },
  nextLink: {
    text: 'Full Screen',
    link: `${Constants.componentsPath}/full-screen`,
  },
};

const FileUploadDemo = () => (
  <DemoPage componentName="File Upload">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/file-upload`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <h6>Check console for onChange event</h6>
      <FileUpload
        onChange={(...args) => console.log(...args)}
      >
        {({ dragOver }) => (
          <div className={`d-flex justify-content-center align-items-center file-upload_fixed-size ${dragOver ? 'file-upload_hovered' : ''}`}>
            Drop Files Here
          </div>
        )}
      </FileUpload>
    </DemoCard>

    <DemoCard
      title="Clickable"
      sourceCode={clickableCode}
      externalSampleLink={clickableLink}
    >
      <h6>Check console for onChange event</h6>
      <FileUpload
        clickable
        onChange={(...args) => console.log(...args)}
      >
        {({ dragOver }) => (
          <div className={`d-flex justify-content-center align-items-center file-upload_fixed-size file-upload_hoverable ${dragOver ? 'file-upload_hovered' : ''}`}>
            Drop Files Here or Click
          </div>
        )}
      </FileUpload>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <FileUpload
        disabled
      >
        {({ dragOver }) => (
          <div className={`d-flex justify-content-center align-items-center file-upload_fixed-size ${dragOver ? 'file-upload_hovered' : ''}`}>
            Drop Files Here
          </div>
        )}
      </FileUpload>
    </DemoCard>

    <BottomNav
      className="mt-4 mb-4"
      prevLinkText={bottomNavLinks.prevLink.text}
      prevLink={bottomNavLinks.prevLink.link}
      nextLinkText={bottomNavLinks.nextLink.text}
      nextLink={bottomNavLinks.nextLink.link}
    />
  </DemoPage>
);

export default withHeader(FileUploadDemo);
