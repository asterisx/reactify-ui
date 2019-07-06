const onSelectionCode = `
<RadioGroup onSelectionChange={({ index }) => alert('Selected index: ' + index)}>
  <RadioInput index={0}>option 1</RadioInput>
  <RadioInput index={1}>option 1</RadioInput>
  <RadioInput index={2}>option 1</RadioInput>
</RadioGroup>
`;
const simpleCode = `
<RadioGroup>
  <RadioInput index={0}>option 1</RadioInput>
  <RadioInput index={1}>option 1</RadioInput>
  <RadioInput index={2}>option 1</RadioInput>
</RadioGroup>
`;
const disabledCode = `
<RadioGroup disabled>
  <RadioInput index={0}>option 1</RadioInput>
  <RadioInput index={1}>option 1</RadioInput>
  <RadioInput index={2}>option 1</RadioInput>
</RadioGroup>
`;
export {
  onSelectionCode,
  simpleCode,
  disabledCode,
};
