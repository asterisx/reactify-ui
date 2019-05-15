const simpleCode = `
state = {
  config: {
    fields: {
      username: {
        value: '',
        isError: true,
        errorText: 'username error',
        isLoading: false,
        disabled: false,
      },
      password: {
        value: '',
        isError: true,
        errorText: 'password error',
        isLoading: false,
        disabled: false,
      },
      submit: {
        isLoading: false,
        disabled: false,
      },
      error: {
        visible: true,
        text: 'main error',
      },
    },
  },
};

handleLogin = ({ action, value, prevState }) => {
  if (action === Login.actionTypes.username) {
    if (value.indexOf(' ') >= 0) { this.setState({ config: { fields: { username: { value, isError: true, errorText: 'Username cannot have spaces' } } } }); } else {
      this.setState({ config: { fields: { username: { value, isError: false, errorText: '' } } } });
    }
  } else if (action === Login.actionTypes.password) {
    this.setState({ config: { fields: { password: { value } } } });
  } else if (action === Login.actionTypes.submit) {
    this.setState(
      {
        config: {
          fields: {
            username: {
              isLoading: true,
              disabled: true,
            },
            password: {
              isLoading: true,
              disabled: true,
            },
            submit: {
              isLoading: true,
              disabled: true,
            },
          },
        },
      },
    );
  }
}

<Login state={this.state.config} updateState={this.handleLogin} />
`;


export {
  simpleCode,
};
