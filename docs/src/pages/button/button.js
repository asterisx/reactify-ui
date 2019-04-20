/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button } from 'reactify';

import {
  simpleCode,
  disabledCode,
  customThemeCode,
  customColorCode,
  childrenCode,
  customClassCode,
  customSizeCode,
  clearCode,
  clearBorderedCode,
  loaderCode,
} from './code-refrence';
import './button.scss';
import DemoCard from '../../components/demo-card';

const ButtonDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Button text="Default Button" />
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      uniqueIdentifier="customSizes"
      sourceCode={customSizeCode}
    >
      <Button size="small" text="Small Button" />
      <br />
      <br />
      <Button size="medium" text="Medium Button" />
      <br />
      <br />
      <Button size="large" text="Large Button" />
      <br />
      <br />
      <Button size="35px" text="Custom Size Button" />
    </DemoCard>

    <DemoCard
      title="Custom Themes"
      uniqueIdentifier="customTheme"
      sourceCode={customThemeCode}
    >
      <Button theme="default" text="Default Button" />
      <br />
      <br />
      <Button theme="dark" text="Dark Button" />
      <br />
      <br />
      <Button theme="light" text="Light Button" />
      <br />
      <br />
      <Button theme="info" text="Info Button" />
      <br />
      <br />
      <Button theme="warning" text="Warning Button" />
      <br />
      <br />
      <Button theme="danger" text="Danger Button" />
      <br />
      <br />
      <Button theme="success" text="Success Button" />
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <Button disabled text="Disabled Button" />
    </DemoCard>

    <DemoCard
      title="Children"
      uniqueIdentifier="childrenUse"
      sourceCode={childrenCode}
    >
      <Button>
        <div className="card text-dark" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Button>
    </DemoCard>

    <DemoCard
      title="Custom Color, any valid css color (hex, rgb etc...) will work."
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Button text="Custom Color Button" color="violet" />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Button text="Custom Class Button" className="p-5" />
    </DemoCard>

    <DemoCard
      title="Clear"
      uniqueIdentifier="clear"
      sourceCode={clearCode}
    >
      <Button theme="default" clear text="Default Button" />
      <br />
      <br />
      <Button theme="dark" clear text="Dark Button" />
      <br />
      <br />
      <Button theme="light" clear text="Light Button" />
      <br />
      <br />
      <Button theme="info" clear text="Info Button" />
      <br />
      <br />
      <Button theme="warning" clear text="Warning Button" />
      <br />
      <br />
      <Button theme="danger" clear text="Danger Button" />
      <br />
      <br />
      <Button theme="success" clear text="Success Button" />
    </DemoCard>

    <DemoCard
      title="Clear & Bordered"
      uniqueIdentifier="clearBordered"
      sourceCode={clearBorderedCode}
    >
      <Button theme="default" clear bordered text="Default Button" />
      <br />
      <br />
      <Button theme="dark" clear bordered text="Dark Button" />
      <br />
      <br />
      <Button theme="light" clear bordered text="Light Button" />
      <br />
      <br />
      <Button theme="info" clear bordered text="Info Button" />
      <br />
      <br />
      <Button theme="warning" clear bordered text="Warning Button" />
      <br />
      <br />
      <Button theme="danger" clear bordered text="Danger Button" />
      <br />
      <br />
      <Button theme="success" clear bordered text="Success Button" />
    </DemoCard>

    <DemoCard
      title="Loader"
      uniqueIdentifier="loaderUse"
      sourceCode={loaderCode}
    >
      <Button text="Loader Button" loading />
      <br />
      <br />
      <Button text="Loader Button with position" loading loaderPosition="right" />
    </DemoCard>
  </div>
);

export default ButtonDemo;
