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

const customSizeCode = `
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
  customSizeCode,
  customThemeCode,
  customSpeedCode,
  simpleCode,
};
