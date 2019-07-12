const simpleCode = `
<Tabs
  selectedIndex={this.state.simpleSelectedIndex}
  onSelectionChange={
    ({ index }) => this.setState({ simpleSelectedIndex: index })
  }
>
  <Tab index={0}>
    <Tab.Header>
      <Button
        style={{ borderRadius: 0 }}
        primary={this.state.simpleSelectedIndex === 0}
        dark={this.state.simpleSelectedIndex !== 0}
      >
        Tab 1
      </Button>
    </Tab.Header>
    <Tab.Body>
      <Paper
        primary
        style={{ height: '300px', transitionDuration: '0.3s' }}
        className="d-flex w-100 align-items-center align-content-center justify-content-center font-large"
      >
        Tab 1
      </Paper>
    </Tab.Body>
  </Tab>
  <Tab index={1}>
    <Tab.Header>
      <Button
        style={{ borderRadius: 0 }}
        dark
        danger={this.state.simpleSelectedIndex === 1}
      >
        Tab 2
      </Button>
    </Tab.Header>
    <Tab.Body>
      <Paper
        danger
        style={{ height: '300px', transitionDuration: '0.3s' }}
        className="d-flex w-100 align-items-center align-content-center justify-content-center font-large"
      >
        Tab 2
      </Paper>
    </Tab.Body>
  </Tab>
  <Tab index={2}>
    <Tab.Header>
      <Button
        style={{ borderRadius: 0 }}
        dark
        warning={this.state.simpleSelectedIndex === 2}
      >
        Tab 3
      </Button>
    </Tab.Header>
    <Tab.Body>
      <Paper
        warning
        style={{ height: '300px', transitionDuration: '0.3s' }}
        className="d-flex w-100 align-items-center align-content-center justify-content-center font-large"
      >
        Tab 3
      </Paper>
    </Tab.Body>
  </Tab>
</Tabs>
`;

const stylingCode = `
.reactify-ui-tabs__toggle {
  align-self: flex-end;
}

<Tabs
  onSelectionChange={
    ({ index }) => this.setState({ stylingSelectedIndex: index })
  }
  className="d-flex flex-column"
>
  <Tab index={0} selectedIndex={this.state.stylingSelectedIndex}>
    <Tab.Header>
      <Button
        style={{ borderRadius: 0 }}
        primary
        dark={this.state.stylingSelectedIndex !== 0}
      >
        Tab 1
      </Button>
    </Tab.Header>
    <Tab.Body>
      <Paper primary style={{ height: '300px', transitionDuration: '0.3s' }} className="d-flex w-100 align-items-center align-content-center justify-content-center font-large">Tab 1</Paper>
    </Tab.Body>
  </Tab>
  <Tab index={1}>
    <Tab.Header>
      <Button
        style={{ borderRadius: 0 }}
        dark
        danger={this.state.stylingSelectedIndex === 1}
      >
        Tab 2
      </Button>
    </Tab.Header>
    <Tab.Body>
      <Paper danger style={{ height: '300px', transitionDuration: '0.3s' }} className="d-flex w-100 align-items-center align-content-center justify-content-center font-large">Tab 2</Paper>
    </Tab.Body>
  </Tab>
  <Tab index={2}>
    <Tab.Header>
      <Button
        style={{ borderRadius: 0 }}
        dark
        warning={this.state.stylingSelectedIndex === 2}
      >
        Tab 3
      </Button>
    </Tab.Header>
    <Tab.Body>
      <Paper warning style={{ height: '300px', transitionDuration: '0.3s' }} className="d-flex w-100 align-items-center align-content-center justify-content-center font-large">Tab 3</Paper>
    </Tab.Body>
  </Tab>
</Tabs>
`;

const tabsDisabledCode = `
<Tabs
  tabsDisabled
>
  <Tab index={0}>
    <Tab.Header>
      <Button
        primary
      >
        Tab 1
      </Button>
    </Tab.Header>
    <Tab.Body>
      <Paper primary style={{ height: '300px', transitionDuration: '0.3s' }} className="d-flex w-100 align-items-center align-content-center justify-content-center font-large">Tab 1</Paper>
    </Tab.Body>
  </Tab>
  <Tab index={1}>
    <Tab.Header>
      <Button
        style={{ borderRadius: 0 }}
        danger
      >
        Tab 2
      </Button>
    </Tab.Header>
  </Tab>
  <Tab index={2}>
    <Tab.Header>
      <Button
        style={{ borderRadius: 0 }}
        warning
      >
        Tab 3
      </Button>
    </Tab.Header>
  </Tab>
</Tabs>
`;

export {
  simpleCode,
  stylingCode,
  tabsDisabledCode,
};
