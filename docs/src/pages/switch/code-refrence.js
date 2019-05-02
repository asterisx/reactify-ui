const simpleCode = '<Switch />';
const checkedCode = '<Switch checked />';
const disabledCode = '<Switch disabled checked />';
const customIconCode = '<Switch iconColor="red" checked><Label light>Custom Color</Label></Switch>';
const customSizeCode = `
<Switch small>Small Switch</Switch>
<Switch medium>Medium Switch</Switch>
<Switch large>Large Switch</Switch>
<Switch style={{ fontSize: '35px' }}>Custom Size Switch</Switch>
`;
const customThemeCode = `
<Switch primary checked>
  Primary Theme
</Switch>

<Switch secondary checked>
  Secondary Theme
</Switch>

<Switch dark checked>
  Dark Theme
</Switch>

<Switch light checked>
  Light Theme
</Switch>

<Switch info checked>
  Info Theme
</Switch>

<Switch warning checked>
  Warning Theme
</Switch>

<Switch danger checked>
  Danger Theme
</Switch>

<Switch success checked>
  Success Theme
</Switch>

`;
const onChangeCode = '<Switch onChange={val => alert("checked: " + val}")} />';

export {
  simpleCode,
  checkedCode,
  disabledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
};
