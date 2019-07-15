const avatarPositionCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  avatarLeft
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  avatarRight
/>
`;

const breakPointsCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  md
/>
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  sm
  md
  lg
  xl
/>
`;

const customColorCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  style={{ backgroundColor: 'violet' }}
/>
`;

const customThemeCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  primary
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  secondary
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  dark
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  light
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  info
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  warning
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  danger
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  success
/>
`;
const customClassCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  info
  className="p-3"
/>
`;

const closeProgramaticallyCode = `
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
`;

const disabledCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  disabled
/>
`;
const dropDownPlacementCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  showMessage
>
  <img alt="" width="auto" height="100px" src="https://asterisx.github.io/reactify-ui/static/assets/monkey.gif" />
</UserProfile>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  dropDownTop
  >
  <img alt="" width="auto" height="100px" src="https://asterisx.github.io/reactify-ui/static/assets/monkey.gif" />
</UserProfile>
`;

const simpleCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
/>
`;

const showMessageCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  showMessage
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  showMessage={false}
/>
`;

const welcomeMessageCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  welcomeMessage="how are you doing?"
/>
`;

export {
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
};
