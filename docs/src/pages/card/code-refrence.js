const borderedColoredCode = `
<Card>
  <Card.Header>
    <img src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
  </Card.Header>
  <Card.Body bordered borderColor="violet">
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </Card.Body>
  <Card.Footer bordered>
    <div className="d-flex justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </Card.Footer>
</Card>
`;
const customClassCode = `
<Card className="p-3">
  <Card.Header>
    <img src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
  </Card.Header>
  <Card.Body bordered className="p-3">
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </Card.Body>
  <Card.Footer bordered className="p-3">
    <div className="d-flex justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </Card.Footer>
</Card>
`;
const customSizeCode = `
<Card small>
<Card.Header>
  <img className="w-100" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
</Card.Header>
<Card.Body>
  <span>
    <h5>Avenger's Endgame</h5>
    Adrift in space with no food or water, Tony Stark sends a message to
    Pepper Potts as his oxygen supply starts to dwindle.
  </span>
</Card.Body>
<Card.Footer bordered>
  <div className="d-flex justify-content-between">
    <Button danger>Dislike</Button>
    <Button success>Like</Button>
  </div>
</Card.Footer>
</Card>

<Card medium>
<Card.Header>
  <img className="w-100" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
</Card.Header>
<Card.Body>
  <span>
    <h5>Avenger's Endgame</h5>
    Adrift in space with no food or water, Tony Stark sends a message to
    Pepper Potts as his oxygen supply starts to dwindle.
  </span>
</Card.Body>
<Card.Footer bordered>
  <div className="d-flex justify-content-between">
    <Button danger>Dislike</Button>
    <Button success>Like</Button>
  </div>
</Card.Footer>
</Card>

<Card large>
<Card.Header>
  <img className="w-100" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
</Card.Header>
<Card.Body>
  <span>
    <h5>Avenger's Endgame</h5>
    Adrift in space with no food or water, Tony Stark sends a message to
    Pepper Potts as his oxygen supply starts to dwindle.
  </span>
</Card.Body>
<Card.Footer bordered>
  <div className="d-flex justify-content-between">
    <Button danger>Dislike</Button>
    <Button success>Like</Button>
  </div>
</Card.Footer>
</Card>

<Card style={{ width: '350px' }}>
  <Card.Header>
    <img className="w-100" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
  </Card.Header>
  <Card.Body>
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </Card.Body>
  <Card.Footer bordered>
    <div className="d-flex justify-content-between">
      <Button danger>Dislike</Button>
      <Button success>Like</Button>
    </div>
  </Card.Footer>
</Card>
`;
const disabledCode = `
<Card disabled>
  <Card.Header>
    <img className="w-100" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
  </Card.Header>
  <Card.Body>
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </Card.Body>
  <Card.Footer bordered>
    <div className="d-flex justify-content-between">
      <Button danger>Dislike</Button>
      <Button success>Like</Button>
    </div>
  </Card.Footer>
</Card>
`;
const noShadowCode = `
<Card shadowed={false}>
<Card.Header>
  <img className="w-100" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
</Card.Header>
<Card.Body>
  <span>
    <h5>Avenger's Endgame</h5>
    Adrift in space with no food or water, Tony Stark sends a message to
    Pepper Potts as his oxygen supply starts to dwindle.
  </span>
</Card.Body>
<Card.Footer bordered>
  <div className="d-flex justify-content-between">
    <Button danger>Dislike</Button>
    <Button success>Like</Button>
  </div>
</Card.Footer>
</Card>
`;
const simpleCode = `
<Card>
  <Card.Header>
    <img src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
  </Card.Header>
  <Card.Body>
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </Card.Body>
  <Card.Footer bordered>
    <div className="d-flex justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </Card.Footer>
</Card>
`;

export {
  borderedColoredCode,
  customClassCode,
  customSizeCode,
  disabledCode,
  noShadowCode,
  simpleCode,
};
