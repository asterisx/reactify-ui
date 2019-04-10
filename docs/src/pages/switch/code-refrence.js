const simpleUse = '<Switch />';
const checkedUse = '<Switch checked />';
const customIconUse = ' <Switch iconColor="red" checked/>';
const customSizeUse = '<Switch size="small" />\n<Switch size="medium" />\n<Switch size="large" />\n<Switch size="40px" />';
const customThemeUse = '<Switch theme="default" checked />\n<Switch theme="dark" checked />\n<Switch theme="light" checked />\n<Switch theme="info" checked />\n<Switch theme="warning" checked />\n<Switch theme="danger" checked />\n<Switch theme="success" checked />';
const onChangeDemo = '<Switch onChange={val => alert("checked: " + val}")} />';

export {
  simpleUse,
  checkedUse,
  customIconUse,
  customSizeUse,
  customThemeUse,
  onChangeDemo,
};
