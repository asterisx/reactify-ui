const customSizeCode = `
.customSize {
  .reactify-ui-tooltip__bubble {
      font-size: 30px;
  }
}

<Tooltip small content="I am a small tooltip">Hover over me to show small tooltip</Tooltip>

<Tooltip medium content="I am a medium tooltip">Hover over me to show medium tooltip</Tooltip>

<Tooltip large content="I am a large tooltip">Hover over me to show large tooltip</Tooltip>

<Tooltip className="customSize" content="I am a custom size tooltip">Hover over me to show custom size tooltip</Tooltip>
`;

const simpleCode = '<Tooltip content="I am a simple tooltip">Hover over me to show tooltip</Tooltip>';

const positionCode = `
<Tooltip top content="I am a top tooltip">Hover over me to show top tooltip</Tooltip>

<Tooltip left content="I am a left tooltip">Hover over me to show left tooltip</Tooltip>

<Tooltip right content="I am a right tooltip">Hover over me to show right tooltip</Tooltip>

<Tooltip bottom content="I am a bottom tooltip">Hover over me to show bottom tooltip</Tooltip>
`;

const themesCode = `
<Tooltip primary content="I am a primary tooltip"><Paper primary className="pl-2 pr-2 m-2">Hover over me to show primary tooltip</Paper></Tooltip>

<Tooltip secondary content="I am a secondary tooltip"><Paper secondary className="pl-2 pr-2 m-2">Hover over me to show secondary tooltip</Paper></Tooltip>

<Tooltip dark content="I am a dark tooltip"><Paper dark className="pl-2 pr-2 m-2">Hover over me to show dark tooltip</Paper></Tooltip>

<Tooltip light content="I am a light tooltip"><Paper light className="pl-2 pr-2 m-2">Hover over me to show light tooltip</Paper></Tooltip>

<Tooltip info content="I am a info tooltip"><Paper info className="pl-2 pr-2 m-2">Hover over me to show info tooltip</Paper></Tooltip>

<Tooltip warning content="I am a warning tooltip"><Paper warning className="pl-2 pr-2 m-2">Hover over me to show warning tooltip</Paper></Tooltip>

<Tooltip danger content="I am a danger tooltip"><Paper danger className="pl-2 pr-2 m-2">Hover over me to show danger tooltip</Paper></Tooltip>

<Tooltip success content="I am a success tooltip"><Paper success className="pl-2 pr-2 m-2">Hover over me to show success tooltip</Paper></Tooltip>
`;

export {
  customSizeCode,
  positionCode,
  simpleCode,
  themesCode,
};
