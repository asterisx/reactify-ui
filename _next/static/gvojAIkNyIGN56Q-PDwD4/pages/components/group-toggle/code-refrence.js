(window.webpackJsonp=window.webpackJsonp||[]).push([["53fb"],{PDRo:function(n,e,t){"use strict";t.r(e),t.d(e,"onSelectionCode",function(){return d}),t.d(e,"simpleCode",function(){return o}),t.d(e,"disabledCode",function(){return s}),t.d(e,"selectedIndexCode",function(){return u});var d="\n<GroupToggle onSelectionChange={({ event, index }) => console.log(event, index)}>\n  {({ selectedIndex }) => (\n    <>\n      <Button\n        index={0}\n        success={selectedIndex === 0}\n        default={selectedIndex !== 0}\n      >\n        Option 1\n      </Button>\n      <Button\n        index={1}\n        success={selectedIndex === 1}\n        default={selectedIndex !== 1}\n      >\n        Option 2\n      </Button>\n      <Button\n        index={2}\n        success={selectedIndex === 2}\n        default={selectedIndex !== 2}\n      >\n        Option 3\n      </Button>\n    </>\n  )}\n</GroupToggle>\n",o="\n<GroupToggle>\n{({ selectedIndex }) => (\n  <>\n    <Button\n      index={0}\n      success={selectedIndex === 0}\n      default={selectedIndex !== 0}\n    >\n      Option 1\n    </Button>\n    <Button\n      index={1}\n      success={selectedIndex === 1}\n      default={selectedIndex !== 1}\n    >\n      Option 2\n    </Button>\n    <Button\n      index={2}\n      success={selectedIndex === 2}\n      default={selectedIndex !== 2}\n    >\n      Option 3\n    </Button>\n  </>\n)}\n</GroupToggle>\n",s="\n<GroupToggle disabled>\n{({ selectedIndex }) => (\n  <>\n    <Button\n      index={0}\n      success={selectedIndex === 0}\n      default={selectedIndex !== 0}\n    >\n      Option 1\n    </Button>\n    <Button\n      index={1}\n      success={selectedIndex === 1}\n      default={selectedIndex !== 1}\n    >\n      Option 2\n    </Button>\n    <Button\n      index={2}\n      success={selectedIndex === 2}\n      default={selectedIndex !== 2}\n    >\n      Option 3\n    </Button>\n  </>\n)}\n</GroupToggle>\n",u="\n<GroupToggle selectedIndex={1}>\n{({ selectedIndex }) => (\n  <>\n    <Button\n      index={0}\n      success={selectedIndex === 0}\n      default={selectedIndex !== 0}\n    >\n      Option 1\n    </Button>\n    <Button\n      index={1}\n      success={selectedIndex === 1}\n      default={selectedIndex !== 1}\n    >\n      Option 2\n    </Button>\n    <Button\n      index={2}\n      success={selectedIndex === 2}\n      default={selectedIndex !== 2}\n    >\n      Option 3\n    </Button>\n  </>\n)}\n</GroupToggle>\n"},aC0F:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/group-toggle/code-refrence",function(){var n=t("PDRo");return{page:n.default||n}}])}},[["aC0F","5d41"]]]);