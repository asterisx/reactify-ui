const simpleCode = `
<Badge>
  <Badge.Bubble>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>
`;
const disabledCode = `
<Badge disabled>
  <Badge.Bubble>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>
`;
const childrenCode = `
<Badge>
  <Badge.Bubble medium>
    10
  </Badge.Bubble>
  <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</Badge>
`;
const customClassCode = `
<Badge className="text-light bg-dark p-2 shadow">
  <Badge.Bubble>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>
`;
const customThemeCode = `
<Badge>
  <Badge.Bubble primary>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble secondary>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble dark>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble light>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble info>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble warning>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble danger>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble success>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>
`;
const customContentCode = `
<Badge>
  <Badge.Bubble medium>
    <NumberCounter
      from={1000}
      to={9999}
      light
    />
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="200px" 
    width="200px" />
</Badge>

<Badge>
  <Badge.Bubble />
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble danger />
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>
`;
const customPositionCode = `
<Badge>
  <Badge.Bubble topLeft>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble topRight>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble bottomRight>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>

<Badge>
  <Badge.Bubble bottomLeft>
    10
  </Badge.Bubble>
  <img 
    className="img-message" 
    src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
    height="50px" 
    width="50px" />
</Badge>
`;
const customSizeCode = `
<Badge>
<Badge.Bubble small>
  10
</Badge.Bubble>
<img 
  className="img-message" 
  src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
  height="50px" 
  width="50px" />
</Badge>

<Badge>
<Badge.Bubble medium>
  10
</Badge.Bubble>
<img 
  className="img-message" 
  src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
  height="100px" 
  width="100px" />
</Badge>

<Badge>
<Badge.Bubble large>
  10
</Badge.Bubble>
<img 
  className="img-message" 
  src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
  height="200px" 
  width="200px" />
</Badge>

<Badge>
<Badge.Bubble style={{ fontSize: '35px' }}>
  10
</Badge.Bubble>
<img 
  className="img-message" 
  src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" 
  height="200px" 
  width="200px" />
</Badge>
`;

export {
  simpleCode,
  disabledCode,
  customThemeCode,
  customPositionCode,
  customContentCode,
  childrenCode,
  customClassCode,
  customSizeCode,
};
