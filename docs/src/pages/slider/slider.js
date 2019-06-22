/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Slider } from '@../../../../reactify-ui/build';
import {
  simpleCode,
  valueCode,
  disabledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
  customClassCode,
  unFilledCode,
  minMaxCode,
} from './code-refrence';
import './slider.scss';
import DemoCard from '../../components/demo-card';

const SliderDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Slider defaultValue={20} />
    </DemoCard>

    <DemoCard
      title="Value (Controlled)"
      uniqueIdentifier="valueUse"
      sourceCode={valueCode}
    >
      <Slider value={50} />
    </DemoCard>

    <DemoCard
      title="Min Max Step"
      uniqueIdentifier="minMaxUse"
      sourceCode={minMaxCode}
    >
      <Slider
        min={200}
        minAllowed={400}
        maxAllowed={1600}
        max={2000}
        defaultValue={200}
        step={50}
      />
    </DemoCard>

    <DemoCard
      title="Un Filled"
      uniqueIdentifier="unFilledUse"
      sourceCode={unFilledCode}
    >
      <Slider defaultValue={20} fill={false} />
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabled"
      sourceCode={disabledCode}
    >
      <Slider disabled defaultValue={20} />
    </DemoCard>

    <DemoCard
      title="Custom Icon Color, any valid css color (hex, rgb etc...) will work."
      uniqueIdentifier="customIcon"
      sourceCode={customIconCode}
    >
      <Slider fillColor="red" defaultValue={20} />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClass"
      sourceCode={customClassCode}
    >
      <Slider className="m-5 w-50" defaultValue={20} />
    </DemoCard>

    <DemoCard
      title="Custom Size"
      uniqueIdentifier="customSize"
      sourceCode={customSizeCode}
    >
      <Slider small defaultValue={20} />
      <br />
      <br />
      <Slider medium defaultValue={20} />
      <br />
      <br />
      <Slider large defaultValue={20} />
      <br />
      <br />
      <Slider style={{ fontSize: '40px' }} defaultValue={20} />
      <br />
      <br />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themes"
      sourceCode={customThemeCode}
    >
      <Slider primary defaultValue={20} />
      <br />
      <br />
      <Slider secondary defaultValue={20} />
      <br />
      <br />
      <Slider dark defaultValue={20} />
      <br />
      <br />
      <Slider light defaultValue={20} />
      <br />
      <br />
      <Slider info defaultValue={20} />
      <br />
      <br />
      <Slider warning defaultValue={20} />
      <br />
      <br />
      <Slider danger defaultValue={20} />
      <br />
      <br />
      <Slider success defaultValue={20} />
    </DemoCard>

    <DemoCard
      title="onChange Event"
      uniqueIdentifier="onChange"
      sourceCode={onChangeCode}
    >
      <Slider onChange={({ event, value }) => console.log(event, value)} defaultValue={20} />
    </DemoCard>
  </div>
);

export default SliderDemo;
