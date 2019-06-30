const simpleCode = `
const items = [
  {
    content: <Link light href="#">Can be a link</Link>, key: 0,
  },
  {
    text: 'Option 2',
    key: 1,
    sub: [
      {
        text: 'Sub Option 1',
        key: 2,
        sub: [
          {
            text: 'Sub Option 1',
            key: 3,
            sub: [
              {
                text: 'Sub Option 1',
                key: 4,
                sub: [
                  {
                    text: 'Sub Option 1',
                    key: 5,
                    sub: [
                      {
                        text: 'Sub Option 1',
                        key: 6,
                        sub: [
                          {
                            text: 'Sub Option 1',
                            key: 7,
                            sub: [
                              { text: 'Sub Option 1', key: 8 },
                              { text: 'Sub Option 2', key: 9 },
                              { text: 'Sub Option 3', key: 10 },
                              { text: 'Sub Option 4', key: 11 },
                            ],
                          },
                          { text: 'Sub Option 2', key: 12 },
                          { text: 'Sub Option 3', key: 13 },
                          { text: 'Sub Option 4', key: 14 },
                        ],
                      },
                      { text: 'Sub Option 2', key: 15 },
                      { text: 'Sub Option 3', key: 16 },
                      { text: 'Sub Option 4', key: 17 },
                    ],
                  },
                  { text: 'Sub Option 2', key: 18 },
                  { text: 'Sub Option 3', key: 19 },
                  { text: 'Sub Option 4', key: 20 },
                ],
              },
              { text: 'Sub Option 2', key: 21 },
              { text: 'Sub Option 3', key: 22 },
              { text: 'Sub Option 4', key: 23 },
            ],
          },
          { text: 'Sub Option 2', key: 24 },
          { text: 'Sub Option 3', key: 25 },
          { text: 'Sub Option 4', key: 26 },
        ],
      },
      { text: 'Sub Option 2', key: 27 },
      { text: 'Sub Option 3', key: 28 },
      { text: 'Sub Option 4', key: 29 },
    ],
  },
  { text: 'Option 2', key: 30 },
  { text: 'Option 4', key: 31 },
];

<Sidebar tems={items} />
`;

const simpleFullCode = '<Sidebar className="400px" items={items} positionFull />';

const customThemeCode = `
<Sidebar items={items} primary />
<Sidebar items={items} secondary />
<Sidebar items={items} info />
<Sidebar items={items} light />
<Sidebar items={items} warning />
<Sidebar items={items} danger />
<Sidebar items={items} success />
`;

const customDeclarativeCode = `
<Sidebar className="w-300px">
  <SidebarItem
    key={1}
    text="Option 1"
  >
    <SubSidebar>
      <SidebarItem key={1} text="Option 1" />
      <SidebarItem key={2} text="Option 2" />
    </SubSidebar>
  </SidebarItem>
  <SidebarItem
    key={2}
    text="Option 2"
  />
</Sidebar>

<Sidebar className="w-300px">
  <SidebarItem
    key={1}
    content={
      ({ isSubOpen, toggleSub }) => (
        <Button
          className="w-100"
          onClick={toggleSub}
          danger={isSubOpen}
          success={!isSubOpen}
        >
          {isSubOpen ? 'Close Sub Sidebar' : 'Open Sub Sidebar'}
        </Button>
      )}
  >
    <SubSidebar>
      <SidebarItem
        key={1}
        text="Sub Option 1"
      />
      <SidebarItem
        key={2}
        text="Sub Option 2"
      />
    </SubSidebar>
  </SidebarItem>
  <SidebarItem text="Option 2" />
</Sidebar>
`;

export {
  customDeclarativeCode,
  customThemeCode,
  simpleFullCode,
  simpleCode,
};
