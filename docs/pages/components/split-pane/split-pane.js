/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Pane,
  Resizer,
  SplitPane,
} from '../../../../reactify-ui/build';
import {
  customResizerCode,
  customThemeCode,
  onChangeCode,
  resizerDisabledCode,
  simpleCode,
  verticalCode,
} from './code-refrence';

import {
  customResizerLink,
  customThemeLink,
  onChangeLink,
  resizerDisabledLink,
  simpleLink,
  verticalLink,
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
    text: 'Spinner - Wave',
    link: `${Constants.componentsPath}/spinner/wave`,
  },
  nextLink: {
    text: 'Stacked Card',
    link: `${Constants.componentsPath}/stacked-card`,
  },
};

const SplitPaneDemo = () => (
  <DemoPage componentName="Split Pane">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/split-pane`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <SplitPane style={{ height: '300px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
    </DemoCard>

    <DemoCard
      title="Theming"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <SplitPane style={{ height: '80px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
      <br />
      <SplitPane secondary style={{ height: '80px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
      <br />
      <SplitPane dark style={{ height: '80px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
      <br />
      <SplitPane info style={{ height: '80px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
      <br />
      <SplitPane light style={{ height: '80px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
      <br />
      <SplitPane warning style={{ height: '80px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
      <br />
      <SplitPane danger style={{ height: '80px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
      <br />
      <SplitPane success style={{ height: '80px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
    </DemoCard>

    <DemoCard
      title="Custom Resizer"
      sourceCode={customResizerCode}
      externalSampleLink={customResizerLink}
    >
      <SplitPane style={{ height: '300px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Resizer>
          {
          ({ onMouseDown }) => (
            <div
              style={{ height: '300px', background: 'violet' }}
              className="p-2 text-white display-4 d-flex align-items-center justify-content-center"
              onMouseDown={onMouseDown}
            >
            ||
            </div>
          )}
        </Resizer>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
    </DemoCard>

    <DemoCard
      title="Resizer Disabled"
      sourceCode={resizerDisabledCode}
      externalSampleLink={resizerDisabledLink}
    >
      <SplitPane style={{ height: '300px', width: '100%' }} disabled>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
    </DemoCard>

    <DemoCard
      title="Vertical"
      sourceCode={verticalCode}
      externalSampleLink={verticalLink}
    >
      <SplitPane style={{ maxHeight: '700px' }} vertical>
        <Pane style={{ height: '300px' }}>This is div 1</Pane>
        <Pane style={{ height: '300px' }}>This is div 2</Pane>
      </SplitPane>
    </DemoCard>

    <DemoCard
      title="onChange Event"
      sourceCode={onChangeCode}
      externalSampleLink={onChangeLink}
    >
      <SplitPane onChange={({ delta }) => console.log(delta)}>
        <Pane style={{ height: '300px' }}>This is pane 1</Pane>
        <Pane style={{ height: '300px' }}>This is pane 2</Pane>
      </SplitPane>
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

export default withHeader(SplitPaneDemo);
