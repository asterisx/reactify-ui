/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { UserProfile } from 'reactify';
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
import './user-profile.scss';
import DemoCard from '../../components/demo-card';

const UserProfileDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
      />
    </DemoCard>

    <DemoCard
      title="Disabled"
      uniqueIdentifier="disabledUse"
      sourceCode={disabledCode}
    >
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        disabled
      />
    </DemoCard>

    <DemoCard
      title="Avatar Position"
      uniqueIdentifier="avatarPositionUse"
      sourceCode={avatarPositionCode}
    >
      <h6>Avatar Position: left</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        avatarPosition="left"
      />

      <h6 className="mt-5">Avatar Position: right</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        avatarPosition="right"
      />
    </DemoCard>

    <DemoCard
      title="Show Message"
      uniqueIdentifier="showMessageUse"
      sourceCode={showMessageCode}
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
      uniqueIdentifier="welcomeMessageUse"
      sourceCode={welcomeMessageCode}
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
      uniqueIdentifier="dropDownPlacementUse"
      sourceCode={dropDownPlacementCode}
    >
      <h6>dropDownPlacement bottom (Default)</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        showMessage
      >
        <img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" />
      </UserProfile>

      <h6 className="mt-5">dropDownPlacement top</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        showMessage={false}
        dropDownPLacement="top"
      >
        <img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" />
      </UserProfile>
    </DemoCard>

    <DemoCard
      title="Close Tray Programatically"
      uniqueIdentifier="closeTrayProgramaticallyUse"
      sourceCode={closeProgramaticallyCode}
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
      uniqueIdentifier="breakpointsUse"
      sourceCode={breakPointsCode}
    >
      <h5>Can except a string or array of the following values: sm, md, lg, xl</h5>
      <h6>
breakPoints="md"
        <b className="pl-1">View on a md screen</b>
      </h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        breakPoints="md"
      />

      <h6 className="mt-5">{"breakPoints={['sm', 'md', 'lg', 'xl']}"}</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        breakPoints={['sm', 'md', 'lg', 'xl']}
      />
    </DemoCard>

    <DemoCard
      title="Themes"
      uniqueIdentifier="themesUse"
      sourceCode={customThemeCode}
    >
      <h6>Light Theme (this is used by default)</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        theme="light"
      />

      <h6 className="mt-5">Default Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        theme="default"
      />

      <h6 className="mt-5">Dark Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        theme="dark"
      />

      <h6 className="mt-5">Info Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        theme="info"
      />

      <h6 className="mt-5">Warning Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        theme="warning"
      />

      <h6 className="mt-5">Danger Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        theme="danger"
      />

      <h6 className="mt-5">Success Theme</h6>
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        theme="success"
      />
    </DemoCard>

    <DemoCard
      title="Custom Color"
      uniqueIdentifier="customColorUse"
      sourceCode={customColorCode}
    >
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        color="violet"
      />
    </DemoCard>

    <DemoCard
      title="Custom Class"
      uniqueIdentifier="customClassUse"
      sourceCode={customClassCode}
    >
      <UserProfile
        imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        userName="Joe"
        theme="info"
        className="p-3"
      />
    </DemoCard>
  </div>
);

export default UserProfileDemo;
