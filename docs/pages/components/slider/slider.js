/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Slider } from '@../../../../reactify-ui/build';
import {
  controlledCode,
  customClassCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  onChangeCode,
  minMaxCode,
  unFilledCode,
  simpleCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const SliderDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Slider value={20} />
    </DemoCard>

    <DemoCard
      title="Controlled"
      uniqueIdentifier="valueUse"
      sourceCode={controlledCode}
    >
      <Slider value={50} isControlled />
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
        value={200}
        step={50}
      />
    </DemoCard>

    <DemoCard
      title="Un Filled"
      uniqueIdentifier="unFilledUse"
      sourceCode={unFilledCode}
    >
      <Slider value={20} fill={false} />
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabled"
      sourceCode={disabledCode}
    >
      <Slider disabled value={20} />
    </DemoCard>

    <DemoCard
      title="Custom Icon Color, any valid css color (hex, rgb etc...) will work."
      uniqueIdentifier="customIcon"
      sourceCode={customIconCode}
    >
      <Slider fillColor="red" value={20} />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClass"
      sourceCode={customClassCode}
    >
      <Slider className="m-5 w-50" value={20} />
    </DemoCard>

    <DemoCard
      title="Custom Size"
      uniqueIdentifier="customSize"
      sourceCode={customSizeCode}
    >
      <Slider small value={20} />
      <br />
      <br />
      <Slider medium value={20} />
      <br />
      <br />
      <Slider large value={20} />
      <br />
      <br />
      <Slider style={{ fontSize: '40px' }} value={20} />
      <br />
      <br />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themes"
      sourceCode={customThemeCode}
    >
      <Slider primary value={20} />
      <br />
      <br />
      <Slider secondary value={20} />
      <br />
      <br />
      <Slider dark value={20} />
      <br />
      <br />
      <Slider light value={20} />
      <br />
      <br />
      <Slider info value={20} />
      <br />
      <br />
      <Slider warning value={20} />
      <br />
      <br />
      <Slider danger value={20} />
      <br />
      <br />
      <Slider success value={20} />
    </DemoCard>

    <DemoCard
      title="onChange Event"
      uniqueIdentifier="onChange"
      sourceCode={onChangeCode}
    >
      <Slider onChange={({ event, value }) => console.log(event, value)} value={20} />
    </DemoCard>
  </div>
);

export default withHeader(SliderDemo);
