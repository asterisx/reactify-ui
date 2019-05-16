const simpleCode = `
<div>
  <div className="d-flex">
    <Input
      value={filter}
      onChange={handleChange}
      style={{ fontSize: '0.8em' }}
    />
    <Checkbox
      checked={insensitive}
      onChange={handleCheckboxChange}
      className="ml-2"
      style={{ fontSize: '0.8em' }}
    >
      Case Insensitive
    </Checkbox>

  </div>
  <RadioGroup
    className="d-flex flex-row mt-4 mb-2"
    selectedIndex={selectedIndex}
    onSelectionChange={handleIndexChange}
    style={{ fontSize: '0.7em' }}
  >
    <RadioInput index={0}>Primary</RadioInput>
    <RadioInput index={1}>Secondary</RadioInput>
    <RadioInput index={2}>Dark</RadioInput>
    <RadioInput index={3}>Light</RadioInput>
    <RadioInput index={4}>Info</RadioInput>
    <RadioInput index={5}>Warning</RadioInput>
    <RadioInput index={6}>Danger</RadioInput>
    <RadioInput index={7}>Success</RadioInput>
  </RadioGroup>
  <Highlight
    className="d-flex"
    insensitive={insensitive}
    filter={filter}
    primary={selectedIndex === 0}
    secondary={selectedIndex === 1}
    dark={selectedIndex === 2}
    light={selectedIndex === 3}
    info={selectedIndex === 4}
    warning={selectedIndex === 5}
    danger={selectedIndex === 6}
    success={selectedIndex === 7}
  >
    Lastly, she pictured to herself how this same little sister of hers would, 
    in the after-time, be herself a grown woman; and how she would keep, through 
    all her riper years, the simple and loving heart of her childhood; and how 
    she would gather about her other little children, and make their eyes bright 
    and eager with many a strange tale, perhaps even with the dream of Wonderland 
    of long ago; and how she would feel with all their simple sorrows, and find a 
    pleasure in all their simple joys, remembering her own child-life, and the 
    happy summer days.
  </Highlight>
</div>
`;

export {
  simpleCode,
};
