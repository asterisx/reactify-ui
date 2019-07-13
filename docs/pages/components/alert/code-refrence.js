const simpleCode = '<Alert>A simple alert</Alert>';
const disabledCode = '<Alert disabled>This is disabled</Alert>';
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
const customClassCode = '<Alert className="text-light bg-dark p-2">This is a custom class Alert</Alert>';
const customThemeCode = `
<Alert primary>
  Primary theme
</Alert>

<Alert secondary>
  Secondary theme
</Alert>

<Alert dark>
  Dark theme
</Alert>

<Alert light>
  Light theme
</Alert>

<Alert info>
  Info theme
</Alert>

<Alert warning>
  Warning theme
</Alert>

<Alert danger>
  Danger theme
</Alert>

<Alert success>
  Success theme
</Alert>
`;
const customColorCode = `
<Alert style={{ borderColor: 'violet' }}>
  Alert with custom border color
</Alert>
`;
const borderPositionCode = `
<Alert borderLeft>
  This is a left alert!
</Alert>

<Alert borderRight>
  This is a right alert!
</Alert>

<Alert borderTop>
  This is a top alert!
</Alert>

<Alert borderBottom>
  This is a bottom alert!
</Alert>

<Alert borderLeft borderRight borderTop borderBottom>
  This is all direction alert!
</Alert>

<Alert borderLeft borderRight>
  This is a two direction alert!
</Alert>
`;

export {
  simpleCode,
  disabledCode,
  customThemeCode,
  borderPositionCode,
  customColorCode,
  childrenCode,
  customClassCode,
};
