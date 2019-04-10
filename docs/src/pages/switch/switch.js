import React from 'react';
import Switch from 'reactify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  simpleUse, checkedUse, customIconUse, customSizeUse, customThemeUse, onChangeDemo,
} from './code-refrence';
import './switch.scss';

const SwitchDemo = () => (
  <div>
    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Simple Use</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#simpleUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Switch className="align-self-center" />
        <div id="simpleUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{simpleUse}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Checked</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#checkedUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Switch checked />
        <br />

        <div id="checkedUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{checkedUse}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Custom Icon Color, any valid css color (hex, rgb etc...) will work.</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customIconDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Switch iconColor="red" checked />
        <br />

        <div id="customIconDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customIconUse}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Custom Size</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customSizeDemo">Show Code</button>
      </div>
      <div className="card-body">
        <h6 className="dropdown-item">size="small"</h6>
        <Switch size="small" />
        <br />
        <h6 className="dropdown-item">size="medium"</h6>
        <Switch size="medium" />
        <br />
        <h6 className="dropdown-item">size="large"</h6>
        <Switch size="large" />
        <br />
        <h6 className="dropdown-item">size="40px"</h6>
        <Switch size="40px" />
        <br />

        <div id="customSizeDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customSizeUse}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Themes</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customThemeDemo">Show Code</button>
      </div>
      <div className="card-body">
        <h6 className="dropdown-item">default</h6>
        <Switch theme="default" checked />
        <br />
        <h6 className="dropdown-item">theme="dark"</h6>
        <Switch theme="dark" checked />
        <br />
        <h6 className="dropdown-item">theme="light"</h6>
        <Switch theme="light" checked />
        <br />
        <h6 className="dropdown-item">theme="info"</h6>
        <Switch theme="info" checked />
        <br />
        <h6 className="dropdown-item">theme="warning"</h6>
        <Switch theme="warning" checked />
        <br />
        <h6 className="dropdown-item">theme="danger"</h6>
        <Switch theme="danger" checked />
        <br />
        <h6 className="dropdown-item">theme="success"</h6>
        <Switch theme="success" checked />
        <br />

        <div id="customThemeDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customThemeUse}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">onChange Event</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#onChangeDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Switch onChange={val => alert(`checked: ${val}`)} />
        <br />

        <div id="onChangeDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{onChangeDemo}</SyntaxHighlighter>
        </div>
      </div>
    </section>
  </div>
);

export default SwitchDemo;
