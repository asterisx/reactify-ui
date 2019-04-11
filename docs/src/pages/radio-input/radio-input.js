import React from 'react';
import RadioInput from 'reactify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  simpleCode,
  checkedCode,
  disabledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
  labelCode,
  labelPositionCode,
  childrenCode,
  customClass,
} from './code-refrence';
import './radio-input.scss';

const RadioInputDemo = () => (
  <div>
    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Simple Use</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#simpleUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput className="align-self-center" />
        <div id="simpleUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{simpleCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Checked</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#checkedUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput checked />
        <br />

        <div id="checkedUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{checkedCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Disabled</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#disabledDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput checked disabled label="This is disabled" />
        <br />

        <div id="disabledDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{disabledCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>


    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Label (default is "right")</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#labelUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput checked label="Dogs, cats and birds" />
        <br />

        <div id="labelUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{labelCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Label Position</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#labelPositionUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput checked label="Dogs, cats and birds" labelPosition="left" />
        <br />

        <div id="labelPositionUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{labelPositionCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Children</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#childrenDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput checked>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </RadioInput>
        <br />

        <div id="childrenDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{childrenCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Custom Icon Color, any valid css color (hex, rgb etc...) will work.</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customIconDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput iconColor="red" checked />
        <br />

        <div id="customIconDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customIconCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Custom Class</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customClassDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput className="text-light bg-dark p-2" label="This is a label" />
        <br />

        <div id="customClassDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customClass}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Custom Size</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#customSizeDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput size="small" label='size="small"' />
        <br />
        <RadioInput size="medium" label='size="medium"' />
        <br />
        <RadioInput size="large" label='size="large"' />
        <br />
        <RadioInput size="40px" label='size="40px"' />
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
        <RadioInput theme="default" className="pb-2" checked label={'theme="default"'} />
        <br />
        <RadioInput theme="dark" className="pb-2" checked label={'theme="dark"'} />
        <br />
        <RadioInput theme="light" className="pb-2" checked label={'theme="light"'} />
        <br />
        <RadioInput theme="info" className="pb-2" checked label={'theme="info"'} />
        <br />
        <RadioInput theme="warning" className="pb-2" checked label={'theme="warning"'} />
        <br />
        <RadioInput theme="danger" className="pb-2" checked label={'theme="danger"'} />
        <br />
        <RadioInput theme="success" checked label={'theme="success'} />
        <br />

        <div id="customThemeDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customThemeCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">onChange Event</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#onChangeDemo">Show Code</button>
      </div>
      <div className="card-body">
        <RadioInput onChange={val => alert(`checked: ${val}`)} />
        <br />

        <div id="onChangeDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{onChangeCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>
  </div>
);

export default RadioInputDemo;
