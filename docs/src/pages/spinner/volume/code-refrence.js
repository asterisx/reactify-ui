const customColorCode = `
<Spinner
  volume
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  volume
  className="bg-dark text-light"
/>
`;

const customThemeCode = `
<Spinner
  volume
  primary
/>

<Spinner
  volume
  secondary
/>

<Spinner
  volume
  dark
/>

<Spinner
  volume
  light
/>


<Spinner
  volume
  info
/>

<Spinner
  volume
  warning
/>

<Spinner
  volume
  danger
/>

<Spinner
  volume
  success
/>
`;

const simpleCode = `
<Spinner
  volume
/>
`;

const sizeCode = `
<Spinner
  volume
  small
/>

<Spinner
  volume
  medium
/>

<Spinner
  volume
  large
/>  

<Spinner
  volume
  style={{ fontSize: '75px' }}
/>
`;

const customSpeedCode = `
<Spinner
  volume
  style={{ animationDuration: '3s' }}
/>

<Spinner
  volume
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
