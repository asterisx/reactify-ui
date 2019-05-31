/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { SubMenu } from '@../../../../reactify/build';
import { simpleCode } from './code-refrence';
import './context-menu.scss';
import DemoCard from '../../components/demo-card';

const ContextMenuDemo = () => (
  <div>
    <div className="box">
      <SubMenu className="big-box">A simple SubMenu</SubMenu>
    </div>
  </div>
);

export default ContextMenuDemo;
