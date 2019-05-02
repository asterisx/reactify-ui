const simpleCode = '<Checkbox />';
const checkedCode = '<Checkbox checked />';
const disabledCode = '<Checkbox checked disabled>This checkbox is disabled</Checkbox>';
const customColorCode = '<Checkbox checked color="violet" />';
const customSizeCode = `
<Checkbox small>Small Size</Checkbox>
<Checkbox medium>Medium Size</Checkbox>
<Checkbox large>Large Size</Checkbox>
<Checkbox style={{ fontSize: '40px' }}>style={{ fontSize: '40px' }}</Checkbox>
`;
const customThemeCode = `
<Checkbox primary checked>Primary Checkbox</Checkbox>
<Checkbox secondary checked>Secondary Checkbox</Checkbox>
<Checkbox dark checked>Dark Checkbox</Checkbox>
<Checkbox light checked>Light Checkbox</Checkbox>
<Checkbox info checked>Info Checkbox</Checkbox>
<Checkbox warning checked>Warning Checkbox</Checkbox>
<Checkbox danger checked>Danger Checkbox</Checkbox>
<Checkbox success checked>Success Checkbox</Checkbox>
`;
const onChangeCode = '<Checkbox onChange={val => alert("checked: " +  val)} />';
const labelPositionCode = `
<Checkbox>This is a checkbox with left position</Checkbox>
<Checkbox style={{ flexDirection: 'row-reverse' }}>This is a checkbox with right position</Checkbox>
`;
const childrenCode = `
  <Checkbox checked>
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </Checkbox>
`;
const customClassCode = '<Checkbox checked className="bg-dark p-5" />';

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
