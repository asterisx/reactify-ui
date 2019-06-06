/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ContextMenu } from '@../../../../reactify/build';
import { simpleCode } from './code-refrence';
import './context-menu.scss';
import DemoCard from '../../components/demo-card';

const items = [
  { text: 'Option 1' },
  {
    text: 'Option 2',
    sub: [
      {
        text: '2. Sub Option 1',
        sub: [
          {
            text: '2. Sub Option 1',
            sub: [
              {
                text: '2. Sub Option 1',
                sub: [
                  {
                    text: '2. Sub Option 1',
                    sub: [
                      {
                        text: '2. Sub Option 1',
                        sub: [
                          {
                            text: '2. Sub Option 1',
                            sub: [
                              { text: '2. Sub Option 1' },
                              { text: '2. Sub Option 2' },
                              { text: '2. Sub Option 3' },
                              { text: '2. Sub Option 4' },
                            ],
                          },
                          { text: '2. Sub Option 2' },
                          { text: '2. Sub Option 3' },
                          { text: '2. Sub Option 4' },
                        ],
                      },
                      { text: '2. Sub Option 2' },
                      { text: '2. Sub Option 3' },
                      { text: '2. Sub Option 4' },
                    ],
                  },
                  { text: '2. Sub Option 2' },
                  { text: '2. Sub Option 3' },
                  { text: '2. Sub Option 4' },
                ],
              },
              { text: '2. Sub Option 2' },
              { text: '2. Sub Option 3' },
              { text: '2. Sub Option 4' },
            ],
          },
          { text: '2. Sub Option 2' },
          { text: '2. Sub Option 3' },
          { text: '2. Sub Option 4' },
        ],
      },
      { text: '2. Sub Option 2' },
      { text: '2. Sub Option 3' },
      { text: '2. Sub Option 4' },
    ],
  },
  { text: 'Option 3' },
  { text: 'Option 4' },
];

const ContextMenuDemo = () => (
  <div>
    <div className="box">
      <ContextMenu className="big-box" items={items}>
        <div>Some Text goes here</div>
      </ContextMenu>
    </div>
  </div>
);

export default ContextMenuDemo;
