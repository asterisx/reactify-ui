/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FullScreen } from 'reactify';
import {
  simpleCode,
  disabledCode,
  expandedDefaultCode,
  hideIconCode,
  childrenCode,
  contractOnEscapeKeyCode,
  customClassCode,
} from './code-refrence';
import './full-screen.scss';
import DemoCard from '../../components/demo-card';

const FullScreenDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <FullScreen>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Expanded Default"
      uniqueIdentifier="expandedDefaultUse"
      sourceCode={expandedDefaultCode}
    >
      <FullScreen expanded>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Hide Icon"
      uniqueIdentifier="hideIconUse"
      sourceCode={hideIconCode}
    >
      <FullScreen showIcon={false}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <FullScreen disabled>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Children"
      uniqueIdentifier="childrenUse"
      sourceCode={childrenCode}
    >
      <FullScreen size="medium" className="p-2">
        <div className="card text-dark" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Contract on Esc key"
      uniqueIdentifier="contractOnEscKeyUse"
      sourceCode={contractOnEscapeKeyCode}
    >
      <FullScreen contractOnEscapeKey>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </FullScreen>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <FullScreen className="text-light bg-dark p-2 shadow">
        Custom Class FullScreen
      </FullScreen>
    </DemoCard>
  </div>
);

export default FullScreenDemo;
