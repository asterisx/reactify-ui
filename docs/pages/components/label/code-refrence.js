const childrenCode = `
<Label medium className="p-2">
  <div className="card text-dark" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
</Label>
`;

const customClassCode = `
<Label className="text-light bg-dark p-2 shadow">
  Custom Class Label
</Label>
`;

const customColorCode = `
<Label style={{ backgroundColor: 'violet' }}>Simple Label</Label>
`;

const customSizeCode = `
<Label small>
  Small Label
</Label>

<Label medium>
  Medium Label
</Label>

<Label large>
  Large Label
</Label>

<Label style={{ fontSize: '35px' }}>
  Label with size 35px
</Label>
`;

const customThemeCode = `
<Label primary>
  Primary Theme
</Label>

<Label secondary>
  Secondary Theme
</Label>

<Label dark>
  Dark Theme
</Label>

<Label light>
  Light Theme
</Label>

<Label info>
  Info Theme
</Label>

<Label warning>
  Warning Theme
</Label>

<Label danger>
  Danger Theme
</Label>

<Label success>
  Success Theme
</Label>
`;

const disabledCode = `
  <Label disabled>
    Disabled Label
  </Label>
`;

const simpleCode = `
  <Label>
    Simple Label
  </Label>
`;

export {
  childrenCode,
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  simpleCode,
};
