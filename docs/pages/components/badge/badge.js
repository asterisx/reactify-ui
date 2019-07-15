/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Badge, NumberCounter } from '../../../../reactify-ui/build';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  customPositionCode,
  customContentCode,
  childrenCode,
  customClassCode,
  customSizeCode,
} from './code-refrence';

import {
  childrenLink,
  customClassLink,
  customContentLink,
  customPositionLink,
  customSizeLink,
  customThemeLink,
  disabledLink,
  simpleLink,
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
    text: 'Alert',
    link: `${Constants.componentsPath}/alert`,
  },
  nextLink: {
    text: 'Breadcrumbs',
    link: `${Constants.componentsPath}/breadcrumbs`,
  },
};

const BadgeDemo = () => (
  <DemoPage componentName="Badge">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/badge`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <Badge>
        <Badge.Bubble>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <Badge disabled>
        <Badge.Bubble>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      sourceCode={customSizeCode}
      externalSampleLink={customSizeLink}
    >
      <Badge className="pb-2">
        <Badge.Bubble small>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble medium>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="100px" width="100px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble large>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="200px" width="200px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble style={{ fontSize: '35px' }}>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="200px" width="200px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <Badge className="pb-2">
        <Badge.Bubble primary>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble secondary>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble dark>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble light>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble info>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble warning>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble danger>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge className="pb-2">
        <Badge.Bubble success>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Position: (Valid values topLeft, topRight, bottomRight, bottomLeft)"
      sourceCode={customPositionCode}
      externalSampleLink={customPositionLink}
    >
      <Badge>
        <Badge.Bubble topLeft>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <br />
      <Badge>
        <Badge.Bubble topRight>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <br />
      <Badge>
        <Badge.Bubble bottomRight>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <br />
      <Badge>
        <Badge.Bubble bottomLeft>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Children"
      sourceCode={childrenCode}
      externalSampleLink={childrenLink}
    >
      <Badge>
        <Badge.Bubble medium>
          10
        </Badge.Bubble>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Badge>
    </DemoCard>

    <DemoCard
      title="Custom Content"
      sourceCode={customContentCode}
      externalSampleLink={customContentLink}
    >
      <Badge>
        <Badge.Bubble medium>
          <NumberCounter
            from={1000}
            to={9999}
            light
          />
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="200px" width="200px" />
      </Badge>

      <h6 className="pt-3 pb-3">
        <b>What about dots?</b>
        {' '}
        <span>Do not provide content prop</span>
      </h6>


      <Badge>
        <Badge.Bubble />
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>

      <br />
      <br />

      <Badge>
        <Badge.Bubble danger />
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <Badge className="text-light bg-dark p-2 shadow">
        <Badge.Bubble>
          10
        </Badge.Bubble>
        <img className="badge_img-message" src="https://asterisx.github.io/reactify-ui/static/assets/mail.png" height="50px" width="50px" />
      </Badge>
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

export default withHeader(BadgeDemo);
