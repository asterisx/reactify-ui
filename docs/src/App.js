import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Octicon, { MarkGithub } from '@githubprimer/octicons-react';
import './App.scss';
import {
  Sidebar,
  SidebarItem,
  Portal,
  TopBar,
  Paper,
  Link as LibLink, SubSidebar,
} from 'reactify-ui';
import { IoIosMenu } from 'react-icons/io';
import AccordionDemo from './pages/accordion';
import { componentsRouting } from './routes/components';

class App extends Component {
  state = { isPortalOpen: false }

  togglePortal = () => {
    this.setState(prevState => ({ isPortalOpen: !prevState.isPortalOpen }));
  }

  render() {
    const sideMenu = callback => (
      <Paper light className="d-block min-w-250px pl-2 pr-2">
        <h4 className="border-bottom p-1">Components</h4>
        <Sidebar light className="w-100 pl-3">
          {Object.values(componentsRouting).map(route => (route.sub
            ? (
              <SidebarItem
                className="m-1"
                key={route.name}
                text={route.name}
              >
                <SubSidebar className="m-3">
                  {Object.values(route.sub).map(subRoute => (
                    <SidebarItem
                      className="m-1 margin-left-0_2em"
                      key={subRoute.name}
                      content={(
                        <Link onClick={callback} className="d-block text-dark" to={subRoute.path}>
                          {subRoute.name}
                        </Link>
                    )}
                    />
                  ))}
                </SubSidebar>
              </SidebarItem>

            )
            : (
              <SidebarItem
                className="pl-3 m-1 margin-left-0_2em"
                key={route.name}
                content={(
                  <Link onClick={callback} className="d-block text-dark" to={route.path}>
                    {route.name}
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
      <Router>
        <TopBar>
          <TopBar.Logo success className="cursor-pointer">
            <IoIosMenu className="icon text-light" onClick={togglePortal} />
            <Link to="accordion">
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
            <LibLink href="https://github.com/asterisx/reactify">
              <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
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
            <Route exact path="/reactify-ui" component={AccordionDemo} />
            {Object.values(componentsRouting).map(route => (route.sub
              ? Object.values(route.sub)
                .map(subRoute => (
                  <Route
                    exact
                    path={subRoute.path}
                    component={subRoute.component}
                    key={subRoute.name}
                  />
                ))
              : (
                <Route
                  exact
                  path={route.path}
                  component={route.component}
                  key={route.name}
                />
              )))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
