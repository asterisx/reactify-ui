const disabledCode = '<Typeahead disabled suggestions={suggestions} />';

const preSearchTermUse = '<Typeahead searchTerm="value" suggestions={suggestions} />';

const controlledCode = '<Typeahead isControlled suggestions={suggestions} />';

const customThemeCode = `
<Typeahead suggestions={suggestions} primary />
<Typeahead suggestions={suggestions} secondary />
<Typeahead suggestions={suggestions} dark />
<Typeahead suggestions={suggestions} light />
<Typeahead suggestions={suggestions} info />
<Typeahead suggestions={suggestions} warning />
<Typeahead suggestions={suggestions} danger />
<Typeahead suggestions={suggestions} success />
`;

const declarativeCode = `
<Typeahead onChange={(...args) => console.log(...args)}>
  <Typeahead.Suggestion
    isSelectable={false}
    index={1}
    value="value 1"
  >
    <Paper className="w-100" warning>NON SELECTABLE SUGGESTION</Paper>
  </Typeahead.Suggestion>
  <Typeahead.Suggestion
    index={2}
    value="value 2"
  >
    <Paper className="w-100" danger>VALUE 2</Paper>
  </Typeahead.Suggestion>
  <Typeahead.Suggestion
    index={3}
    value="value 3"
  >
    <Paper className="w-100" success>VALUE 3</Paper>
  </Typeahead.Suggestion>
</Typeahead>
`;

const eventsCode = '<Typeahead suggestions={suggestions} onChange={(...args) => console.log(...args)} />';

const notSelectableCode = '<Typeahead isSelectable={false} suggestions={suggestions} />';

const simpleCode = '<Typeahead suggestions={suggestions} />';

const sizeCode = `
<Typeahead suggestions={suggestions} small />
<Typeahead suggestions={suggestions} medium />
<Typeahead suggestions={suggestions} large />
<Typeahead suggestions={suggestions} style={{ fontSize: '75px' }} />
`;

export {
  controlledCode,
  customThemeCode,
  declarativeCode,
  disabledCode,
  eventsCode,
  preSearchTermUse,
  notSelectableCode,
  simpleCode,
  sizeCode,
};
