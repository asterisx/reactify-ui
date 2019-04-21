import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DemoCard = ({
  title,
  children,
  className,
  uniqueIdentifier,
  sourceCode,
}) => (
  <section className={`card m-2 ${className || ''}`}>
    <div className="card-header d-flex justify-content-between">
      <span className="align-self-center">{title}</span>
      <button type="button" className="btn btn-light btn-xs" data-toggle="collapse" data-target={`#${uniqueIdentifier}Demo`}>Show Code</button>
    </div>
    <div className="card-body">
      {children}
      <div id={`${uniqueIdentifier}Demo`} className="collapse">
        <SyntaxHighlighter language="javascript" style={dark}>{sourceCode}</SyntaxHighlighter>
      </div>
    </div>
  </section>
);

export default DemoCard;
