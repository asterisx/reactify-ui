const customColorCode = `
<Spinner
  balls
  style={{ color: 'violet' }}
/>
`;

const customClassCode = `
<Spinner
  balls
  className="bg-dark text-light"
/>
`;

const customThemeCode = `
<Spinner
  balls
  primary
/>

<Spinner
  balls
  secondary
/>

<Spinner
  balls
  dark
/>

<Spinner
  balls
  light
/>


<Spinner
  balls
  info
/>

<Spinner
  balls
  warning
/>

<Spinner
  balls
  danger
/>

<Spinner
  balls
  success
/>
`;

const simpleCode = `
<Spinner
  balls
/>
`;

const sizeCode = `
<Spinner
  balls
  small
/>

<Spinner
  balls
  medium
/>

<Spinner
  balls
  large
/>  

<Spinner
  balls
  style={{ fontSize: '75px' }}
/>
`;

const customSpeedCode = `
<Spinner
  balls
  style={{ animationDuration: '3s' }}
/>

<Spinner
  balls
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
