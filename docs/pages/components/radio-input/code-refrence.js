const childrenCode = `
<RadioInput checked>
  <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</RadioInput>
`;

const controlledCode = '<RadioInput checked isControlled />';

const customClassCode = '<RadioInput className="text-light bg-dark p-2">This RadioInput has custom class</RadioInput>';

const customIconCode = '<RadioInput iconColor="red" checked>Dogs, cats and birds</RadioInput>';

const customSizeCode = `
<RadioInput small>small</RadioInput>

<RadioInput medium>medium</RadioInput>

<RadioInput large>large</RadioInput>

<RadioInput style={{ fontSize: '40px' }}>style={{ fontSize:'40px' }}</RadioInput>
`;

const customThemeCode = `
<RadioInput primary checked>Primary</RadioInput>

<RadioInput secondary checked>Secondary</RadioInput>

<RadioInput dark checked>Dark</RadioInput>

<RadioInput light checked>Light</RadioInput>

<RadioInput info checked>Info</RadioInput>

<RadioInput warning checked>Warning</RadioInput>

<RadioInput danger checked>Danger</RadioInput>

<RadioInput success checked>Success</RadioInput>
`;

const disabledCode = '<RadioInput disabled checked className="align-self-center">This is disabled</RadioInput>';

const onChangeCode = '<RadioInput onChange={val => alert("checked: " + val}")} />';

const labelCode = '<RadioInput checked>Dogs, cats and birds</RadioInput>';

const labelPositionCode = `
<RadioInput checked>Dogs, cats and birds</RadioInput>

<RadioInput checked style={{ flexDirection: 'row-reverse' }}>Dogs, cats and birds</RadioInput>
`;

const simpleCode = '<RadioInput />';

export {
  childrenCode,
  controlledCode,
  customClassCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  onChangeCode,
  labelCode,
  labelPositionCode,
  simpleCode,
};
