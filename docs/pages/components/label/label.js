/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Label } from '@../../../../reactify-ui/build';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  customColorCode,
  childrenCode,
  customClassCode,
  customSizeCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const LabelDemo = () => (
  <div className="w-100">
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
      <Label small className="mb-2">
        Small Label
      </Label>
      <br />
      <Label medium className="mb-2">
        Medium Label
      </Label>
      <br />
      <Label large className="mb-2">
        Large Label
      </Label>
      <br />
      <Label style={{ fontSize: '35px' }} className="mb-2">
        Label with size 35px
      </Label>
      <br />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="customThemes"
      sourceCode={customThemeCode}
    >
      <Label primary className="mb-2">
        Primary Theme
      </Label>
      <br />
      <Label secondary className="mb-2">
        Secondary Theme
      </Label>
      <br />
      <Label dark className="mb-2">
        Dark Theme
      </Label>
      <br />
      <Label light className="mb-2">
        Light Theme
      </Label>
      <br />
      <Label info className="mb-2">
        Info Theme
      </Label>
      <br />
      <Label warning className="mb-2">
        Warning Theme
      </Label>
      <br />
      <Label danger className="mb-2">
        Danger Theme
      </Label>
      <br />
      <Label success className="mb-2">
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
      <Label medium className="p-2">
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
      <Label style={{ backgroundColor: 'violet' }}>Simple Label</Label>
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

export default withHeader(LabelDemo);
