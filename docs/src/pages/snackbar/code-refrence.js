const actionCode = `
<SnackBar
    delay={3000}
    action="undo"
    onActionClick={() => alert("Acion Clicked")} 
    message="Disabled SnackBar :)"
/>
`;
const childrenCode = `
<SnackBar
    color="transparent"
    delay={5000}
>
    <img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" />
</SnackBar>
`;
const customColorCode = `
<SnackBar
    delay={3000}
    color="violet"
    showDismiss
    message="A violet snackbar :O"
/>
`;
const customClassCode = `
<SnackBar
    delay={3000}
    showDismiss
    className="p-3 bg-primary"
    message="This snackbar has custom class"
/>
`;
const customThemeCode = `
<SnackBar
    delay={3000}
    showDismiss
    theme="default"
    message="This snackbar has default theme"
/>

<SnackBar
    delay={3000}
    showDismiss
    theme="dark"
    message="This snackbar has dark theme"
/>

<SnackBar
    delay={3000}
    showDismiss
    theme="light"
    message="This snackbar has light theme"
/>

<SnackBar
    delay={3000}
    showDismiss
    theme="info"
    message="This snackbar has info theme"
/>

<SnackBar
    delay={3000}
    showDismiss
    theme="warning"
    message="This snackbar has warning theme"
/>

<SnackBar
    delay={3000}
    showDismiss
    theme="danger"
    message="This snackbar has danger theme"
/>

<SnackBar
    delay={3000}
    showDismiss
    theme="success"
    message="This snackbar has success theme"
/>
`;
const delayCode = `
<SnackBar
    delay={10000}
    showDismiss
    message="This snackbar will show for ten seconds :)"
/>
`;
const disabledCode = `
<SnackBar
    delay={3000}
    disabled
    message="Disabled SnackBar :)"
/>
`;
const dismissCode = `
<SnackBar
    showDismiss
    message="Click on dismiss to dismiss now!"
    delay={3000}
/>
`;
const messageCode = `
<SnackBar
    delay={3000}
    message="This is a custom message!!!"
/>
`;
const positionCode = `
<SnackBar
    position="top-left"
    showDismiss
    delay={3000}
    message="SnackBar at top left :)"
/>

<SnackBar
    position="bottom-left"
    showDismiss
    delay={3000}
    message="SnackBar at bottom left :)"
/>

<SnackBar
    position="top-right"
    showDismiss
    delay={3000}
    message="SnackBar at top right :)"
/>

<SnackBar
    position="bottom-right"
    showDismiss
    delay={3000}
    message="SnackBar at bottom right :)"
/>
`;
const simpleCode = `
<SnackBar
    delay={3000}
    message="SnackBar :)"
/>
`;

export {
  actionCode,
  childrenCode,
  customColorCode,
  customClassCode,
  customThemeCode,
  delayCode,
  disabledCode,
  dismissCode,
  messageCode,
  positionCode,
  simpleCode,
};
