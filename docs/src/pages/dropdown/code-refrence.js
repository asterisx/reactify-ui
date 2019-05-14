const breakpointCode = `
<Dropdown sm md>
  <Dropdown.Item index={1}>Item 1</Dropdown.Item>
  <Dropdown.Item index={2}>Item 2</Dropdown.Item>
  <Dropdown.Item index={3}>Item 3</Dropdown.Item>
  <Dropdown.Item index={4}>Item 4</Dropdown.Item>
</Dropdown>
`;

const disabledCode = `
<Dropdown disabled>
  <Dropdown.Item index={1}>Item 1</Dropdown.Item>
  <Dropdown.Item index={2}>Item 2</Dropdown.Item>
  <Dropdown.Item index={3}>Item 3</Dropdown.Item>
  <Dropdown.Item index={4}>Item 4</Dropdown.Item>
</Dropdown>
`;

const labelCode = `
<Dropdown sm md warning label="Custom Label">
  <Dropdown.Item index={1}>Item 1</Dropdown.Item>
  <Dropdown.Item index={2}>Item 2</Dropdown.Item>
  <Dropdown.Item index={3}>Item 3</Dropdown.Item>
  <Dropdown.Item index={4}>Item 4</Dropdown.Item>
</Dropdown>
`;

const onSelectionCode = `
<Dropdown sm md onSelectionChange={({ index, selected }) => console.log('Index changed ' + index + ', selected ' + selected)}>
  <Dropdown.Item selected index={1}>Item 1</Dropdown.Item>
  <Dropdown.Item index={2}>Item 2</Dropdown.Item>
  <Dropdown.Item index={3}>Item 3</Dropdown.Item>
  <Dropdown.Item index={4}>Item 4</Dropdown.Item>
</Dropdown>
`;

const propsCode = `
<Dropdown sm md success>
  <Dropdown.Item selected index={1}>Item 1</Dropdown.Item>
  <Dropdown.Item index={2}>Item 2</Dropdown.Item>
  <Dropdown.Item index={3}>Item 3</Dropdown.Item>
  <Dropdown.Item index={4}>Item 4</Dropdown.Item>
</Dropdown>
`;

const simpleCode = `
<Dropdown>
  <Dropdown.Item index={1}>Item 1</Dropdown.Item>
  <Dropdown.Item index={2}>Item 2</Dropdown.Item>
  <Dropdown.Item index={3}>Item 3</Dropdown.Item>
  <Dropdown.Item index={4}>Item 4</Dropdown.Item>
  </Dropdown>
</DemoCard>
`;

const trayOpenCode = `
<Dropdown trayOpen>
  <Dropdown.Item index={1}>Item 1</Dropdown.Item>
  <Dropdown.Item index={2}>Item 2</Dropdown.Item>
  <Dropdown.Item index={3}>Item 3</Dropdown.Item>
  <Dropdown.Item index={4}>Item 4</Dropdown.Item>
</Dropdown>
`;

export {
  breakpointCode,
  disabledCode,
  labelCode,
  onSelectionCode,
  propsCode,
  simpleCode,
  trayOpenCode,
};
