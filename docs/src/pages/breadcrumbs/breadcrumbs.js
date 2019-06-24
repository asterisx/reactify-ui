/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Breadcrumbs,
  Paper,
} from '@../../../../reactify-ui/build';
import { FaAngleRight } from 'react-icons/fa';
import {
  declarativeCode,
  disabledCode,
  seperatorCode,
  simpleCode,
} from './code-refrence';
import './breadcrumbs.scss';
import DemoCard from '../../components/demo-card';

const items = [
  {
    content: 'Home',
    key: 0,
    onClick: () => console.log('Home'),
  },
  {
    content: 'About',
    key: 1,
    onClick: () => console.log('About'),
  },
  {
    content: 'Company Culture',
    key: 2,
    onClick: () => console.log('Company Culture'),
  },
];

const itemsWithSomeDisabled = [
  {
    content: 'Home (Disabled)',
    key: 0,
    disabled: true,
    onClick: () => console.log('Home'),
  },
  {
    content: 'About',
    key: 1,
    onClick: () => console.log('About'),
  },
  {
    content: 'Company Culture',
    key: 2,
    onClick: () => console.log('Company Culture'),
  },
];

const BreadcrumbsDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <h6>Check the console for events</h6>
      <Breadcrumbs items={items} />
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <Breadcrumbs items={items} disabled />
      <h5 className="mt-3">Single item disabled</h5>
      <Breadcrumbs className="ml-3" items={itemsWithSomeDisabled} />

      <h6 className="mt-3 ml-3">Declarative Style</h6>
      <Breadcrumbs className="ml-3">
        <Breadcrumbs.Item disabled key={0} style={{ color: 'blue' }} onClick={() => console.log('Home')}>
          <Paper success>Home</Paper>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item key={1} style={{ color: 'blue' }} onClick={() => console.log('About')}>
          <Paper warning>About</Paper>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item key={2} onClick={() => console.log('Company Culture')}>
          <Paper danger>Company Culture</Paper>
        </Breadcrumbs.Item>
      </Breadcrumbs>
    </DemoCard>

    <DemoCard
      title="Seperator"
      uniqueIdentifier="seperatorUse"
      sourceCode={seperatorCode}
    >
      <Breadcrumbs items={items} seperator={<FaAngleRight />} />
    </DemoCard>

    <DemoCard
      title="Declarative"
      uniqueIdentifier="customDeclarativeUse"
      sourceCode={declarativeCode}
    >
      <ul>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <li><b>Breadcrumbs.Item</b> is a 'li' under the hood.</li>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <li>You can thus pass anything to <b>Breadcrumbs.Item</b> as children and props.</li>
        <li>Whatever you pass will be passed down to the underlying 'li' as is.</li>
      </ul>
      <Breadcrumbs>
        <Breadcrumbs.Item key={0} style={{ color: 'blue' }} onClick={() => console.log('Home')}>
          <Paper success>Home</Paper>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item key={1} style={{ color: 'blue' }} onClick={() => console.log('About')}>
          <Paper warning>About</Paper>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item key={2} onClick={() => console.log('Company Culture')}>
          <Paper danger>Company Culture</Paper>
        </Breadcrumbs.Item>
      </Breadcrumbs>
    </DemoCard>
  </div>
);

export default BreadcrumbsDemo;
