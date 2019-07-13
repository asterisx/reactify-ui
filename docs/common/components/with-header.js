import React, { Component } from 'react';
import Head from 'next/head';
import Octicon, { MarkGithub } from '@githubprimer/octicons-react';
import { IoIosMenu } from 'react-icons/io';
import {
  Button,
  Link,
  Paper,
  Portal,
  Text,
  TopBar,
} from '../../../reactify-ui/build';
import SideBar from './sidebar';

export default function withHeader(Page) {
  return class extends Component {
    state = { isPortalOpen: false }

    togglePortal = () => {
      this.setState(prevState => ({ isPortalOpen: !prevState.isPortalOpen }));
    }

    render() {
      const { isPortalOpen } = this.state;

      const { togglePortal } = this;

      return (
        <div className="d-flex flex-column h-100">
          <Head>
            <title>Reactify UI</title>
            <link rel="shortcut icon" href={`${process.env.HOST}/static/favicon.ico`} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <link rel="stylesheet" href={`${process.env.HOST}/static/styles.css`} />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/vs.min.css"
              integrity="sha256-iGs2TpBtdfGr1FIgzGyO4CKAD1+2QaDswtMmJwDtHAs="
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Dancing+Script:700|EB+Garamond"
              rel="stylesheet"
              type="text/css"
            />
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
              rel="stylesheet"
            />
            <script
              src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
              integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
              crossOrigin="anonymous"
            />
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
              integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
              crossOrigin="anonymous"
            />
            <script
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
              integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
              crossOrigin="anonymous"
            />
          </Head>

          <TopBar>
            <TopBar.Logo success className="cursor-pointer d-flex align-items-center">
              <Button success style={{ borderRadius: 0 }} className="d-lg-none" onClick={togglePortal}>
                <IoIosMenu className="icon text-light" />
              </Button>

              <Link style={{ textDecoration: 'none' }} href={process.env.HOST}>
                <Button success large style={{ borderRadius: 0 }} className="logo p-2 pl-4 pr-4 h-100 d-inline-flex align-items-center">reactify ui</Button>
              </Link>
            </TopBar.Logo>
            <TopBar.Body />
            <TopBar.Menu
              style={{
                display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
              }}
            >
              <Button>
                <Link style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/asterisx/reactify-ui">
                  <div className="d-flex align-items-center">
                    <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
                    <span className="d-none d-lg-inline ml-2">Fork me on Github</span>
                  </div>
                </Link>
              </Button>

              <Button className="ml-3">
                <Link style={{ color: 'white', textDecoration: 'none' }} href="https://spectrum.chat/reactify-ui">
                  <div className="d-flex align-items-center">
                    <img className="spectrum-icon" src={`${process.env.HOST}/static/assets/spectrum-white.png`} alt="spectrum chat" />
                    <span className="d-none d-lg-inline ml-2">Connect via spectrum</span>
                  </div>
                </Link>
              </Button>
            </TopBar.Menu>
          </TopBar>
          <div className="flex-grow-1">
            {isPortalOpen && (
              <Portal left onClose={togglePortal}>
                {closePortal => <SideBar className="d-block" onClick={closePortal} />}
              </Portal>
            )}
            <div className="d-flex flex-row">
              <SideBar className="d-none d-lg-block overflow-auto border-right mt-4 mb-4" />
              <Page />
            </div>
            <Paper secondary noShadow className="w-100 p-3 d-flex">
              <div className="align-flex-start d-flex flex-column justify-content-between">
                <Text dark>Quick Links</Text>
                <Link dark href="https://github.com/asterisx/reactify-ui" className="d-block mt-2">Github</Link>
                <Link dark href="#" className="d-block mt-2">Twitter</Link>
              </div>
            </Paper>
          </div>
        </div>
      );
    }
  };
}
