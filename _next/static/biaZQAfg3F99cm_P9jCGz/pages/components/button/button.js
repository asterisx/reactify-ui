(window.webpackJsonp=window.webpackJsonp||[]).push([["e14a"],{"5QWI":function(t,e,n){"use strict";n.r(e),n.d(e,"childrenLink",function(){return r}),n.d(e,"clearBorderedLink",function(){return a}),n.d(e,"clearLink",function(){return o}),n.d(e,"customClassLink",function(){return l}),n.d(e,"customColorLink",function(){return u}),n.d(e,"customSizeLink",function(){return c}),n.d(e,"customThemeLink",function(){return i}),n.d(e,"disabledLink",function(){return m}),n.d(e,"simpleLink",function(){return d});var r="https://stackblitz.com/edit/reactify-ui-button-children",a="https://stackblitz.com/edit/reactify-ui-button-clear-bordered",o="https://stackblitz.com/edit/reactify-ui-button-clear",l="https://stackblitz.com/edit/reactify-ui-button-custom-class",u="https://stackblitz.com/edit/reactify-ui-button-custom-color",c="https://stackblitz.com/edit/reactify-ui-button-custom-sizes",i="https://stackblitz.com/edit/reactify-ui-button-themes",m="https://stackblitz.com/edit/reactify-ui-button-disabled",d="https://stackblitz.com/edit/reactify-ui-button-simple"},GVg7:function(t,e,n){"use strict";n.r(e),n.d(e,"simpleCode",function(){return r}),n.d(e,"disabledCode",function(){return a}),n.d(e,"customThemeCode",function(){return u}),n.d(e,"customColorCode",function(){return c}),n.d(e,"childrenCode",function(){return o}),n.d(e,"customClassCode",function(){return l}),n.d(e,"customSizeCode",function(){return i}),n.d(e,"clearBorderedCode",function(){return m}),n.d(e,"clearCode",function(){return d});var r="\n<Button>Default Button</Button>\n",a="\n<Button disabled>Disabled Button</Button>\n",o='\n<Button>\n  <div className="card text-dark" style={{ width: \'18rem\' }}>\n    <div className="card-body">\n      <h5 className="card-title">Card title</h5>\n      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n    </div>\n  </div>\n</Button>\n',l='\n<Button className="p-5">Custom Class Button</Button>\n',u="\n<Button primary>Primary Button</Button>\n<Button secondary>Secondary Button</Button>\n<Button dark>Dark Button</Button>\n<Button light>Light Button</Button>\n<Button info>Info Button</Button>\n<Button warning>Warning Button</Button>\n<Button danger>Danger Button</Button>\n<Button success>Success Button</Button>\n",c="\n<Button style={{ backgroundColor: 'violter', color: 'white' }}>Custom Color Button</Button>\n",i="\n<Button small>Small Button</Button>\n<Button medium>Medium Button</Button>\n<Button large>Large Button</Button>\n<Button style={{ fontSize: '35px' }}>Custom Size Button</Button>\n",m="\n<Button primary clear bordered>Primary Button</Button>\n<Button secondary clear bordered>Secondary Button</Button>\n<Button dark clear bordered>Dark Button</Button>\n<Button light clear bordered>Light Button</Button>\n<Button info clear bordered>Info Button</Button>\n<Button warning clear bordered>Warning Button</Button>\n<Button danger clear bordered>Danger Button</Button>\n<Button success clear bordered>Success Button</Button>\n",d="\n<Button primary clear>Primary Button</Button>\n<Button secondary clear>Secondary Button</Button>\n<Button dark clear>Dark Button</Button>\n<Button light clear>Light Button</Button>\n<Button info clear>Info Button</Button>\n<Button warning clear>Warning Button</Button>\n<Button danger clear>Danger Button</Button>\n<Button success clear>Success Button</Button>\n"},MXEB:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button/button",function(){var t=n("cl+e");return{page:t.default||t}}])},"cl+e":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("gpOY"),l=n("GVg7"),u=n("5QWI"),c=n("IUY8"),i={prevLink:{text:"Breadcrumbs",link:"".concat(c.d.componentsPath,"/breadcrumbs")},nextLink:{text:"Card",link:"".concat(c.d.componentsPath,"/card")}};e.default=Object(c.g)(function(){return a.a.createElement(c.f,{componentName:"Button"},a.a.createElement(c.c,{productionReady:!0,responsive:!0,githubLink:"".concat(c.d.githubComponentsPath,"/button")}),a.a.createElement(c.e,{title:"Simple Use",sourceCode:l.simpleCode,externalSampleLink:u.simpleLink},a.a.createElement(o.Button,null,"Default Button")),a.a.createElement(c.e,{title:"Custom Sizes",sourceCode:l.customSizeCode,externalSampleLink:u.customSizeLink},a.a.createElement(o.Button,{small:!0},"Small Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{medium:!0},"Medium Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{large:!0},"Large Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{style:{fontSize:"35px"}},"Custom Size Button")),a.a.createElement(c.e,{title:"Custom Themes",sourceCode:l.customThemeCode,externalSampleLink:u.customThemeLink},a.a.createElement(o.Button,{primary:!0},"Primary Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{secondary:!0},"Secondary Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{dark:!0},"Dark Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{light:!0},"Light Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{info:!0},"Info Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{warning:!0},"Warning Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{danger:!0},"Danger Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{success:!0},"Success Button")),a.a.createElement(c.e,{title:"Disabled Use",sourceCode:l.disabledCode,externalSampleLink:u.disabledLink},a.a.createElement(o.Button,{disabled:!0},"Disabled Button")),a.a.createElement(c.e,{title:"Children",sourceCode:l.childrenCode,externalSampleLink:u.childrenLink},a.a.createElement(o.Button,null,a.a.createElement("div",{className:"card text-dark",style:{width:"18rem"}},a.a.createElement("div",{className:"card-body"},a.a.createElement("h5",{className:"card-title"},"Card title"),a.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."))))),a.a.createElement(c.e,{title:"Custom Color, any valid css color (hex, rgb etc...) will work.",sourceCode:l.customColorCode,externalSampleLink:u.customColorLink},a.a.createElement(o.Button,{style:{backgroundColor:"violter",color:"white"}},"Custom Color Button")),a.a.createElement(c.e,{title:"Custom Class",sourceCode:l.customClassCode,externalSampleLink:u.customClassLink},a.a.createElement(o.Button,{className:"p-5"},"Custom Class Button")),a.a.createElement(c.e,{title:"Clear",sourceCode:l.clearCode,externalSampleLink:u.clearLink},a.a.createElement(o.Button,{primary:!0,clear:!0},"Primary Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{secondary:!0,clear:!0},"Secondary Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{dark:!0,clear:!0},"Dark Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{light:!0,clear:!0},"Light Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{info:!0,clear:!0},"Info Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{warning:!0,clear:!0},"Warning Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{danger:!0,clear:!0},"Danger Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{success:!0,clear:!0},"Success Button")),a.a.createElement(c.e,{title:"Clear & Bordered",sourceCode:l.clearBorderedCode,externalSampleLink:u.clearBorderedLink},a.a.createElement(o.Button,{primary:!0,clear:!0,bordered:!0},"Primary Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{secondary:!0,clear:!0,bordered:!0},"Secondary Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{dark:!0,clear:!0,bordered:!0},"Dark Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{light:!0,clear:!0,bordered:!0},"Light Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{info:!0,clear:!0,bordered:!0},"Info Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{warning:!0,clear:!0,bordered:!0},"Warning Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{danger:!0,clear:!0,bordered:!0},"Danger Button"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(o.Button,{success:!0,clear:!0,bordered:!0},"Success Button")),a.a.createElement(c.a,{className:"mt-4 mb-4",prevLinkText:i.prevLink.text,prevLink:i.prevLink.link,nextLinkText:i.nextLink.text,nextLink:i.nextLink.link}))})}},[["MXEB","5d41","9da1"]]]);