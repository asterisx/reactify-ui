/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HeirarchyView, Paper } from '../../../../reactify-ui/build';
import {
  declaredCode,
  declaredVerticalCode,
  simpleCode,
} from './code-refrence';

import {
  declaredLink,
  declaredVerticalLink,
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
    text: 'Heat Map',
    link: `${Constants.componentsPath}/heat-map`,
  },
  nextLink: {
    text: 'Highlight',
    link: `${Constants.componentsPath}/highlight`,
  },
};

const item = {
  text: 'L0',
  key: 1,
  sub: [
    {
      text: 'L1',
      key: 2,
      sub: {
        text: 'L3',
        key: 3,
      },
    },
    {
      text: 'L1',
      key: 4,
      sub: [
        {
          content: <Paper>L3</Paper>,
          key: 5,
        },
        {
          text: 'L3',
          key: 6,
        },
      ],
    },
  ],
};

const HeirarchyViewDemo = () => (
  <DemoPage componentName="Heirarchy View">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/heirarchy-view`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <HeirarchyView className="heirarchy-view_font-responsive" item={item} />
    </DemoCard>

    <DemoCard
      title="Declared Use"
      sourceCode={declaredCode}
      externalSampleLink={declaredLink}
    >
      <HeirarchyView className="heirarchy-view_font-responsive">
        <HeirarchyView.Item content={<Paper className="p-3" large warning>L0</Paper>}>
          <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>
            <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>
              <Paper className="p-3" large>L3</Paper>
            </HeirarchyView.Item>
            <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>
              <Paper className="p-3" large>L3</Paper>
              <Paper className="p-3" large>L3</Paper>
            </HeirarchyView.Item>
          </HeirarchyView.Item>

          <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>
            <Paper className="p-3" large>L2</Paper>
          </HeirarchyView.Item>
        </HeirarchyView.Item>
      </HeirarchyView>
    </DemoCard>

    <DemoCard
      title="Declared Use (Vertical)"
      sourceCode={declaredVerticalCode}
      externalSampleLink={declaredVerticalLink}
    >
      <HeirarchyView className="heirarchy-view_font-responsive">
        <HeirarchyView.Item vertical content={<Paper className="p-3" large warning>L0</Paper>}>
          <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>
            <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>
              <Paper className="p-3" large>L3</Paper>
            </HeirarchyView.Item>
            <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>
              <Paper className="p-3" large>L3</Paper>
              <Paper className="p-3" large>L3</Paper>
            </HeirarchyView.Item>
          </HeirarchyView.Item>

          <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>
            <Paper className="p-3" large>L2</Paper>
          </HeirarchyView.Item>
        </HeirarchyView.Item>
      </HeirarchyView>
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

export default withHeader(HeirarchyViewDemo);
