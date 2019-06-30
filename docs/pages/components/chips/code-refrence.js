const onCloseCode = `
<Chip onCloseClick={() => alert('Close Clicked')}>Item 1</Chip>
`;
const customColorCode = `
<Chip style={{ backgroundColor: 'violet' }}>Custom Color</Chip>
`;
const customSizesCode = `
<Chip small>Item 1</Chip>

<Chip medium>Item 1</Chip>

<Chip large>Item 1</Chip>

<Chip style={{ fontSize: '40px' }}>Item 1</Chip>
`;

const customThemeCode = `
<Chip primary>Item 1</Chip>

<Chip secondary>Item 1</Chip>

<Chip dark>Item 1</Chip>

<Chip light>Item 1</Chip>

<Chip info>Item 1</Chip>

<Chip warning>Item 1</Chip>

<Chip danger>Item 1</Chip>

<Chip success>Item 1</Chip>
`;
const disabledCode = `
<Chips disabled>
  <Chip key={1}>Item 1</Chip>
  <Chip key={2}>Item 2</Chip>
  <Chip key={3}>Item 3</Chip>
</Chips>

<Chips>
  <Chip disabled key={1}>Item 1</Chip>
  <Chip key={2}>Item 2</Chip>
  <Chip key={3}>Item 3</Chip>
</Chips>

`;

const simpleCode = `
<Chips>
  {this.state.simpleItems.map((si, index) => (
    <Chip
      key={index}
      onCloseClick={
    () => this.setState(prevState => ({ simpleItems: prevState.simpleItems.filter(sit => sit !== si) }))}
    >
      {si}
    </Chip>
  ))}
</Chips>
`;

export {
  disabledCode,
  customColorCode,
  customThemeCode,
  customSizesCode,
  onCloseCode,
  simpleCode,
};
