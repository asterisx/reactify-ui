/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, Button } from '../../../../reactify-ui/build';
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
    text: 'Button',
    link: `${Constants.componentsPath}/button`,
  },
  nextLink: {
    text: 'Checkbox',
    link: `${Constants.componentsPath}/checkbox`,
  },
};

const CardDemo = () => (
  <DemoPage componentName="Card">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/card`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Card>
        <Card.Header>
          <img className="w-100" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
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
      sourceCode={noShadowCode}
      externalSampleLink={noShadowLink}
    >
      <h4 className="pt-3 pb-3">{'shadowed={false}'}</h4>
      <Card shadowed={false}>
        <Card.Header>
          <img className="w-100" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
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
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <h6 className="pt-3 pb-3">small</h6>
      <Card small>
        <Card.Header>
          <img className="w-100" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
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
          <img className="w-100" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
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
          <img className="w-100" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
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
          <img className="w-100" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
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
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Card disabled>
        <Card.Header>
          <img className="w-100" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
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
      sourceCode={borderedColoredCode}
      externalSampleLink={borderedColoredLink}
    >
      <h6 className="pb-3">
        Card.Body and Card.Footer can be bordered and can optionally have a
        border color
      </h6>
      <Card>
        <Card.Header>
          <img className="w-100" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
        </Card.Header>
        <Card.Body bordered style={{ borderColor: 'violet' }}>
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
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <h6>
        Card, Card.Body, Card.Header, Card.footer can accept custom classes
      </h6>
      <Card className="p-3">
        <Card.Header>
          <img className="w-100" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
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

    <BottomNav
      className="mt-4 mb-4"
      prevLinkText={bottomNavLinks.prevLink.text}
      prevLink={bottomNavLinks.prevLink.link}
      nextLinkText={bottomNavLinks.nextLink.text}
      nextLink={bottomNavLinks.nextLink.link}
    />
  </DemoPage>
);

export default withHeader(CardDemo);
