import React from 'react';
import { Switch } from 'reactify';
import {
  simpleCode,
  checkedCode,
  disabledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
} from './code-refrence';
import './switch.scss';
import DemoCard from '../../components/demo-card';

const SwitchDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Switch className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Checked"
      uniqueIdentifier="checkedUse"
      sourceCode={checkedCode}
    >
      <Switch checked className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabled"
      sourceCode={disabledCode}
    >
      <Switch disabled checked className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      uniqueIdentifier="customSizes"
      sourceCode={customSizeCode}
    >
      <Switch size="small" text="Small Button" />
      <br />
      <Switch size="medium" text="Medium Button" />
      <br />
      <Switch size="large" text="Large Button" />
      <br />
      <Switch size="35px" text="Custom Size Button" />
    </DemoCard>

    <DemoCard
      title="Custom Icon Color, any valid css color (hex, rgb etc...) will work."
      uniqueIdentifier="customIconColor"
      sourceCode={customIconCode}
    >
      <Switch iconColor="red" checked />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="customThemes"
      sourceCode={customThemeCode}
    >
      <Switch theme="default" className="mb-2">
        Default Theme
      </Switch>
      <br />
      <Switch theme="dark" className="mb-2">
        Dark Theme
      </Switch>
      <br />
      <Switch theme="light" className="mb-2">
        Light Theme
      </Switch>
      <br />
      <Switch theme="info" className="mb-2">
        Info Theme
      </Switch>
      <br />
      <Switch theme="warning" className="mb-2">
        Warning Theme
      </Switch>
      <br />
      <Switch theme="danger" className="mb-2">
        Danger Theme
      </Switch>
      <br />
      <Switch theme="success" className="mb-2">
        Success Theme
      </Switch>
      <br />
    </DemoCard>

    <DemoCard
      title="onChange Event"
      uniqueIdentifier="onChange"
      sourceCode={onChangeCode}
    >
      <Switch onChange={val => alert(`checked: ${val}`)} />
    </DemoCard>
  </div>
);

export default SwitchDemo;
