/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { HorizontalCard, Button } from '@../../../../reactify/build';
import './horizontal-card.scss';

import {
  borderedColoredCode,
  customClassCode,
  customSizeCode,
  disabledCode,
  noShadowCode,
  simpleCode,
} from './code-refrence';

import DemoCard from '../../components/demo-card';

const HorizontalCardDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <h4 className="pt-3 pb-3">HorizontalCard.Body, HorizontalCard.Header and HorizontalCard.Footer's children should be able to have their own width such as (width: 300px) or are block elements.</h4>
      <HorizontalCard>
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
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
    </DemoCard>

    <DemoCard
      title="No Shadow"
      uniqueIdentifier="noShadowUse"
      sourceCode={noShadowCode}
    >
      <h4 className="pt-3 pb-3">{'shadowed={false}'}</h4>
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
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
    </DemoCard>

    <DemoCard
      title="Custom Sizes (i.e height of card)"
      uniqueIdentifier="customSizes"
      sourceCode={customSizeCode}
    >
      <h6 className="pt-3 pb-3">size="small"</h6>
      <HorizontalCard small>
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
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
      <br />

      <h6 className="pt-3 pb-3">
        size="medium"
        {' '}
        <b className="pl-3">Default Size</b>
      </h6>
      <HorizontalCard medium>
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
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
      <br />

      <h6 className="pt-3 pb-3">size="large"</h6>
      <HorizontalCard large>
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
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>

      <h6 className="pt-3 pb-3">
        {'style={{ height: \'100px\' }}'}
      </h6>
      <HorizontalCard style={{ height: '100px' }}>
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
            <Button danger className="font-small">Dislike</Button>
            <Button success className="font-small d-flex justify-content-center">Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <HorizontalCard disabled>
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
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
    </DemoCard>

    <DemoCard
      title="Bordered & Border Color"
      uniqueIdentifier="borderedColored"
      sourceCode={borderedColoredCode}
    >
      <h6 className="pb-3">
      HorizontalCard.Body and HorizontalCard.Footer can be bordered and can optionally have a
        border color
      </h6>
      <HorizontalCard>
        <HorizontalCard.Header>
          <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body bordered style={{ borderColor: 'violet' }}>
          <span className="size-medium">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts as his oxygen supply starts to dwindle.
          </span>
        </HorizontalCard.Body>
        <HorizontalCard.Footer bordered>
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <h6 className="pb-3 pt-3">
      HorizontalCard,
      HorizontalCard.Body,
      HorizontalCard.Header,
      HorizontalCard.footer can accept custom classes
      </h6>
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
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
    </DemoCard>
  </div>
);

export default HorizontalCardDemo;
