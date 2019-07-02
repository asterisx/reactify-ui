const customColorCode = "<SearchBar style={{ color: 'violet' }} />";

const customClassCode = '<SearchBar className="bg-dark p-3" />';

const customThemeCode = `
<SearchBar primary />
<SearchBar secondary />
<SearchBar dark />
<SearchBar light />
<SearchBar info />
<SearchBar warning />
<SearchBar danger />
<SearchBar success />
`;

const disabledCode = '<SearchBar disabled />';

const eventCode = '<SearchBar onChange={({ event, value }) => console.log(event, value)} />';

const placeholderCode = '<SearchBar placeholder="Some Placeholder" />';

const simpleCode = '<SearchBar />';

const sizeCode = `
<SearchBar small />
<SearchBar medium />
<SearchBar large />
<SearchBar style={{ fontSize: '75px' }} />
`;

const valueCode = '<SearchBar value="" onChange={({ event, value }) => console.log(event, value)} />';

export {
  customColorCode,
  customClassCode,
  customThemeCode,
  disabledCode,
  eventCode,
  placeholderCode,
  simpleCode,
  sizeCode,
  valueCode,
};