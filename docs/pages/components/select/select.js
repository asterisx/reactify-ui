/* eslint-disable no-console */
import React from 'react';
import { Select } from '@../../../../reactify-ui/build';
import {
  breakpointCode,
  propsCode,
  selectableCode,
  selectionCode,
  searchableCode,
  simpleCode,
  singularCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const SelectDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <h6>Tray open by default</h6>
      <Select trayOpen>
        <Select.Item index={1}>Item 1</Select.Item>
        <Select.Item index={2}>Item 2</Select.Item>
        <Select.Item index={3}>Item 3</Select.Item>
        <Select.Item index={4}>Item 4</Select.Item>
      </Select>
    </DemoCard>

    <DemoCard
      title="Singular"
      uniqueIdentifier="singularUse"
      sourceCode={singularCode}
    >
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <h6 className="mt-3 mb-3">By default select is multiple but you can use {'multiple={false}'} to make the select singular</h6>
      <Select multiple={false}>
        <Select.Item index={1}>Item 1</Select.Item>
        <Select.Item index={2}>Item 2</Select.Item>
        <Select.Item index={3}>Item 3</Select.Item>
        <Select.Item index={4}>Item 4</Select.Item>
      </Select>
    </DemoCard>

    <DemoCard
      title="Selectable"
      uniqueIdentifier="selectableUse"
      sourceCode={selectableCode}
    >
      <Select allSelectable>
        <Select.Item index={1}>Item 1</Select.Item>
        <Select.Item index={2}>Item 2</Select.Item>
        <Select.Item index={3}>Item 3</Select.Item>
        <Select.Item index={4}>Item 4</Select.Item>
      </Select>
    </DemoCard>

    <DemoCard
      title="Searchable"
      uniqueIdentifier="searchableUse"
      sourceCode={searchableCode}
    >
      <Select searchable>
        <Select.Item index={1}>some</Select.Item>
        <Select.Item index={2}>value</Select.Item>
        <Select.Item index={3}>some other value</Select.Item>
        <Select.Item index={4}>value also</Select.Item>
      </Select>

    </DemoCard>

    <DemoCard
      title="Props"
      uniqueIdentifier="propsUse"
      sourceCode={propsCode}
    >
      <h6 className="mt-3 mb-3">Under the hood Select is a dropdown, so all props you pass to select will be drilled to dropdown</h6>
      <h6 className="mt-3 mb-3">Select also uses list panel and list panel props are pases as is, i.e theme props and size props</h6>
      <Select success>
        <Select.Item index={1}>Item 1</Select.Item>
        <Select.Item index={2}>Item 2</Select.Item>
        <Select.Item index={3}>Item 3</Select.Item>
        <Select.Item index={4}>Item 4</Select.Item>
      </Select>
      <br />
      <Select large>
        <Select.Item index={1}>Item 1</Select.Item>
        <Select.Item index={2}>Item 2</Select.Item>
        <Select.Item index={3}>Item 3</Select.Item>
        <Select.Item index={4}>Item 4</Select.Item>
      </Select>
    </DemoCard>

    <DemoCard
      title="Breakpoints"
      uniqueIdentifier="breakpointsUse"
      sourceCode={breakpointCode}
    >
      <h6 className="mt-3 mb-3">Options will show inside a portal on screen sizes marked by props sm, md, lg, xl. Open this dropdown on a md or xs screen size</h6>
      <h6>Tray open by default</h6>
      <Select sm md>
        <Select.Item index={1}>Item 1</Select.Item>
        <Select.Item index={2}>Item 2</Select.Item>
        <Select.Item index={3}>Item 3</Select.Item>
        <Select.Item index={4}>Item 4</Select.Item>
      </Select>
    </DemoCard>

    <DemoCard
      title="onSelection"
      uniqueIdentifier="selectionUse"
      sourceCode={selectionCode}
    >
      <Select searchable allSelectable onSelectionChange={props => console.log(props)}>
        <Select.Item index={1}>Item 1</Select.Item>
        <Select.Item index={2}>Item 2</Select.Item>
        <Select.Item index={3}>Item 3</Select.Item>
        <Select.Item index={4}>Item 4</Select.Item>
      </Select>
    </DemoCard>
  </div>
);

export default withHeader(SelectDemo);
