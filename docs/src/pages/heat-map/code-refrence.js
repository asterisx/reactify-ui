const customThemeCode = `
<HeatMap primary items={items} />
<HeatMap secondary items={items} />
<HeatMap dark items={items} />
<HeatMap light items={items} />
<HeatMap info items={items} />
<HeatMap warning items={items} />
<HeatMap danger items={items} />
<HeatMap success items={items} />
<HeatMap baseColor="violet" items={items} />
`;

const eventsCode = `
<HeatMap items={items} onCellClick={({ row, column }) => console.log('row: ' + row + ', column: ' + column)} />
`;

const disabledCode = `
<HeatMap items={items} disabled />
`;

const declarativeCode = `
<HeatMap>
  <HeatMap.Row key={1}>
    <HeatMap.Cell key={10}>1</HeatMap.Cell>
    <HeatMap.Cell key={11}>2</HeatMap.Cell>
    <HeatMap.Cell key={12}>3</HeatMap.Cell>
    <HeatMap.Cell key={13}>4</HeatMap.Cell>
  </HeatMap.Row>
  <HeatMap.Row key={2}>
    <HeatMap.Cell key={20}>4</HeatMap.Cell>
    <HeatMap.Cell key={21}>3</HeatMap.Cell>
    <HeatMap.Cell key={22}>2</HeatMap.Cell>
    <HeatMap.Cell key={23}>1</HeatMap.Cell>
  </HeatMap.Row>
  <HeatMap.Row key={3}>
    <HeatMap.Cell key={30}>10</HeatMap.Cell>
    <HeatMap.Cell key={31}>6</HeatMap.Cell>
    <HeatMap.Cell key={32}>5</HeatMap.Cell>
    <HeatMap.Cell key={33}>4</HeatMap.Cell>
  </HeatMap.Row>
  <HeatMap.Row key={4}>
    <HeatMap.Cell key={40}>5</HeatMap.Cell>
    <HeatMap.Cell key={41}>7</HeatMap.Cell>
    <HeatMap.Cell key={42}>2</HeatMap.Cell>
    <HeatMap.Cell key={43}>0</HeatMap.Cell>
  </HeatMap.Row>
</HeatMap>
`;

const simpleCode = `
.fixed-h-w {
  height: 100px;
  width: 350px;
}

const items = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
  [13, 14, 15, 16, 17, 18, 1, 4, 5, 7, 8, 4],
  [1, 4, 5, 7, 8, 4, 13, 14, 15, 16, 17, 18],
];

<HeatMap items={items} className="fixed-h-w" />
<HeatMap items={items} />
`;

export {
  customThemeCode,
  declarativeCode,
  disabledCode,
  eventsCode,
  simpleCode,
};
