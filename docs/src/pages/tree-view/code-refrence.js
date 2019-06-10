const simpleCode = `
const items = [
  {
    text: 'Option 1 (Disabled)', key: 0, icon: <FaFileSignature />, disabled: true,
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

<TreeView items={items} />
`;
const customThemeCode = `
<TreeView items={items} primary />
<TreeView items={items} secondary />
<TreeView items={items} info />
<TreeView items={items} light />
<TreeView items={items} warning />
<TreeView items={items} danger />
<TreeView items={items} success />
`;


const customDeclarativeCode = `
<TreeView>
  <TreeViewItem
    key={1}
    text="Option 1"
  >
    <TreeView>
      <TreeViewItem key={1} text="Option 1" />
      <TreeViewItem key={2} text="Option 2" />
    </TreeView>
  </TreeViewItem>
  <TreeViewItem
    key={2}
    text="Option 2"
  />
</TreeView>

<TreeView>
  <TreeViewItem
    key={1}
    content={
      ({ isTreeOpen, toggleSubTree }) => (
        <Button
          className="w-100"
          onClick={toggleSubTree}
          danger={isTreeOpen}
          success={!isTreeOpen}
        >
          {isTreeOpen ? 'Close Sub Tree' : 'Open Sub Tree'}
        </Button>
      )}
  >
    <TreeView>
      <TreeViewItem
        key={1}
        text="Sub Option 1"
      />
      <TreeViewItem
        key={2}
        text="Sub Option 2"
      />
    </TreeView>
  </TreeViewItem>
  <TreeViewItem text="Option 2" />
</TreeView>
`;

export {
  customDeclarativeCode,
  customThemeCode,
  simpleCode,
};
