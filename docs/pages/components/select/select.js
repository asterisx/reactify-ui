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

import {
  breakpointLink,
  propsLink,
  selectableLink,
  selectionLink,
  searchableLink,
  simpleLink,
  singularLink,
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
    text: 'Search Bar',
    link: `${Constants.componentsPath}/search-bar`,
  },
  nextLink: {
    text: 'Sidebar',
    link: `${Constants.componentsPath}/sidebar`,
  },
};

const SelectDemo = () => (
  <DemoPage componentName="Select">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/select`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
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
      sourceCode={singularCode}
      externalSampleLink={singularLink}
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
      sourceCode={selectableCode}
      externalSampleLink={selectableLink}
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
      sourceCode={searchableCode}
      externalSampleLink={searchableLink}
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
      sourceCode={propsCode}
      externalSampleLink={propsLink}
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
      sourceCode={breakpointCode}
      externalSampleLink={breakpointLink}
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
      sourceCode={selectionCode}
      externalSampleLink={selectionLink}
    >
      <Select searchable allSelectable onSelectionChange={props => console.log(props)}>
        <Select.Item index={1}>Item 1</Select.Item>
        <Select.Item index={2}>Item 2</Select.Item>
        <Select.Item index={3}>Item 3</Select.Item>
        <Select.Item index={4}>Item 4</Select.Item>
      </Select>
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

export default withHeader(SelectDemo);
