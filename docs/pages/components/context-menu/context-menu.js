/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFileSignature } from 'react-icons/fa';
import {
  ContextMenu, SubMenu, SubMenuItem, Paper,
} from '@../../../../reactify-ui/build';
import {
  customThemeCode,
  customEventCode,
  customDeclarativeCode,
  customSizeCode,
  simpleCode,
} from './code-refrence';

import {
  customEventLink,
  customDeclarativeLink,
  customSizeLink,
  customThemeLink,
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
    text: 'Chips',
    link: `${Constants.componentsPath}/chips`,
  },
  nextLink: {
    text: 'Dismiss',
    link: `${Constants.componentsPath}/dismiss`,
  },
};

const items = [
  {
    text: 'Option 1 (Disabled)', key: 0, icon: <FaFileSignature />, disabled: true,
  },
  {
    text: 'Option 2',
    key: 1,
    sub: [
      {
        text: 'Sub Option 1',
        key: 2,
        sub: [
          {
            text: 'Sub Option 1',
            key: 3,
            sub: [
              {
                text: 'Sub Option 1',
                key: 4,
                sub: [
                  {
                    text: 'Sub Option 1',
                    key: 5,
                    sub: [
                      {
                        text: 'Sub Option 1',
                        key: 6,
                        sub: [
                          {
                            text: 'Sub Option 1',
                            key: 7,
                            sub: [
                              { text: 'Sub Option 1', key: 8 },
                              { text: 'Sub Option 2', key: 9 },
                              { text: 'Sub Option 3', key: 10 },
                              { text: 'Sub Option 4', key: 11 },
                            ],
                          },
                          { text: 'Sub Option 2', key: 12 },
                          { text: 'Sub Option 3', key: 13 },
                          { text: 'Sub Option 4', key: 14 },
                        ],
                      },
                      { text: 'Sub Option 2', key: 15 },
                      { text: 'Sub Option 3', key: 16 },
                      { text: 'Sub Option 4', key: 17 },
                    ],
                  },
                  { text: 'Sub Option 2', key: 18 },
                  { text: 'Sub Option 3', key: 19 },
                  { text: 'Sub Option 4', key: 20 },
                ],
              },
              { text: 'Sub Option 2', key: 21 },
              { text: 'Sub Option 3', key: 22 },
              { text: 'Sub Option 4', key: 23 },
            ],
          },
          { text: 'Sub Option 2', key: 24 },
          { text: 'Sub Option 3', key: 25 },
          { text: 'Sub Option 4', key: 26 },
        ],
      },
      { text: 'Sub Option 2', key: 27 },
      { text: 'Sub Option 3', key: 28 },
      { text: 'Sub Option 4', key: 29 },
    ],
  },
  { text: 'Option 2', key: 30 },
  { text: 'Option 4', key: 31 },
];

const ContextMenuDemo = () => (
  <DemoPage componentName="Context Menu">
    <ComponentInfo
      productionReady
      githubLink={`${Constants.githubComponentsPath}/context-menu`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <ContextMenu className="border" items={items}>
        <h6><i>Each items 'item' should have a unique key (check sample code)</i></h6>
        <div className="context-menu_big-box">Right click anywhere in this box</div>
      </ContextMenu>
    </DemoCard>

    <DemoCard
      title="Themes Use"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <ContextMenu className="border" items={items}>
        <Paper className="w-100" primary>Primary Theme</Paper>
      </ContextMenu>
      <br />
      <ContextMenu className="border" items={items} secondary>
        <Paper className="w-100" secondary>Secondary Theme</Paper>
      </ContextMenu>
      <br />
      <ContextMenu className="border" items={items} info>
        <Paper className="w-100" info>Info Theme</Paper>
      </ContextMenu>
      <br />
      <ContextMenu className="border" items={items} light>
        <Paper className="w-100" light>Light Theme</Paper>
      </ContextMenu>
      <br />
      <ContextMenu className="border" items={items} warning>
        <Paper className="w-100" warning>Warning Theme</Paper>
      </ContextMenu>
      <br />
      <ContextMenu className="border" items={items} danger>
        <Paper className="w-100" danger>Danger Theme</Paper>
      </ContextMenu>
      <br />
      <ContextMenu className="border" items={items} success>
        <Paper className="w-100" success>Success Theme</Paper>
      </ContextMenu>
    </DemoCard>

    <DemoCard
      title="Size Use"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <ContextMenu className="border" items={items} small>
        <div>Small Menu</div>
      </ContextMenu>
      <br />
      <ContextMenu className="border" items={items} medium>
        <div>Medium Menu</div>
      </ContextMenu>
      <br />
      <ContextMenu className="border" items={items} large>
        <div>Large Menu</div>
      </ContextMenu>
    </DemoCard>

    <DemoCard
      title="Custom Content (Declarative)"
      sourceCode={customDeclarativeCode}
      externalSampleLink={customDeclarativeLink}
    >
      <ContextMenu className="border">
        <div>Declared Menu</div>
        <SubMenu>
          <SubMenuItem text="Option 1">
            <SubMenu>
              <SubMenuItem text="Option 1" />
              <SubMenuItem text="Option 2" />
            </SubMenu>
          </SubMenuItem>
          <SubMenuItem text="Option 2" />
        </SubMenu>
      </ContextMenu>
      <br />
      <ContextMenu className="border">
        <div>Declared Menu with custom content</div>
        <SubMenu>
          <SubMenuItem text="Option 1" key={1}>
            <SubMenu>
              <SubMenuItem
                content={<Paper className="w-100">Custom Content 1</Paper>}
              />
              <SubMenuItem content={<Paper className="w-100" success>Custom Content 2</Paper>} />
            </SubMenu>
          </SubMenuItem>
          <SubMenuItem text="Option 2" key={2} />
        </SubMenu>
      </ContextMenu>
    </DemoCard>

    <DemoCard
      title="Events"
      sourceCode={customEventCode}
      externalSampleLink={customEventLink}
    >
      <ContextMenu className="border">
        <div>
          Click here for menu
          <h5><i>Currently SubMenuItem supports onMouseDown and not onClick</i></h5>
        </div>
        <SubMenu>
          <SubMenuItem onMouseDown={() => console.log('mouse down on option 1')} text="Option 1" />
          <SubMenuItem onMouseDown={() => console.log('mouse down on option 2')} text="Option 2" />
        </SubMenu>
      </ContextMenu>
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

export default withHeader(ContextMenuDemo);
