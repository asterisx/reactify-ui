const customColorCode = `
<Timer
  milliseconds={millisOfSomeDistantPast}
  style={{ color: 'violet' }}
/>
`;
const customThemeCode = `
<Timer
  milliseconds={millisOfSomeDistantPast}
  primary
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  secondary
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  dark
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  light
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  info
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  warning
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  danger
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  success
/>
`;
const customClassCode = `
<Timer
  milliseconds={millisOfSomeDistantPast}
  className="bg-dark p-3"
/>
`;
const propsCode = `
<Timer
  milliseconds={millisOfSomeDistantPast}
  showDays={this.state.showDays}
  showHours={this.state.showHours}
  showMinutes={this.state.showMinutes}
  showSeconds={this.state.showSeconds}
/>
`;
const simpleCode = `
<Timer milliseconds={millisOfFuture} />

<Timer milliseconds={millisOfPast} />
`;
const sizeCode = `
<Timer
  milliseconds={millisOfSomeDistantPast}
  small
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  medium
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  large
/>

<Timer
  milliseconds={millisOfSomeDistantPast}
  style={{ fontSize: '15px' }}
/>
`;

export {
  customColorCode,
  customThemeCode,
  customClassCode,
  propsCode,
  simpleCode,
  sizeCode,
};
