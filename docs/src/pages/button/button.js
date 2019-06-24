/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button } from '@../../../../reactify-ui/build';

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
} from './code-refrence';
import './button.scss';
import DemoCard from '../../components/demo-card';

const ButtonDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Button>Default Button</Button>
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      uniqueIdentifier="customSizes"
      sourceCode={customSizeCode}
    >
      <Button small>Small Button</Button>
      <br />
      <br />
      <Button medium>Medium Button</Button>
      <br />
      <br />
      <Button large>Large Button</Button>
      <br />
      <br />
      <Button style={{ fontSize: '35px' }}>Custom Size Button</Button>
    </DemoCard>

    <DemoCard
      title="Custom Themes"
      uniqueIdentifier="customTheme"
      sourceCode={customThemeCode}
    >
      <Button primary>Primary Button</Button>
      <br />
      <br />
      <Button secondary>Secondary Button</Button>
      <br />
      <br />
      <Button dark>Dark Button</Button>
      <br />
      <br />
      <Button light>Light Button</Button>
      <br />
      <br />
      <Button info>Info Button</Button>
      <br />
      <br />
      <Button warning>Warning Button</Button>
      <br />
      <br />
      <Button danger>Danger Button</Button>
      <br />
      <br />
      <Button success>Success Button</Button>
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <Button disabled>Disabled Button</Button>
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
      <Button style={{ backgroundColor: 'violter', color: 'white' }}>Custom Color Button</Button>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Button className="p-5">Custom Class Button</Button>
    </DemoCard>

    <DemoCard
      title="Clear"
      uniqueIdentifier="clear"
      sourceCode={clearCode}
    >
      <Button primary clear>Primary Button</Button>
      <br />
      <br />
      <Button secondary clear>Secondary Button</Button>
      <br />
      <br />
      <Button dark clear>Dark Button</Button>
      <br />
      <br />
      <Button light clear>Light Button</Button>
      <br />
      <br />
      <Button info clear>Info Button</Button>
      <br />
      <br />
      <Button warning clear>Warning Button</Button>
      <br />
      <br />
      <Button danger clear>Danger Button</Button>
      <br />
      <br />
      <Button success clear>Success Button</Button>
    </DemoCard>

    <DemoCard
      title="Clear & Bordered"
      uniqueIdentifier="clearBordered"
      sourceCode={clearBorderedCode}
    >
      <Button primary clear bordered>Primary Button</Button>
      <br />
      <br />
      <Button secondary clear bordered>Secondary Button</Button>
      <br />
      <br />
      <Button dark clear bordered>Dark Button</Button>
      <br />
      <br />
      <Button light clear bordered>Light Button</Button>
      <br />
      <br />
      <Button info clear bordered>Info Button</Button>
      <br />
      <br />
      <Button warning clear bordered>Warning Button</Button>
      <br />
      <br />
      <Button danger clear bordered>Danger Button</Button>
      <br />
      <br />
      <Button success clear bordered>Success Button</Button>
    </DemoCard>
  </div>
);

export default ButtonDemo;
