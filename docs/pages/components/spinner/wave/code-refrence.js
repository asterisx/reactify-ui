const customColorCode = `
<Spinner
  wave
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  wave
  className="bg-dark text-light"
/>
`;

const customSizeCode = `
<Spinner
  wave
  small
/>

<Spinner
  wave
  medium
/>

<Spinner
  wave
  large
/>  

<Spinner
  wave
  style={{ fontSize: '75px' }}
/>
`;

const customThemeCode = `
<Spinner
  wave
  primary
/>

<Spinner
  wave
  secondary
/>

<Spinner
  wave
  dark
/>

<Spinner
  wave
  light
/>


<Spinner
  wave
  info
/>

<Spinner
  wave
  warning
/>

<Spinner
  wave
  danger
/>

<Spinner
  wave
  success
/>
`;

const simpleCode = `
<Spinner
  wave
/>
`;

const customSpeedCode = `
<Spinner
  wave
  style={{ animationDuration: '3s' }}
/>

<Spinner
  wave
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
