(window.webpackJsonp=window.webpackJsonp||[]).push([["e434"],{"7MXM":function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion/accordion",function(){var o=n("s3OZ");return{page:o.default||o}}])},NpSI:function(o,e,n){"use strict";n.r(e),n.d(e,"customHeaderCode",function(){return c}),n.d(e,"propsCode",function(){return r}),n.d(e,"simpleCode",function(){return t}),n.d(e,"singularCode",function(){return a});var c='\n<Accordion onChange={({ index, opened }) => { console.log(index, opened); }}>\n  <Accordion.Item index={1}>\n    <Accordion.Header>\n      {({ toggleItem, disabled }) => <Paper className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 1</Paper>}\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={2}>\n    <Accordion.Header>\n      {({ toggleItem, disabled }) => <Paper warning className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 2</Paper>}\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n  \n  <Accordion.Item index={3}>\n    <Accordion.Header>\n      {({ toggleItem, disabled }) => <Paper danger className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 3</Paper>}\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>\n',r="\n<Accordion onChange={({ index, opened }) => { console.log(index, opened); }}>\n  <Accordion.Item index={1} open>\n    <Accordion.Header>\n      Accordion 1\n    </Accordion.Header>\n    <Accordion.Body>\n      This is open by default.\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={2} disabled>\n    <Accordion.Header>\n      This is a disabled header\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={3}>\n    <Accordion.Header>\n      Check the console for events\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={4}>\n    <Accordion.Header showIcon={false}>\n      Without Icon\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph or some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>\n",t="\n<Accordion success>\n  <Accordion.Item index={1} warning>\n    <Accordion.Header>\n      Accordion 1\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph or some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n  <Accordion.Item index={2} danger>\n    <Accordion.Header>\n      Accordion 2\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph or some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n  <Accordion.Item index={3}>\n    <Accordion.Header>\n      Accordion 3\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph or some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>\n",a="\n<Accordion multiple={false}>\n  <Accordion.Item index={1}>\n    <Accordion.Header>\n      Accordion 1\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={2}>\n    <Accordion.Header>\n      Accordion 2\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={3}>\n    <Accordion.Header>\n      Accordion 3\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>\n"},s3OZ:function(o,e,n){"use strict";n.r(e);var c=n("q1tI"),r=n.n(c),t=n("gpOY"),a=n("NpSI"),d=n("IUY8");e.default=Object(d.b)(function(){return r.a.createElement("div",{className:"w-100"},r.a.createElement(d.a,{title:"Simple Use (Themed)",uniqueIdentifier:"simpleUse",sourceCode:a.simpleCode},r.a.createElement(t.Accordion,{success:!0},r.a.createElement(t.Accordion.Item,{index:1,warning:!0},r.a.createElement(t.Accordion.Header,null,"Accordion 1"),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")),r.a.createElement(t.Accordion.Item,{index:2,danger:!0},r.a.createElement(t.Accordion.Header,null,"Accordion 2"),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")),r.a.createElement(t.Accordion.Item,{index:3},r.a.createElement(t.Accordion.Header,null,"Accordion 3"),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")))),r.a.createElement(d.a,{title:"Singular",uniqueIdentifier:"singularUse",sourceCode:a.singularCode},r.a.createElement(t.Accordion,{multiple:!1},r.a.createElement(t.Accordion.Item,{index:1},r.a.createElement(t.Accordion.Header,null,"Accordion 1"),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")),r.a.createElement(t.Accordion.Item,{index:2},r.a.createElement(t.Accordion.Header,null,"Accordion 2"),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")),r.a.createElement(t.Accordion.Item,{index:3},r.a.createElement(t.Accordion.Header,null,"Accordion 3"),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")))),r.a.createElement(d.a,{title:"Props",uniqueIdentifier:"propsUse",sourceCode:a.propsCode},r.a.createElement(t.Accordion,{onChange:function(o){var e=o.index,n=o.opened;console.log(e,n)}},r.a.createElement(t.Accordion.Item,{index:1,open:!0},r.a.createElement(t.Accordion.Header,null,"Accordion 1"),r.a.createElement(t.Accordion.Body,null,"This is open by default.")),r.a.createElement(t.Accordion.Item,{index:2,disabled:!0},r.a.createElement(t.Accordion.Header,null,"This is a disabled header"),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")),r.a.createElement(t.Accordion.Item,{index:3},r.a.createElement(t.Accordion.Header,null,"Check the console for events"),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")),r.a.createElement(t.Accordion.Item,{index:4},r.a.createElement(t.Accordion.Header,{showIcon:!1},"Without Icon"),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")))),r.a.createElement(d.a,{title:"Custom Header",uniqueIdentifier:"customHeaderUse",sourceCode:a.customHeaderCode},r.a.createElement(t.Accordion,{onChange:function(o){var e=o.index,n=o.opened;console.log(e,n)}},r.a.createElement(t.Accordion.Item,{index:1},r.a.createElement(t.Accordion.Header,null,function(o){var e=o.toggleItem,n=o.disabled;return r.a.createElement(t.Paper,{className:"w-100 p-3 cursor-pointer",onClick:e,disabled:n},"Accordion 1")}),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")),r.a.createElement(t.Accordion.Item,{index:2},r.a.createElement(t.Accordion.Header,null,function(o){var e=o.toggleItem,n=o.disabled;return r.a.createElement(t.Paper,{warning:!0,className:"w-100 p-3 cursor-pointer",onClick:e,disabled:n},"Accordion 2")}),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")),r.a.createElement(t.Accordion.Item,{index:3},r.a.createElement(t.Accordion.Header,null,function(o){var e=o.toggleItem,n=o.disabled;return r.a.createElement(t.Paper,{danger:!0,className:"w-100 p-3 cursor-pointer",onClick:e,disabled:n},"Accordion 3")}),r.a.createElement(t.Accordion.Body,null,"A lot of things can be here. A paragraph or some other content, a component too and other things too...")))))})}},[["7MXM","5d41","9da1"]]]);