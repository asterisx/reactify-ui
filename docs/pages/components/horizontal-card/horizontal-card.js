/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { HorizontalCard, Button } from '@../../../../reactify-ui/build';
import {
  borderedColoredCode,
  customClassCode,
  customSizeCode,
  disabledCode,
  simpleCode,
  noShadowCode,
} from './code-refrence';

import {
  borderedColoredLink,
  customClassLink,
  customSizeLink,
  disabledLink,
  simpleLink,
  noShadowLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Highlight',
    link: `${Constants.componentsPath}/highlight`,
  },
  nextLink: {
    text: 'Input',
    link: `${Constants.componentsPath}/input`,
  },
};

const HorizontalCardDemo = () => (
  <DemoPage componentName="Horizontal Card">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/horizontal-card`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <h4 className="pt-3 pb-3">HorizontalCard.Body, HorizontalCard.Header and HorizontalCard.Footer's children should be able to have their own width such as (width: 300px) or are block elements.</h4>
      <HorizontalCard className="horizontal-card_font-responsive">
        <HorizontalCard.Header>
          <img className="horizontal-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body>
          <span className="horizontal-card_size-medium">
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
      sourceCode={noShadowCode}
      externalSampleLink={noShadowLink}
    >
      <h4 className="pt-3 pb-3">{'shadowed={false}'}</h4>
      <HorizontalCard shadowed={false} className="horizontal-card_font-responsive">
        <HorizontalCard.Header>
          <img className="horizontal-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body>
          <span className="horizontal-card_size-medium">
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
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6 className="pt-3 pb-3">size="small"</h6>
      <HorizontalCard small className="horizontal-card_font-responsive">
        <HorizontalCard.Header>
          <img className="horizontal-card_size-small" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body>
          <span className="horizontal-card_size-small">
            <h5>Avenger's Endgame</h5>
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
      <HorizontalCard medium className="horizontal-card_font-responsive">
        <HorizontalCard.Header>
          <img className="horizontal-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body>
          <span className="horizontal-card_size-medium">
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
      <HorizontalCard large className="horizontal-card_font-responsive">
        <HorizontalCard.Header>
          <img className="horizontal-card_size-large" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body>
          <span className="horizontal-card_size-large">
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
          <img className="horizontal-card_size-custom" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body className="p-1 m-0">
          <span className="horizontal-card_size-custom">
            <h5 className="horizontal-card_font-small horizontal-card_margin-padding-small">Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark...
          </span>
        </HorizontalCard.Body>
        <HorizontalCard.Footer bordered className="p-1 m-0">
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger className="horizontal-card_font-small">Dislike</Button>
            <Button success className="horizontal-card_font-small d-flex justify-content-center">Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
    </DemoCard>

    <DemoCard
      title="Disabled Use"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <HorizontalCard disabled className="horizontal-card_font-responsive">
        <HorizontalCard.Header>
          <img className="horizontal-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body>
          <span className="horizontal-card_size-medium">
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
      sourceCode={borderedColoredCode}
      externalSampleLink={borderedColoredLink}
    >
      <h6 className="pb-3">
      HorizontalCard.Body and HorizontalCard.Footer can be bordered and can optionally have a
        border color
      </h6>
      <HorizontalCard className="horizontal-card_font-responsive">
        <HorizontalCard.Header>
          <img className="horizontal-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body bordered style={{ borderColor: 'violet' }}>
          <span className="horizontal-card_size-medium">
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
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <h6 className="pb-3 pt-3">
      HorizontalCard,
      HorizontalCard.Body,
      HorizontalCard.Header,
      HorizontalCard.footer can accept custom classes
      </h6>
      <HorizontalCard className="text-dark horizontal-card_font-responsive">
        <HorizontalCard.Header>
          <img className="horizontal-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </HorizontalCard.Header>
        <HorizontalCard.Body bordered className="text-dark">
          <span className="horizontal-card_size-medium">
            <h5>Avenger's Endgame</h5>
            Adrift in space with no food or water, Tony Stark sends a message to
            Pepper Potts as his oxygen supply starts to dwindle.
          </span>
        </HorizontalCard.Body>
        <HorizontalCard.Footer bordered className="text-dark">
          <div className=" d-flex flex-column h-100 justify-content-between">
            <Button danger>Dislike</Button>
            <Button success>Like</Button>
          </div>
        </HorizontalCard.Footer>
      </HorizontalCard>
    </DemoCard>

    <BottomNav
      className="mt-4 mb-4"
      prevLinkText={bottomNavLinks.prevLink.text}
      prevLink={bottomNavLinks.prevLink.link}
      nextLinkText={bottomNavLinks.nextLink.text}
      nextLink={bottomNavLinks.nextLink.link}
    />
  </DemoPage>
);

export default withHeader(HorizontalCardDemo);
