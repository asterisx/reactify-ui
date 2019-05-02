const actionCode = `
<SnackBar
    duration={3000}
    action="undo"
    onActionClick={() => alert("Acion Clicked")} 
    message="Disabled SnackBar :)"
/>
`;
const childrenCode = `
<SnackBar
    style={{backgroundColor: 'transparent'}}
    duration={5000}
>
    <img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" />
</SnackBar>
`;
const customColorCode = `
<SnackBar
    duration={3000}
    style={{ backgroundColor: 'violet' }}
    showDismiss
    message="A violet snackbar :O"
/>
`;
const customClassCode = `
<SnackBar
    duration={3000}
    showDismiss
    className="p-3 bg-primary"
    message="This snackbar has custom class"
/>
`;
const customThemeCode = `
<SnackBar
    duration={3000}
    showDismiss
    primary
    message="This snackbar has primary theme"
/>

<SnackBar
    duration={3000}
    showDismiss
    secondary
    message="This snackbar has secondary theme"
/>

<SnackBar
    duration={3000}
    showDismiss
    dark
    message="This snackbar has dark theme"
/>

<SnackBar
    duration={3000}
    showDismiss
    light
    message="This snackbar has light theme"
/>

<SnackBar
    duration={3000}
    showDismiss
    info
    message="This snackbar has info theme"
/>

<SnackBar
    duration={3000}
    showDismiss
    warning
    message="This snackbar has warning theme"
/>

<SnackBar
    duration={3000}
    showDismiss
    danger"
    message="This snackbar has danger theme"
/>

<SnackBar
    duration={3000}
    showDismiss
    success
    message="This snackbar has success theme"
/>
`;
const durationCode = `
<SnackBar
    duration={10000}
    showDismiss
    message="This snackbar will show for ten seconds :)"
/>
`;
const disabledCode = `
<SnackBar
    duration={3000}
    disabled
    message="Disabled SnackBar :)"
/>
`;
const dismissCode = `
<SnackBar
    showDismiss
    message="Click on dismiss to dismiss now!"
    duration={3000}
/>
`;
const messageCode = `
<SnackBar
    duration={3000}
    message="This is a custom message!!!"
/>
`;
const positionCode = `
<SnackBar
    topLeft
    showDismiss
    duration={3000}
    message="SnackBar at top left :)"
/>

<SnackBar
    bottomLeft
    showDismiss
    duration={3000}
    message="SnackBar at bottom left :)"
/>

<SnackBar
    topRight
    showDismiss
    duration={3000}
    message="SnackBar at top right :)"
/>

<SnackBar
    bottomRight
    showDismiss
    duration={3000}
    message="SnackBar at bottom right :)"
/>
`;
const simpleCode = `
<SnackBar
    duration={3000}
    message="SnackBar :)"
/>
`;

export {
  actionCode,
  childrenCode,
  customColorCode,
  customClassCode,
  customThemeCode,
  durationCode,
  disabledCode,
  dismissCode,
  messageCode,
  positionCode,
  simpleCode,
};
