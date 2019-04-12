/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Label from 'reactify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  customColorCode,
  childrenCode,
  customClass,
  customSizeCode,
} from './code-refrence';
import './label.scss';

const LabelDemo = () => (
  <div>
    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Simple Use</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#simpleUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Label>
          Simple Label
        </Label>
        <div id="simpleUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{simpleCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Custom Sizes</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customSizeDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Label size="small" className="mb-2">
          Small Label
        </Label>
        <br />
        <Label size="medium" className="mb-2">
          Medium Label
        </Label>
        <br />
        <Label size="large" className="mb-2">
          Large Label
        </Label>
        <br />
        <Label size="35px" className="mb-2">
          Label with size 35px
        </Label>
        <br />

        <div id="customSizeDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customSizeCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Themes</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customThemeDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Label theme="default" className="mb-2">
          Default Theme
        </Label>
        <br />
        <Label theme="dark" className="mb-2">
          Dark Theme
        </Label>
        <br />
        <Label theme="light" className="mb-2">
          Light Theme
        </Label>
        <br />
        <Label theme="info" className="mb-2">
          Info Theme
        </Label>
        <br />
        <Label theme="warning" className="mb-2">
          Warning Theme
        </Label>
        <br />
        <Label theme="danger" className="mb-2">
          Danger Theme
        </Label>
        <br />
        <Label theme="success" className="mb-2">
          Success Theme
        </Label>

        <div id="customThemeDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customThemeCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Disabled</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#disabledDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Label disabled>
          Disabled Label
        </Label>
        <br />

        <div id="disabledDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{disabledCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Children</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#childrenDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Label size="medium" className="p-2">
          <div className="card text-dark" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </Label>
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
        <Label color="violet">
          Simple Label
        </Label>
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
        <Label className="text-light bg-dark p-2 shadow">
          Simple Label
        </Label>
        <br />

        <div id="customClassDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customClass}</SyntaxHighlighter>
        </div>
      </div>
    </section>
  </div>
);

export default LabelDemo;
