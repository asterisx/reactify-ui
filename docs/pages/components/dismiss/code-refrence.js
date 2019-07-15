const childrenCode = `
<Dismiss style={{ width: 'auto' }}>
  <div className="card" style={{ width: '18rem', color: 'black' }}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</Dismiss>
`;

const customClassCode = `
<Dismiss className="text-light bg-dark w-100">
  This Dismiss has custom class
</Dismiss>
`;

const customColorCode = `
<Dismiss style={{ backgroundColor: 'violet' }}>
  Dismiss with custom background color
</Dismiss>
`;

const customEventCode = `
<Dismiss onClose={() => console.log('Closed')}>
  This Dismiss has event handler
</Dismiss>
`;

const customIconCode = `
<Dismiss
  icon={<Spinner small light clock />}
  closeIcon={<Button small light clear>Ok</Button>}
  style={{ width: '300px' }}
>
  Time is running out!!! Apply for the application within a week.
</Dismiss>
`;

const customSizeCode = `
<Dismiss small>Small Dismiss</Dismiss>

<Dismiss medium>Medium Dismiss</Dismiss>

<Dismiss large>Large Dismiss</Dismiss>

<Dismiss style={{ fontSize: '35px' }}>Custom Size Dismiss</Dismiss>
`;

const customThemeCode = `
<Dismiss primary>
  Primary theme
</Dismiss>

<Dismiss secondary>
  Secondary theme
</Dismiss>

<Dismiss dark>
  Dark theme
</Dismiss>

<Dismiss light>
  Light theme
</Dismiss>

<Dismiss info>
  Info theme
</Dismiss>

<Dismiss warning>
  Warning theme
</Dismiss>

<Dismiss danger>
  Danger theme
</Dismiss>

<Dismiss success>
  Success theme
</Dismiss>
`;

const disabledCode = `
<Dismiss disabled>
  This is disabled
</Dismiss>
`;

const simpleCode = `
<Dismiss className="align-self-center">
  A simple Dismiss
</Dismiss>
`;

export {
  customColorCode,
  customEventCode,
  childrenCode,
  customClassCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  disabledCode,
  simpleCode,
};
