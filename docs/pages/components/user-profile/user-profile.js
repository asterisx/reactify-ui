/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { UserProfile } from '../../../../reactify-ui/build';
import {
  avatarPositionCode,
  breakPointsCode,
  customColorCode,
  customThemeCode,
  customClassCode,
  closeProgramaticallyCode,
  disabledCode,
  dropDownPlacementCode,
  showMessageCode,
  simpleCode,
  welcomeMessageCode,
} from './code-refrence';

import {
  avatarPositionLink,
  breakPointsLink,
  customColorLink,
  customThemeLink,
  customClassLink,
  closeProgramaticallyLink,
  disabledLink,
  dropDownPlacementLink,
  showMessageLink,
  simpleLink,
  welcomeMessageLink,
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
    text: 'Typeahead',
    link: `${Constants.componentsPath}/typeahead`,
  },
  nextLink: {
    text: undefined,
    link: undefined,
  },
};

const UserProfileDemo = () => (
  <DemoPage componentName="User Profile">
    <ComponentInfo
      productionReady
      responsive
      githubLink={`${Constants.githubComponentsPath}/user-profile`}
    />
    <DemoCard
      title="Simple Use"
      sourceCode={simpleCode}
      externalSampleLink={simpleLink}
    >
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
      />
    </DemoCard>

    <DemoCard
      title="Disabled"
      sourceCode={disabledCode}
      externalSampleLink={disabledLink}
    >
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        disabled
      />
    </DemoCard>

    <DemoCard
      title="Avatar Position"
      sourceCode={avatarPositionCode}
      externalSampleLink={avatarPositionLink}
    >
      <h6>Avatar Position: left</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        avatarLeft
      />

      <h6 className="mt-5">Avatar Position: right</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        avatarRight
      />
    </DemoCard>

    <DemoCard
      title="Show Message"
      sourceCode={showMessageCode}
      externalSampleLink={showMessageLink}
    >
      <h6>showMessage true (Default)</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        showMessage
      />

      <h6 className="mt-5">showMessage: false</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        showMessage={false}
      />
    </DemoCard>

    <DemoCard
      title="Welcome Message"
      sourceCode={welcomeMessageCode}
      externalSampleLink={welcomeMessageLink}
    >
      <h6>Default welcomeMessage is 'Welcome'</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        welcomeMessage="how are you doing?"
      />
    </DemoCard>

    <DemoCard
      title="Drop Down Placement"
      sourceCode={dropDownPlacementCode}
      externalSampleLink={dropDownPlacementLink}
    >
      <h6>dropDownPlacement bottom (Default)</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        showMessage
      >
        <img alt="" width="auto" height="100px" src="https://asterisx.github.io/reactify-ui/static/assets/monkey.gif" />
      </UserProfile>

      <h6 className="mt-5">dropDownPlacement top</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        dropDownTop
      >
        <img alt="" width="auto" height="100px" src="https://asterisx.github.io/reactify-ui/static/assets/monkey.gif" />
      </UserProfile>
    </DemoCard>

    <DemoCard
      title="Close Tray Programatically"
      sourceCode={closeProgramaticallyCode}
      externalSampleLink={closeProgramaticallyLink}
    >
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
      >
        {closeTray => (
          <button
            className="btn btn-dark p-5"
            onClick={() => closeTray}
            type="button"
          >
        Close Tray
          </button>
        )}
      </UserProfile>
    </DemoCard>

    <DemoCard
      title="Breakpoints, hides name and welcome message on these brakpoints"
      sourceCode={breakPointsCode}
      externalSampleLink={breakPointsLink}
    >
      <h5>Can except a string or array of the following values: sm, md, lg, xl</h5>
      <h6>
        md
        <b className="pl-1">View on a md screen</b>
      </h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        md
      />

      <h6 className="mt-5">sm md lg xl</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        sm
        md
        lg
        xl
      />
    </DemoCard>

    <DemoCard
      title="Themes"
      sourceCode={customThemeCode}
      externalSampleLink={customThemeLink}
    >
      <h6>Primary Theme (this is used by default)</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        primary
      />

      <h6 className="mt-5">Secondary Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        secondary
      />

      <h6 className="mt-5">Dark Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        dark
      />

      <h6 className="mt-5">Light Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        light
      />

      <h6 className="mt-5">Info Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        info
      />

      <h6 className="mt-5">Warning Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        warning
      />

      <h6 className="mt-5">Danger Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        danger
      />

      <h6 className="mt-5">Success Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        success
      />
    </DemoCard>

    <DemoCard
      title="Custom Color"
      sourceCode={customColorCode}
      externalSampleLink={customColorLink}
    >
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        style={{ backgroundColor: 'violet' }}
      />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      sourceCode={customClassCode}
      externalSampleLink={customClassLink}
    >
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        info
        className="p-3"
      />
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

export default withHeader(UserProfileDemo);
