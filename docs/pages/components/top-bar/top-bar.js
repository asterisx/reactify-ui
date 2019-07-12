/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Octicon, { MarkGithub } from '@githubprimer/octicons-react';
import { TopBar, Paper } from '@../../../../reactify-ui/build';
import {
  customSizeCode,
  customThemeCode,
  simpleCode,
} from './code-refrence';

import {
  customSizeLink,
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
    text: 'Tooltip',
    link: `${Constants.componentsPath}/tooltip`,
  },
  nextLink: {
    text: 'Tree View',
    link: `${Constants.componentsPath}/tree-view`,
  },
};

const TopBarDemo = () => (
  <DemoPage componentName="Top Bar">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/top-bar`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <TopBar>
        <TopBar.Logo>
          <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>
    </DemoCard>

    <DemoCard
      title="Theme Use"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <TopBar>
        <TopBar.Logo>
          <Paper primary noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>
      <br />
      <TopBar>
        <TopBar.Logo>
          <Paper secondary noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ marginBottom: '-4px', padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>
      <br />
      <TopBar>
        <TopBar.Logo>
          <Paper dark noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>

      <br />
      <TopBar>
        <TopBar.Logo>
          <Paper light noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ marginBottom: '-4px', padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>

      <br />
      <TopBar>
        <TopBar.Logo>
          <Paper info noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />


        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>

      <br />
      <TopBar>
        <TopBar.Logo>
          <Paper warning noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ marginBottom: '-4px', padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>

      <br />
      <TopBar>
        <TopBar.Logo>
          <Paper danger noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>

      <br />
      <TopBar>
        <TopBar.Logo>
          <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>

      <p className="pt-3">
        By default TopBar recieves the theme(primary, secondary .....)
        props and passes it on to TopBar.Logo, TopBar.Header and TopBar.Menu
        <br />
        However, TopBar.Logo, TopBar.Header and TopBar.Menu
        can recieve their own theme(primary, secondary .....) props
      </p>

      <TopBar>
        <TopBar.Logo>
          <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body dark />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          danger
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>
    </DemoCard>

    <DemoCard
      title="Size Use"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6 className="pt-3 pb-3">small</h6>
      <TopBar small>
        <TopBar.Logo>
          <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
        </TopBar.Menu>
      </TopBar>

      <h6 className="pt-3 pb-3">medium</h6>
      <TopBar medium>
        <TopBar.Logo>
          <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>

      <h6 className="pt-3 pb-3">large</h6>
      <TopBar large>
        <TopBar.Logo>
          <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>

      <h6 className="pt-3 pb-3">{'style={{ fontSize: \'2em\' }}'}</h6>
      <TopBar style={{ fontSize: '2em' }}>
        <TopBar.Logo>
          <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
        </TopBar.Logo>
        <TopBar.Body />
        <TopBar.Menu
          style={{
            display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
          }}
          warning
        >
          <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
            <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
          </a>
        </TopBar.Menu>
      </TopBar>
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

export default withHeader(TopBarDemo);
