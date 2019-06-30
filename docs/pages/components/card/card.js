/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, Button } from '@../../../../reactify-ui/build';
import {
  borderedColoredCode,
  customClassCode,
  customSizeCode,
  disabledCode,
  simpleCode,
  noShadowCode,
} from './code-refrence';
import { DemoCard, withHeader } from '../../../common';

const CardDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Card>
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
    </DemoCard>


    <DemoCard
      title="No Shadow"
      uniqueIdentifier="noShadowUse"
      sourceCode={noShadowCode}
    >
      <h4 className="pt-3 pb-3">{'shadowed={false}'}</h4>
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
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      uniqueIdentifier="customSizes"
      sourceCode={customSizeCode}
    >
      <h6 className="pt-3 pb-3">small</h6>
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
      <br />

      <h6 className="pt-3 pb-3">
        medium
        <b className="pl-3">Default Size</b>
      </h6>
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
      <br />

      <h6 className="pt-3 pb-3">large</h6>
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

      <h6 className="pt-3 pb-3">
        {'style={{ width: \'350px\' }}'}
        {' '}
        <b className="pl-3">Can be any valid css size value</b>
      </h6>
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
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
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
    </DemoCard>

    <DemoCard
      title="Bordered & Border Color"
      uniqueIdentifier="borderedColored"
      sourceCode={borderedColoredCode}
    >
      <h6 className="pb-3">
        Card.Body and Card.Footer can be bordered and can optionally have a
        border color
      </h6>
      <Card>
        <Card.Header>
          <img className="w-100" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
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
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </Card.Footer>
      </Card>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <h6>
        Card, Card.Body, Card.Header, Card.footer can accept custom classes
      </h6>
      <Card className="p-3">
        <Card.Header>
          <img className="w-100" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
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
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </Card.Footer>
      </Card>
    </DemoCard>
  </div>
);

export default withHeader(CardDemo);
