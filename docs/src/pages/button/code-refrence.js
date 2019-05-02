const simpleCode = `
<Button>Default Button</Button>
`;
const disabledCode = `
<Button disabled>Disabled Button</Button>
`;
const childrenCode = `
<Button>
  <div className="card text-dark" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</Button>
`;
const customClassCode = `
<Button className="p-5">Custom Class Button</Button>
`;
const customThemeCode = `
<Button primary>Primary Button</Button>
<Button secondary>Secondary Button</Button>
<Button dark>Dark Button</Button>
<Button light>Light Button</Button>
<Button info>Info Button</Button>
<Button warning>Warning Button</Button>
<Button danger>Danger Button</Button>
<Button success>Success Button</Button>
`;
const customColorCode = `
<Button style={{ backgroundColor: 'violter', color: 'white' }}>Custom Color Button</Button>
`;
const customSizeCode = `
<Button small>Small Button</Button>
<Button medium>Medium Button</Button>
<Button large>Large Button</Button>
<Button style={{ fontSize: '35px' }}>Custom Size Button</Button>
`;

const clearBorderedCode = `
<Button primary clear bordered>Primary Button</Button>
<Button secondary clear bordered>Secondary Button</Button>
<Button dark clear bordered>Dark Button</Button>
<Button light clear bordered>Light Button</Button>
<Button info clear bordered>Info Button</Button>
<Button warning clear bordered>Warning Button</Button>
<Button danger clear bordered>Danger Button</Button>
<Button success clear bordered>Success Button</Button>
`;

const clearCode = `
<Button primary clear>Primary Button</Button>
<Button secondary clear>Secondary Button</Button>
<Button dark clear>Dark Button</Button>
<Button light clear>Light Button</Button>
<Button info clear>Info Button</Button>
<Button warning clear>Warning Button</Button>
<Button danger clear>Danger Button</Button>
<Button success clear>Success Button</Button>
`;

export {
  simpleCode,
  disabledCode,
  customThemeCode,
  customColorCode,
  childrenCode,
  customClassCode,
  customSizeCode,
  clearBorderedCode,
  clearCode,
};
