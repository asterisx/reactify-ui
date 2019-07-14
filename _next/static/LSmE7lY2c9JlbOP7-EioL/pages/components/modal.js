(window.webpackJsonp=window.webpackJsonp||[]).push([["010f"],{EuYI:function(e,t,n){"use strict";n.r(t),n.d(t,"hideBackdropLink",function(){return o}),n.d(t,"onCloseLink",function(){return l}),n.d(t,"modalSizeLink",function(){return a}),n.d(t,"notAutoCloseLink",function(){return i}),n.d(t,"simpleLink",function(){return s});var o="https://stackblitz.com/edit/reactify-ui-modal-hide-backdrop",l="https://stackblitz.com/edit/reactify-ui-modal-on-close-event",a="https://stackblitz.com/edit/reactify-ui-modal-custom-sizes",i="https://stackblitz.com/edit/reactify-ui-modal-not-auto-close",s="https://stackblitz.com/edit/reactify-ui-modal-simple"},Luuo:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),l=n.n(o),a=n("gpOY"),i=n("rkil"),s=n("EuYI"),r=n("IUY8");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f={prevLink:{text:"Login",link:"".concat(r.d.componentsPath,"/login")},nextLink:{text:"Number Counter",link:"".concat(r.d.componentsPath,"/number-counter")}},h=function(e){function t(){var e,n,o,l,a,i,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,u=new Array(r),m=0;m<r;m++)u[m]=arguments[m];return o=this,n=!(l=(e=d(t)).call.apply(e,[this].concat(u)))||"object"!==c(l)&&"function"!=typeof l?p(o):l,a=p(n),s={simpleModalOpen:!1,smallModalOpen:!1,mediumModalOpen:!1,largeModalOpen:!1,customSizeModal:!1,autoCloseModalOpen:!1,hideBackdropModalOpen:!1,onCloseModal:!1},(i="state")in a?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,n}var n,h,C;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o["Component"]),n=t,(h=[{key:"render",value:function(){var e=this;return l.a.createElement(r.f,{componentName:"Modal"},l.a.createElement(r.c,{productionReady:!0,responsive:!0,githubLink:"".concat(r.d.githubComponentsPath,"/modal")}),l.a.createElement(r.e,{title:"Simple Use",sourceCode:i.simpleCode,externalSampleLink:s.simpleLink},l.a.createElement(a.Button,{onClick:function(){return e.setState({simpleModalOpen:!0})}},"Open Modal"),this.state.simpleModalOpen&&l.a.createElement(a.Modal,{onClose:function(){return e.setState({simpleModalOpen:!1})}},function(e){return l.a.createElement("div",{style:{width:"100%",height:"250px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",background:"white"}},l.a.createElement("input",{style:{fontSize:"20px"},type:"button",value:"Close",onClick:e}))})),l.a.createElement(r.e,{title:"Modal Size",sourceCode:i.modalSizeCode,externalSampleLink:s.modalSizeLink},l.a.createElement(a.Button,{onClick:function(){return e.setState({smallModalOpen:!0})}},"Open Small Modal"),this.state.smallModalOpen&&l.a.createElement(a.Modal,{small:!0,onClose:function(){return e.setState({smallModalOpen:!1})}},function(e){return l.a.createElement("div",{style:{width:"100%",height:"250px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",background:"white"}},l.a.createElement("input",{style:{fontSize:"20px"},type:"button",value:"Close",onClick:e}))}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(a.Button,{onClick:function(){return e.setState({mediumModalOpen:!0})}},"Open Medium Modal"),this.state.mediumModalOpen&&l.a.createElement(a.Modal,{medium:!0,onClose:function(){return e.setState({mediumModalOpen:!1})}},function(e){return l.a.createElement("div",{style:{width:"100%",height:"250px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",background:"white"}},l.a.createElement("input",{style:{fontSize:"20px"},type:"button",value:"Close",onClick:e}))}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(a.Button,{onClick:function(){return e.setState({largeModalOpen:!0})}},"Open Large Modal"),this.state.largeModalOpen&&l.a.createElement(a.Modal,{large:!0,onClose:function(){return e.setState({largeModalOpen:!1})}},function(e){return l.a.createElement("div",{style:{width:"100%",height:"250px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",background:"white"}},l.a.createElement("input",{style:{fontSize:"20px"},type:"button",value:"Close",onClick:e}))}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(a.Button,{onClick:function(){return e.setState({customSizeModal:!0})}},"Open Custom Size Modal"),this.state.customSizeModal&&l.a.createElement(a.Modal,{style:{width:"90%"},onClose:function(){return e.setState({customSizeModal:!1})}},function(e){return l.a.createElement("div",{style:{width:"100%",height:"250px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",background:"white"}},l.a.createElement("input",{style:{fontSize:"20px"},type:"button",value:"Close",onClick:e}))})),l.a.createElement(r.e,{title:"Auto Close (not)",sourceCode:i.notAutoCloseCode,externalSampleLink:s.notAutoCloseLink},l.a.createElement("h6",{className:"pb-3"},"By default the Modal closes when clicking outside the Modal but that can be disabled by passing"," ","autoClose={false}"),l.a.createElement(a.Button,{onClick:function(){return e.setState({autoCloseModalOpen:!0})}},"Open Modal"),this.state.autoCloseModalOpen&&l.a.createElement(a.Modal,{autoClose:!1},function(t){return l.a.createElement("div",{style:{width:"100%",height:"250px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",background:"white"}},l.a.createElement("input",{style:{fontSize:"20px"},type:"button",value:"Close",onClick:function(){e.setState({autoCloseModalOpen:!1}),t()}}))})),l.a.createElement(r.e,{title:"Hide Backdrop",sourceCode:i.hideBackdropCode,externalSampleLink:s.hideBackdropLink},l.a.createElement("h6",{className:"pb-3"},"To make the backdrop opaque"),l.a.createElement(a.Button,{onClick:function(){return e.setState({hideBackdropModalOpen:!0})}},"Open Modal"),this.state.hideBackdropModalOpen&&l.a.createElement(a.Modal,{hideBackDrop:!0,onClose:function(){return e.setState({hideBackdropModalOpen:!1})}},function(e){return l.a.createElement("div",{style:{width:"100%",height:"250px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",background:"white"}},l.a.createElement("input",{style:{fontSize:"20px"},type:"button",value:"Close",onClick:e}))})),l.a.createElement(r.e,{title:"onClose Event",sourceCode:i.onCloseCode,externalSampleLink:s.onCloseLink},l.a.createElement(a.Button,{onClick:function(){return e.setState({onCloseModal:!0})}},"Open Modal"),this.state.onCloseModal&&l.a.createElement(a.Modal,{top:!0,onClose:function(){e.setState({onCloseModal:!1}),alert("Closed")}},function(e){return l.a.createElement("div",{style:{width:"100%",height:"250px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",background:"white"}},l.a.createElement("input",{style:{fontSize:"20px"},type:"button",value:"Close",onClick:e}))})),l.a.createElement(r.a,{className:"mt-4 mb-4",prevLinkText:f.prevLink.text,prevLink:f.prevLink.link,nextLinkText:f.nextLink.text,nextLink:f.nextLink.link}))}}])&&u(n.prototype,h),C&&u(n,C),t}();t.default=Object(r.g)(h)},Tk4p:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/modal",function(){var e=n("oIVq");return{page:e.default||e}}])},oIVq:function(e,t,n){"use strict";n.r(t);var o=n("Luuo");n.d(t,"default",function(){return o.default})},rkil:function(e,t,n){"use strict";n.r(t),n.d(t,"hideBackdropCode",function(){return o}),n.d(t,"onCloseCode",function(){return l}),n.d(t,"modalSizeCode",function(){return a}),n.d(t,"notAutoCloseCode",function(){return i}),n.d(t,"simpleCode",function(){return s});var o="\n<Button\nonClick={() => this.setState({ hideBackdropModalOpen: true })}\n>\n  Open Modal\n</Button>\n{this.state.hideBackdropModalOpen && (\n<Modal\nhideBackDrop\nonClose={() => this.setState({ hideBackdropModalOpen: false })}\n>\n{closeToggle => (\n  <div\n    style={{\n      width: '100%',\n      height: '250px',\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      alignItems: 'center',\n      background: 'white',\n    }}\n  >\n    <input\n      style={{ fontSize: '20px' }}\n      type=\"button\"\n      value=\"Close\"\n      onClick={closeToggle}\n    />\n  </div>\n)}\n</Modal>\n)}\n",l="\n<Button\n  onClick={() => this.setState({ onCloseModal: true })}\n>\n    Open Modal\n</Button>\n{this.state.onCloseModal && (\n<Modal top onClose={() => { this.setState({ onCloseModal: false }); alert('Closed'); }}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n",a="\n<Button\n  onClick={() => this.setState({ smallModalOpen: true })}\n>\n  Open Small Modal\n</Button>\n{this.state.smallModalOpen && (\n<Modal small onClose={() => this.setState({ smallModalOpen: false })}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n\n<Button\nonClick={() => this.setState({ mediumModalOpen: true })}\n>\n  Open Medium Modal\n</Button>\n{this.state.mediumModalOpen && (\n<Modal medium onClose={() => this.setState({ mediumModalOpen: false })}>\n{closeToggle => (\n  <div\n    style={{\n      width: '100%',\n      height: '250px',\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      alignItems: 'center',\n      background: 'white',\n    }}\n  >\n    <input\n      style={{ fontSize: '20px' }}\n      type=\"button\"\n      value=\"Close\"\n      onClick={closeToggle}\n    />\n  </div>\n)}\n</Modal>\n)}\n\n<Button\n  onClick={() => this.setState({ largeModalOpen: true })}\n>\n    Open Large Modal\n</Button>\n{this.state.largeModalOpen && (\n<Modal large onClose={() => this.setState({ largeModalOpen: false })}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n\n<Button\n  onClick={() => this.setState({ customSizeModal: true })}\n>\n    Open Custom Size Modal\n</Button>\n{this.state.customSizeModal && (\n<Modal style={{ width: '90%' }} onClose={() => this.setState({ customSizeModal: false })}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n",i="\n<Button\nonClick={() => this.setState({ autoCloseModalOpen: true })}\n>\n  Open Modal\n</Button>\n{this.state.autoCloseModalOpen && (\n<Modal autoClose={false}>\n{closeToggle => (\n  <div\n    style={{\n      width: '100%',\n      height: '250px',\n      display: 'flex',\n      justifyContent: 'center',\n      alignContent: 'center',\n      alignItems: 'center',\n      background: 'white',\n    }}\n  >\n    <input\n      style={{ fontSize: '20px' }}\n      type=\"button\"\n      value=\"Close\"\n      onClick={\n          () => {\n            this.setState({ autoCloseModalOpen: false });\n            closeToggle();\n          }}\n    />\n  </div>\n)}\n</Modal>\n)}\n",s="\n<Button onClick={() => this.setState({ simpleModalOpen: true })}>Open Modal</Button>\n{this.state.simpleModalOpen && (\n<Modal onClose={() => this.setState({ simpleModalOpen: false })}>\n  {closeToggle => (\n    <div\n      style={{\n        width: '100%',\n        height: '250px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignContent: 'center',\n        alignItems: 'center',\n        background: 'white',\n      }}\n    >\n      <input\n        style={{ fontSize: '20px' }}\n        type=\"button\"\n        value=\"Close\"\n        onClick={closeToggle}\n      />\n    </div>\n  )}\n</Modal>\n)}\n"}},[["Tk4p","5d41","9da1"]]]);