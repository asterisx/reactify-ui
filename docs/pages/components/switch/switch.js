/* eslint-disable no-console */
import React from 'react';
import { Switch, Label } from '../../../../reactify-ui/build';
import {
  controlledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  onChangeCode,
  simpleCode,
} from './code-refrence';

import {
  controlledLink,
  customIconLink,
  customSizeLink,
  customThemeLink,
  disabledLink,
  onChangeLink,
  simpleLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Star Rating',
    link: `${Constants.componentsPath}/star-rating`,
  },
  nextLink: {
    text: 'Tabs',
    link: `${Constants.componentsPath}/tabs`,
  },
};

const SwitchDemo = () => (
  <DemoPage componentName="Switch">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/switch`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Switch className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Controlled (checked))"
      sourceCode={controlledCode}
      externalSampleLink={controlledLink}
    >
      <Switch checked isControlled className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Switch disabled checked className="align-self-center" />
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
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
      sourceCode={customIconCode}
      externalSampleLink={customIconLink}
    >
      <Switch iconColor="red" checked><Label light>Custom Color</Label></Switch>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
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
    </DemoCard>

    <DemoCard
      title="onChange Event"
      sourceCode={onChangeCode}
      externalSampleLink={onChangeLink}
    >
      <p>Check console for events</p>
      <Switch onChange={({ event, checked }) => console.log(event, checked)} />
    </DemoCard>

    <BottomNav
      className="mt-4 mb-4"
      prevLinkText={bottomNavLinks.prevLink.text}
      prevLink={bottomNavLinks.prevLink.link}
      nextLinkText={bottomNavLinks.nextLink.text}
      nextLink={bottomNavLinks.nextLink.link}
    />
  </DemoPage>
);

export default withHeader(SwitchDemo);
