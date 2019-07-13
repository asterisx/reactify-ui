const customColorCode = `
<Spinner
  sphere
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  sphere
  className="bg-dark text-light"
/>
`;

const customSizeCode = `
<Spinner
  sphere
  small
/>

<Spinner
  sphere
  medium
/>

<Spinner
  sphere
  large
/>  

<Spinner
  sphere
  style={{ fontSize: '75px' }}
/>
`;

const customThemeCode = `
<Spinner
  sphere
  primary
/>

<Spinner
  sphere
  secondary
/>

<Spinner
  sphere
  dark
/>

<Spinner
  sphere
  light
/>


<Spinner
  sphere
  info
/>

<Spinner
  sphere
  warning
/>

<Spinner
  sphere
  danger
/>

<Spinner
  sphere
  success
/>
`;

const simpleCode = `
<Spinner
  sphere
/>
`;

const customSpeedCode = `
<Spinner
  sphere
  style={{ animationDuration: '3s' }}
/>

<Spinner
  sphere
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
