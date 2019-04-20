const simpleCode = `
  <Button text="Default Button"/>
`;
const disabledCode = `
  <Button disabled text="Disabled Button" />
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
  <Button text="Custom Class Button" className="p-5" />
`;
const customThemeCode = `
  <Button theme="default" text="Default Button" />
  <Button theme="dark" text="Dark Button" />
  <Button theme="light" text="Light Button" />
  <Button theme="info" text="Info Button" />
  <Button theme="warning" text="Warning Button" />
  <Button theme="danger" text="Danger Button" />
  <Button theme="success" text="Success Button" />
`;
const customColorCode = `
  <Button text="Custom Color Button" color="violet" />
`;
const customSizeCode = `
  <Button size="small" text="Small Button" />
  <Button size="medium" text="Medium Button" />
  <Button size="large" text="Large Button" />
  <Button size="35px" text="Custom Size Button" />
`;

const clearBorderedCode = `
  <Button theme="default" clear bordered text="Default Button" />    
  <Button theme="dark" clear bordered text="Dark Button" />    
  <Button theme="light" clear bordered text="Light Button" />    
  <Button theme="info" clear bordered text="Info Button" />    
  <Button theme="warning" clear bordered text="Warning Button" />    
  <Button theme="danger" clear bordered text="Danger Button" />    
  <Button theme="success" clear bordered text="Success Button" />
`;

const loaderCode = `
  <Button text="Loader Button" loading />
  <Button text="Loader Button with position" loading loaderPosition="right" />
`;

const clearCode = `
  <Button theme="default" clear text="Default Button" />    
  <Button theme="dark" clear text="Dark Button" />    
  <Button theme="light" clear text="Light Button" />    
  <Button theme="info" clear text="Info Button" />    
  <Button theme="warning" clear text="Warning Button" />    
  <Button theme="danger" clear text="Danger Button" />    
  <Button theme="success" clear text="Success Button" />
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
  loaderCode,
  clearCode,
};
