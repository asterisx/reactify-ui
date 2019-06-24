/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Dismiss, Spinner, Button } from '@../../../../reactify-ui/build';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  customColorCode,
  customEventCode,
  customIconCode,
  childrenCode,
  customClassCode,
  sizeCode,
} from './code-refrence';
import './dismiss.scss';
import DemoCard from '../../components/demo-card';

const DismissDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Dismiss className="align-self-center">
          A simple Dismiss
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <Dismiss disabled>
          This is disabled
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      uniqueIdentifier="customSizes"
      sourceCode={sizeCode}
    >
      <Dismiss small>Small Dismiss</Dismiss>
      <br />
      <br />
      <Dismiss medium>Medium Dismiss</Dismiss>
      <br />
      <br />
      <Dismiss large>Large Dismiss</Dismiss>
      <br />
      <br />
      <Dismiss style={{ fontSize: '35px' }}>Custom Size Dismiss</Dismiss>
    </DemoCard>

    <DemoCard
      title="Children"
      uniqueIdentifier="childrenUse"
      sourceCode={childrenCode}
    >
      <Dismiss style={{ width: 'auto' }}>
        <div className="card" style={{ width: '18rem', color: 'black' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Background"
      uniqueIdentifier="customBackgroundUse"
      sourceCode={customColorCode}
    >
      <Dismiss style={{ backgroundColor: 'violet' }}>
          Dismiss with custom background color
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Icon"
      uniqueIdentifier="customIcondUse"
      sourceCode={customIconCode}
    >
      <Dismiss
        icon={<Spinner small light clock />}
        closeIcon={<Button small light clear>Ok</Button>}
        style={{ width: '300px' }}
      >
        Time is running out!!! Apply for the application within a week.
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Dismiss className="text-light bg-dark w-100">
        This Dismiss has custom class
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Theme"
      uniqueIdentifier="customTheme"
      sourceCode={customThemeCode}
    >
      <Dismiss primary>
        Primary theme
      </Dismiss>
      <br />
      <br />
      <Dismiss secondary>
        Secondary theme
      </Dismiss>
      <br />
      <br />
      <Dismiss dark>
          Dark theme
      </Dismiss>
      <br />
      <br />
      <Dismiss light>
          Light theme
      </Dismiss>
      <br />
      <br />
      <Dismiss info>
          Info theme
      </Dismiss>
      <br />
      <br />
      <Dismiss warning>
          Warning theme
      </Dismiss>
      <br />
      <br />
      <Dismiss danger>
          Danger theme
      </Dismiss>
      <br />
      <br />
      <Dismiss success>
          Success theme
      </Dismiss>
    </DemoCard>

    <DemoCard
      title="Custom Event"
      uniqueIdentifier="customEventUse"
      sourceCode={customEventCode}
    >
      <Dismiss onClose={() => alert('Closed')}>
        This Dismiss has event handler
      </Dismiss>
    </DemoCard>
  </div>
);

export default DismissDemo;
