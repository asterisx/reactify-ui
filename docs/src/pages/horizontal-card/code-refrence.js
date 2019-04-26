const borderedColoredCode = `
<HorizontalCard>
  <HorizontalCard.Header>
    <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body bordered borderColor="violet">
    <span className="size-medium">
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
<HorizontalCard className="p-3">
  <HorizontalCard.Header>
    <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body bordered className="p-3">
    <span className="size-medium">
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </HorizontalCard.Body>
  <HorizontalCard.Footer bordered className="p-3">
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button theme="danger">Dislike</Button>
      <Button theme="success">Like</Button>
    </div>
  </HorizontalCard.Footer>
</HorizontalCard>
`;
const customSizeCode = `
<HorizontalCard size="small">
<HorizontalCard.Header>
  <img className="size-small" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
</HorizontalCard.Header>
<HorizontalCard.Body>
  <span className="size-small">
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

<HorizontalCard size="medium">
  <HorizontalCard.Header>
    <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body>
    <span className="size-medium">
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

<HorizontalCard size="large">
  <HorizontalCard.Header>
    <img className="size-large" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
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

<HorizontalCard size="100px">
  <HorizontalCard.Header>
    <img className="size-custom" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
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
<HorizontalCard disabled>
  <HorizontalCard.Header>
    <img src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
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
<HorizontalCard shadowed={false}>
  <HorizontalCard.Header>
    <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
  </HorizontalCard.Header>
  <HorizontalCard.Body>
    <span className="size-medium">
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
<HorizontalCard shadowed={false}>
<HorizontalCard.Header>
  <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
</HorizontalCard.Header>
<HorizontalCard.Body>
  <span className="size-medium">
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
