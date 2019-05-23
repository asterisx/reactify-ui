const simpleCode = '<RadioInput />';
const checkedCode = '<RadioInput defaultChecked />';
const disabledCode = '<RadioInput disabled defaultChecked className="align-self-center">This is disabled</RadioInput>';
const customIconCode = '<RadioInput iconColor="red" defaultChecked>Dogs, cats and birds</RadioInput>';
const customSizeCode = `
<RadioInput small>small</RadioInput>
<RadioInput medium>medium</RadioInput>
<RadioInput large>large</RadioInput>
<RadioInput style={{ fontSize: '40px' }}>style={{ fontSize:'40px' }}</RadioInput>
`;
const customThemeCode = `
<RadioInput primary defaultChecked>Primary</RadioInput>
<RadioInput secondary defaultChecked>Secondary</RadioInput>
<RadioInput dark defaultChecked>Dark</RadioInput>
<RadioInput light defaultChecked>Light</RadioInput>
<RadioInput info defaultChecked>Info</RadioInput>
<RadioInput warning defaultChecked>Warning</RadioInput>
<RadioInput danger defaultChecked>Danger</RadioInput>
<RadioInput success defaultChecked>Success</RadioInput>
`;
const onChangeCode = '<RadioInput onChange={val => alert("checked: " + val}")} />';
const labelCode = '<RadioInput defaultChecked>Dogs, cats and birds</RadioInput>';
const labelPositionCode = `
<RadioInput defaultChecked>Dogs, cats and birds</RadioInput>
<RadioInput defaultChecked style={{ flexDirection: 'row-reverse' }}>Dogs, cats and birds</RadioInput>
`;
const childrenCode = `
<RadioInput defaultChecked>
  <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</RadioInput>
`;
const customClassCode = '<RadioInput className="text-light bg-dark p-2">This RadioInput has custom class</RadioInput>';

export {
  simpleCode,
  checkedCode,
  disabledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
  labelCode,
  labelPositionCode,
  childrenCode,
  customClassCode,
};
