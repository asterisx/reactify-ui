const simpleCode = `
  <Label>
    Simple Label
  </Label>
`;
const disabledCode = `
  <Label disabled>
    Disabled Label
  </Label>
`;
const childrenCode = `
  <Label size="medium" className="p-2">
    <div className="card text-dark" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </Label>
`;
const customClass = `
  <Label className="text-light bg-dark p-2 shadow">
    Custom Class Label
  </Label>
`;
const customThemeCode = `
  <Label theme="default">
    Default Theme
  </Label>

  <Label theme="dark">
    Dark Theme
  </Label>

  <Label theme="light">
    Light Theme
  </Label>

  <Label theme="info">
    Info Theme
  </Label>

  <Label theme="warning">
    Warning Theme
  </Label>
  
  <Label theme="danger">
    Danger Theme
  </Label>
  
  <Label theme="success">
    Success Theme
  </Label>
`;
const customColorCode = `
  <Label color="violet">
    Simple Label
  </Label>
`;
const customSizeCode = `
  <Label size="small">
    Small Label
  </Label>

  <Label size="medium">
    Medium Label
  </Label>

  <Label size="large">
    Large Label
  </Label>

  <Label size="35px">
    Label with size 35px
  </Label>
`;

export {
  simpleCode,
  disabledCode,
  customThemeCode,
  customColorCode,
  childrenCode,
  customClass,
  customSizeCode,
};
