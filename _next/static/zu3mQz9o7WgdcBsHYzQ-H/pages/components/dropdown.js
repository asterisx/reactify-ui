(window.webpackJsonp=window.webpackJsonp||[]).push([["9079"],{BUxp:function(e,t,n){"use strict";n.r(t),n.d(t,"breakpointCode",function(){return a}),n.d(t,"disabledCode",function(){return l}),n.d(t,"labelCode",function(){return i}),n.d(t,"simpleCode",function(){return s}),n.d(t,"trayOpenCode",function(){return m});var a='\n<Dropdown sm md label="Please select a value">\n  {closeTray => (\n    <ListPanel className="w-100" onItemClicked={() => closeTray}>\n      <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n      <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n      <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n      <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n    </ListPanel>\n  )}\n</Dropdown>\n',l='\n<Dropdown disabled label="Please select a value" />\n',i='\n<Dropdown sm md label="Custom Label">\n  <ListPanel warning className="w-100">\n    <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n    <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n    <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n    <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n  </ListPanel>\n</Dropdown>\n',s='\n<Dropdown label="Please select a value">\n  {closeTray => (\n    <ListPanel onItemClicked={() => closeTray}>\n      <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n      <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n      <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n      <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n    </ListPanel>\n  )}\n</Dropdown>\n',m='\n<Dropdown trayOpen label="Please select a value">\n  {closeTray => (\n    <ListPanel onItemClicked={() => closeTray}>\n      <ListPanel.Item index={1}>Item 1</ListPanel.Item>\n      <ListPanel.Item index={2}>Item 2</ListPanel.Item>\n      <ListPanel.Item index={3}>Item 3</ListPanel.Item>\n      <ListPanel.Item index={4}>Item 4</ListPanel.Item>\n    </ListPanel>\n  )}\n</Dropdown>\n'},SzNY:function(e,t,n){"use strict";n.r(t);var a=n("k5QO");n.d(t,"default",function(){return a.default})},YHR5:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dropdown",function(){var e=n("SzNY");return{page:e.default||e}}])},k5QO:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),i=n("gpOY"),s=n("BUxp"),m=n("IUY8");t.default=Object(m.b)(function(){return l.a.createElement("div",{className:"w-100"},l.a.createElement(m.a,{title:"Simple Use",uniqueIdentifier:"simpleUse",sourceCode:s.simpleCode},l.a.createElement(i.Dropdown,{label:"Please select a value"},function(e){return l.a.createElement(i.ListPanel,{onItemClicked:function(){return e}},l.a.createElement(i.ListPanel.Item,{index:1},"Item 1"),l.a.createElement(i.ListPanel.Item,{index:2},"Item 2"),l.a.createElement(i.ListPanel.Item,{index:3},"Item 3"),l.a.createElement(i.ListPanel.Item,{index:4},"Item 4"))})),l.a.createElement(m.a,{title:"Tray Open dy default",uniqueIdentifier:"trayOpenDefaultUse",sourceCode:s.trayOpenCode},l.a.createElement(i.Dropdown,{trayOpen:!0,label:"Please select a value"},function(e){return l.a.createElement(i.ListPanel,{onItemClicked:function(){return e}},l.a.createElement(i.ListPanel.Item,{index:1},"Item 1"),l.a.createElement(i.ListPanel.Item,{index:2},"Item 2"),l.a.createElement(i.ListPanel.Item,{index:3},"Item 3"),l.a.createElement(i.ListPanel.Item,{index:4},"Item 4"))})),l.a.createElement(m.a,{title:"Breakpoints",uniqueIdentifier:"breakpointsUse",sourceCode:s.breakpointCode},l.a.createElement("h6",{className:"mt-3 mb-3"},"Options will show inside a portal on screen sizes marked by props sm, md, lg, xl. Open this dropdown on a md or xs screen size"),l.a.createElement(i.Dropdown,{sm:!0,md:!0,label:"Please select a value"},function(e){return l.a.createElement(i.ListPanel,{className:"w-100",onItemClicked:function(){return e}},l.a.createElement(i.ListPanel.Item,{index:1},"Item 1"),l.a.createElement(i.ListPanel.Item,{index:2},"Item 2"),l.a.createElement(i.ListPanel.Item,{index:3},"Item 3"),l.a.createElement(i.ListPanel.Item,{index:4},"Item 4"))})),l.a.createElement(m.a,{title:"Disabled",uniqueIdentifier:"disabledUse",sourceCode:s.disabledCode},l.a.createElement(i.Dropdown,{disabled:!0,label:"Please select a value"})),l.a.createElement(m.a,{title:"Label",uniqueIdentifier:"Label",sourceCode:s.labelCode},l.a.createElement("h6",{className:"mt-3 mb-3"},"Because label is a render prop, you can pass anything you want to it."),l.a.createElement(i.Dropdown,{sm:!0,md:!0,label:"Custom Label"},l.a.createElement(i.ListPanel,{warning:!0,className:"w-100"},l.a.createElement(i.ListPanel.Item,{index:1},"Item 1"),l.a.createElement(i.ListPanel.Item,{index:2},"Item 2"),l.a.createElement(i.ListPanel.Item,{index:3},"Item 3"),l.a.createElement(i.ListPanel.Item,{index:4},"Item 4")))))})}},[["YHR5","5d41","9da1"]]]);