const simpleCode = `
<TopBar>
    <TopBar.Logo>
      <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>
`;

const themeCode = `
<TopBar>
    <TopBar.Logo>
      <Paper primary noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
  </TopBar>

<TopBar>
    <TopBar.Logo>
      <Paper secondary noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ marginBottom: '-4px', padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>

<TopBar>
    <TopBar.Logo>
      <Paper dark noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>

<TopBar>
    <TopBar.Logo>
      <Paper light noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ marginBottom: '-4px', padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>

<TopBar>
    <TopBar.Logo>
      <Paper info noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />


    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>

<TopBar>
    <TopBar.Logo>
      <Paper warning noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ marginBottom: '-4px', padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>

<TopBar>
    <TopBar.Logo>
      <Paper danger noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>

<TopBar>
    <TopBar.Logo>
      <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>

<TopBar>
    <TopBar.Logo>
      <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body dark />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      danger
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>
`;

const sizeCode = `
<TopBar small>
    <TopBar.Logo>
      <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
    </TopBar.Menu>
</TopBar>

<TopBar medium>
    <TopBar.Logo>
      <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>

<TopBar large>
    <TopBar.Logo>
      <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>

<TopBar style={{ fontSize: '2em' }}>
    <TopBar.Logo>
      <Paper success noShadow className="logo p-2 h-100 dflex align-items-center">reactify ui</Paper>
    </TopBar.Logo>
    <TopBar.Body />
    <TopBar.Menu
      style={{
        display: 'inline-flex', alignContent: 'center', alignItems: 'center', padding: '0em 0.5em',
      }}
      warning
    >
      <a style={{ padding: 0, fontSize: 'unset !important' }} href="https://github.com/asterisx/reactify">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="GitHub" />
      </a>
    </TopBar.Menu>
</TopBar>
`;

export {
  simpleCode,
  themeCode,
  sizeCode,
};
