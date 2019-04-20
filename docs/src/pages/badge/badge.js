/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Badge } from 'reactify';
import {
  simpleCode,
  disabledCode,
  customThemeCode,
  customPositionCode,
  customColorCode,
  childrenCode,
  customClassCode,
  customSizeCode,
} from './code-refrence';
import './badge.scss';
import DemoCard from '../../components/demo-card';

const BadgeDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <Badge count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <Badge disabled count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Custom Sizes"
      uniqueIdentifier="customSize"
      sourceCode={customSizeCode}
    >
      <Badge size="small" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge size="medium" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="100px" width="100px" />
      </Badge>
      <br />
      <Badge size="large" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="200px" width="200px" />
      </Badge>
      <br />
      <Badge size="35px" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="200px" width="200px" />
      </Badge>
      <br />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themesUse"
      sourceCode={customThemeCode}
    >
      <Badge theme="default" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge theme="dark" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge theme="light" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge theme="info" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge theme="warning" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge theme="danger" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <Badge theme="success" className="pb-2" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Position: (Valid values 'top-left', 'top-right', 'bottom-left', 'bottom-right')"
      uniqueIdentifier="positionUse"
      sourceCode={customPositionCode}
    >
      <Badge position="top-left" size="small" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <br />
      <Badge position="top-right" size="small" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <br />
      <Badge position="bottom-right" size="small" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <br />
      <Badge position="bottom-left" size="small" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
      <br />
      <br />
    </DemoCard>

    <DemoCard
      title="Children"
      uniqueIdentifier="children"
      sourceCode={childrenCode}
    >
      <Badge size="medium" count="10">
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
      title="Custom Background Color, any valid css color (hex, rgb etc...) will work."
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <Badge color="violet" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <Badge className="text-light bg-dark p-2 shadow" count="10">
        <img className="img-message" src="https://asterisx.github.io/reactify/assets/mail.png" height="50px" width="50px" />
      </Badge>
    </DemoCard>
  </div>
);

export default BadgeDemo;
