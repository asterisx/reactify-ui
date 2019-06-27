const defaultSelectionCode = `
<ListPanel multiple onItemClicked={props => console.log(props)}>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item selected index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item selected index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const borderedCode = `
<ListPanel>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2} bordered={false}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4} bordered={false}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const eventsCode = `
<ListPanel onSelectionChange={({ event, index, selected }) => console.log(event, index, selected)} onItemClicked={({ event, index }) => console.log(event, index)}>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item isSelectable={false} index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const customSizesCode = `
<ListPanel small>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel medium>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel large>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel style={{ fontSize: '40px' }}>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const customListCode = `
<ListPanel multiple>
  <ListPanel.Item index={1}>
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
const customThemeCode = `
<ListPanel primary>
<ListPanel.Item index={1}>Item 1</ListPanel.Item>
<ListPanel.Item index={2}>Item 2</ListPanel.Item>
<ListPanel.Item index={3}>Item 3</ListPanel.Item>
<ListPanel.Item index={4}>Item 4</ListPanel.Item>
<ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel secondary>
<ListPanel.Item index={1}>Item 1</ListPanel.Item>
<ListPanel.Item index={2}>Item 2</ListPanel.Item>
<ListPanel.Item index={3}>Item 3</ListPanel.Item>
<ListPanel.Item index={4}>Item 4</ListPanel.Item>
<ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
<h6 className="pt-3 pb-3">Dark theme</h6>
<ListPanel dark>
<ListPanel.Item index={1}>Item 1</ListPanel.Item>
<ListPanel.Item index={2}>Item 2</ListPanel.Item>
<ListPanel.Item index={3}>Item 3</ListPanel.Item>
<ListPanel.Item index={4}>Item 4</ListPanel.Item>
<ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel light>
<ListPanel.Item index={1}>Item 1</ListPanel.Item>
<ListPanel.Item index={2}>Item 2</ListPanel.Item>
<ListPanel.Item index={3}>Item 3</ListPanel.Item>
<ListPanel.Item index={4}>Item 4</ListPanel.Item>
<ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel info>
<ListPanel.Item index={1}>Item 1</ListPanel.Item>
<ListPanel.Item index={2}>Item 2</ListPanel.Item>
<ListPanel.Item index={3}>Item 3</ListPanel.Item>
<ListPanel.Item index={4}>Item 4</ListPanel.Item>
<ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel warning>
<ListPanel.Item index={1}>Item 1</ListPanel.Item>
<ListPanel.Item index={2}>Item 2</ListPanel.Item>
<ListPanel.Item index={3}>Item 3</ListPanel.Item>
<ListPanel.Item index={4}>Item 4</ListPanel.Item>
<ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel danger>
<ListPanel.Item index={1}>Item 1</ListPanel.Item>
<ListPanel.Item index={2}>Item 2</ListPanel.Item>
<ListPanel.Item index={3}>Item 3</ListPanel.Item>
<ListPanel.Item index={4}>Item 4</ListPanel.Item>
<ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel success>
<ListPanel.Item index={1}>Item 1</ListPanel.Item>
<ListPanel.Item index={2}>Item 2</ListPanel.Item>
<ListPanel.Item index={3}>Item 3</ListPanel.Item>
<ListPanel.Item index={4}>Item 4</ListPanel.Item>
<ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel>
<ListPanel.Item primary index={1}>Item 1</ListPanel.Item>
<ListPanel.Item secondary index={2} bordered={false}>Item 2</ListPanel.Item>
<ListPanel.Item light index={3} bordered={false}>Item 3</ListPanel.Item>
<ListPanel.Item dark index={4}>Item 4</ListPanel.Item>
<ListPanel.Item info index={5}>Item 5</ListPanel.Item>
<ListPanel.Item warning index={6}>Item 6</ListPanel.Item>
<ListPanel.Item danger index={7}>Item 7</ListPanel.Item>
<ListPanel.Item success index={8}>Item 8</ListPanel.Item>
<ListPanel.Item style={{ backgroundColor: 'violet' }} index={9}>Item 9</ListPanel.Item>
</ListPanel>
`;
const disabledCode = `
<ListPanel disabled>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>

<ListPanel>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item disabled index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item disabled index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const selectionModeCode = `
<ListPanel multiple>
  <ListPanel.Item selected index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item selected index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const multipleCode = `
<ListPanel multiple>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
  <ListPanel.Item index={2}>Item 2</ListPanel.Item>
  <ListPanel.Item index={3}>Item 3</ListPanel.Item>
  <ListPanel.Item index={4}>Item 4</ListPanel.Item>
  <ListPanel.Item index={5}>Item 5</ListPanel.Item>
</ListPanel>
`;
const simpleCode = `
<ListPanel>
  <ListPanel.Item index={1}>Item 1</ListPanel.Item>
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
  customListCode,
  customThemeCode,
  customSizesCode,
  borderedCode,
  eventsCode,
  multipleCode,
  simpleCode,
};
