(window.webpackJsonp=window.webpackJsonp||[]).push([["a960"],{"4zl3":function(e,a,r){"use strict";r.r(a),r.d(a,"declaredCode",function(){return n}),r.d(a,"declaredVerticalCode",function(){return t}),r.d(a,"simpleCode",function(){return c});var n='\n<HeirarchyView className="font-responsive">\n  <HeirarchyView.Item content={<Paper className="p-3" large warning>L0</Paper>}>\n    <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>\n      <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>\n        <Paper className="p-3" large>L3</Paper>\n      </HeirarchyView.Item>\n\n      <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>\n        <Paper className="p-3" large>L3</Paper>\n        <Paper className="p-3" large>L3</Paper>\n      </HeirarchyView.Item>\n    </HeirarchyView.Item>\n\n    <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>\n      <Paper className="p-3" large>L2</Paper>\n    </HeirarchyView.Item>\n  </HeirarchyView.Item>\n</HeirarchyView>\n',t='\n<HeirarchyView className="font-responsive">\n   <HeirarchyView.Item vertical content={<Paper className="p-3" large warning>L0</Paper>}>\n     <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>\n       <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>\n         <Paper className="p-3" large>L3</Paper>\n       </HeirarchyView.Item>\n       \n       <HeirarchyView.Item content={<Paper className="p-3" large warning>L2</Paper>}>\n         <Paper className="p-3" large>L3</Paper>\n         <Paper className="p-3" large>L3</Paper>\n       </HeirarchyView.Item>\n     </HeirarchyView.Item>\n\n     <HeirarchyView.Item content={<Paper className="p-3" large warning>L1</Paper>}>\n       <Paper className="p-3" large>L2</Paper>\n     </HeirarchyView.Item>\n   </HeirarchyView.Item>\n </HeirarchyView>\n',c="\nconst item = {\n  text: 'L0',\n  key: 1,\n  sub: [\n    {\n      text: 'L1',\n      key: 2,\n      sub: {\n        text: 'L3',\n        key: 3,\n      },\n    },\n    {\n      text: 'L1',\n      key: 4,\n      sub: [\n        {\n          content: <Paper>L3</Paper>,\n          key: 5,\n        },\n        {\n          text: 'L3',\n          key: 6,\n        },\n      ],\n    },\n  ],\n};\n\n<HeirarchyView className=\"font-responsive\" item={item} />\n"},Nj8v:function(e,a,r){"use strict";r.r(a),r.d(a,"declaredLink",function(){return n}),r.d(a,"declaredVerticalLink",function(){return t}),r.d(a,"simpleLink",function(){return c});var n="https://stackblitz.com/edit/reactify-ui-heirarchy-view-declarative",t="https://stackblitz.com/edit/reactify-ui-heirarchy-view-declarative-vertical",c="https://stackblitz.com/edit/reactify-ui-heirarchy-view-simple"},x88N:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/heirarchy-view/heirarchy-view",function(){var e=r("xIcr");return{page:e.default||e}}])},xIcr:function(e,a,r){"use strict";r.r(a);var n=r("q1tI"),t=r.n(n),c=r("gpOY"),i=r("4zl3"),l=r("Nj8v"),s=r("IUY8"),m={prevLink:{text:"Heat Map",link:"".concat(s.d.componentsPath,"/heat-map")},nextLink:{text:"Highlight",link:"".concat(s.d.componentsPath,"/highlight")}},p={text:"L0",key:1,sub:[{text:"L1",key:2,sub:{text:"L3",key:3}},{text:"L1",key:4,sub:[{content:t.a.createElement(c.Paper,null,"L3"),key:5},{text:"L3",key:6}]}]};a.default=Object(s.g)(function(){return t.a.createElement(s.f,{componentName:"Heirarchy View"},t.a.createElement(s.c,{productionReady:!0,responsive:!0,githubLink:"".concat(s.d.githubComponentsPath,"/heirarchy-view")}),t.a.createElement(s.e,{title:"Simple Use",sourceCode:i.simpleCode,externalSampleLink:l.simpleLink},t.a.createElement(c.HeirarchyView,{className:"heirarchy-view_font-responsive",item:p})),t.a.createElement(s.e,{title:"Declared Use",sourceCode:i.declaredCode,externalSampleLink:l.declaredLink},t.a.createElement(c.HeirarchyView,{className:"heirarchy-view_font-responsive"},t.a.createElement(c.HeirarchyView.Item,{content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L0")},t.a.createElement(c.HeirarchyView.Item,{content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L1")},t.a.createElement(c.HeirarchyView.Item,{content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L2")},t.a.createElement(c.Paper,{className:"p-3",large:!0},"L3")),t.a.createElement(c.HeirarchyView.Item,{content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L2")},t.a.createElement(c.Paper,{className:"p-3",large:!0},"L3"),t.a.createElement(c.Paper,{className:"p-3",large:!0},"L3"))),t.a.createElement(c.HeirarchyView.Item,{content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L1")},t.a.createElement(c.Paper,{className:"p-3",large:!0},"L2"))))),t.a.createElement(s.e,{title:"Declared Use (Vertical)",sourceCode:i.declaredVerticalCode,externalSampleLink:l.declaredVerticalLink},t.a.createElement(c.HeirarchyView,{className:"heirarchy-view_font-responsive"},t.a.createElement(c.HeirarchyView.Item,{vertical:!0,content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L0")},t.a.createElement(c.HeirarchyView.Item,{content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L1")},t.a.createElement(c.HeirarchyView.Item,{content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L2")},t.a.createElement(c.Paper,{className:"p-3",large:!0},"L3")),t.a.createElement(c.HeirarchyView.Item,{content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L2")},t.a.createElement(c.Paper,{className:"p-3",large:!0},"L3"),t.a.createElement(c.Paper,{className:"p-3",large:!0},"L3"))),t.a.createElement(c.HeirarchyView.Item,{content:t.a.createElement(c.Paper,{className:"p-3",large:!0,warning:!0},"L1")},t.a.createElement(c.Paper,{className:"p-3",large:!0},"L2"))))),t.a.createElement(s.a,{className:"mt-4 mb-4",prevLinkText:m.prevLink.text,prevLink:m.prevLink.link,nextLinkText:m.nextLink.text,nextLink:m.nextLink.link}))})}},[["x88N","5d41","9da1"]]]);