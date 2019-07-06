const simpleCode = '<Checkbox />';
const checkedCode = '<Checkbox defaultChecked />';
const disabledCode = '<Checkbox defaultChecked disabled>This checkbox is disabled</Checkbox>';
const customColorCode = '<Checkbox defaultChecked color="violet" />';
const customSizeCode = `
<Checkbox small>Small Size</Checkbox>
<Checkbox medium>Medium Size</Checkbox>
<Checkbox large>Large Size</Checkbox>
<Checkbox style={{ fontSize: '40px' }}>style={{ fontSize: '40px' }}</Checkbox>
`;
const customThemeCode = `
<Checkbox primary defaultChecked>Primary Checkbox</Checkbox>
<Checkbox secondary defaultChecked>Secondary Checkbox</Checkbox>
<Checkbox dark defaultChecked>Dark Checkbox</Checkbox>
<Checkbox light defaultChecked>Light Checkbox</Checkbox>
<Checkbox info defaultChecked>Info Checkbox</Checkbox>
<Checkbox warning defaultChecked>Warning Checkbox</Checkbox>
<Checkbox danger defaultChecked>Danger Checkbox</Checkbox>
<Checkbox success defaultChecked>Success Checkbox</Checkbox>
`;
const onChangeCode = '<RadioInput onChange={({ event, checked }) => console.log(event, checked)} />';
const labelPositionCode = `
<Checkbox>This is a checkbox with left position</Checkbox>
<Checkbox style={{ flexDirection: 'row-reverse' }}>This is a checkbox with right position</Checkbox>
`;
const childrenCode = `
  <Checkbox defaultChecked>
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </Checkbox>
`;
const customClassCode = '<Checkbox defaultChecked className="bg-dark p-5" />';

export {
  simpleCode,
  checkedCode,
  disabledCode,
  customColorCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
  labelPositionCode,
  childrenCode,
  customClassCode,
};
