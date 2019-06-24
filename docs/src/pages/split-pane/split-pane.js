/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Pane,
  Resizer,
  SplitPane,
} from '@../../../../reactify-ui/build';
import {
  customResizerCode,
  customThemeCode,
  onChangeCode,
  resizerDisabledCode,
  simpleCode,
  verticalCode,
} from './code-refrence';
import './split-pane.scss';
import DemoCard from '../../components/demo-card';

const SplitPaneDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <SplitPane style={{ height: '300px', width: '100%' }}>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
    </DemoCard>

    <DemoCard
      title="Theming"
      uniqueIdentifier="themingUse"
      sourceCode={customThemeCode}
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
      uniqueIdentifier="customResizerUse"
      sourceCode={customResizerCode}
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
      uniqueIdentifier="resizerDisabledUse"
      sourceCode={resizerDisabledCode}
    >
      <SplitPane style={{ height: '300px', width: '100%' }} disabled>
        <Pane style={{ width: '50%' }}>This is pane 1</Pane>
        <Pane style={{ width: '50%' }}>This is pane 2</Pane>
      </SplitPane>
    </DemoCard>

    <DemoCard
      title="Vertical"
      uniqueIdentifier="verticalUse"
      sourceCode={verticalCode}
    >
      <SplitPane style={{ maxHeight: '700px' }} vertical>
        <Pane style={{ height: '300px' }}>This is div 1</Pane>
        <Pane style={{ height: '300px' }}>This is div 2</Pane>
      </SplitPane>
    </DemoCard>

    <DemoCard
      title="onChange Event"
      uniqueIdentifier="onChangeUse"
      sourceCode={onChangeCode}
    >
      <SplitPane onChange={({ delta }) => console.log(delta)}>
        <Pane style={{ height: '300px' }}>This is pane 1</Pane>
        <Pane style={{ height: '300px' }}>This is pane 2</Pane>
      </SplitPane>
    </DemoCard>
  </div>
);

export default SplitPaneDemo;
