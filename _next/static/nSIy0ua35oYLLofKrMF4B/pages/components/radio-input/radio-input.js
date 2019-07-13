(window.webpackJsonp=window.webpackJsonp||[]).push([["365f"],{GD1y:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio-input/radio-input",function(){var e=t("vdAx");return{page:e.default||e}}])},KH2H:function(e,a,t){"use strict";t.r(a),t.d(a,"simpleCode",function(){return n}),t.d(a,"checkedCode",function(){return d}),t.d(a,"disabledCode",function(){return l}),t.d(a,"customIconCode",function(){return i}),t.d(a,"customSizeCode",function(){return o}),t.d(a,"customThemeCode",function(){return c}),t.d(a,"onChangeCode",function(){return u}),t.d(a,"labelCode",function(){return r}),t.d(a,"labelPositionCode",function(){return s}),t.d(a,"childrenCode",function(){return m}),t.d(a,"customClassCode",function(){return p});var n="<RadioInput />",d="<RadioInput defaultChecked />",l='<RadioInput disabled defaultChecked className="align-self-center">This is disabled</RadioInput>',i='<RadioInput iconColor="red" defaultChecked>Dogs, cats and birds</RadioInput>',o="\n<RadioInput small>small</RadioInput>\n<RadioInput medium>medium</RadioInput>\n<RadioInput large>large</RadioInput>\n<RadioInput style={{ fontSize: '40px' }}>style={{ fontSize:'40px' }}</RadioInput>\n",c="\n<RadioInput primary defaultChecked>Primary</RadioInput>\n<RadioInput secondary defaultChecked>Secondary</RadioInput>\n<RadioInput dark defaultChecked>Dark</RadioInput>\n<RadioInput light defaultChecked>Light</RadioInput>\n<RadioInput info defaultChecked>Info</RadioInput>\n<RadioInput warning defaultChecked>Warning</RadioInput>\n<RadioInput danger defaultChecked>Danger</RadioInput>\n<RadioInput success defaultChecked>Success</RadioInput>\n",u='<RadioInput onChange={val => alert("checked: " + val}")} />',r="<RadioInput defaultChecked>Dogs, cats and birds</RadioInput>",s="\n<RadioInput defaultChecked>Dogs, cats and birds</RadioInput>\n<RadioInput defaultChecked style={{ flexDirection: 'row-reverse' }}>Dogs, cats and birds</RadioInput>\n",m='\n<RadioInput defaultChecked>\n  <div className="card" style={{ width: \'18rem\' }}>\n    <div className="card-body">\n      <h5 className="card-title">Card title</h5>\n      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n      <a href="#" className="btn btn-primary">Go somewhere</a>\n    </div>\n  </div>\n</RadioInput>\n',p='<RadioInput className="text-light bg-dark p-2">This RadioInput has custom class</RadioInput>'},vdAx:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),d=t.n(n),l=t("gpOY"),i=t("KH2H"),o=t("IUY8");a.default=Object(o.b)(function(){return d.a.createElement("div",{className:"w-100"},d.a.createElement(o.a,{title:"Simple Use",uniqueIdentifier:"simpleUse",sourceCode:i.simpleCode},d.a.createElement(l.RadioInput,null)),d.a.createElement(o.a,{title:"Checked (Controlled)",uniqueIdentifier:"checkedUse",sourceCode:i.checkedCode},d.a.createElement(l.RadioInput,{checked:!0,className:"align-self-center"})),d.a.createElement(o.a,{title:"Disabled",uniqueIdentifier:"disabled",sourceCode:i.disabledCode},d.a.createElement(l.RadioInput,{disabled:!0,defaultChecked:!0,className:"align-self-center"},"This is disabled")),d.a.createElement(o.a,{title:"Label",uniqueIdentifier:"label",sourceCode:i.labelCode},d.a.createElement(l.RadioInput,{defaultChecked:!0},"Dogs, cats and birds")),d.a.createElement(o.a,{title:"Label Position",uniqueIdentifier:"labelPosition",sourceCode:i.labelPositionCode},d.a.createElement(l.RadioInput,{defaultChecked:!0},"Dogs, cats and birds"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{defaultChecked:!0,style:{flexDirection:"row-reverse"}},"Dogs, cats and birds")),d.a.createElement(o.a,{title:"Children",uniqueIdentifier:"children",sourceCode:i.childrenCode},d.a.createElement(l.RadioInput,{defaultChecked:!0},d.a.createElement("div",{className:"card",style:{width:"18rem"}},d.a.createElement("div",{className:"card-body"},d.a.createElement("h5",{className:"card-title"},"Card title"),d.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),d.a.createElement("a",{href:"#",className:"btn btn-primary"},"Go somewhere"))))),d.a.createElement(o.a,{title:"Custom Icon Color, any valid css color (hex, rgb etc...) will work.",uniqueIdentifier:"customIcon",sourceCode:i.customIconCode},d.a.createElement(l.RadioInput,{iconColor:"red",defaultChecked:!0},"Dogs, cats and birds")),d.a.createElement(o.a,{title:"Custom Class",uniqueIdentifier:"customClass",sourceCode:i.customClassCode},d.a.createElement(l.RadioInput,{className:"text-light bg-dark p-2"},"This RadioInput has custom class")),d.a.createElement(o.a,{title:"Custom Size",uniqueIdentifier:"customSize",sourceCode:i.customSizeCode},d.a.createElement(l.RadioInput,{small:!0},"small"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{medium:!0},"medium"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{large:!0},"large"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{style:{fontSize:"40px"}},"style={{ fontSize: '40px' }}"),d.a.createElement("br",null)),d.a.createElement(o.a,{title:"Themes",uniqueIdentifier:"themes",sourceCode:i.customThemeCode},d.a.createElement(l.RadioInput,{primary:!0,className:"pb-2",defaultChecked:!0},"Primary"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{secondary:!0,className:"pb-2",defaultChecked:!0},"Secondary"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{dark:!0,className:"pb-2",defaultChecked:!0},"Dark"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{light:!0,className:"pb-2",defaultChecked:!0},"Light"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{info:!0,className:"pb-2",defaultChecked:!0},"Info"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{warning:!0,className:"pb-2",defaultChecked:!0},"Warning"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{danger:!0,className:"pb-2",defaultChecked:!0},"Danger"),d.a.createElement("br",null),d.a.createElement(l.RadioInput,{success:!0,className:"pb-2",defaultChecked:!0},"Success")),d.a.createElement(o.a,{title:"onChange Event",uniqueIdentifier:"onChange",sourceCode:i.onChangeCode},d.a.createElement(l.RadioInput,{onChange:function(e){var a=e.event,t=e.checked;return console.log(a,t)}})))})}},[["GD1y","5d41","9da1"]]]);