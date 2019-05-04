/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Octicon, { MarkGithub } from '@githubprimer/octicons-react';
import { TopBar, Paper } from '@../../../../reactify/build';
import {
  simpleCode,
  themeCode,
  sizeCode,
} from './code-refrence';
import './top-bar.scss';
import DemoCard from '../../components/demo-card';

const TopBarDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <TopBar>
        <TopBar.Logo>
          <Paper success style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
      uniqueIdentifier="themesUse"
      sourceCode={themeCode}
    >
      <TopBar>
        <TopBar.Logo>
          <Paper primary style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper secondary style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper dark style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper light style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper info style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper warning style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper danger style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper success style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper success style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
      uniqueIdentifier="sizeUse"
      sourceCode={sizeCode}
    >
      <h6 className="pt-3 pb-3">small</h6>
      <TopBar small>
        <TopBar.Logo>
          <Paper success style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper success style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper success style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
          <Paper success style={{ padding: '0.2em 0.4em', boxShadow: 'none' }} className="logo">reactify ui</Paper>
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
  </div>
);

export default TopBarDemo;
