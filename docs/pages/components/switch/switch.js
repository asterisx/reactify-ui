/* eslint-disable no-console */
import React from 'react';
import { Switch, Label } from '@../../../../reactify-ui/build';
import {
  controlledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  onChangeCode,
  simpleCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const SwitchDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Switch className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Controlled (checked))"
      uniqueIdentifier="checkedUse"
      sourceCode={controlledCode}
    >
      <Switch checked isControlled className="align-self-center" />
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
      <Switch small>Small Switch</Switch>
      <br />
      <Switch medium>Medium Switch</Switch>
      <br />
      <Switch large>Large Switch</Switch>
      <br />
      <Switch style={{ fontSize: '35px' }}>Custom Size Switch</Switch>
    </DemoCard>

    <DemoCard
      title="Custom Icon Color, any valid css color (hex, rgb etc...) will work."
      uniqueIdentifier="customIconColor"
      sourceCode={customIconCode}
    >
      <Switch iconColor="red" checked><Label light>Custom Color</Label></Switch>
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="customThemes"
      sourceCode={customThemeCode}
    >
      <Switch primary checked className="mb-2">
        Primary Theme
      </Switch>
      <br />
      <Switch secondary checked className="mb-2">
        Secondary Theme
      </Switch>
      <br />
      <Switch dark checked className="mb-2">
        Dark Theme
      </Switch>
      <br />
      <Switch light checked className="mb-2">
        Light Theme
      </Switch>
      <br />
      <Switch info checked className="mb-2">
        Info Theme
      </Switch>
      <br />
      <Switch warning checked className="mb-2">
        Warning Theme
      </Switch>
      <br />
      <Switch danger checked className="mb-2">
        Danger Theme
      </Switch>
      <br />
      <Switch success checked className="mb-2">
        Success Theme
      </Switch>
      <br />
    </DemoCard>

    <DemoCard
      title="onChange Event"
      uniqueIdentifier="onChange"
      sourceCode={onChangeCode}
    >
      <Switch onChange={({ event, checked }) => console.log(event, checked)} />
    </DemoCard>
  </div>
);

export default withHeader(SwitchDemo);
