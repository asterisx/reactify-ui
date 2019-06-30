const actionCode = `
<Snackbar
    duration={3000}
    action="undo"
    onActionClick={() => alert("Acion Clicked")} 
    message="Disabled Snackbar :)"
/>
`;
const childrenCode = `
<Snackbar
    style={{backgroundColor: 'transparent'}}
    duration={5000}
>
    <img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" />
</Snackbar>
`;
const customColorCode = `
<Snackbar
    duration={3000}
    style={{ backgroundColor: 'violet' }}
    showDismiss
    message="A violet Snackbar :O"
/>
`;
const customClassCode = `
<Snackbar
    duration={3000}
    showDismiss
    className="p-3 bg-primary"
    message="This Snackbar has custom class"
/>
`;
const customThemeCode = `
<Snackbar
    duration={3000}
    showDismiss
    primary
    message="This Snackbar has primary theme"
/>

<Snackbar
    duration={3000}
    showDismiss
    secondary
    message="This Snackbar has secondary theme"
/>

<Snackbar
    duration={3000}
    showDismiss
    dark
    message="This Snackbar has dark theme"
/>

<Snackbar
    duration={3000}
    showDismiss
    light
    message="This Snackbar has light theme"
/>

<Snackbar
    duration={3000}
    showDismiss
    info
    message="This Snackbar has info theme"
/>

<Snackbar
    duration={3000}
    showDismiss
    warning
    message="This Snackbar has warning theme"
/>

<Snackbar
    duration={3000}
    showDismiss
    danger"
    message="This Snackbar has danger theme"
/>

<Snackbar
    duration={3000}
    showDismiss
    success
    message="This Snackbar has success theme"
/>
`;
const durationCode = `
<Snackbar
    duration={10000}
    showDismiss
    message="This Snackbar will show for ten seconds :)"
/>
`;
const disabledCode = `
<Snackbar
    duration={3000}
    disabled
    message="Disabled Snackbar :)"
/>
`;
const dismissCode = `
<Snackbar
    showDismiss
    message="Click on dismiss to dismiss now!"
    onClose={() => { this.setState({ showDismissSnackbar: false }); alert('Snackbar is closed'); }}
    duration={5000}
/>
`;
const messageCode = `
<Snackbar
    duration={3000}
    message="This is a custom message!!!"
/>
`;
const positionCode = `
<Snackbar
    topLeft
    showDismiss
    duration={3000}
    message="Snackbar at top left :)"
/>

<Snackbar
    bottomLeft
    showDismiss
    duration={3000}
    message="Snackbar at bottom left :)"
/>

<Snackbar
    topRight
    showDismiss
    duration={3000}
    message="Snackbar at top right :)"
/>

<Snackbar
    bottomRight
    showDismiss
    duration={3000}
    message="Snackbar at bottom right :)"
/>
`;
const simpleCode = `
<Snackbar
    duration={3000}
    message="Snackbar :)"
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
