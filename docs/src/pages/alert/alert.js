/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Alert from 'reactify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  borderPositionCode,
  customColorCode,
  childrenCode,
  customClass,
} from './code-refrence';
import './alert.scss';

const AlertDemo = () => (
  <div>
    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Simple Use</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#simpleUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Alert className="align-self-center">
          A simple alert
        </Alert>
        <div id="simpleUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{simpleCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Disabled</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#disabledDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Alert disabled>
          This is disabled
        </Alert>
        <br />

        <div id="disabledDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{disabledCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Direction (can accept a string or an array. Valid values 'left', 'right', 'top', 'bottom')</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#directionUseDemo">Show Code</button>
      </div>
      <div className="card-body">
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

        <div id="directionUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{borderPositionCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Children</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#childrenDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Alert checked>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </Alert>
        <br />

        <div id="childrenDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{childrenCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Custom Icon Color, any valid css color (hex, rgb etc...) will work.</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customColorDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Alert color="violet">
          Alert with custom border color
        </Alert>
        <br />

        <div id="customColorDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customColorCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Custom Class</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customClassDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Alert className="text-light bg-dark p-2">
        This Alert has custom class
        </Alert>
        <br />

        <div id="customClassDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customClass}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Themes</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customThemeDemo">Show Code</button>
      </div>
      <div className="card-body">
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

        <div id="customThemeDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customThemeCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

  </div>
);

export default AlertDemo;
