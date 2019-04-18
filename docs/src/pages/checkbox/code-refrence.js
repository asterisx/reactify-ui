const simpleCode = '<Checkbox />';
const checkedCode = '<Checkbox checked />';
const disabledCode = '<Checkbox checked disabled label="This checkbox is disabled" />';
const customColorCode = '<Checkbox checked color="violet" />';
const customSizeCode = `
  <Checkbox size="small" label='size="small"' />
  <Checkbox size="medium" label='size="medium"' />
  <Checkbox size="large" label='size="large"' />
  <Checkbox size="40px" label='size="40px"' />
`;
const customThemeCode = `
  <Checkbox theme="default" checked />
  <Checkbox theme="dark" checked />
  <Checkbox theme="light" checked />
  <Checkbox theme="info" checked />
  <Checkbox theme="warning" checked />
  <Checkbox theme="danger" checked />
  <Checkbox theme="success" checked />
`;
const onChangeCode = '<Checkbox onChange={val => alert("checked: " +  val)} />';
const labelPositionCode = `
  <Checkbox labelPosition="left" label="This is a checkbox with left position" />
  <Checkbox labelPosition="right" label="This is a checkbox with right position" />
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
