const directionCode = `
<Legend vertical>
  <LegendItem>Inventory 1</LegendItem>
  <LegendItem>Inventory 2</LegendItem>
</Legend>

<Legend horizontal>
  <LegendItem>Inventory 1</LegendItem>
  <LegendItem>Inventory 2</LegendItem>
</Legend>
`;
const childrenCode = `
<Legend vertical>
  <LegendItem><b className="pl-2">Legend items also accept children</b></LegendItem>
  <LegendItem>Inventory 2</LegendItem>
</Legend>
`;
const customClassCode = `
<Legend className="p-2 bg-primary">
  <LegendItem className="text-light bg-secondary pr-1 pl-1">Inventory</LegendItem>
</Legend>
`;
const customColorCode = `
<Legend>
  <LegendItem iconColor="violet">Inventory</LegendItem>
</Legend>
`;
const customThemeCode = `
<Legend vertical>
  <LegendItem primary>Primary Theme</LegendItem>
  <LegendItem secondary>Secondary Theme</LegendItem>
  <LegendItem dark>Dark Theme</LegendItem>
  <LegendItem light>Light Theme</LegendItem>
  <LegendItem info>Info Theme</LegendItem>
  <LegendItem warning>Warning Theme</LegendItem>
  <LegendItem danger>Danger Theme</LegendItem>
  <LegendItem success>Success Theme</LegendItem>
</Legend>
`;
const simpleCode = `
<Legend>
  <LegendItem>Inventory</LegendItem>
</Legend>
`;

export {
  childrenCode,
  customColorCode,
  customClassCode,
  customThemeCode,
  directionCode,
  simpleCode,
};
