(window.webpackJsonp=window.webpackJsonp||[]).push([["6fce"],{QF1D:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/sidebar",function(){var e=n("jNps");return{page:e.default||e}}])},jNps:function(e,t,n){"use strict";n.r(t);var i=n("tk6Q");n.d(t,"default",function(){return i.default})},mmKV:function(e,t,n){"use strict";n.r(t),n.d(t,"customDeclarativeCode",function(){return r}),n.d(t,"customThemeCode",function(){return u}),n.d(t,"simpleFullCode",function(){return a}),n.d(t,"simpleCode",function(){return i});var i="\nconst items = [\n  {\n    content: <Link light href=\"#\">Can be a link</Link>, key: 0,\n  },\n  {\n    text: 'Option 2',\n    key: 1,\n    sub: [\n      {\n        text: 'Sub Option 1',\n        key: 2,\n        sub: [\n          {\n            text: 'Sub Option 1',\n            key: 3,\n            sub: [\n              {\n                text: 'Sub Option 1',\n                key: 4,\n                sub: [\n                  {\n                    text: 'Sub Option 1',\n                    key: 5,\n                    sub: [\n                      {\n                        text: 'Sub Option 1',\n                        key: 6,\n                        sub: [\n                          {\n                            text: 'Sub Option 1',\n                            key: 7,\n                            sub: [\n                              { text: 'Sub Option 1', key: 8 },\n                              { text: 'Sub Option 2', key: 9 },\n                              { text: 'Sub Option 3', key: 10 },\n                              { text: 'Sub Option 4', key: 11 },\n                            ],\n                          },\n                          { text: 'Sub Option 2', key: 12 },\n                          { text: 'Sub Option 3', key: 13 },\n                          { text: 'Sub Option 4', key: 14 },\n                        ],\n                      },\n                      { text: 'Sub Option 2', key: 15 },\n                      { text: 'Sub Option 3', key: 16 },\n                      { text: 'Sub Option 4', key: 17 },\n                    ],\n                  },\n                  { text: 'Sub Option 2', key: 18 },\n                  { text: 'Sub Option 3', key: 19 },\n                  { text: 'Sub Option 4', key: 20 },\n                ],\n              },\n              { text: 'Sub Option 2', key: 21 },\n              { text: 'Sub Option 3', key: 22 },\n              { text: 'Sub Option 4', key: 23 },\n            ],\n          },\n          { text: 'Sub Option 2', key: 24 },\n          { text: 'Sub Option 3', key: 25 },\n          { text: 'Sub Option 4', key: 26 },\n        ],\n      },\n      { text: 'Sub Option 2', key: 27 },\n      { text: 'Sub Option 3', key: 28 },\n      { text: 'Sub Option 4', key: 29 },\n    ],\n  },\n  { text: 'Option 2', key: 30 },\n  { text: 'Option 4', key: 31 },\n];\n\n<Sidebar tems={items} />\n",a='<Sidebar className="400px" items={items} positionFull />',u="\n<Sidebar items={items} primary />\n<Sidebar items={items} secondary />\n<Sidebar items={items} info />\n<Sidebar items={items} light />\n<Sidebar items={items} warning />\n<Sidebar items={items} danger />\n<Sidebar items={items} success />\n",r='\n<Sidebar className="w-300px">\n  <SidebarItem\n    key={1}\n    text="Option 1"\n  >\n    <SubSidebar>\n      <SidebarItem key={1} text="Option 1" />\n      <SidebarItem key={2} text="Option 2" />\n    </SubSidebar>\n  </SidebarItem>\n  <SidebarItem\n    key={2}\n    text="Option 2"\n  />\n</Sidebar>\n\n<Sidebar className="w-300px">\n  <SidebarItem\n    key={1}\n    content={\n      ({ isSubOpen, toggleSub }) => (\n        <Button\n          className="w-100"\n          onClick={toggleSub}\n          danger={isSubOpen}\n          success={!isSubOpen}\n        >\n          {isSubOpen ? \'Close Sub Sidebar\' : \'Open Sub Sidebar\'}\n        </Button>\n      )}\n  >\n    <SubSidebar>\n      <SidebarItem\n        key={1}\n        text="Sub Option 1"\n      />\n      <SidebarItem\n        key={2}\n        text="Sub Option 2"\n      />\n    </SubSidebar>\n  </SidebarItem>\n  <SidebarItem text="Option 2" />\n</Sidebar>\n'},tk6Q:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),u=n("gpOY"),r=n("mmKV"),b=n("IUY8"),o=[{content:a.a.createElement(u.Link,{light:!0,href:"#"},"Can be a link"),key:0},{text:"Option 2",key:1,sub:[{text:"Sub Option 1",key:2,sub:[{text:"Sub Option 1",key:3,sub:[{text:"Sub Option 1",key:4,sub:[{text:"Sub Option 1",key:5,sub:[{text:"Sub Option 1",key:6,sub:[{text:"Sub Option 1",key:7,sub:[{text:"Sub Option 1",key:8},{text:"Sub Option 2",key:9},{text:"Sub Option 3",key:10},{text:"Sub Option 4",key:11}]},{text:"Sub Option 2",key:12},{text:"Sub Option 3",key:13},{text:"Sub Option 4",key:14}]},{text:"Sub Option 2",key:15},{text:"Sub Option 3",key:16},{text:"Sub Option 4",key:17}]},{text:"Sub Option 2",key:18},{text:"Sub Option 3",key:19},{text:"Sub Option 4",key:20}]},{text:"Sub Option 2",key:21},{text:"Sub Option 3",key:22},{text:"Sub Option 4",key:23}]},{text:"Sub Option 2",key:24},{text:"Sub Option 3",key:25},{text:"Sub Option 4",key:26}]},{text:"Sub Option 2",key:27},{text:"Sub Option 3",key:28},{text:"Sub Option 4",key:29}]},{text:"Option 3",key:30},{text:"Option 4",key:31}];t.default=Object(b.b)(function(){return a.a.createElement("div",{className:"w-100"},a.a.createElement(b.a,{title:"Simple Use",uniqueIdentifier:"simpleUse",sourceCode:r.simpleCode},a.a.createElement(u.Sidebar,{className:"w-300px",items:o})),a.a.createElement(b.a,{title:"Simple Use (positionFull)",uniqueIdentifier:"simpleFullUse",sourceCode:r.simpleFullCode},a.a.createElement(u.Sidebar,{className:"w-300px h-160px",items:o,positionFull:!0})),a.a.createElement(b.a,{title:"Themes Use",uniqueIdentifier:"themesUse",sourceCode:r.customThemeCode},a.a.createElement("h5",null,"Theming is only for the default icons"),a.a.createElement("h5",null,"Primary Theme"),a.a.createElement(u.Sidebar,{className:"w-300px",items:o,primary:!0}),a.a.createElement("h5",null,"Secondary Theme"),a.a.createElement(u.Sidebar,{className:"w-300px",items:o,secondary:!0}),a.a.createElement("h5",null,"Info Theme"),a.a.createElement(u.Sidebar,{className:"w-300px",items:o,info:!0}),a.a.createElement("h5",null,"Light Theme"),a.a.createElement(u.Sidebar,{className:"w-300px",items:o,light:!0}),a.a.createElement("h5",null,"Warning Theme"),a.a.createElement(u.Sidebar,{className:"w-300px",items:o,warning:!0}),a.a.createElement("h5",null,"Danger Theme"),a.a.createElement(u.Sidebar,{className:"w-300px",items:o,danger:!0}),a.a.createElement("h5",null,"Success Theme"),a.a.createElement(u.Sidebar,{className:"w-300px",items:o,success:!0})),a.a.createElement(b.a,{title:"Custom Content (Declarative)",uniqueIdentifier:"customDeclarativeUse",sourceCode:r.customDeclarativeCode},a.a.createElement("h5",null,"Declared Menu"),a.a.createElement(u.Sidebar,{className:"w-300px"},a.a.createElement(u.SidebarItem,{key:1,text:"Option 1"},a.a.createElement(u.SubSidebar,null,a.a.createElement(u.SidebarItem,{key:1,text:"Option 1"}),a.a.createElement(u.SidebarItem,{key:2,text:"Option 2"}))),a.a.createElement(u.SidebarItem,{key:2,text:"Option 2"})),a.a.createElement("h5",{className:"mt-5"},"Declared Menu with custom content"),a.a.createElement(u.Sidebar,{className:"w-300px"},a.a.createElement(u.SidebarItem,{key:1,content:function(e){var t=e.isSubOpen,n=e.toggleSub;return a.a.createElement(u.Button,{className:"w-100",onClick:n,danger:t,success:!t},t?"Close Sub Sidebar":"Open Sub Sidebar")}},a.a.createElement(u.SubSidebar,null,a.a.createElement(u.SidebarItem,{key:1,text:"Sub Option 1"}),a.a.createElement(u.SidebarItem,{key:2,text:"Sub Option 2"}))),a.a.createElement(u.SidebarItem,{text:"Option 2"}))))})}},[["QF1D","5d41","9da1"]]]);