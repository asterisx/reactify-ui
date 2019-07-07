import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Octicon, { MarkGithub } from '@githubprimer/octicons-react';
import { IoIosMenu } from 'react-icons/io';
import {
  Sidebar,
  SidebarItem,
  Portal,
  TopBar,
  Paper,
  Link as LibLink,
  SubSidebar,
} from '../../../reactify-ui/build';
import { componentsRouting } from '../../routes/components';

export default function withHeader(Page) {
  return class extends Component {
    state = { isPortalOpen: false }

    togglePortal = () => {
      this.setState(prevState => ({ isPortalOpen: !prevState.isPortalOpen }));
    }

    render() {
      const sideMenu = callback => (
        <Paper light className="d-block min-w-250px pl-2 pr-2">
          <h4 className="border-bottom p-1">Components</h4>
          <Sidebar light className="w-100 pl-3">
            {Object.keys(componentsRouting).map(key => (componentsRouting[key].sub
              ? (
                <SidebarItem
                  className="m-1"
                  key={componentsRouting[key].name}
                  text={componentsRouting[key].name}
                >
                  <SubSidebar className="m-3">
                    {Object.keys(componentsRouting[key].sub).map(subKey => (
                      <SidebarItem
                        onClick={callback}
                        className="m-1 margin-left-0_2em link-color-dark"
                        key={componentsRouting[key].sub[subKey].name}
                        content={(
                          <Link
                            href={componentsRouting[key].sub[subKey].path}
                            as={`${process.env.HOST + componentsRouting[key].sub[subKey].path}`}
                          >
                            {componentsRouting[key].sub[subKey].name}
                          </Link>
                    )}
                      />
                    ))}
                  </SubSidebar>
                </SidebarItem>
              )
              : (
                <SidebarItem
                  onClick={callback}
                  className="pl-3 m-1 margin-left-0_2em link-color-dark"
                  key={componentsRouting[key].name}
                  content={(
                    <Link
                      href={componentsRouting[key].path}
                      as={`${process.env.HOST + componentsRouting[key].path}`}
                    >
                      {componentsRouting[key].name}
                    </Link>
              )}
                />
              )))}
          </Sidebar>
        </Paper>
      );

      const { isPortalOpen } = this.state;

      const { togglePortal } = this;

      return (
        <>
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
            <TopBar.Logo success className="cursor-pointer">
              <IoIosMenu className="icon text-light" onClick={togglePortal} />
              <Link href="/" as={process.env.HOST}>
                <Paper success large noShadow className="logo p-2 pl-4 pr-4 h-100 dflex align-items-center">reactify ui</Paper>
              </Link>
            </TopBar.Logo>
            <TopBar.Body />
            <TopBar.Menu
              style={{
                display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
              }}
              warning
            >
              <LibLink href="https://github.com/asterisx/reactify-ui">
                <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
              </LibLink>

              <LibLink className="ml-3" href="https://spectrum.chat/reactify-ui">
                <img className="spectrum-icon" src={`${process.env.HOST}/static/assets/spectrum-white.png`} alt="spectrum chat" />
              </LibLink>
            </TopBar.Menu>
          </TopBar>
          <div className="container-fluid">
            {isPortalOpen && (
              <Portal left onClose={togglePortal}>
                {closePortal => sideMenu(closePortal)}
              </Portal>
            )}
            <div className="row">
              <Page />
            </div>
          </div>
        </>
      );
    }
  };
}
