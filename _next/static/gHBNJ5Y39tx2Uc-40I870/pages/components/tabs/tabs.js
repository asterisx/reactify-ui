(window.webpackJsonp=window.webpackJsonp||[]).push([["da26"],{"8q1o":function(e,n,t){"use strict";t.r(n),t.d(n,"simpleCode",function(){return a}),t.d(n,"stylingCode",function(){return r}),t.d(n,"tabsDisabledCode",function(){return i});var a="\n<Tabs\n  onSelectionChange={\n    selectedIndex => this.setState({ simpleSelectedIndex: selectedIndex })\n  }\n>\n  <Tab index={0} selectedIndex={this.state.simpleSelectedIndex}>\n    <Tab.Header>\n      <Button\n        style={{ borderRadius: 0 }}\n        primary\n        dark={this.state.simpleSelectedIndex !== 0}\n      >\n        Tab 1\n      </Button>\n    </Tab.Header>\n    <Tab.Body>\n      <Paper primary style={{ height: '300px', transitionDuration: '0.3s' }} className=\"d-flex w-100 align-items-center align-content-center justify-content-center font-large\">Tab 1</Paper>\n    </Tab.Body>\n  </Tab>\n  <Tab index={1}>\n    <Tab.Header>\n      <Button\n        style={{ borderRadius: 0 }}\n        dark\n        danger={this.state.simpleSelectedIndex === 1}\n      >\n        Tab 2\n      </Button>\n    </Tab.Header>\n    <Tab.Body>\n      <Paper danger style={{ height: '300px', transitionDuration: '0.3s' }} className=\"d-flex w-100 align-items-center align-content-center justify-content-center font-large\">Tab 2</Paper>\n    </Tab.Body>\n  </Tab>\n  <Tab index={2}>\n    <Tab.Header>\n      <Button\n        style={{ borderRadius: 0 }}\n        dark\n        warning={this.state.simpleSelectedIndex === 2}\n      >\n        Tab 3\n      </Button>\n    </Tab.Header>\n    <Tab.Body>\n      <Paper warning style={{ height: '300px', transitionDuration: '0.3s' }} className=\"d-flex w-100 align-items-center align-content-center justify-content-center font-large\">Tab 3</Paper>\n    </Tab.Body>\n  </Tab>\n </Tabs>\n",r="\n.reactify-ui-tabs__toggle {\n  align-self: flex-end;\n}\n\n<Tabs\n  onSelectionChange={\n    selectedIndex => this.setState({ stylingSelectedIndex: selectedIndex })\n  }\n  className=\"d-flex flex-column\"\n>\n  <Tab index={0} selectedIndex={this.state.stylingSelectedIndex}>\n    <Tab.Header>\n      <Button\n        style={{ borderRadius: 0 }}\n        primary\n        dark={this.state.stylingSelectedIndex !== 0}\n      >\n        Tab 1\n      </Button>\n    </Tab.Header>\n    <Tab.Body>\n      <Paper primary style={{ height: '300px', transitionDuration: '0.3s' }} className=\"d-flex w-100 align-items-center align-content-center justify-content-center font-large\">Tab 1</Paper>\n    </Tab.Body>\n  </Tab>\n  <Tab index={1}>\n    <Tab.Header>\n      <Button\n        style={{ borderRadius: 0 }}\n        dark\n        danger={this.state.stylingSelectedIndex === 1}\n      >\n        Tab 2\n      </Button>\n    </Tab.Header>\n    <Tab.Body>\n      <Paper danger style={{ height: '300px', transitionDuration: '0.3s' }} className=\"d-flex w-100 align-items-center align-content-center justify-content-center font-large\">Tab 2</Paper>\n    </Tab.Body>\n  </Tab>\n  <Tab index={2}>\n    <Tab.Header>\n      <Button\n        style={{ borderRadius: 0 }}\n        dark\n        warning={this.state.stylingSelectedIndex === 2}\n      >\n        Tab 3\n      </Button>\n    </Tab.Header>\n    <Tab.Body>\n      <Paper warning style={{ height: '300px', transitionDuration: '0.3s' }} className=\"d-flex w-100 align-items-center align-content-center justify-content-center font-large\">Tab 3</Paper>\n    </Tab.Body>\n  </Tab>\n</Tabs>\n",i="\n<Tabs\n  tabsDisabled\n  className=\"d-flex flex-column\"\n>\n  <Tab index={0}>\n    <Tab.Header>\n      <Button\n        primary\n      >\n        Tab 1\n      </Button>\n    </Tab.Header>\n    <Tab.Body>\n      <Paper primary style={{ height: '300px', transitionDuration: '0.3s' }} className=\"d-flex w-100 align-items-center align-content-center justify-content-center font-large\">Tab 1</Paper>\n    </Tab.Body>\n  </Tab>\n  <Tab index={1}>\n    <Tab.Header>\n      <Button\n        style={{ borderRadius: 0 }}\n        danger\n      >\n        Tab 2\n      </Button>\n    </Tab.Header>\n  </Tab>\n  <Tab index={2}>\n    <Tab.Header>\n      <Button\n        style={{ borderRadius: 0 }}\n        warning\n      >\n        Tab 3\n      </Button>\n    </Tab.Header>\n  </Tab>\n</Tabs>\n"},"8yvz":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=t("gpOY"),l=t("8q1o"),s=t("IUY8");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var y=function(e){function n(){var e,t,a,r,i,l,s;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var c=arguments.length,u=new Array(c),y=0;y<c;y++)u[y]=arguments[y];return a=this,t=!(r=(e=d(n)).call.apply(e,[this].concat(u)))||"object"!==o(r)&&"function"!=typeof r?b(a):r,i=b(t),s={simpleSelectedIndex:0,stylingSelectedIndex:0},(l="state")in i?Object.defineProperty(i,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[l]=s,t}var t,y,m;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,a["Component"]),t=n,(y=[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"w-100"},r.a.createElement(s.a,{title:"Simple Use",uniqueIdentifier:"simpleUse",sourceCode:l.simpleCode},r.a.createElement(i.Tabs,{selectedIndex:this.state.simpleSelectedIndex,onSelectionChange:function(n){var t=n.index;return e.setState({simpleSelectedIndex:t})}},r.a.createElement(i.Tab,{index:0},r.a.createElement(i.Tab.Header,null,r.a.createElement(i.Button,{style:{borderRadius:0},primary:0===this.state.simpleSelectedIndex,dark:0!==this.state.simpleSelectedIndex},"Tab 1")),r.a.createElement(i.Tab.Body,null,r.a.createElement(i.Paper,{primary:!0,style:{height:"300px",transitionDuration:"0.3s"},className:"d-flex w-100 align-items-center align-content-center justify-content-center font-large"},"Tab 1"))),r.a.createElement(i.Tab,{index:1},r.a.createElement(i.Tab.Header,null,r.a.createElement(i.Button,{style:{borderRadius:0},dark:!0,danger:1===this.state.simpleSelectedIndex},"Tab 2")),r.a.createElement(i.Tab.Body,null,r.a.createElement(i.Paper,{danger:!0,style:{height:"300px",transitionDuration:"0.3s"},className:"d-flex w-100 align-items-center align-content-center justify-content-center font-large"},"Tab 2"))),r.a.createElement(i.Tab,{index:2},r.a.createElement(i.Tab.Header,null,r.a.createElement(i.Button,{style:{borderRadius:0},dark:!0,warning:2===this.state.simpleSelectedIndex},"Tab 3")),r.a.createElement(i.Tab.Body,null,r.a.createElement(i.Paper,{warning:!0,style:{height:"300px",transitionDuration:"0.3s"},className:"d-flex w-100 align-items-center align-content-center justify-content-center font-large"},"Tab 3"))))),r.a.createElement(s.a,{title:"Tabs Disabled",uniqueIdentifier:"tabsDisabledUse",sourceCode:l.tabsDisabledCode},r.a.createElement(i.Tabs,{tabsDisabled:!0},r.a.createElement(i.Tab,{index:0},r.a.createElement(i.Tab.Header,null,r.a.createElement(i.Button,{primary:!0},"Tab 1")),r.a.createElement(i.Tab.Body,null,r.a.createElement(i.Paper,{primary:!0,style:{height:"300px",transitionDuration:"0.3s"},className:"d-flex w-100 align-items-center align-content-center justify-content-center font-large"},"Tab 1"))),r.a.createElement(i.Tab,{index:1},r.a.createElement(i.Tab.Header,null,r.a.createElement(i.Button,{style:{borderRadius:0},danger:!0},"Tab 2"))),r.a.createElement(i.Tab,{index:2},r.a.createElement(i.Tab.Header,null,r.a.createElement(i.Button,{style:{borderRadius:0},warning:!0},"Tab 3"))))),r.a.createElement(s.a,{title:"Styling",uniqueIdentifier:"stylingUse",sourceCode:l.stylingCode},r.a.createElement(i.Tabs,{onSelectionChange:function(n){var t=n.index;return e.setState({stylingSelectedIndex:t})},className:"d-flex flex-column"},r.a.createElement(i.Tab,{index:0,selectedIndex:this.state.stylingSelectedIndex},r.a.createElement(i.Tab.Header,null,r.a.createElement(i.Button,{style:{borderRadius:0},primary:!0,dark:0!==this.state.stylingSelectedIndex},"Tab 1")),r.a.createElement(i.Tab.Body,null,r.a.createElement(i.Paper,{primary:!0,style:{height:"300px",transitionDuration:"0.3s"},className:"d-flex w-100 align-items-center align-content-center justify-content-center font-large"},"Tab 1"))),r.a.createElement(i.Tab,{index:1},r.a.createElement(i.Tab.Header,null,r.a.createElement(i.Button,{style:{borderRadius:0},dark:!0,danger:1===this.state.stylingSelectedIndex},"Tab 2")),r.a.createElement(i.Tab.Body,null,r.a.createElement(i.Paper,{danger:!0,style:{height:"300px",transitionDuration:"0.3s"},className:"d-flex w-100 align-items-center align-content-center justify-content-center font-large"},"Tab 2"))),r.a.createElement(i.Tab,{index:2},r.a.createElement(i.Tab.Header,null,r.a.createElement(i.Button,{style:{borderRadius:0},dark:!0,warning:2===this.state.stylingSelectedIndex},"Tab 3")),r.a.createElement(i.Tab.Body,null,r.a.createElement(i.Paper,{warning:!0,style:{height:"300px",transitionDuration:"0.3s"},className:"d-flex w-100 align-items-center align-content-center justify-content-center font-large"},"Tab 3"))))))}}])&&c(t.prototype,y),m&&c(t,m),n}();n.default=Object(s.b)(y)},chig:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tabs/tabs",function(){var e=t("8yvz");return{page:e.default||e}}])}},[["chig","5d41","9da1"]]]);