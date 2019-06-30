/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HeirarchyView, Paper } from '@../../../../reactify-ui/build';
import {
  declaredCode,
  declaredVerticalCode,
  simpleCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

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
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <HeirarchyView className="heirarchy-view_font-responsive" item={item} />
    </DemoCard>

    <DemoCard
      title="Declared Use"
      uniqueIdentifier="declaredUse"
      sourceCode={declaredCode}
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
      uniqueIdentifier="declaredUseVertical"
      sourceCode={declaredVerticalCode}
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
  </div>
);

export default withHeader(HeirarchyViewDemo);
