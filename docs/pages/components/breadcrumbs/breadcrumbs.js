/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import {
  Breadcrumbs,
  Paper,
} from '@../../../../reactify-ui/build';
import {
  declarativeCode,
  disabledCode,
  seperatorCode,
  simpleCode,
} from './code-refrence';

import {
  declarativeLink,
  disabledLink,
  seperatorLink,
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
    text: 'Badge',
    link: `${Constants.componentsPath}/badge`,
  },
  nextLink: {
    text: 'Button',
    link: `${Constants.componentsPath}/button`,
  },
};

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
  <DemoPage componentName="Breadcrumbs">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/breadcrumbs`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <h6>Check the console for events</h6>
      <Breadcrumbs items={items} />
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
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
      sourceCode={seperatorCode}
      externalSampleLink={seperatorLink}
    >
      <Breadcrumbs items={items} seperator={<FaAngleRight />} />
    </DemoCard>

    <DemoCard
      title="Declarative"
      sourceCode={declarativeCode}
      externalSampleLink={declarativeLink}
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

    <BottomNav
      className="mt-4 mb-4"
      prevLinkText={bottomNavLinks.prevLink.text}
      prevLink={bottomNavLinks.prevLink.link}
      nextLinkText={bottomNavLinks.nextLink.text}
      nextLink={bottomNavLinks.nextLink.link}
    />
  </DemoPage>
);

export default withHeader(BreadcrumbsDemo);
