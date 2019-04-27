/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Label } from 'reactify';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  customColorCode,
  childrenCode,
  customClassCode,
  customSizeCode,
} from './code-refrence';
import './label.scss';
import DemoCard from '../../components/demo-card';

const LabelDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Label>Simple Label</Label>
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      uniqueIdentifier="customSizes"
      sourceCode={customSizeCode}
    >
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
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="customThemes"
      sourceCode={customThemeCode}
    >
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
      <br />
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="simpleUse"
      sourceCode={disabledCode}
    >
      <Label disabled>Disabled Label</Label>
      <br />
    </DemoCard>

    <DemoCard
      title="Children"
      uniqueIdentifier="childrenUse"
      sourceCode={childrenCode}
    >
      <Label size="medium" className="p-2">
        <div className="card text-dark" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </Label>
      <br />
    </DemoCard>

    <DemoCard
      title="Custom Color, any valid css color (hex, rgb etc...) will work."
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Label color="violet">Simple Label</Label>
      <br />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Label className="text-light bg-dark p-2 shadow">
        Custom Class Label
      </Label>
    </DemoCard>
  </div>
);

export default LabelDemo;
