const simpleCode = '<Switch />';
const checkedCode = '<Switch checked />';
const disabledCode = '<Switch disabled checked />';
const customIconCode = ' <Switch iconColor="red" checked/>';
const customSizeCode = `
<Switch size="small" />
<Switch size="medium" />
<Switch size="large" />
<Switch size="40px" />
`;
const customThemeCode = `
<Switch theme="default" checked />
<Switch theme="dark" checked />
<Switch theme="light" checked />
<Switch theme="info" checked />
<Switch theme="warning" checked />
<Switch theme="danger" checked />
<Switch theme="success" checked />
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
