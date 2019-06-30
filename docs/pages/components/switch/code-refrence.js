const simpleCode = '<Switch />';
const checkedCode = '<Switch defaultChecked />';
const disabledCode = '<Switch disabled defaultChecked />';
const customIconCode = '<Switch iconColor="red" checked><Label light>Custom Color</Label></Switch>';
const customSizeCode = `
<Switch small>Small Switch</Switch>
<Switch medium>Medium Switch</Switch>
<Switch large>Large Switch</Switch>
<Switch style={{ fontSize: '35px' }}>Custom Size Switch</Switch>
`;
const customThemeCode = `
<Switch primary defaultChecked>
  Primary Theme
</Switch>

<Switch secondary defaultChecked>
  Secondary Theme
</Switch>

<Switch dark defaultChecked>
  Dark Theme
</Switch>

<Switch light defaultChecked>
  Light Theme
</Switch>

<Switch info defaultChecked>
  Info Theme
</Switch>

<Switch warning defaultChecked>
  Warning Theme
</Switch>

<Switch danger defaultChecked>
  Danger Theme
</Switch>

<Switch success defaultChecked>
  Success Theme
</Switch>

`;
const onChangeCode = '<Switch onChange={({ event, checked }) => console.log(event, checked)} />';

export {
  simpleCode,
  checkedCode,
  disabledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
};
