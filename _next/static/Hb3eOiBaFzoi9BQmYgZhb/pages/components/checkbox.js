(window.webpackJsonp=window.webpackJsonp||[]).push([["e917"],{fl0T:function(e,c,t){"use strict";t.r(c);var n=t("tUra");t.d(c,"default",function(){return n.default})},rZuW:function(e,c,t){"use strict";t.r(c),t.d(c,"childrenCode",function(){return n}),t.d(c,"controlledCode",function(){return o}),t.d(c,"customClassCode",function(){return r}),t.d(c,"customColorCode",function(){return a}),t.d(c,"customSizeCode",function(){return l}),t.d(c,"customThemeCode",function(){return i}),t.d(c,"disabledCode",function(){return s}),t.d(c,"labelPositionCode",function(){return h}),t.d(c,"onChangeCode",function(){return d}),t.d(c,"simpleCode",function(){return b});var n='\n  <Checkbox checked>\n    <div className="card" style={{ width: \'18rem\' }}>\n      <div className="card-body">\n        <h5 className="card-title">Card title</h5>\n        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n        <a href="#" className="btn btn-primary">Go somewhere</a>\n      </div>\n    </div>\n  </Checkbox>\n',o="<Checkbox checked isControlled />",a='<Checkbox checked iconColor="violet" />',r='<Checkbox checked className="bg-dark p-5" />',l="\n<Checkbox small>Small Size</Checkbox>\n\n<Checkbox medium>Medium Size</Checkbox>\n\n<Checkbox large>Large Size</Checkbox>\n\n<Checkbox style={{ fontSize: '40px' }}>style={{ fontSize: '40px' }}</Checkbox>\n",i="\n<Checkbox primary checked>Primary Checkbox</Checkbox>\n\n<Checkbox secondary checked>Secondary Checkbox</Checkbox>\n\n<Checkbox dark checked>Dark Checkbox</Checkbox>\n\n<Checkbox light checked>Light Checkbox</Checkbox>\n\n<Checkbox info checked>Info Checkbox</Checkbox>\n\n<Checkbox warning checked>Warning Checkbox</Checkbox>\n\n<Checkbox danger checked>Danger Checkbox</Checkbox>\n\n<Checkbox success checked>Success Checkbox</Checkbox>\n",s="<Checkbox checked disabled>This checkbox is disabled</Checkbox>",h="\n<Checkbox>This is a checkbox with left position</Checkbox>\n\n<Checkbox style={{ flexDirection: 'row-reverse' }}>This is a checkbox with right position</Checkbox>\n",d="<RadioInput onChange={({ event, checked }) => console.log(event, checked)} />",b="<Checkbox />"},sEh8:function(e,c,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){var e=t("fl0T");return{page:e.default||e}}])},tUra:function(e,c,t){"use strict";t.r(c);var n=t("q1tI"),o=t.n(n),a=t("gpOY"),r=t("rZuW"),l=t("IUY8");c.default=Object(l.b)(function(){return o.a.createElement("div",{className:"w-100"},o.a.createElement(l.a,{title:"Simple Use",uniqueIdentifier:"simpleUse",sourceCode:r.simpleCode},o.a.createElement(a.Checkbox,{checked:!0},"This is a checkbox")),o.a.createElement(l.a,{title:"Controlled (checked)",uniqueIdentifier:"controlledUse",sourceCode:r.controlledCode},o.a.createElement(a.Checkbox,{checked:!0,isControlled:!0},"This is a checked label")),o.a.createElement(l.a,{title:"Disabled",uniqueIdentifier:"disabledUse",sourceCode:r.disabledCode},o.a.createElement(a.Checkbox,{checked:!0,disabled:!0},"This checkbox is disabled")),o.a.createElement(l.a,{title:"Position (left, right)",uniqueIdentifier:"checkboxUse",sourceCode:r.labelPositionCode},o.a.createElement(a.Checkbox,null,"This is a checkbox with left position"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{style:{flexDirection:"row-reverse"}},"This is a checkbox with right position")),o.a.createElement(l.a,{title:"Children",uniqueIdentifier:"childrenUse",sourceCode:r.childrenCode},o.a.createElement(a.Checkbox,{checked:!0},o.a.createElement("div",{className:"card",style:{width:"18rem"}},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Card title"),o.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),o.a.createElement("a",{href:"#",className:"btn btn-primary"},"Go somewhere"))))),o.a.createElement(l.a,{title:"Custom Color",uniqueIdentifier:"customColorUse",sourceCode:r.customColorCode},o.a.createElement(a.Checkbox,{checked:!0,iconColor:"violet"},"Custom Color")),o.a.createElement(l.a,{title:"Custom Class",uniqueIdentifier:"customClassUse",sourceCode:r.customClassCode},o.a.createElement(a.Checkbox,{checked:!0,className:"bg-dark p-5"},"This checkbox has custom class")),o.a.createElement(l.a,{title:"Custom Size",uniqueIdentifier:"customSizeUse",sourceCode:r.customSizeCode},o.a.createElement(a.Checkbox,{small:!0},"Small Size"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{medium:!0},"Medium Size"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{large:!0},"Large Size"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{style:{fontSize:"40px"}},"style={{ fontSize: '40px' }}"),o.a.createElement("br",null)),o.a.createElement(l.a,{title:"Themes",uniqueIdentifier:"customThemeUse",sourceCode:r.customThemeCode},o.a.createElement(a.Checkbox,{primary:!0,className:"pb-2",checked:!0},"Primary Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{secondary:!0,className:"pb-2",checked:!0},"Secondary Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{dark:!0,className:"pb-2",checked:!0},"Dark Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{light:!0,className:"pb-2",checked:!0},"Light Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{info:!0,className:"pb-2",checked:!0},"Info Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{warning:!0,className:"pb-2",checked:!0},"Warning Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{danger:!0,className:"pb-2",checked:!0},"Danger Checkbox"),o.a.createElement("br",null),o.a.createElement(a.Checkbox,{success:!0,checked:!0},"Success Checkbox"),o.a.createElement("br",null)),o.a.createElement(l.a,{title:"onChange Event",uniqueIdentifier:"onChangeUse",sourceCode:r.onChangeCode},o.a.createElement(a.Checkbox,{onChange:function(e){var c=e.event,t=e.checked;return console.log(c,t)}})))})}},[["sEh8","5d41","9da1"]]]);