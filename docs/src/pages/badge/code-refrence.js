const simpleCode = `
  <Badge count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
`;
const disabledCode = `
  <Badge disabled count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
`;
const childrenCode = `
  <Badge size="medium" count="10">
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </Badge>
`;
const customClassCode = `
  <Badge className="text-light bg-dark p-2 shadow" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
`;
const customThemeCode = `
  <Badge theme="default" className="pb-2" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
        
  <Badge theme="dark" className="pb-2" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
        
  <Badge theme="light" className="pb-2" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
        
  <Badge theme="info" className="pb-2" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
        
  <Badge theme="warning" className="pb-2" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
        
  <Badge theme="danger" className="pb-2" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
        
  <Badge theme="success" className="pb-2" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
`;
const customColorCode = `
  <Badge color="violet" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
`;
const customPositionCode = `
  <Badge position="top-left" size="small" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>    
        
  <Badge position="top-right" size="small" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
        
  <Badge position="bottom-right" size="small" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>      
        
  <Badge position="bottom-left" size="small" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>
`;
const customSizeCode = `
  <Badge size="small" count="10">
    <img src="../../../assets/mail.png" height="50px" width="50px" />
  </Badge>

  <Badge size="medium" count="10">
    <img src="../../../assets/mail.png" height="100px" width="100px" />
  </Badge>

  <Badge size="large" count="10">
    <img src="../../../assets/mail.png" height="200px" width="200px" />
  </Badge>
  
  <Badge size="35px"  count="10">
    <img src="../../../assets/mail.png" height="200px" width="200px" />
  </Badge>
`;

export {
  simpleCode,
  disabledCode,
  customThemeCode,
  customPositionCode,
  customColorCode,
  childrenCode,
  customClassCode,
  customSizeCode,
};
