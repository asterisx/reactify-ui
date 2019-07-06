const declarativeCode = `
<Breadcrumbs>
  <Breadcrumbs.Item key={0} style={{ color: 'blue' }} onClick={() => console.log('Home')}>
    <Paper success>Home</Paper>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item key={1} style={{ color: 'blue' }} onClick={() => console.log('About')}>
    <Paper warning>About</Paper>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item key={2} onClick={() => console.log('Company Culture')}>
    <Paper danger>Company Culture</Paper>
  </Breadcrumbs.Item>
</Breadcrumbs>
`;

const disabledCode = `
<Breadcrumbs items={items} disabled />

const itemsWithSomeDisabled = [
  {
    content: 'Home (Disabled)',
    key: 0,
    disabled: true,
    onClick: () => console.log('Home'),
  },
  {
    content: 'About',
    key: 1,
    onClick: () => console.log('About'),
  },
  {
    content: 'Company Culture',
    key: 2,
    onClick: () => console.log('Company Culture'),
  },
];

<Breadcrumbs items={itemsWithSomeDisabled} />

<Breadcrumbs>
  <Breadcrumbs.Item disabled key={0} style={{ color: 'blue' }} onClick={() => console.log('Home')}>
    <Paper success>Home</Paper>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item key={1} style={{ color: 'blue' }} onClick={() => console.log('About')}>
    <Paper warning>About</Paper>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item key={2} onClick={() => console.log('Company Culture')}>
    <Paper danger>Company Culture</Paper>
  </Breadcrumbs.Item>
</Breadcrumbs>
`;

const seperatorCode = '<Breadcrumbs items={items} seperator={<FaAngleRight />} />';

const simpleCode = `
const items = [
  {
    content: 'Home',
    key: 0,
    onClick: () => console.log('Home'),
  },
  {
    content: 'About',
    key: 1,
    onClick: () => console.log('About'),
  },
  {
    content: 'Company Culture',
    key: 2,
    onClick: () => console.log('Company Culture'),
  },
];

<Breadcrumbs items={items} />
`;

export {
  declarativeCode,
  disabledCode,
  seperatorCode,
  simpleCode,
};
