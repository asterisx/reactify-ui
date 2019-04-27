const onSelectionCode = `
<GroupToggle onSelectionChange={index => alert('Selected index ' + index)}>
{({ selectedIndex }) => (
  <>
    <Button index={0} theme={selectedIndex === 0 ? 'success' : 'default'} text="Option 1" />
    <Button index={1} theme={selectedIndex === 1 ? 'success' : 'default'} text="Option 2" />
    <Button index={2} theme={selectedIndex === 2 ? 'success' : 'default'} text="Option 3" />
  </>
)}
</GroupToggle>
`;
const simpleCode = `
<GroupToggle>
{({ selectedIndex }) => (
  <>
    <Button index={0} theme={selectedIndex === 0 ? 'success' : 'default'} text="Option 1" />
    <Button index={1} theme={selectedIndex === 1 ? 'success' : 'default'} text="Option 2" />
    <Button index={2} theme={selectedIndex === 2 ? 'success' : 'default'} text="Option 3" />
  </>
)}
</GroupToggle>
`;

export {
  onSelectionCode,
  simpleCode,
};
