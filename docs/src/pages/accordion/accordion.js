/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Accordion, Paper } from '@../../../../reactify-ui/build';
import {
  customHeaderCode,
  propsCode,
  simpleCode,
  singularCode,
} from './code-refrence';
import './accordion.scss';
import DemoCard from '../../components/demo-card';

const AccordionDemo = () => (
  <div>
    <DemoCard
      title="Simple Use (Themed)"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Accordion success>
        <Accordion.Item index={1} warning>
          <Accordion.Header>
            Accordion 1
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={2} danger>
          <Accordion.Header>
            Accordion 2
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={3}>
          <Accordion.Header>
            Accordion 3
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </DemoCard>

    <DemoCard
      title="Singular"
      uniqueIdentifier="singularUse"
      sourceCode={singularCode}
    >
      <Accordion singular>
        <Accordion.Item index={1}>
          <Accordion.Header>
            Accordion 1
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={2}>
          <Accordion.Header>
            Accordion 2
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={3}>
          <Accordion.Header>
            Accordion 3
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </DemoCard>

    <DemoCard
      title="Props"
      uniqueIdentifier="propsUse"
      sourceCode={propsCode}
    >
      <Accordion onChange={({ index, opened }) => { console.log(index, opened); }}>
        <Accordion.Item index={1} open>
          <Accordion.Header>
            Accordion 1
          </Accordion.Header>
          <Accordion.Body>
            This is open by default.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={2} disabled>
          <Accordion.Header>
            This is a disabled header
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={3}>
          <Accordion.Header>
            Check the console for events
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={4}>
          <Accordion.Header showIcon={false}>
            Without Icon
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </DemoCard>

    <DemoCard
      title="Custom Header"
      uniqueIdentifier="customHeaderUse"
      sourceCode={customHeaderCode}
    >
      <Accordion onChange={({ index, opened }) => { console.log(index, opened); }}>
        <Accordion.Item index={1}>
          <Accordion.Header>
            {({ toggleItem, disabled }) => <Paper className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 1</Paper>}
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={2}>
          <Accordion.Header>
            {({ toggleItem, disabled }) => <Paper warning className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 2</Paper>}
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item index={3}>
          <Accordion.Header>
            {({ toggleItem, disabled }) => <Paper danger className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 3</Paper>}
          </Accordion.Header>
          <Accordion.Body>
            A lot of things can be here.
            A paragraph or some other content, a component too and other things too...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </DemoCard>
  </div>
);

export default AccordionDemo;
