const onSelectionCode = `
<GroupToggle onSelectionChange={index => alert('Selected index + index')}>
  {({ selectedIndex }) => (
    <>
      <Button
        index={0}
        success={selectedIndex === 0}
        default={selectedIndex !== 0}
      >
        Option 1
      </Button>
      <Button
        index={1}
        success={selectedIndex === 1}
        default={selectedIndex !== 1}
      >
        Option 2
      </Button>
      <Button
        index={2}
        success={selectedIndex === 2}
        default={selectedIndex !== 2}
      >
        Option 3
      </Button>
    </>
  )}
</GroupToggle>
`;
const simpleCode = `
<GroupToggle>
{({ selectedIndex }) => (
  <>
    <Button
      index={0}
      success={selectedIndex === 0}
      default={selectedIndex !== 0}
    >
      Option 1
    </Button>
    <Button
      index={1}
      success={selectedIndex === 1}
      default={selectedIndex !== 1}
    >
      Option 2
    </Button>
    <Button
      index={2}
      success={selectedIndex === 2}
      default={selectedIndex !== 2}
    >
      Option 3
    </Button>
  </>
)}
</GroupToggle>
`;
const disabledCode = `
<GroupToggle disabled>
{({ selectedIndex }) => (
  <>
    <Button
      index={0}
      success={selectedIndex === 0}
      default={selectedIndex !== 0}
    >
      Option 1
    </Button>
    <Button
      index={1}
      success={selectedIndex === 1}
      default={selectedIndex !== 1}
    >
      Option 2
    </Button>
    <Button
      index={2}
      success={selectedIndex === 2}
      default={selectedIndex !== 2}
    >
      Option 3
    </Button>
  </>
)}
</GroupToggle>
`;

export {
  onSelectionCode,
  simpleCode,
  disabledCode,
};
