const customColorCode = `
<Spinner
  clock
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  clock
  className="bg-dark text-light"
/>
`;

const customThemeCode = `
<Spinner
  clock
  primary
/>

<Spinner
  clock
  secondary
/>

<Spinner
  clock
  dark
/>

<Spinner
  clock
  light
/>


<Spinner
  clock
  info
/>

<Spinner
  clock
  warning
/>

<Spinner
  clock
  danger
/>

<Spinner
  clock
  success
/>
`;

const simpleCode = `
<Spinner
  clock
/>
`;

const sizeCode = `
<Spinner
  clock
  small
/>

<Spinner
  clock
  medium
/>

<Spinner
  clock
  large
/>  

<Spinner
  clock
  style={{ fontSize: '75px' }}
/>
`;

const customSpeedCode = `
<Spinner
  clock
  style={{ animationDuration: '3s' }}
/>

<Spinner
  clock
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
