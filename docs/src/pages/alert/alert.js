/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Alert } from 'reactify';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  borderPositionCode,
  customColorCode,
  childrenCode,
  customClassCode,
} from './code-refrence';
import './alert.scss';
import DemoCard from '../../components/demo-card';

const AlertDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Alert className="align-self-center">
          A simple alert
      </Alert>
    </DemoCard>

    <DemoCard
      title="Checked"
      uniqueIdentifier="checkedUse"
      sourceCode={disabledCode}
    >
      <Alert disabled>
          This is disabled
      </Alert>
    </DemoCard>

    <DemoCard
      title="Direction (can accept a string or an array. Valid values 'left', 'right', 'top', 'bottom')"
      uniqueIdentifier="directionUse"
      sourceCode={borderPositionCode}
    >
      <Alert direction="left">
          This is a left alert!
      </Alert>
      <br />
      <Alert direction="right">
          This is a right alert!
      </Alert>
      <br />
      <Alert direction="top">
          This is a top alert!
      </Alert>
      <br />
      <Alert direction="bottom">
          This is a bottom alert!
      </Alert>
      <br />
      <Alert direction={['left', 'right', 'top', 'bottom']}>
          This is all direction alert!
      </Alert>
      <br />
      <Alert direction={['left', 'top']}>
          This is a two direction alert!
      </Alert>
      <br />
    </DemoCard>

    <DemoCard
      title="Children"
      uniqueIdentifier="childrenUse"
      sourceCode={childrenCode}
    >
      <Alert>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Alert>
    </DemoCard>

    <DemoCard
      title="Custom Border"
      uniqueIdentifier="customBorderUse"
      sourceCode={customColorCode}
    >
      <Alert color="violet">
          Alert with custom border color
      </Alert>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Alert className="text-light bg-dark p-2">
        This Alert has custom class
      </Alert>
    </DemoCard>

    <DemoCard
      title="Theme"
      uniqueIdentifier="customTheme"
      sourceCode={customThemeCode}
    >
      <Alert theme="default" className="pb-2">
        Default theme
      </Alert>
      <br />
      <Alert theme="dark" className="pb-2">
          Dark theme
      </Alert>
      <br />
      <Alert theme="light" className="pb-2">
          Light theme
      </Alert>
      <br />
      <Alert theme="info" className="pb-2">
          Info theme
      </Alert>
      <br />
      <Alert theme="warning" className="pb-2">
          Warning theme
      </Alert>
      <br />
      <Alert theme="danger" className="pb-2">
          Danger theme
      </Alert>
      <br />
      <Alert theme="success" className="pb-2">
          Success theme
      </Alert>
    </DemoCard>
  </div>
);

export default AlertDemo;
