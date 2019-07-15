/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Button,
  TreeView,
  TreeViewItem,
} from '../../../../reactify-ui/build';
import {
  customDeclarativeCode,
  customThemeCode,
  simpleCode,
} from './code-refrence';

import {
  customDeclarativeLink,
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
    text: 'Top Bar',
    link: `${Constants.componentsPath}/top-bar`,
  },
  nextLink: {
    text: 'Typeahead',
    link: `${Constants.componentsPath}/typeahead`,
  },
};

const items = [
  {
    text: 'Option 1', key: 0,
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
  { text: 'Option 3', key: 30 },
  { text: 'Option 4', key: 31 },
];

const TreeViewDemo = () => (
  <DemoPage componentName="Tree View">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/tree-view`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <TreeView items={items} />
    </DemoCard>

    <DemoCard
      title="Themes Use"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h5>Theming is only for the default icons</h5>
      <h5>Primary Theme</h5>
      <TreeView items={items} primary />
      <h5>Secondary Theme</h5>
      <TreeView items={items} secondary />
      <h5>Info Theme</h5>
      <TreeView items={items} info />
      <h5>Light Theme</h5>
      <TreeView items={items} light />
      <h5>Warning Theme</h5>
      <TreeView items={items} warning />
      <h5>Danger Theme</h5>
      <TreeView items={items} danger />
      <h5>Success Theme</h5>
      <TreeView items={items} success />
    </DemoCard>

    <DemoCard
      title="Custom Content (Declarative)"
      sourceCode={customDeclarativeCode}
      externalSampleLink={customDeclarativeLink}
    >
      <h5>Declared Menu</h5>
      <TreeView>
        <TreeViewItem
          key={1}
          text="Option 1"
        >
          <TreeView>
            <TreeViewItem key={1} text="Option 1" />
            <TreeViewItem key={2} text="Option 2" />
          </TreeView>
        </TreeViewItem>
        <TreeViewItem
          key={2}
          text="Option 2"
        />
      </TreeView>

      <h5 className="mt-5">Declared Menu with custom content</h5>
      <TreeView>
        <TreeViewItem
          key={1}
          content={
            ({ isTreeOpen, toggleSubTree }) => (
              <Button
                className="w-100"
                onClick={toggleSubTree}
                danger={isTreeOpen}
                success={!isTreeOpen}
              >
                {isTreeOpen ? 'Close Sub Tree' : 'Open Sub Tree'}
              </Button>
            )}
        >
          <TreeView>
            <TreeViewItem
              key={1}
              text="Sub Option 1"
            />
            <TreeViewItem
              key={2}
              text="Sub Option 2"
            />
          </TreeView>
        </TreeViewItem>
        <TreeViewItem text="Option 2" />
      </TreeView>
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

export default withHeader(TreeViewDemo);
