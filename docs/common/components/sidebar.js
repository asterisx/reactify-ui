import React from 'react';
import {
  Link,
  Paper,
  Sidebar,
  SidebarItem,
  SubSidebar,
} from '../../../reactify-ui/build';
import { componentsRouting } from '../../routes/components';

const SideBar = ({ onClick, className, ...otherProps }) => (
  <Paper
    noShadow
    light
    className={`min-w-250px pl-2 pr-2 ${className || ''}`}
    {...otherProps}
  >
    <Sidebar light className="w-100 pl-3 h-100">
      <SidebarItem
        className="m-1"
        key="getting-started"
        text="Getting Started"
      >
        <SubSidebar className="m-3">
          <SidebarItem
            onClick={onClick}
            content={(
              <Link
                dark
                href={`${process.env.HOST}/getting-started/installation`}
              >
                Installation
              </Link>
            )}
          />
          <SidebarItem
            onClick={onClick}
            content={(
              <Link
                dark
                href={`${process.env.HOST}/getting-started/why-this-library`}
              >
                Why this library
              </Link>
            )}
          />
          <SidebarItem
            onClick={onClick}
            content={(
              <Link
                dark
                href={`${process.env.HOST}/getting-started/features`}
              >
                Features
              </Link>
            )}
          />
        </SubSidebar>
      </SidebarItem>
      <SidebarItem
        className="m-1"
        key="components"
        text="Components"
      >
        <SubSidebar className="m-3">
          {Object.keys(componentsRouting).map(key => (componentsRouting[key].sub
            ? (
              <SidebarItem
                key={componentsRouting[key].name}
                text={componentsRouting[key].name}
              >
                <SubSidebar className="m-3">
                  {Object.keys(componentsRouting[key].sub).map(subKey => (
                    <SidebarItem
                      onClick={onClick}
                      className="margin-left-0_2em link-color-dark"
                      key={componentsRouting[key].sub[subKey].name}
                      content={(
                        <Link
                          href={process.env.HOST + componentsRouting[key].sub[subKey].path}
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
                onClick={onClick}
                className="margin-left-0_2em link-color-dark"
                key={componentsRouting[key].name}
                content={(
                  <Link
                    href={process.env.HOST + componentsRouting[key].path}
                  >
                    {componentsRouting[key].name}
                  </Link>
                      )}
              />
            )))}
        </SubSidebar>
      </SidebarItem>
      <SidebarItem
        className="m-1"
        key="advanced"
        text="Advanced"
      >
        <SubSidebar className="m-3">
          <SidebarItem
            onClick={onClick}
            content={(
              <Link
                dark
                href={`${process.env.HOST}/advanced/recipes`}
              >
                Recipes
              </Link>
            )}
          />
          <SidebarItem
            onClick={onClick}
            content={(
              <Link
                dark
                href={`${process.env.HOST}/advanced/styling`}
              >
                Styling
              </Link>
            )}
          />
          <SidebarItem
            onClick={onClick}
            content={(
              <Link
                dark
                href={`${process.env.HOST}/advanced/theming`}
              >
                Theming
              </Link>
            )}
          />
        </SubSidebar>
      </SidebarItem>
    </Sidebar>
  </Paper>
);

export default SideBar;
