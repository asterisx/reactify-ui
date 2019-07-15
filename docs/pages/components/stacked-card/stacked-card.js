/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { StackedCard, Button } from '../../../../reactify-ui/build';
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
    text: 'Split Pane',
    link: `${Constants.componentsPath}/split-pane`,
  },
  nextLink: {
    text: 'Star Rating',
    link: `${Constants.componentsPath}/star-rating`,
  },
};

const StackedCardDemo = () => (
  <DemoPage componentName="Stacked Card">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/stacked-card`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <h4 className="pt-3 pb-3">StackedCard.Body, StackedCard.Header and StackedCard.Footer's children should be able to have their own width such as (width: 300px) or are block elements.</h4>
      <StackedCard className="stacked-card_font-responsive">
        <StackedCard.Header>
          <img className="stacked-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="stacked-card_size-medium">
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
      sourceCode={noShadowCode}
      externalSampleLink={noShadowLink}
    >
      <h4 className="pt-3 pb-3">{'shadowed={false}'}</h4>
      <StackedCard shadowed={false} className="stacked-card_font-responsive">
        <StackedCard.Header>
          <img className="stacked-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="stacked-card_size-medium">
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
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6 className="pt-3 pb-3">small</h6>
      <StackedCard small className="stacked-card_font-responsive">
        <StackedCard.Header>
          <img className="stacked-card_size-small" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="stacked-card_size-small">
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
      <StackedCard medium className="stacked-card_font-responsive">
        <StackedCard.Header>
          <img className="stacked-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="stacked-card_size-medium">
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
      <StackedCard large className="stacked-card_font-responsive">
        <StackedCard.Header>
          <img className="stacked-card_size-large" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="stacked-card_size-large">
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
      <StackedCard style={{ height: '100px', marginLeft: '3em' }} className="stacked-card_header-margin-left-small">
        <StackedCard.Header style={{ marginLeft: '-3em' }} className="header-margin-left-small-negative">
          <img className="stacked-card_size-custom" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </StackedCard.Header>
        <StackedCard.Body className="p-1 m-0">
          <span className="stacked-card_size-custom">
            <h5 className="stacked-card_font-small stacked-card_margin-padding-small">Avenger's Endgame</h5>
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
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <StackedCard disabled className="stacked-card_font-responsive">
        <StackedCard.Header>
          <img className="stacked-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </StackedCard.Header>
        <StackedCard.Body>
          <span className="stacked-card_size-medium">
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
      sourceCode={borderedColoredCode}
      externalSampleLink={borderedColoredLink}
    >
      <h6 className="pb-3">
      StackedCard.Body and StackedCard.Footer can be bordered and can optionally have a
        border color
      </h6>
      <StackedCard className="stacked-card_font-responsive">
        <StackedCard.Header>
          <img className="stacked-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </StackedCard.Header>
        <StackedCard.Body bordered style={{ borderColor: 'violet' }}>
          <span className="stacked-card_size-medium">
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
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <h6 className="pb-3 pt-3">
      StackedCard,
      StackedCard.Body,
      StackedCard.Header,
      StackedCard.footer can accept custom classes
      </h6>
      <StackedCard className="stacked-card_font-responsive">
        <StackedCard.Header>
          <img className="stacked-card_size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </StackedCard.Header>
        <StackedCard.Body bordered className="text-dark">
          <span className="stacked-card_size-medium">
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

    <BottomNav
      className="mt-4 mb-4"
      prevLinkText={bottomNavLinks.prevLink.text}
      prevLink={bottomNavLinks.prevLink.link}
      nextLinkText={bottomNavLinks.nextLink.text}
      nextLink={bottomNavLinks.nextLink.link}
    />
  </DemoPage>
);

export default withHeader(StackedCardDemo);
