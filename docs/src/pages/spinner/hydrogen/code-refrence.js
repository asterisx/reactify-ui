const customColorCode = `
<Spinner
  hydrogen
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  hydrogen
  className="bg-dark text-light"
/>
`;

const customThemeCode = `
<Spinner
  hydrogen
  primary
/>

<Spinner
  hydrogen
  secondary
/>

<Spinner
  hydrogen
  dark
/>

<Spinner
  hydrogen
  light
/>


<Spinner
  hydrogen
  info
/>

<Spinner
  hydrogen
  warning
/>

<Spinner
  hydrogen
  danger
/>

<Spinner
  hydrogen
  success
/>
`;

const simpleCode = `
<Spinner
  hydrogen
/>
`;

const sizeCode = `
<Spinner
  hydrogen
  small
/>

<Spinner
  hydrogen
  medium
/>

<Spinner
  hydrogen
  large
/>  

<Spinner
  hydrogen
  style={{ fontSize: '75px' }}
/>
`;

const customSpeedCode = `
<Spinner
  hydrogen
  style={{ animationDuration: '3s' }}
/>

<Spinner
  hydrogen
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
