const customColorCode = `
<Spinner
  bars
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  bars
  className="bg-dark text-light"
/>
`;

const customThemeCode = `
<Spinner
  bars
  primary
/>

<Spinner
  bars
  secondary
/>

<Spinner
  bars
  dark
/>

<Spinner
  bars
  light
/>


<Spinner
  bars
  info
/>

<Spinner
  bars
  warning
/>

<Spinner
  bars
  danger
/>

<Spinner
  bars
  success
/>
`;

const simpleCode = `
<Spinner
  bars
/>
`;

const sizeCode = `
<Spinner
  bars
  small
/>

<Spinner
  bars
  medium
/>

<Spinner
  bars
  large
/>  

<Spinner
  bars
  style={{ fontSize: '75px' }}
/>
`;

const customSpeedCode = `
<Spinner
  bars
  style={{ animationDuration: '3s' }}
/>

<Spinner
  bars
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
