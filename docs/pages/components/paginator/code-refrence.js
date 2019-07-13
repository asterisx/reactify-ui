const controlledCode = '<Paginator noOfPages={5} isControlled onChange={(...args) => console.log(...args)} />';

const contentCode = `
<Paginator noOfPages={5}>
  <Paginator.Before>
    <Paper light noShadow className="w-100">
      <SearchBar className="w-100" />
    </Paper>
  </Paginator.Before>
  <Paginator.After className="d-flex align-items-center pb-2 pt-2">
    <div className="h-100 d-flex align-items-center ml-2">
      <FaFileDownload className="m-0 p-0" />
      <FaFileExport className="m-0 p-0 ml-2 mr-2" />
    </div>
  </Paginator.After>
</Paginator>
`;

const customThemeCode = `
<Paginator noOfPages={5} primary />
<Paginator noOfPages={5} secondary />
<Paginator noOfPages={5} dark />
<Paginator noOfPages={5} light />
<Paginator noOfPages={5} info />
<Paginator noOfPages={5} warning />
<Paginator noOfPages={5} danger />
<Paginator noOfPages={5} success />
`;

const disabledCode = '<Paginator noOfPages={5} isControlled onChange={(...args) => console.log(...args)} />';

const eventsCode = '<Paginator noOfPages={5} onChange={(...args) => console.log(...args)} />';

const responsiveCode = `
<Paginator noOfPages={5} sm md className="w-100">
  <Paginator.Before>
    <Paper light noShadow className="w-100">
      <SearchBar className="w-100" />
    </Paper>
  </Paginator.Before>
  <Paginator.After>
    <div className="h-100 d-flex align-items-center ml-2 pb-2 pt-2">
      <FaFileDownload className="m-0 p-0" />
      <FaFileExport className="m-0 p-0 ml-2 mr-2" />
    </div>
  </Paginator.After>
</Paginator>
`;


const simpleCode = '<Paginator noOfPages={5} />';

export {
  controlledCode,
  customThemeCode,
  contentCode,
  disabledCode,
  eventsCode,
  responsiveCode,
  simpleCode,
};
