const customColorCode = `
<Spinner
  vortex
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  vortex
  className="bg-dark text-light"
/>
`;

const customThemeCode = `
<Spinner
  vortex
  primary
/>

<Spinner
  vortex
  secondary
/>

<Spinner
  vortex
  dark
/>

<Spinner
  vortex
  light
/>


<Spinner
  vortex
  info
/>

<Spinner
  vortex
  warning
/>

<Spinner
  vortex
  danger
/>

<Spinner
  vortex
  success
/>
`;

const simpleCode = `
<Spinner
  vortex
/>
`;

const sizeCode = `
<Spinner
  vortex
  small
/>

<Spinner
  vortex
  medium
/>

<Spinner
  vortex
  large
/>  

<Spinner
  vortex
  style={{ fontSize: '75px' }}
/>
`;

const customSpeedCode = `
<Spinner
  vortex
  style={{ animationDuration: '3s' }}
/>

<Spinner
  vortex
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
