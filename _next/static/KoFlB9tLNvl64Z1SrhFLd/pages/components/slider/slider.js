(window.webpackJsonp=window.webpackJsonp||[]).push([["92d1"],{iKmv:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/slider/slider",function(){var e=n("j7xq");return{page:e.default||e}}])},j7xq:function(e,l,n){"use strict";n.r(l);var a=n("q1tI"),t=n.n(a),r=n("gpOY"),i=n("mrlD"),u=n("IUY8");l.default=Object(u.b)(function(){return t.a.createElement("div",{className:"w-100"},t.a.createElement(u.a,{title:"Simple Use",uniqueIdentifier:"simpleUse",sourceCode:i.simpleCode},t.a.createElement(r.Slider,{value:20})),t.a.createElement(u.a,{title:"Controlled",uniqueIdentifier:"valueUse",sourceCode:i.controlledCode},t.a.createElement(r.Slider,{value:50,isControlled:!0})),t.a.createElement(u.a,{title:"Min Max Step",uniqueIdentifier:"minMaxUse",sourceCode:i.minMaxCode},t.a.createElement(r.Slider,{min:200,minAllowed:400,maxAllowed:1600,max:2e3,value:200,step:50})),t.a.createElement(u.a,{title:"Un Filled",uniqueIdentifier:"unFilledUse",sourceCode:i.unFilledCode},t.a.createElement(r.Slider,{value:20,fill:!1})),t.a.createElement(u.a,{title:"Disabled",uniqueIdentifier:"disabled",sourceCode:i.disabledCode},t.a.createElement(r.Slider,{disabled:!0,value:20})),t.a.createElement(u.a,{title:"Custom Icon Color, any valid css color (hex, rgb etc...) will work.",uniqueIdentifier:"customIcon",sourceCode:i.customIconCode},t.a.createElement(r.Slider,{fillColor:"red",value:20})),t.a.createElement(u.a,{title:"Custom Class",uniqueIdentifier:"customClass",sourceCode:i.customClassCode},t.a.createElement(r.Slider,{className:"m-5 w-50",value:20})),t.a.createElement(u.a,{title:"Custom Size",uniqueIdentifier:"customSize",sourceCode:i.customSizeCode},t.a.createElement(r.Slider,{small:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{medium:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{large:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{style:{fontSize:"40px"},value:20}),t.a.createElement("br",null),t.a.createElement("br",null)),t.a.createElement(u.a,{title:"Themes",uniqueIdentifier:"themes",sourceCode:i.customThemeCode},t.a.createElement(r.Slider,{primary:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{secondary:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{dark:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{light:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{info:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{warning:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{danger:!0,value:20}),t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement(r.Slider,{success:!0,value:20})),t.a.createElement(u.a,{title:"onChange Event",uniqueIdentifier:"onChange",sourceCode:i.onChangeCode},t.a.createElement(r.Slider,{onChange:function(e){var l=e.event,n=e.value;return console.log(l,n)},value:20})))})},mrlD:function(e,l,n){"use strict";n.r(l),n.d(l,"controlledCode",function(){return a}),n.d(l,"customClassCode",function(){return t}),n.d(l,"customIconCode",function(){return r}),n.d(l,"customSizeCode",function(){return i}),n.d(l,"customThemeCode",function(){return u}),n.d(l,"disabledCode",function(){return d}),n.d(l,"onChangeCode",function(){return c}),n.d(l,"minMaxCode",function(){return o}),n.d(l,"unFilledCode",function(){return m}),n.d(l,"simpleCode",function(){return s});var a="<Slider value={50} isControlled />",t='<Slider className="m-5 w-50" value={20} />',r='<Slider fillColor="red" value={20} />',i="\n<Slider small value={20} />\n\n<Slider medium value={20} />\n\n<Slider large value={20} />\n\n<Slider style={{ fontSize: '40px' }} value={20} />\n",u="\n<Slider primary value={20} />\n\n<Slider secondary value={20} />\n\n<Slider dark value={20} />\n\n<Slider light value={20} />\n\n<Slider info value={20} />\n\n<Slider warning value={20} />\n\n<Slider danger value={20} />\n\n<Slider success value={20} />\n",d="<Slider disabled value={20} />",o="<Slider min={200} minAllowed={400} maxAllowed={1600} max={2000} value={200} step={50} />",c="<Slider onChange={val => console.log(val)} value={20} />",m="<Slider value={20} fill={false} />",s="<Slider value={20} />"}},[["iKmv","5d41","9da1"]]]);