/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { StackedCard, Button } from '@../../../../reactify-ui/build';
import './stacked-card.scss';

import {
  borderedColoredCode,
  customClassCode,
  customSizeCode,
  disabledCode,
  noShadowCode,
  simpleCode,
} from './code-refrence';

import DemoCard from '../../components/demo-card';

const StackedCardDemo = () => (
  <div className="w-100">
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <h4 className="pt-3 pb-3">StackedCard.Body, StackedCard.Header and StackedCard.Footer's children should be able to have their own width such as (width: 300px) or are block elements.</h4>
      <StackedCard className="font-responsive">
        <StackedCard.Header>
          <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="size-medium">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts as his oxygen supply starts to dwindle.
          </span>
        </StackedCard.Body>
        <StackedCard.Footer bordered>
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </StackedCard.Footer>
      </StackedCard>
    </DemoCard>

    <DemoCard
      title="No Shadow"
      uniqueIdentifier="noShadowUse"
      sourceCode={noShadowCode}
    >
      <h4 className="pt-3 pb-3">{'shadowed={false}'}</h4>
      <StackedCard shadowed={false} className="font-responsive">
        <StackedCard.Header>
          <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="size-medium">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts as his oxygen supply starts to dwindle.
          </span>
        </StackedCard.Body>
        <StackedCard.Footer bordered>
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </StackedCard.Footer>
      </StackedCard>
    </DemoCard>

    <DemoCard
      title="Custom Sizes (i.e height of card)"
      uniqueIdentifier="customSizes"
      sourceCode={customSizeCode}
    >
      <h6 className="pt-3 pb-3">small</h6>
      <StackedCard small className="font-responsive">
        <StackedCard.Header>
          <img className="size-small" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="size-small">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts as his oxygen supply starts to dwindle.
          </span>
        </StackedCard.Body>
        <StackedCard.Footer bordered>
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </StackedCard.Footer>
      </StackedCard>
      <br />

      <h6 className="pt-3 pb-3">
          medium
        <b className="pl-3">Default Size</b>
      </h6>
      <StackedCard medium className="font-responsive">
        <StackedCard.Header>
          <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="size-medium">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts...
          </span>
        </StackedCard.Body>
        <StackedCard.Footer bordered>
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </StackedCard.Footer>
      </StackedCard>
      <br />

      <h6 className="pt-3 pb-3">large</h6>
      <StackedCard large className="font-responsive">
        <StackedCard.Header>
          <img className="size-large" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="size-large">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts as his oxygen supply starts to dwindle.
          </span>
        </StackedCard.Body>
        <StackedCard.Footer bordered>
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </StackedCard.Footer>
      </StackedCard>

      <h6 className="pt-3 pb-3">
        {'style={{ height: \'100px\' }}'}
      </h6>
      <StackedCard style={{ height: '100px', marginLeft: '3em' }} className="header-margin-left-small">
        <StackedCard.Header style={{ marginLeft: '-3em' }} className="header-margin-left-small-negative">
          <img className="size-custom" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </StackedCard.Header>
        <StackedCard.Body className="p-1 m-0">
          <span className="size-custom">
            <h5 className="font-small margin-padding-small">Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark...
          </span>
        </StackedCard.Body>
        <StackedCard.Footer bordered className="p-1 m-0">
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button small danger>Dislike</Button>
            <Button small success className="d-flex justify-content-center">Like</Button>
          </div>
        </StackedCard.Footer>
      </StackedCard>
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <StackedCard disabled className="font-responsive">
        <StackedCard.Header>
          <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="size-medium">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts as his oxygen supply starts to dwindle.
          </span>
        </StackedCard.Body>
        <StackedCard.Footer bordered>
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </StackedCard.Footer>
      </StackedCard>
    </DemoCard>

    <DemoCard
      title="Bordered & Border Color"
      uniqueIdentifier="borderedColored"
      sourceCode={borderedColoredCode}
    >
      <h6 className="pb-3">
      StackedCard.Body and StackedCard.Footer can be bordered and can optionally have a
        border color
      </h6>
      <StackedCard className="font-responsive">
        <StackedCard.Header>
          <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </StackedCard.Header>
        <StackedCard.Body bordered style={{ borderColor: 'violet' }}>
          <span className="size-medium">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts as his oxygen supply starts to dwindle.
          </span>
        </StackedCard.Body>
        <StackedCard.Footer bordered>
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </StackedCard.Footer>
      </StackedCard>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <h6 className="pb-3 pt-3">
      StackedCard,
      StackedCard.Body,
      StackedCard.Header,
      StackedCard.footer can accept custom classes
      </h6>
      <StackedCard className="font-responsive">
        <StackedCard.Header>
          <img className="size-medium" src="https://cdn.vox-cdn.com/thumbor/4IYvR8-vUE1-ZpXaJb3D9P9cLTM=/0x0:1600x1067/1200x800/filters:focal(1142x577:1398x833)/cdn.vox-cdn.com/uploads/chorus_image/image/59293003/avengers_poster.0.jpg" />
        </StackedCard.Header>
        <StackedCard.Body bordered className="text-dark">
          <span className="size-medium">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts as his oxygen supply starts to dwindle.
          </span>
        </StackedCard.Body>
        <StackedCard.Footer bordered className="text-dark">
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </StackedCard.Footer>
      </StackedCard>
    </DemoCard>
  </div>
);

export default StackedCardDemo;
