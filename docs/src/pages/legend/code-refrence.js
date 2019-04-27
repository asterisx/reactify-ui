const directionCode = `
<Legend direction="vertical">
  <LegendItem label="Inventory 1" />
  <LegendItem label="Inventory 2" />
</Legend>

<Legend direction="horizontal">
  <LegendItem label="Inventory 1" />
  <LegendItem label="Inventory 2" />
</Legend>
`;
const childrenCode = `
<Legend direction="vertical">
  <LegendItem label="Inventory 1"><b className="pl-2">Legend items also accepts children</b></LegendItem>
  <LegendItem label="Inventory 2" />
</Legend>
`;
const customClassCode = `
<Legend className="p-2 bg-primary">
  <LegendItem label="Inventory" className="text-light bg-secondary pr-1 pl-1" />
</Legend>
`;
const customColorCode = `
<Legend>
  <LegendItem iconColor="violet" label="Inventory" />
</Legend>
`;
const customThemeCode = `
<Legend direction="vertical">
  <LegendItem theme="default" label="Default Theme" />
  <LegendItem theme="dark" label="Dark Theme" />
  <LegendItem theme="light" label="Light Theme" />
  <LegendItem theme="info" label="Info Theme" />
  <LegendItem theme="warning" label="Warning Theme" />
  <LegendItem theme="danger" label="Danger Theme" />
  <LegendItem theme="success" label="Success Theme" />
</Legend>
`;
const simpleCode = `
<Legend>
  <LegendItem label="Inventory" />
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
