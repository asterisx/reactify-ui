(window.webpackJsonp=window.webpackJsonp||[]).push([["2517"],{"cdS+":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/context-menu/code-refrence",function(){var n=t("mvds");return{page:n.default||n}}])},mvds:function(n,e,t){"use strict";t.r(e),t.d(e,"simpleCode",function(){return o}),t.d(e,"customThemeCode",function(){return u}),t.d(e,"customEventCode",function(){return s}),t.d(e,"customDeclarativeCode",function(){return a}),t.d(e,"sizeCode",function(){return i});var o="\nconst items = [\n  {\n    text: 'Option 1 (Disabled)', key: 0, icon: <FaFileSignature />, disabled: true,\n  },\n  {\n    text: 'Option 2',\n    key: 1,\n    sub: [\n      {\n        text: 'Sub Option 1',\n        key: 2,\n        sub: [\n          {\n            text: 'Sub Option 1',\n            key: 3,\n            sub: [\n              {\n                text: 'Sub Option 1',\n                key: 4,\n                sub: [\n                  {\n                    text: 'Sub Option 1',\n                    key: 5,\n                    sub: [\n                      {\n                        text: 'Sub Option 1',\n                        key: 6,\n                        sub: [\n                          {\n                            text: 'Sub Option 1',\n                            key: 7,\n                            sub: [\n                              { text: 'Sub Option 1', key: 8 },\n                              { text: 'Sub Option 2', key: 9 },\n                              { text: 'Sub Option 3', key: 10 },\n                              { text: 'Sub Option 4', key: 11 },\n                            ],\n                          },\n                          { text: 'Sub Option 2', key: 12 },\n                          { text: 'Sub Option 3', key: 13 },\n                          { text: 'Sub Option 4', key: 14 },\n                        ],\n                      },\n                      { text: 'Sub Option 2', key: 15 },\n                      { text: 'Sub Option 3', key: 16 },\n                      { text: 'Sub Option 4', key: 17 },\n                    ],\n                  },\n                  { text: 'Sub Option 2', key: 18 },\n                  { text: 'Sub Option 3', key: 19 },\n                  { text: 'Sub Option 4', key: 20 },\n                ],\n              },\n              { text: 'Sub Option 2', key: 21 },\n              { text: 'Sub Option 3', key: 22 },\n              { text: 'Sub Option 4', key: 23 },\n            ],\n          },\n          { text: 'Sub Option 2', key: 24 },\n          { text: 'Sub Option 3', key: 25 },\n          { text: 'Sub Option 4', key: 26 },\n        ],\n      },\n      { text: 'Sub Option 2', key: 27 },\n      { text: 'Sub Option 3', key: 28 },\n      { text: 'Sub Option 4', key: 29 },\n    ],\n  },\n  { text: 'Option 2', key: 30 },\n  { text: 'Option 4', key: 31 },\n];\n\n<ContextMenu className=\"border\" items={items}>\n  <div className=\"big-box\">Right click anywhere in this box</div>\n</ContextMenu>\n",u='\n<ContextMenu className="border" items={items}>\n  <Paper className="w-100" primary>Primary Theme</Paper>\n</ContextMenu>\n<ContextMenu className="border" items={items} secondary>\n  <Paper className="w-100" secondary>Secondary Theme</Paper>\n</ContextMenu>\n<ContextMenu className="border" items={items} info>\n  <Paper className="w-100" info>Info Theme</Paper>\n</ContextMenu>\n<ContextMenu className="border" items={items} light>\n  <Paper className="w-100" light>Light Theme</Paper>\n</ContextMenu>\n<ContextMenu className="border" items={items} warning>\n  <Paper className="w-100" warning>Warning Theme</Paper>\n</ContextMenu>\n<ContextMenu className="border" items={items} danger>\n  <Paper className="w-100" danger>Danger Theme</Paper>\n</ContextMenu>\n<ContextMenu className="border" items={items} success>\n  <Paper className="w-100" success>Success Theme</Paper>\n</ContextMenu>\n',i='\n<ContextMenu className="border" items={items} small>\n  <div>Small Menu</div>\n</ContextMenu>\n<ContextMenu className="border" items={items} medium>\n  <div>Medium Menu</div>\n</ContextMenu>\n<ContextMenu className="border" items={items} large>\n  <div>Large Menu</div>\n</ContextMenu>\n',s='\n<ContextMenu className="border">\n  <div>\n      Click here for menu\n      <h5><i>Currently SubMenuItem supports onMouseDown and not onClick</i></h5>\n  </div>\n  <SubMenu>\n    <SubMenuItem \n      onMouseDown={() => console.log(\'mouse down on option 1\')} \n      text="Option 1" \n    />\n    <SubMenuItem \n      onMouseDown={() => console.log(\'mouse down on option 2\')} \n      text="Option 2" \n    />\n  </SubMenu>\n</ContextMenu>\n',a='\n<ContextMenu className="border">\n  <div>Declared Menu</div>\n  <SubMenu>\n    <SubMenuItem text="Option 1">\n      <SubMenu>\n        <SubMenuItem text="Option 1" />\n        <SubMenuItem text="Option 2" />\n      </SubMenu>\n    </SubMenuItem>\n    <SubMenuItem text="Option 2" />\n  </SubMenu>\n</ContextMenu>\n\n<ContextMenu className="border">\n  <div>Declared Menu with custom content</div>\n  <SubMenu>\n    <SubMenuItem text="Option 1" key={1}>\n      <SubMenu>\n        <SubMenuItem\n          content={\n            <Paper className="w-100">Custom Content 1</Paper>\n          }\n        />\n        <SubMenuItem \n          content={\n            <Paper className="w-100" success>Custom Content 2</Paper>\n          } \n        />\n      </SubMenu>\n    </SubMenuItem>\n    <SubMenuItem text="Option 2" key={2} />\n  </SubMenu>\n</ContextMenu>\n'}},[["cdS+","5d41"]]]);