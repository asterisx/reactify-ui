const onSelectionCode = `
<RadioGroup onSelectionChange={index => alert('Selected index: ' + index)}>
  <RadioInput label="option 1" index={0} />
  <RadioInput label="option 2" index={1} />
  <RadioInput label="option 3" index={2} />
</RadioGroup>
`;
const simpleCode = `
<RadioGroup>
  <RadioInput label="option 1" index={0} />
  <RadioInput label="option 2" index={1} />
  <RadioInput label="option 3" index={2} />
</RadioGroup>
`;

export {
  onSelectionCode,
  simpleCode,
};
