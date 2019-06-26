const breakpointCode = `
<Dropdown sm md label="Please select a value">
  {closeTray => (
    <ListPanel className="w-100" onItemClicked={() => closeTray}>
      <ListPanel.Item index={1}>Item 1</ListPanel.Item>
      <ListPanel.Item index={2}>Item 2</ListPanel.Item>
      <ListPanel.Item index={3}>Item 3</ListPanel.Item>
      <ListPanel.Item index={4}>Item 4</ListPanel.Item>
    </ListPanel>
  )}
</Dropdown>
`;

const disabledCode = `
<Dropdown disabled label="Please select a value" />
`;

const labelCode = `
<Dropdown sm md label="Custom Label">
  <ListPanel warning className="w-100">
    <ListPanel.Item index={1}>Item 1</ListPanel.Item>
    <ListPanel.Item index={2}>Item 2</ListPanel.Item>
    <ListPanel.Item index={3}>Item 3</ListPanel.Item>
    <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  </ListPanel>
</Dropdown>
`;

const simpleCode = `
<Dropdown label="Please select a value">
  {closeTray => (
    <ListPanel onItemClicked={() => closeTray}>
      <ListPanel.Item index={1}>Item 1</ListPanel.Item>
      <ListPanel.Item index={2}>Item 2</ListPanel.Item>
      <ListPanel.Item index={3}>Item 3</ListPanel.Item>
      <ListPanel.Item index={4}>Item 4</ListPanel.Item>
    </ListPanel>
  )}
</Dropdown>
`;

const trayOpenCode = `
<Dropdown trayOpen label="Please select a value">
  {closeTray => (
    <ListPanel onItemClicked={() => closeTray}>
      <ListPanel.Item index={1}>Item 1</ListPanel.Item>
      <ListPanel.Item index={2}>Item 2</ListPanel.Item>
      <ListPanel.Item index={3}>Item 3</ListPanel.Item>
      <ListPanel.Item index={4}>Item 4</ListPanel.Item>
    </ListPanel>
  )}
</Dropdown>
`;

export {
  breakpointCode,
  disabledCode,
  labelCode,
  simpleCode,
  trayOpenCode,
};
