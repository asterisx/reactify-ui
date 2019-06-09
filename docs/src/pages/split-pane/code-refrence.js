const simpleCode = `
<SplitPane style={{ height: '300px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>
`;
const customThemeCode = `
<SplitPane style={{ height: '80px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>

<SplitPane secondary style={{ height: '80px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>

<SplitPane dark style={{ height: '80px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>

<SplitPane info style={{ height: '80px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>

<SplitPane light style={{ height: '80px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>

<SplitPane warning style={{ height: '80px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>

<SplitPane danger style={{ height: '80px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>

<SplitPane success style={{ height: '80px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>
`;

const onChangeCode = `
<SplitPane onChange={({ delta }) => console.log(delta)}>
  <Pane style={{ height: '300px' }}>This is pane 1</Pane>
  <Pane style={{ height: '300px' }}>This is pane 2</Pane>
</SplitPane>
`;

const customResizerCode = `
<SplitPane style={{ height: '300px', width: '100%' }}>
  <Pane style={{ width: '50%' }}>This is pane 1</Pane>
  <Resizer>
    {
    ({ onMouseDown }) => (
      <div
        style={{ height: '300px', background: 'violet' }}
        className="p-2 text-white display-4 d-flex align-items-center justify-content-center"
        onMouseDown={onMouseDown}
      >
      ||
      </div>
    )}
  </Resizer>
  <Pane style={{ width: '50%' }}>This is pane 2</Pane>
</SplitPane>
`;

const verticalCode = `
<SplitPane style={{ maxHeight: '700px' }} vertical>
  <Pane style={{ height: '300px' }}>This is div 1</Pane>
  <Pane style={{ height: '300px' }}>This is div 2</Pane>
</SplitPane>
`;

export {
  customResizerCode,
  customThemeCode,
  onChangeCode,
  simpleCode,
  verticalCode,
};
