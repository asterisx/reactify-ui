const customColorCode = `
<Spinner
  slices
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  slices
  className="bg-dark text-light"
/>
`;

const customSizeCode = `
<Spinner
  slices
  small
/>

<Spinner
  slices
  medium
/>

<Spinner
  slices
  large
/>  

<Spinner
  slices
  style={{ fontSize: '75px' }}
/>
`;

const customThemeCode = `
<Spinner
  slices
  primary
/>

<Spinner
  slices
  secondary
/>

<Spinner
  slices
  dark
/>

<Spinner
  slices
  light
/>


<Spinner
  slices
  info
/>

<Spinner
  slices
  warning
/>

<Spinner
  slices
  danger
/>

<Spinner
  slices
  success
/>
`;

const simpleCode = `
<Spinner
  slices
/>
`;

const customSpeedCode = `
<Spinner
  slices
  style={{ animationDuration: '3s' }}
/>

<Spinner
  slices
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
