const customColorCode = `
<Spinner
  texture
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  texture
  className="bg-dark text-light"
/>
`;

const customSizeCode = `
<Spinner
  texture
  small
/>

<Spinner
  texture
  medium
/>

<Spinner
  texture
  large
/>  

<Spinner
  texture
  style={{ fontSize: '75px' }}
/>
`;

const customThemeCode = `
<Spinner
  texture
  primary
/>

<Spinner
  texture
  secondary
/>

<Spinner
  texture
  dark
/>

<Spinner
  texture
  light
/>


<Spinner
  texture
  info
/>

<Spinner
  texture
  warning
/>

<Spinner
  texture
  danger
/>

<Spinner
  texture
  success
/>
`;

const simpleCode = `
<Spinner
  texture
/>
`;

const customSpeedCode = `
<Spinner
  texture
  style={{ animationDuration: '3s' }}
/>

<Spinner
  texture
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
