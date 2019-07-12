const customColorCode = `
.bgViolet .reactify-ui-progress-bar__progress {
  background-color: violet;
}

<ProgressBar className="bgViolet" striped percentage={30}>30% Complete</ProgressBar>
`;

const customSizeCode = `
<ProgressBar striped small percentage={30}>30% complete</ProgressBar>
<br />
<ProgressBar striped medium percentage={30}>30% complete</ProgressBar>
<br />
<ProgressBar striped large percentage={30}>30% complete</ProgressBar>
<br />
<ProgressBar striped style={{ fontSize: '8px' }} percentage={30} />
`;

const customThemeCode = `
<ProgressBar striped primary percentage={60}>60% complete</ProgressBar>

<ProgressBar striped secondary percentage={60}>60% complete</ProgressBar>

<ProgressBar striped dark percentage={60}>60% complete</ProgressBar>

<ProgressBar striped light percentage={60}>60% complete</ProgressBar>

<ProgressBar striped info percentage={60}>60% complete</ProgressBar>

<ProgressBar striped warning percentage={60}>60% complete</ProgressBar>

<ProgressBar striped danger percentage={60}>60% complete</ProgressBar>

<ProgressBar striped success percentage={60}>60% complete</ProgressBar>
`;

const noTextCode = '<ProgressBar striped percentage={30} />';

// eslint-disable-next-line no-template-curly-in-string
const runningCode = "<ProgressBar striped dark style={{ transitionDuration: '700ms' }} percentage={this.state.runningPercentage}>{`${this.state.runningPercentage}% complete`}</ProgressBar>";

const simpleCode = `
<ProgressBar percentage={30}>30% complete</ProgressBar>
`;

const stripedCode = `
<ProgressBar striped percentage={30}>30% complete</ProgressBar>
`;

export {
  customColorCode,
  customSizeCode,
  customThemeCode,
  noTextCode,
  runningCode,
  simpleCode,
  stripedCode,
};
