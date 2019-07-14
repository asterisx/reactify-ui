const borderedColoredCode = `
<HorizontalCard className="font-responsive">
  <HorizontalCard.Header>
    <img src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body bordered style={{ borderColor: 'violet' }}>
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </HorizontalCard.Body>
  <HorizontalCard.Footer bordered>
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </HorizontalCard.Footer>
</HorizontalCard>
`;

const customClassCode = `
<HorizontalCard className="font-responsive">
  <HorizontalCard.Header>
    <img src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body bordered className="text-dark">
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </HorizontalCard.Body>
  <HorizontalCard.Footer bordered className="text-dark">
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </HorizontalCard.Footer>
</HorizontalCard>
`;

const customSizeCode = `
<HorizontalCard small className="font-responsive">
<HorizontalCard.Header>
  <img src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
</HorizontalCard.Header>
<HorizontalCard.Body>
  <span>
    <h5>Avenger's Endgame</h5>
  </span>
</HorizontalCard.Body>
<HorizontalCard.Footer bordered>
  <div className=" d-flex flex-column h-100 justify-content-between">
    <Button theme="danger">Dislike</Button>
    <Button theme="success">Like</Button>
  </div>
</HorizontalCard.Footer>
</HorizontalCard>

<HorizontalCard medium className="font-responsive">
  <HorizontalCard.Header>
    <img src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body>
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts...
    </span>
  </HorizontalCard.Body>
  <HorizontalCard.Footer bordered>
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </HorizontalCard.Footer>
</HorizontalCa

<HorizontalCard large className="font-responsive">
  <HorizontalCard.Header>
    <img className="size-large" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body>
    <span className="size-large">
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </HorizontalCard.Body>
  <HorizontalCard.Footer bordered>
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </HorizontalCard.Footer>
</HorizontalCard>

<HorizontalCard style={{ height: '100px' }}>
  <HorizontalCard.Header>
    <img className="size-custom" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body className="p-1 m-0">
    <span className="size-custom">
      <h5 className="font-small margin-padding-small">Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark...
    </span>
  </HorizontalCard.Body>
  <HorizontalCard.Footer bordered className="p-1 m-0">
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button theme="danger" className="font-small">Dislike</Button>
      <Button theme="success" className="font-small d-flex justify-content-center">Like</Button>
    </div>
  </HorizontalCard.Footer>
</HorizontalCard>
`;

const disabledCode = `
<HorizontalCard disabled className="font-responsive">
  <HorizontalCard.Header>
    <img src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body>
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </HorizontalCard.Body>
  <HorizontalCard.Footer bordered>
    <div className="d-flex justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </HorizontalCard.Footer>
</HorizontalCard>
`;

const noShadowCode = `
<HorizontalCard shadowed={false} className="font-responsive">
  <HorizontalCard.Header>
    <img src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body>
    <span>
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </HorizontalCard.Body>
  <HorizontalCard.Footer bordered>
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </HorizontalCard.Footer>
</HorizontalCard>
`;

const simpleCode = `
<HorizontalCard className="font-responsive">
<HorizontalCard.Header>
  <img src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
</HorizontalCard.Header>
<HorizontalCard.Body>
  <span>
    <h5>Avenger's Endgame</h5>
    Adrift in space with no food or water, Tony Stark sends a message to
    Pepper Potts as his oxygen supply starts to dwindle.
  </span>
</HorizontalCard.Body>
<HorizontalCard.Footer bordered>
  <div className=" d-flex flex-column h-100 justify-content-between">
    <Button theme="danger">Dislike</Button>
    <Button theme="success">Like</Button>
  </div>
</HorizontalCard.Footer>
</HorizontalCard>
`;

export {
  borderedColoredCode,
  customClassCode,
  customSizeCode,
  disabledCode,
  noShadowCode,
  simpleCode,
};
