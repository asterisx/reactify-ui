/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Badge from 'reactify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  customPositionCode,
  customColorCode,
  childrenCode,
  customClass,
  customSizeCode,
} from './code-refrence';
import './badge.scss';

const BadgeDemo = () => (
  <div>
    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Simple Use</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#simpleUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Badge className="align-self-center" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
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
        <Badge size="small" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <Badge size="medium" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="100px" width="100px" />
        </Badge>
        <br />
        <Badge size="large" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="200px" width="200px" />
        </Badge>
        <br />
        <Badge size="35px" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="200px" width="200px" />
        </Badge>
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
        <Badge theme="default" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <Badge theme="dark" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <Badge theme="light" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <Badge theme="info" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <Badge theme="warning" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <Badge theme="danger" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <Badge theme="success" className="pb-2" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>

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
        <Badge disabled count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />

        <div id="disabledDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{disabledCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Position: (Valid values 'top-left', 'top-right', 'bottom-left', 'bottom-right')</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#directionUseDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Badge position="top-left" size="small" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <br />
        <Badge position="top-right" size="small" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <br />
        <Badge position="bottom-right" size="small" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <br />
        <Badge position="bottom-left" size="small" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />
        <br />

        <div id="directionUseDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customPositionCode}</SyntaxHighlighter>
        </div>
      </div>
    </section>

    <section className="card m-2">
      <div className="card-header d-flex justify-content-between mb-3">
        <span className="align-self-center">Children</span>
        <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target="#childrenDemo">Show Code</button>
      </div>
      <div className="card-body">
        <Badge size="medium" count="10">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </Badge>
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
        <Badge color="violet" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
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
        <Badge className="text-light bg-dark p-2 shadow" count="10">
          <img className="img-message" src="../../../assets/mail.png" height="50px" width="50px" />
        </Badge>
        <br />

        <div id="customClassDemo" className="collapse">
          <SyntaxHighlighter language="javascript" style={dark}>{customClass}</SyntaxHighlighter>
        </div>
      </div>
    </section>
  </div>
);

export default BadgeDemo;
