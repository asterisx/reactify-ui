(window.webpackJsonp=window.webpackJsonp||[]).push([["89e5"],{JyM1:function(o,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion/code-refrence",function(){var o=e("NpSI");return{page:o.default||o}}])},NpSI:function(o,n,e){"use strict";e.r(n),e.d(n,"customHeaderCode",function(){return c}),e.d(n,"propsCode",function(){return r}),e.d(n,"simpleCode",function(){return d}),e.d(n,"singularCode",function(){return t});var c='\n<Accordion onChange={({ index, opened }) => { console.log(index, opened); }}>\n  <Accordion.Item index={1}>\n    <Accordion.Header>\n      {({ toggleItem, disabled }) => <Paper className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 1</Paper>}\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={2}>\n    <Accordion.Header>\n      {({ toggleItem, disabled }) => <Paper warning className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 2</Paper>}\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n  \n  <Accordion.Item index={3}>\n    <Accordion.Header>\n      {({ toggleItem, disabled }) => <Paper danger className="w-100 p-3 cursor-pointer" onClick={toggleItem} disabled={disabled}>Accordion 3</Paper>}\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>\n',r="\n<Accordion onChange={({ index, opened }) => { console.log(index, opened); }}>\n  <Accordion.Item index={1} open>\n    <Accordion.Header>\n      Accordion 1\n    </Accordion.Header>\n    <Accordion.Body>\n      This is open by default.\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={2} disabled>\n    <Accordion.Header>\n      This is a disabled header\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={3}>\n    <Accordion.Header>\n      Check the console for events\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={4}>\n    <Accordion.Header showIcon={false}>\n      Without Icon\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph or some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>\n",d="\n<Accordion success>\n  <Accordion.Item index={1} warning>\n    <Accordion.Header>\n      Accordion 1\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph or some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n  <Accordion.Item index={2} danger>\n    <Accordion.Header>\n      Accordion 2\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph or some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n  <Accordion.Item index={3}>\n    <Accordion.Header>\n      Accordion 3\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph or some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>\n",t="\n<Accordion multiple={false}>\n  <Accordion.Item index={1}>\n    <Accordion.Header>\n      Accordion 1\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={2}>\n    <Accordion.Header>\n      Accordion 2\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n\n  <Accordion.Item index={3}>\n    <Accordion.Header>\n      Accordion 3\n    </Accordion.Header>\n    <Accordion.Body>\n      A lot of things can be here.\n      A paragraph of some other content, a component too and other things too...\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>\n"}},[["JyM1","5d41"]]]);