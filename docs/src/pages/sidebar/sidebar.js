/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Button,
  Sidebar,
  SidebarItem,
  SubSidebar,
  Link,
} from '@../../../../reactify-ui/build';
import {
  customDeclarativeCode,
  customThemeCode,
  simpleFullCode,
  simpleCode,
} from './code-refrence';
import './sidebar.scss';
import DemoCard from '../../components/demo-card';

const items = [
  {
    content: <Link light href="#">Can be a link</Link>, key: 0,
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

const SidebarDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Sidebar className="w-300px" items={items} />
    </DemoCard>

    <DemoCard
      title="Simple Use (positionFull)"
      uniqueIdentifier="simpleFullUse"
      sourceCode={simpleFullCode}
    >
      <Sidebar className="w-300px h-160px" items={items} positionFull />
    </DemoCard>

    <DemoCard
      title="Themes Use"
      uniqueIdentifier="themesUse"
      sourceCode={customThemeCode}
    >
      <h5>Theming is only for the default icons</h5>
      <h5>Primary Theme</h5>
      <Sidebar className="w-300px" items={items} primary />
      <h5>Secondary Theme</h5>
      <Sidebar className="w-300px" items={items} secondary />
      <h5>Info Theme</h5>
      <Sidebar className="w-300px" items={items} info />
      <h5>Light Theme</h5>
      <Sidebar className="w-300px" items={items} light />
      <h5>Warning Theme</h5>
      <Sidebar className="w-300px" items={items} warning />
      <h5>Danger Theme</h5>
      <Sidebar className="w-300px" items={items} danger />
      <h5>Success Theme</h5>
      <Sidebar className="w-300px" items={items} success />
    </DemoCard>

    <DemoCard
      title="Custom Content (Declarative)"
      uniqueIdentifier="customDeclarativeUse"
      sourceCode={customDeclarativeCode}
    >
      <h5>Declared Menu</h5>
      <Sidebar className="w-300px">
        <SidebarItem
          key={1}
          text="Option 1"
        >
          <SubSidebar>
            <SidebarItem key={1} text="Option 1" />
            <SidebarItem key={2} text="Option 2" />
          </SubSidebar>
        </SidebarItem>
        <SidebarItem
          key={2}
          text="Option 2"
        />
      </Sidebar>

      <h5 className="mt-5">Declared Menu with custom content</h5>
      <Sidebar className="w-300px">
        <SidebarItem
          key={1}
          content={
            ({ isSubOpen, toggleSub }) => (
              <Button
                className="w-100"
                onClick={toggleSub}
                danger={isSubOpen}
                success={!isSubOpen}
              >
                {isSubOpen ? 'Close Sub Sidebar' : 'Open Sub Sidebar'}
              </Button>
            )}
        >
          <SubSidebar>
            <SidebarItem
              key={1}
              text="Sub Option 1"
            />
            <SidebarItem
              key={2}
              text="Sub Option 2"
            />
          </SubSidebar>
        </SidebarItem>
        <SidebarItem text="Option 2" />
      </Sidebar>
    </DemoCard>
  </div>
);

export default SidebarDemo;
