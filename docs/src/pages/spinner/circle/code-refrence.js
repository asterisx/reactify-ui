const customColorCode = `
<Spinner
  circle
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  circle
  className="bg-dark text-light"
/>
`;

const customThemeCode = `
<Spinner
  circle
  primary
/>

<Spinner
  circle
  secondary
/>

<Spinner
  circle
  dark
/>

<Spinner
  circle
  light
/>


<Spinner
  circle
  info
/>

<Spinner
  circle
  warning
/>

<Spinner
  circle
  danger
/>

<Spinner
  circle
  success
/>
`;

const simpleCode = `
<Spinner
  circle
/>
`;

const sizeCode = `
<Spinner
  circle
  small
/>

<Spinner
  circle
  medium
/>

<Spinner
  circle
  large
/>  

<Spinner
  circle
  style={{ fontSize: '75px' }}
/>
`;

const customSpeedCode = `
<Spinner
  circle
  style={{ animationDuration: '3s' }}
/>

<Spinner
  circle
  style={{ animationDuration: '500ms' }}
/>
`;

export {
  customColorCode,
  customClassCode,
  customThemeCode,
  customSpeedCode,
  simpleCode,
  sizeCode,
};
