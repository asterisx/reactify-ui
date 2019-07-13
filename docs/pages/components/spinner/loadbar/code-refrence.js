const customColorCode = `
<Spinner
  loadbar
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  loadbar
  className="bg-dark text-light"
/>
`;

const customSizeCode = `
<Spinner
  loadbar
  small
/>

<Spinner
  loadbar
  medium
/>

<Spinner
  loadbar
  large
/>  

<Spinner
  loadbar
  style={{ fontSize: '75px' }}
/>
`;

const customThemeCode = `
<Spinner
  loadbar
  primary
/>

<Spinner
  loadbar
  secondary
/>

<Spinner
  loadbar
  dark
/>

<Spinner
  loadbar
  light
/>


<Spinner
  loadbar
  info
/>

<Spinner
  loadbar
  warning
/>

<Spinner
  loadbar
  danger
/>

<Spinner
  loadbar
  success
/>
`;

const simpleCode = `
<Spinner
  loadbar
/>
`;

const customSpeedCode = `
<Spinner
  loadbar
  style={{ animationDuration: '3s' }}
/>

<Spinner
  loadbar
  style={{ animationDuration: '500ms' }}
/>
`;

export {
  customColorCode,
  customClassCode,
  customSizeCode,
  customThemeCode,
  customSpeedCode,
  simpleCode,
};
