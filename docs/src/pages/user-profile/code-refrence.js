const avatarPositionCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  avatarPosition="left"
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  avatarPosition="right"
/>
`;

const breakPointsCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  breakPoints="md"
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  breakPoints={['sm', 'md', 'lg', 'xl']}
/>
`;

const customColorCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  color="violet"
/>
`;

const customThemeCode = `
<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  theme="light"
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  theme="default"
  />

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  theme="dark"
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  theme="info"
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  theme="warning"
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  theme="danger"
/>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  theme="success"
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
  <img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" />
</UserProfile>

<UserProfile
  imgPath="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  userName="Joe"
  showMessage={false}
  dropDownPLacement="top"
>
  <img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" />
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
  closeProgramaticallyCode,
  disabledCode,
  dropDownPlacementCode,
  showMessageCode,
  simpleCode,
  welcomeMessageCode,
};
