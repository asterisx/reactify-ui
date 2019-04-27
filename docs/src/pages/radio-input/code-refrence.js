const simpleCode = '<RadioInput />';
const checkedCode = '<RadioInput checked />';
const disabledCode = '<RadioInput checked disabled label="This is disabled" />';
const customIconCode = '<RadioInput iconColor="red" checked/>';
const customSizeCode = '<RadioInput size="small" />\n<RadioInput size="medium" />\n<RadioInput size="large" />\n<RadioInput size="40px" />';
const customThemeCode = '<RadioInput theme="default" checked />\n<RadioInput theme="dark" checked />\n<RadioInput theme="light" checked />\n<RadioInput theme="info" checked />\n<RadioInput theme="warning" checked />\n<RadioInput theme="danger" checked />\n<RadioInput theme="success" checked />';
const onChangeCode = '<RadioInput onChange={val => alert("checked: " + val}")} />';
const labelCode = ' <RadioInput checked label="Dogs, cats and birds" />';
const labelPositionCode = '<RadioInput checked label="Dogs, cats and birds" labelPosition="left" />';
const childrenCode = '<RadioInput checked>\n<div className = "card" style = {{ width: "18rem" }}>\n<div className="card-body">\n<h5 className="card-title">Card title</h5>\n<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n<a href="#" className="btn btn-primary">Go somewhere</a>\n</div>\n</div>\n</RadioInput>';
const customClassCode = '<RadioInput className="text-light bg-dark" />';

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
