const defaultSelectionCode = `
<ListPanel mode="multiple">
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item selected index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item selected index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const borderedCode = `
<ListPanel>
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2} bordered={false}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4} bordered={false}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const onSelectionChangeCode = `
<ListPanel mode="singular" onSelectionChange={({ index, selected }) => alert('Index: '+index+'\n'+'Selected: '+ selected')}>
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const customSizesCode = `
<ListPanel size="small">
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel size="medium">
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel size="large">
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel size="40px">
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const customListCode = `
<ListPanel>
  <ListPanel.Item index={1} bordered={false}>
    <div className="d-inline-flex justify-content-between align-items-center">
      <FaApple className="mr-4" />
      <span className="ml-4">Apple</span>
    </div>
  </ListPanel.Item>
  <ListPanel.Item selected index={2}>
    <div className="d-inline-flex justify-content-between align-items-center">
      <FaAndroid className="mr-4" />
      <span className="ml-4">Android</span>
    </div>
  </ListPanel.Item>
  <ListPanel.Item index={3}>
    <div className="d-inline-flex justify-content-between align-items-center">
      <FaAmazon className="mr-4" />
      <span className="ml-4">Amazon</span>
    </div>
  </ListPanel.Item>
  <ListPanel.Item selected index={4}>
    <div className="d-inline-flex justify-content-between align-items-center">
      <FaAudible className="mr-4" />
      <span className="ml-4">Audible</span>
    </div>
  </ListPanel.Item>
  <ListPanel.Item index={5}>
    <div className="d-inline-flex justify-content-between align-items-center">
      <FaBitcoin className="mr-4" />
      <span className="ml-4">Bitcoin</span>
    </div>
  </ListPanel.Item>
</ListPanel>
`;
const customColorCode = `
<ListPanel color="violet">
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const customThemeCode = `
<ListPanel theme="default">
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel theme="dark">
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel theme="light">
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel theme="info">
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel theme="warning">
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel theme="danger">
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel theme="success">
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel>
  <ListPanel.Item theme="light" className="pl-5 pr-5 pt-2 pb-2" index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item theme="dark" className="pl-5 pr-5 pt-2 pb-2" index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item theme="info" className="pl-5 pr-5 pt-2 pb-2" index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item theme="warning" className="pl-5 pr-5 pt-2 pb-2" index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item theme="danger" className="pl-5 pr-5 pt-2 pb-2" index={5}>Item 5</ListPanel.Item>
  <ListPanel.Item theme="success" className="pl-5 pr-5 pt-2 pb-2" index={6}>Item 6</ListPanel.Item>
  <ListPanel.Item color="violet" className="pl-5 pr-5 pt-2 pb-2" index={7}>Item 7</ListPanel.Item>
</ListPanel>
`;
const disabledCode = `
<ListPanel disabled>
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel>
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item disabled index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item disabled index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const selectionModeCode = `
<ListPanel mode="multiple">
  <ListPanel.Item selected index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item selected index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const simpleCode = `
<ListPanel>
  <ListPanel.Item index={1} bordered={false}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

`;

export {
  selectionModeCode,
  defaultSelectionCode,
  disabledCode,
  customColorCode,
  customListCode,
  customThemeCode,
  customSizesCode,
  borderedCode,
  onSelectionChangeCode,
  simpleCode,
};
