const customColorCode = `
<Timer
  milliseconds={millisOfSomeDistantPast}
  style={{ color: 'violet' }}
/>
`;

const customSizeCode = `
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
toggle = (prop) => {
  if (prop === 'showDays') { this.setState(prevState => ({ showDays: !prevState.showDays })); }

  if (prop === 'showHours') { this.setState(prevState => ({ showHours: !prevState.showHours })); }

  if (prop === 'showMinutes') { this.setState(prevState => ({ showMinutes: !prevState.showMinutes })); }

  if (prop === 'showSeconds') { this.setState(prevState => ({ showSeconds: !prevState.showSeconds })); }
}


<Button
  onClick={() => this.toggle('showDays')}
>
  Toggle Days
</Button>

<Button
  onClick={() => this.toggle('showHours')}
>
  Toggle Hours
</Button>

<Button
  onClick={() => this.toggle('showMinutes')}
>
  Toggle Minutes
</Button>

<Button
  onClick={() => this.toggle('showSeconds')}
>
  Toggle Seconds
</Button>

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

export {
  customColorCode,
  customSizeCode,
  customThemeCode,
  customClassCode,
  propsCode,
  simpleCode,
};
