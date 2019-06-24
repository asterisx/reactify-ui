/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Input } from '@../../../../reactify-ui/build';
import {
  customColorCode,
  customClassCode,
  customThemeCode,
  propsCode,
  simpleCode,
  sizeCode,
} from './code-refrence';
import './input.scss';
import DemoCard from '../../components/demo-card';

const InputDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Input />
    </DemoCard>

    <DemoCard
      title="Size"
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6>small</h6>
      <Input small defaultValue="A small input" type="text" />

      <h6 className="pt-3">
            medium
        {' '}
        <b className="pl-3">default</b>
      </h6>
      <Input medium defaultValue="A medium input" type="text" />

      <h6 className="pt-3">large</h6>
      <Input large defaultValue="A large input" type="text" />

      <h6 className="pt-3">{'style={{ fontSize: \'75px\' }}'}</h6>
      <Input style={{ fontSize: '75px' }} defaultValue="A custom size input" type="text" />
    </DemoCard>

    <DemoCard
      title="Custom Color (any valid CSS solor)"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Input style={{ borderColor: 'violet' }} defaultValue="A custom color Input" type="text" />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themeUse"
      sourceCode={customThemeCode}
    >
      <h6>Primary</h6>
      <Input primary defaultValue="A primary Input" type="text" />

      <h6>Secondary</h6>
      <Input secondary defaultValue="A Secondary Input" type="text" />

      <h6 className="pt-3">Dark</h6>
      <Input dark defaultValue="A Dark Input" type="text" />

      <h6 className="pt-3">Light</h6>
      <Input light defaultValue="A Light Input" type="text" />

      <h6 className="pt-3">Info</h6>
      <Input info defaultValue="A Info Input" type="text" />

      <h6 className="pt-3">Warning</h6>
      <Input warning defaultValue="A Warning Input" type="text" />

      <h6 className="pt-3">Danger</h6>
      <Input danger defaultValue="A Danger Input" type="text" />

      <h6 className="pt-3">Success</h6>
      <Input success defaultValue="A Success Input" type="text" />
    </DemoCard>

    <DemoCard
      title="Props"
      uniqueIdentifier="propsUse"
      sourceCode={propsCode}
    >
      <h6 className="mt-3 mb-3">Input is merely a input with some styles applied and execpt the size and theme props all other props are passed as is.</h6>
      <Input style={{ borderColor: 'violet' }} defaultValue="password" type="password" />
    </DemoCard>


    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Input className="bg-dark Input-light p-1" />
    </DemoCard>
  </div>
);

export default InputDemo;
