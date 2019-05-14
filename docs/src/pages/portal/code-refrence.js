const simpleCode = `
<Button onClick={() => this.setState({ simplePortalOpen: true })}>Open Portal</Button>
{this.state.simplePortalOpen && (
<Portal top>
  {closePortal => (
    <div
      style={{
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <input
        style={{ fontSize: '20px' }}
        type="button"
        value="Close"
        onClick={() => this.setState({ simplePortalOpen: true }, closePortal())}
      />
    </div>
  )}
</Portal>
)}
`;
const portalLocationCode = `
<Button onClick={() => this.setState({ topPortalOpen: true })}>Open Top Portal</Button>
  {this.state.topPortalOpen && (
  <Portal top>
    {closePortal => (
      <div
        style={{
          width: '100%',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          background: 'white',
        }}
      >
        <input
          style={{ fontSize: '20px' }}
          type="button"
          value="Close"
          onClick={() => this.setState({ topPortalOpen: true }, closePortal())}
        />
      </div>
    )}
  </Portal>
  )}

<Button
  onClick={() => this.setState({ leftPortalOpen: true })}
>
    Open Left Portal
</Button>
{this.state.leftPortalOpen && (
<Portal top>
  {closePortal => (
    <div
      style={{
        width: '100px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <input
        style={{ fontSize: '20px' }}
        type="button"
        value="Close"
        onClick={() => this.setState({ leftPortalOpen: true }, closePortal())}
      />
    </div>
  )}
</Portal>
)}

<Button
onClick={() => this.setState({ rightPortalOpen: true })}
>
  Open Right Portal
</Button>
{this.state.rightPortalOpen && (
<Portal right>
{closePortal => (
  <div
    style={{
      width: '100px',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      background: 'white',
    }}
  >
    <input
      style={{ fontSize: '20px' }}
      type="button"
      value="Close"
      onClick={() => this.setState({ rightPortalOpen: true }, closePortal())}
    />
  </div>
)}
</Portal>
)}

<Button
  onClick={() => this.setState({ bottomPortalOpen: true })}
>
    Open Bottom Portal
</Button>
{this.state.bottomPortalOpen && (
<Portal bottom>
  {closePortal => (
    <div
      style={{
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <input
        style={{ fontSize: '20px' }}
        type="button"
        value="Close"
        onClick={() => this.setState({ bottomPortalOpen: true }, closePortal())}
      />
    </div>
  )}
</Portal>
)}
`;

const autoCloseCode = `
<Button
onClick={() => this.setState({ autoClosePortalOpen: true })}
>
  Open Portal
</Button>
{this.state.autoClosePortalOpen && (
<Portal top autoClose={false}>
{closePortal => (
  <div
    style={{
      width: '100%',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      background: 'white',
    }}
  >
    <input
      style={{ fontSize: '20px' }}
      type="button"
      value="Close"
      onClick={() => this.setState({ autoClosePortalOpen: true }, closePortal())}
    />
  </div>
)}
</Portal>
)}
`;
const hideBackdropCode = `
<Button
  onClick={() => this.setState({ hideBackdropPortalOpen: true })}
>
    Open Portal
</Button>
{this.state.hideBackdropPortalOpen && (
<Portal top hideBackDrop>
  {closePortal => (
    <div
      style={{
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <input
        style={{ fontSize: '20px' }}
        type="button"
        value="Close"
        onClick={() => this.setState({ hideBackdropPortalOpen: true }, closePortal())}
      />
    </div>
  )}
</Portal>
)}
`;
const onCloseCode = `
<Button
onClick={() => this.setState({ onClosePortal: true })}
>
  Open Portal
</Button>
{this.state.onClosePortal && (
<Portal top hideBackDrop onClose={() => { this.setState({ onClosePortal: false }); alert('Closed'); }}>
{closePortal => (
  <div
    style={{
      width: '100%',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      background: 'white',
    }}
  >
    <input
      style={{ fontSize: '20px' }}
      type="button"
      value="Close"
      onClick={closePortal}
    />
  </div>
)}
</Portal>
)}
`;

export {
  autoCloseCode,
  hideBackdropCode,
  simpleCode,
  portalLocationCode,
  onCloseCode,
};
