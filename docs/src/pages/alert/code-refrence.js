const simpleCode = '<Alert>A simple alert</Alert >';
const disabledCode = '<Alert disabled>This is disabled</Alert >';
const childrenCode = `
<Alert>
  <div className = "card" style = {{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</Alert>
`;
const customClassCode = '<Alert className="text-light bg-dark p-2">This is a custom class Alert</Alert >';
const customThemeCode = `
<Alert theme="default">Default theme</Alert>
<Alert theme="dark">Dark theme</Alert>
<Alert theme="light">Light theme</Alert>
<Alert theme="info">Info theme</Alert>
<Alert theme="warning">Warning theme</Alert>
<Alert theme="danger">Danger theme</Alert>
<Alert theme="success">Success theme</Alert>
`;
const customColorCode = '<Alert color="violet">Label with custom border color</Alert >';
const borderPositionCode = '<Alert direction="left">This is a left alert!</Alert>\n<Alert direction="right">This is a right alert!</Alert>\n<Alert direction="top">This is a top alert!</Alert>\n<Alert direction="bottom">This is a bottom alert!</Alert>\n<Alert direction={[\'left\', \'right\', \'top\', \'bottom\']}>This is all direction alert!</Alert>\n<Alert direction={[\'left\', \'top\']}>This is a two direction alert!</Alert>';

export {
  simpleCode,
  disabledCode,
  customThemeCode,
  borderPositionCode,
  customColorCode,
  childrenCode,
  customClassCode,
};
